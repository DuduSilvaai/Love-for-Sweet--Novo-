import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import sys
import json

# Configurações do Servidor SMTP (Preencha com suas credenciais)
SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 587
SENDER_EMAIL = "seu_email@gmail.com"
SENDER_PASSWORD = "sua_senha_de_app"  # Gere uma Senha de App no Google Account
RECIPIENT_EMAIL = "dono_da_franquia@exemplo.com"

def enviar_email_franquia(dados):
    """
    Envia um e-mail com os dados do candidato a franqueado.
    
    Args:
        dados (dict): Dicionário contendo nome, contato, email, disponibilidade e capital.
    
    Returns:
        bool: True se enviado com sucesso, False caso contrário.
    """
    try:
        # Montar a mensagem
        msg = MIMEMultipart()
        msg['From'] = SENDER_EMAIL
        msg['To'] = RECIPIENT_EMAIL
        msg['Subject'] = f"Nova Solicitação de Franquia: {dados.get('nome')}"

        # Corpo do e-mail formatado
        corpo_email = f"""
        <html>
        <head>
            <style>
                body {{ font-family: Arial, sans-serif; color: #333; }}
                .container {{ max-width: 600px; margin: 0 auto; border: 1px solid #ddd; padding: 20px; border-radius: 10px; }}
                h2 {{ color: #d63384; }}
                .campo {{ margin-bottom: 15px; }}
                .label {{ font-weight: bold; color: #555; }}
            </style>
        </head>
        <body>
            <div class="container">
                <h2>Novo Interessado em Franquia</h2>
                <p>Recebemos uma nova solicitação. Detalhes abaixo:</p>
                
                <div class="campo">
                    <span class="label">Nome:</span> {dados.get('nome')}
                </div>
                
                <div class="campo">
                    <span class="label">Contato:</span> {dados.get('ddi')} {dados.get('telefone')}
                </div>
                
                <div class="campo">
                    <span class="label">E-mail:</span> {dados.get('email')}
                </div>
                
                <div class="campo">
                    <span class="label">Disponibilidade:</span> {dados.get('disponibilidade')}
                </div>
                
                <div class="campo">
                    <span class="label">Capital Disponível:</span> {dados.get('capital')}
                </div>
                
                <hr>
                <p style="font-size: 12px; color: #999;">Email enviado automaticamente pelo sistema Love For Sweet.</p>
            </div>
        </body>
        </html>
        """

        msg.attach(MIMEText(corpo_email, 'html'))

        # Conexão com o servidor SMTP
        print("Conectando ao servidor SMTP...")
        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.starttls()  # Upgrade para conexão segura
        server.login(SENDER_EMAIL, SENDER_PASSWORD)
        
        # Envio
        text = msg.as_string()
        server.sendmail(SENDER_EMAIL, RECIPIENT_EMAIL, text)
        server.quit()
        
        print("E-mail enviado com sucesso!")
        return True

    except Exception as e:
        print(f"Erro ao enviar e-mail: {e}")
        return False

# Exemplo de uso (para teste local)
if __name__ == "__main__":
    # Simulação de dados recebidos do frontend
    exemplo_dados = {
        "nome": "João da Silva",
        "ddi": "+55",
        "telefone": "11999998888",
        "email": "joao@exemplo.com",
        "disponibilidade": "Sim",
        "capital": "200k-350k"
    }

    if enviar_email_franquia(exemplo_dados):
        print("Teste concluído: Sucesso")
    else:
        print("Teste concluído: Falha")
