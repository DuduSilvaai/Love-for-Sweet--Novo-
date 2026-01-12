#!/usr/bin/env python3
"""
Script para testar especificamente o ambiente de produção no Render
"""
import requests
import json
import time

def test_production():
    BASE_URL = "https://love-for-sweet-novo.onrender.com"
    
    test_payload = {
        "nome": "TESTE PRODUÇÃO",
        "contato": "+55 11970614904", 
        "email": "teste@exemplo.com",
        "disponibilidade": "Sim",
        "capital": "mais-600k"
    }
    
    print("🌐 Testando ambiente de PRODUÇÃO...")
    print(f"📍 URL: {BASE_URL}")
    
    try:
        # Teste 1: Health check (para acordar o serviço se estiver dormindo)
        print("\n1️⃣ Acordando o serviço (cold start)...")
        start_time = time.time()
        
        health_response = requests.get(f"{BASE_URL}/", timeout=60)
        wake_time = time.time() - start_time
        
        print(f"⏱️  Cold start levou: {wake_time:.2f}s")
        print(f"✅ Health check: {health_response.status_code} - {health_response.text}")
        
        # Aguardar um pouco para garantir que o serviço está totalmente ativo
        print("⏳ Aguardando serviço estabilizar...")
        time.sleep(3)
        
        # Teste 2: Preflight (OPTIONS)
        print("\n2️⃣ Testando CORS preflight...")
        options_response = requests.options(
            f"{BASE_URL}/api/email",
            headers={
                "Origin": "https://loveforsweet.com.br",
                "Access-Control-Request-Method": "POST",
                "Access-Control-Request-Headers": "Content-Type"
            },
            timeout=30
        )
        print(f"📊 OPTIONS Status: {options_response.status_code}")
        print(f"🔗 CORS Headers: {dict(options_response.headers)}")
        
        # Teste 3: Envio real
        print("\n3️⃣ Testando envio de email...")
        start_time = time.time()
        
        response = requests.post(
            f"{BASE_URL}/api/email",
            headers={
                "Content-Type": "application/json",
                "Origin": "https://loveforsweet.com.br"
            },
            json=test_payload,
            timeout=120  # 2 minutos para envio de email
        )
        
        request_time = time.time() - start_time
        print(f"⏱️  Requisição levou: {request_time:.2f}s")
        print(f"📊 Status Code: {response.status_code}")
        print(f"🔗 Response Headers: {dict(response.headers)}")
        
        try:
            response_data = response.json()
            print(f"📄 Response JSON: {json.dumps(response_data, indent=2)}")
        except:
            print(f"📄 Response Text: {response.text}")
            
        # Análise do resultado
        if response.status_code == 200:
            print("✅ SUCESSO! Email enviado em produção.")
        elif response.status_code == 500:
            print("❌ ERRO 500: Problema interno do servidor.")
            print("💡 Verifique as variáveis de ambiente no painel do Render.")
        else:
            print(f"⚠️  Status inesperado: {response.status_code}")
            
    except requests.exceptions.ConnectionError as e:
        print(f"❌ ERRO DE CONEXÃO: {str(e)}")
        print("💡 Verifique se o serviço está online no Render.")
    except requests.exceptions.Timeout as e:
        print(f"❌ TIMEOUT: {str(e)}")
        print("💡 O serviço pode estar sobrecarregado ou com cold start lento.")
    except Exception as e:
        print(f"❌ ERRO INESPERADO: {str(e)}")

if __name__ == "__main__":
    test_production()