#!/usr/bin/env python3
"""
Script de teste para verificar se o backend está funcionando corretamente
"""
import requests
import json

def test_backend():
    # URL do backend (local ou produção)
    BASE_URL = "http://127.0.0.1:5000"  # Para teste local
    # BASE_URL = "https://love-for-sweet-novo.onrender.com"  # Para teste em produção
    
    # Dados de teste
    test_payload = {
        "nome": "TESTE KIRO",
        "contato": "+55 11970614904",
        "email": "teste@exemplo.com",
        "disponibilidade": "Sim",
        "capital": "mais-600k"
    }
    
    print("🧪 Testando backend...")
    print(f"📍 URL: {BASE_URL}/api/email")
    print(f"📦 Payload: {json.dumps(test_payload, indent=2)}")
    
    try:
        # Teste 1: Health check
        print("\n1️⃣ Testando health check...")
        health_response = requests.get(f"{BASE_URL}/", timeout=10)
        print(f"✅ Health check: {health_response.status_code} - {health_response.text}")
        
        # Teste 2: Envio de email
        print("\n2️⃣ Testando envio de email...")
        response = requests.post(
            f"{BASE_URL}/api/email",
            headers={"Content-Type": "application/json"},
            json=test_payload,
            timeout=30
        )
        
        print(f"📊 Status Code: {response.status_code}")
        print(f"📋 Headers: {dict(response.headers)}")
        
        try:
            response_data = response.json()
            print(f"📄 Response: {json.dumps(response_data, indent=2)}")
        except:
            print(f"📄 Response (text): {response.text}")
            
        if response.status_code == 200:
            print("✅ Teste PASSOU! Backend funcionando corretamente.")
        else:
            print(f"❌ Teste FALHOU! Status: {response.status_code}")
            
    except requests.exceptions.ConnectionError:
        print("❌ ERRO: Não foi possível conectar ao backend. Certifique-se de que está rodando.")
    except requests.exceptions.Timeout:
        print("❌ ERRO: Timeout na requisição. Backend pode estar sobrecarregado.")
    except Exception as e:
        print(f"❌ ERRO INESPERADO: {str(e)}")

if __name__ == "__main__":
    test_backend()