from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# Carrega as variáveis do arquivo .env (para uso local)
# No Render, as variáveis são definidas no painel de Environment Variables
load_dotenv()

app = Flask(__name__)

# CORS: Configure basic permissive CORS
CORS(app, resources={r"/*": {"origins": "*"}})

# Force CORS headers on every response (including 500 errors) to prevent browser confusion
@app.after_request
def add_cors_headers(response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Headers"] = "Content-Type, Authorization"
    response.headers["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS, PUT, DELETE"
    return response 

# Se preferir restringir (Recomendado para produção real, mas "*" resolve o erro agora):
# CORS(app, origins=[
#     "http://localhost:5173",
#     "http://127.0.0.1:5173",
#     "https://www.loveforsweet.com.br",
#     "https://loveforsweet.com.br",
#     "https://loveforsweet.com.br/",
#     "https://www.loveforsweet.com.br/"
# ])

def enviar_email_backend(dados):
    # --- CONFIGURAÇÕES VIA VARIÁVEIS DE AMBIENTE ---
    SMTP_SERVER = os.getenv("SMTP_SERVER", "smtp.gmail.com")
    SMTP_PORT = int(os.getenv("SMTP_PORT", "587"))  # TLS (StartTLS) geralmente é 587
    EMAIL_REMETENTE = os.getenv("EMAIL_REMETENTE")
    EMAIL_SENHA_APP = os.getenv("EMAIL_SENHA_APP")
    EMAIL_DESTINATARIO = os.getenv("EMAIL_DESTINATARIO")

    # Debug para produção - verificar se as variáveis estão sendo carregadas
    print(f"[DEBUG] EMAIL_REMETENTE: {'✓ Definido' if EMAIL_REMETENTE else '✗ VAZIO'}")
    print(f"[DEBUG] EMAIL_SENHA_APP: {'✓ Definido' if EMAIL_SENHA_APP else '✗ VAZIO'}")
    print(f"[DEBUG] EMAIL_DESTINATARIO: {'✓ Definido' if EMAIL_DESTINATARIO else '✗ VAZIO'}")
    
    if not EMAIL_REMETENTE or not EMAIL_SENHA_APP or not EMAIL_DESTINATARIO:
        erro_msg = "ERRO: Variáveis de ambiente de email não configuradas no Render"
        print(erro_msg)
        return erro_msg

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

        print(f"[BACKEND] Conectando ao Gmail ({SMTP_SERVER}:{SMTP_PORT}) via TLS...")
        
        # Timeout explícito para não travar o worker
        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT, timeout=30) 
        # server.set_debuglevel(1) # Descomente para debug profundo no log

        print("[BACKEND] Iniciando STARTTLS...")
        server.starttls()
        
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

@app.route('/api/email', methods=['OPTIONS'])
def handle_preflight():
    """Handle CORS preflight requests"""
    return '', 200

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
        print(f"!!! ERRO 500 NA API: {str(e)}", flush=True) # Log para o Render
        return jsonify({"message": str(e), "error": True}), 500

if __name__ == '__main__':
    print("Servidor Backend rodando na porta 5000...")
    app.run(debug=True, port=5000)
