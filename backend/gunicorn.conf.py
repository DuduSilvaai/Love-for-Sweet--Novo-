# Configuração do Gunicorn para produção
import os

# Configurações básicas
bind = f"0.0.0.0:{os.getenv('PORT', '5000')}"
workers = 1  # Para aplicações simples, 1 worker é suficiente
worker_class = "sync"

# Timeouts aumentados para envio de email
timeout = 120  # 2 minutos para requisições
keepalive = 5

# Logs
accesslog = "-"  # Log para stdout (visível no Render)
errorlog = "-"   # Log de erro para stdout
loglevel = "info"

# Configurações de processo
max_requests = 1000
max_requests_jitter = 100
preload_app = True

# Configurações de segurança
limit_request_line = 4094
limit_request_fields = 100
limit_request_field_size = 8190