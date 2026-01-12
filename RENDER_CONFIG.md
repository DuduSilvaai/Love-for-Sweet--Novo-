# 🚀 Configuração do Render para Email

## 📧 **Opção 1: SendGrid (Recomendado)**

### 1. Criar conta no SendGrid
- Acesse: https://sendgrid.com/
- Crie uma conta gratuita (100 emails/dia)

### 2. Configurar API Key
- No painel SendGrid: Settings > API Keys
- Crie uma nova API Key com permissão "Mail Send"
- Copie a API Key (ex: `SG.abc123...`)

### 3. Configurar variáveis no Render
No painel do Render, adicione estas variáveis:

```
EMAIL_PROVIDER=sendgrid
SENDGRID_API_KEY=SG.sua_api_key_aqui
SENDGRID_FROM_EMAIL=noreply@loveforsweet.com.br
EMAIL_DESTINATARIO=loveforsweet.sorocaba@gmail.com
```

---

## 📧 **Opção 2: Gmail (Pode ter problemas de rede)**

### Configurar variáveis no Render:

```
EMAIL_PROVIDER=gmail
EMAIL_REMETENTE=noreply.loveforsweet@gmail.com
EMAIL_SENHA_APP=eowv jcir jizw iyng
EMAIL_DESTINATARIO=loveforsweet.sorocaba@gmail.com
SMTP_SERVER=smtp.gmail.com
SMTP_PORT=587
```

---

## 🔧 **Como configurar no Render:**

1. Acesse seu projeto no Render
2. Vá em **Environment**
3. Clique em **Add Environment Variable**
4. Adicione cada variável uma por vez
5. Clique em **Save Changes**
6. O serviço será redployado automaticamente

---

## 🧪 **Testar após configuração:**

```bash
python test_production.py
```

Se ainda houver problemas, use o SendGrid que é mais confiável em plataformas cloud.