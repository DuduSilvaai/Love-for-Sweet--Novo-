import sys
import json

def enviar_email_backend(dados):
    import smtplib
    from email.mime.text import MIMEText
    from email.mime.multipart import MIMEMultipart
    
    # --- CONFIGURAÇÕES HARDCODED (Para garantir que não é erro de variável) ---
    SMTP_SERVER = "smtp.gmail.com"
    SMTP_PORT = 465  # Usando SSL direto
    EMAIL_REMETENTE = "noreply.loveforsweet@gmail.com"
    # IMPORTANTE: Removendo espaços da senha preventivamente
    EMAIL_SENHA_APP = "eowv jcir jizw iyng".replace(" ", "") 
    EMAIL_DESTINATARIO = "loveforsweet.franchising@gmail.com"

    try:
        print("--- INICIANDO ENVIO DE EMAIL (DEBUG) ---")
        
        msg = MIMEMultipart()
        msg['From'] = EMAIL_REMETENTE
        msg['To'] = EMAIL_DESTINATARIO
        msg['Subject'] = f"Novo Lead Franqueado: {dados['nome']}"
        msg.add_header('Reply-To', dados['email']) # Para responder direto ao cliente

        body = f"""
        NOVO INTERESSADO EM UMA FRANQUIA:
        -----------------------------------
        Nome: {dados['nome']}
        WhatsApp: {dados['telefone']} (DDI: {dados['ddi']})
        Email: {dados['email']}
        Disponibilidade: {dados['disponibilidade']}
        Capital: {dados['capital']}
        -----------------------------------
        """
        msg.attach(MIMEText(body, 'plain'))

        # CONEXÃO VIA SSL (Mais robusta que TLS)
        print("Conectando ao Gmail via SSL...")
        server = smtplib.SMTP_SSL(SMTP_SERVER, SMTP_PORT)
        
        print("Fazendo Login...")
        server.login(EMAIL_REMETENTE, EMAIL_SENHA_APP)
        
        print("Enviando mensagem...")
        server.sendmail(EMAIL_REMETENTE, EMAIL_DESTINATARIO, msg.as_string())
        
        server.quit()
        print("--- EMAIL ENVIADO COM SUCESSO! ---")
        return "OK"

    except Exception as e:
        erro_msg = f"ERRO CRÍTICO SMTP: {str(e)}"
        print(erro_msg) # Mostra no terminal
        return erro_msg # Retorna o erro para o frontend mostrar no alert

# Exemplo de uso (para teste local)
if __name__ == "__main__":
    if len(sys.argv) > 1:
        try:
            # Tenta ler o JSON do primeiro argumento
            json_str = sys.argv[1]
            dados = json.loads(json_str)
            resultado = enviar_email_backend(dados)
            print(resultado) # Imprime "OK" ou o erro para ser capturado
        except json.JSONDecodeError:
            print("Erro: Argumento não é um JSON válido.")
        except Exception as e:
            print(f"Erro inesperado: {e}")
    else:
        # Se nenhum argumento for passado, usa dados de teste (mas avisa)
        print("Aviso: Nenhum argumento passado. Usando dados de teste estáticos.")
        exemplo_dados = {
            "nome": "João da Silva (Teste Estático)",
            "ddi": "+55",
            "telefone": "11999998888",
            "email": "joao@exemplo.com",
            "disponibilidade": "Sim",
            "capital": "200k-350k"
        }
        resultado = enviar_email_backend(exemplo_dados)
        print(resultado)
