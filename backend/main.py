from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# Carrega as variáveis do arquivo .env (para uso local)
load_dotenv()

app = Flask(__name__)

# CORS: Permitir Frontend local e produção
CORS(app, origins=[
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "https://www.loveforsweet.com.br",
    "https://loveforsweet.com.br"
])

def enviar_email_backend(dados):
    # --- CONFIGURAÇÕES VIA VARIÁVEIS DE AMBIENTE ---
    SMTP_SERVER = os.getenv("SMTP_SERVER", "smtp.gmail.com")
    SMTP_PORT = int(os.getenv("SMTP_PORT", "465"))  # SSL
    EMAIL_REMETENTE = os.getenv("EMAIL_REMETENTE")
    EMAIL_SENHA_APP = os.getenv("EMAIL_SENHA_APP")
    EMAIL_DESTINATARIO = os.getenv("EMAIL_DESTINATARIO")

    try:
        print(f"--- [BACKEND] INICIANDO ENVIO: {dados.get('nome')} ---")
        
        msg = MIMEMultipart()
        msg['From'] = EMAIL_REMETENTE
        msg['To'] = EMAIL_DESTINATARIO
        msg['Subject'] = f"Novo Lead Franqueado: {dados.get('nome')}"
        msg.add_header('Reply-To', dados.get('email'))

        body = f"""
        NOVO INTERESSADO EM UMA FRANQUIA:
        -----------------------------------
        Nome: {dados.get('nome')}
        WhatsApp: {dados.get('contato')}
        Email: {dados.get('email')}
        Disponibilidade: {dados.get('disponibilidade')}
        Capital: {dados.get('capital')}
        -----------------------------------
        """
        msg.attach(MIMEText(body, 'plain'))

        print("[BACKEND] Conectando ao Gmail via SSL...")
        server = smtplib.SMTP_SSL(SMTP_SERVER, SMTP_PORT)
        
        print("[BACKEND] Fazendo Login...")
        server.login(EMAIL_REMETENTE, EMAIL_SENHA_APP)
        
        print("[BACKEND] Enviando mensagem...")
        server.sendmail(EMAIL_REMETENTE, EMAIL_DESTINATARIO, msg.as_string())
        
        server.quit()
        print("--- [BACKEND] EMAIL ENVIADO COM SUCESSO! ---")
        return "OK"

    except Exception as e:
        erro_msg = f"ERRO CRÍTICO SMTP: {str(e)}"
        print(erro_msg)
        return erro_msg

@app.route('/', methods=['GET'])
def health_check():
    return "Backend Online", 200

@app.route('/api/email', methods=['POST'])
def handle_email():
    try:
        dados = request.json
        if not dados:
            return jsonify({"message": "Nenhum dado recebido"}), 400
        
        resultado = enviar_email_backend(dados)
        
        if resultado == "OK":
            return jsonify({"message": "OK"}), 200
        else:
            return jsonify({"message": resultado}), 500
            
    except Exception as e:
        return jsonify({"message": str(e)}), 500

if __name__ == '__main__':
    print("Servidor Backend rodando na porta 5000...")
    app.run(debug=True, port=5000)
