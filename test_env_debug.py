#!/usr/bin/env python3
"""
Script para testar as variáveis de ambiente no Render
"""
import requests
import json

def test_env_variables():
    BASE_URL = "https://love-for-sweet-novo.onrender.com"
    
    print("🔍 Verificando variáveis de ambiente no Render...")
    
    try:
        response = requests.get(f"{BASE_URL}/debug", timeout=30)
        
        print(f"📊 Status: {response.status_code}")
        
        if response.status_code == 200:
            env_data = response.json()
            print("📋 Variáveis de ambiente:")
            for key, value in env_data.items():
                print(f"   {key}: {value}")
                
            # Verificar se todas as variáveis necessárias estão definidas
            required_vars = ["EMAIL_REMETENTE", "EMAIL_SENHA_APP", "EMAIL_DESTINATARIO"]
            missing_vars = [var for var in required_vars if env_data.get(var) == "✗ VAZIO"]
            
            if missing_vars:
                print(f"\n❌ PROBLEMA ENCONTRADO!")
                print(f"🚨 Variáveis não configuradas no Render: {', '.join(missing_vars)}")
                print("\n💡 SOLUÇÃO:")
                print("1. Acesse o painel do Render")
                print("2. Vá em Environment Variables")
                print("3. Adicione estas variáveis:")
                print("   EMAIL_REMETENTE=noreply.loveforsweet@gmail.com")
                print("   EMAIL_SENHA_APP=eowv jcir jizw iyng")
                print("   EMAIL_DESTINATARIO=loveforsweet.sorocaba@gmail.com")
            else:
                print("\n✅ Todas as variáveis estão configuradas!")
        else:
            print(f"❌ Erro ao acessar debug: {response.status_code}")
            print(f"Response: {response.text}")
            
    except Exception as e:
        print(f"❌ Erro: {str(e)}")

if __name__ == "__main__":
    test_env_variables()