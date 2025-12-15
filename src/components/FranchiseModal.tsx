import React, { useState } from 'react';
import { X, Check, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface FranchiseModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const FranchiseModal: React.FC<FranchiseModalProps> = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        nome: '',
        ddi: '+55',
        telefone: '',
        email: '',
        disponibilidade: '',
        capital: '',
    });

    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isManualDDI, setIsManualDDI] = useState(false);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    if (!isOpen) return null;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        let finalValue = value;

        // Regra: Email sempre minúsculo
        if (name === 'email') {
            finalValue = value.toLowerCase();
        }

        // Regra: Celular apenas números
        if (name === 'telefone') {
            finalValue = value.replace(/\D/g, ''); // Remove tudo que não é dígito
        }

        setFormData(prev => ({ ...prev, [name]: finalValue }));

        // Limpar erro ao digitar
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSelectChange = (name: string, value: string) => {
        setFormData(prev => ({ ...prev, [name]: value }));
        // Limpar erro ao selecionar
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validação Estrita
        const newErrors: { [key: string]: string } = {};

        // 1. Nome: Apenas letras e espaços
        if (!formData.nome.trim()) {
            newErrors.nome = "Nome é obrigatório.";
        } else if (!/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ\s]+$/.test(formData.nome)) {
            newErrors.nome = "O nome deve conter apenas letras.";
        }

        // 2. Email: Formato válido
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email) {
            newErrors.email = "E-mail é obrigatório.";
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Digite um e-mail válido.";
        }

        // 3. Telefone: Obrigatório
        if (!formData.telefone) {
            newErrors.telefone = "Celular é obrigatório.";
        }

        // 4. Selects
        if (!formData.disponibilidade) newErrors.disponibilidade = "Seleção obrigatória.";
        if (!formData.capital) newErrors.capital = "Seleção obrigatória.";

        // Se houver erros, abortar e mostrar na tela
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsLoading(true);

        try {
            // Leitura explicita das variáveis
            const nome = formData.nome;
            const email = formData.email;
            const ddi = formData.ddi;
            const telefone = formData.telefone;
            const disponibilidade = formData.disponibilidade;
            const capital = formData.capital;

            // Debug solicitado: Print "Dados lidos: ..."
            console.log(`Dados lidos: ${nome}, ${email}, ${ddi}, ${telefone}, ${disponibilidade}, ${capital}`);

            // Validação de Nulos
            const dadosValidados = {
                nome: nome || "",
                email: email || "",
                ddi: ddi || "",
                telefone: telefone || "",
                disponibilidade: disponibilidade || "",
                capital: capital || ""
            };

            // Verificar escopo das variáveis (redundante pois usamos state, mas bom para debug)
            if (!formData) throw new Error("FormData is null or undefined");

            // Preparando os dados como solicitado (processar_envio)
            const payload = {
                nome: dadosValidados.nome,
                // DDI + Telefone concatenados
                contato: `${dadosValidados.ddi} ${dadosValidados.telefone}`,
                email: dadosValidados.email,
                disponibilidade: dadosValidados.disponibilidade,
                capital: dadosValidados.capital
            };

            console.log("DEBUG: Payload preparado para envio:", payload);

            // Simulação do envio (O backend Python seria chamado aqui)
            console.log("DEBUG: Payload FINAL preparado:", payload);

            // Chamada Real ao Backend Python (Flask)
            // Usando IP 127.0.0.1 para evitar problemas de resolução de localhost no Node/Browser
            const response = await fetch('http://127.0.0.1:5000/api/email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload)
            });

            const data = await response.json();
            const respostaBackend = data.message; // Espera "OK" ou mensagem de erro

            if (response.ok && respostaBackend === "OK") {
                console.log("DEBUG: Envio realizado com sucesso (Resposta: OK).");
                // Mudar para tela de sucesso em vez de alert
                setIsSuccess(true);

                // Limpar formulário no background
                setFormData({
                    nome: '',
                    ddi: '+55',
                    telefone: '',
                    email: '',
                    disponibilidade: '',
                    capital: '',
                });
                setIsManualDDI(false);
            } else {
                // Caso contrário (qualquer coisa diferente de "OK" é erro)
                throw new Error(respostaBackend || "Erro desconhecido no servidor.");
            }
        } catch (error) {
            console.error("ERRO CRÍTICO AO ENVIAR:", error);
            // Debug solicitado: Erro Fatal
            const errorMsg = error instanceof Error ? error.message : String(error);
            console.error(`ERRO FATAL NA LEITURA: ${errorMsg}`);
            alert(`Erro interno: ${errorMsg}`);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative w-full max-w-lg mx-4 bg-white rounded-2xl shadow-2xl p-6 md:p-8 animate-in zoom-in-95 duration-200">

                {/* Botão Fechar */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-100"
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-brand-secondary mb-2">Seja um Franqueado</h2>
                    <p className="text-gray-500">Preencha o formulário abaixo e entraremos em contato.</p>
                </div>

                {/* Renderização Condicional: Sucesso ou Formulário */}
                {isSuccess ? (
                    <div className="flex flex-col items-center justify-center py-10 space-y-4 animate-in fade-in duration-300">
                        <CheckCircle size={64} className="text-green-500" />
                        <h3 className="text-2xl font-bold text-gray-800 text-center">Solicitação Enviada!</h3>
                        <p className="text-gray-500 text-center max-w-xs">
                            Recebemos seus dados com sucesso. <br />
                            Nossa equipe de expansão entrará em contato em breve.
                        </p>
                        <Button
                            onClick={onClose}
                            variant="outline"
                            className="mt-4 min-w-[120px]"
                        >
                            Fechar
                        </Button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">

                        {/* Nome */}
                        <div className="space-y-1">
                            <Label htmlFor="nome">Nome Completo</Label>
                            <Input
                                id="nome"
                                name="nome"
                                value={formData.nome}
                                onChange={handleChange}
                                placeholder="Seu nome (apenas letras)"
                                className={errors.nome ? "border-red-500 focus-visible:ring-red-500" : ""}
                                required
                            />
                            {errors.nome && <p className="text-red-500 text-xs">{errors.nome}</p>}
                        </div>

                        {/* Celular (Composto) */}
                        <div className="space-y-1">
                            <Label htmlFor="telefone">Celular / WhatsApp</Label>
                            <div className="flex gap-2">
                                {isManualDDI ? (
                                    <Input
                                        name="ddi"
                                        value={formData.ddi}
                                        onChange={handleChange}
                                        placeholder="+00"
                                        className="w-[100px]"
                                        maxLength={5}
                                    />
                                ) : (
                                    <Select
                                        value={formData.ddi}
                                        onValueChange={(val) => {
                                            if (val === 'manual_option') {
                                                setIsManualDDI(true);
                                                setFormData(prev => ({ ...prev, ddi: '' }));
                                            } else {
                                                handleSelectChange('ddi', val);
                                            }
                                        }}
                                    >
                                        <SelectTrigger className="w-[100px]">
                                            <SelectValue placeholder="DDI" />
                                        </SelectTrigger>
                                        <SelectContent className="z-[10000] max-h-[200px]">
                                            <SelectItem value="+55">🇧🇷 +55</SelectItem>
                                            <SelectItem value="+1">🇺🇸 +1</SelectItem>
                                            <SelectItem value="+351">🇵🇹 +351</SelectItem>
                                            <SelectItem value="+34">🇪🇸 +34</SelectItem>
                                            <SelectItem value="+33">🇫🇷 +33</SelectItem>
                                            <SelectItem value="+44">🇬🇧 +44</SelectItem>
                                            <SelectItem value="+54">🇦🇷 +54</SelectItem>
                                            <SelectItem value="+598">🇺🇾 +598</SelectItem>
                                            <SelectItem value="+595">🇵🇾 +595</SelectItem>
                                            <SelectItem value="+56">🇨🇱 +56</SelectItem>
                                            <SelectItem value="+49">🇩🇪 +49</SelectItem>
                                            <SelectItem value="+39">🇮🇹 +39</SelectItem>
                                            <SelectItem value="+81">🇯🇵 +81</SelectItem>
                                            <SelectItem value="+86">🇨🇳 +86</SelectItem>
                                            <SelectItem value="+1_CA">🇨🇦 +1</SelectItem>
                                            <SelectItem value="manual_option">Outro (Digitar)</SelectItem>
                                        </SelectContent>
                                    </Select>
                                )}
                                <Input
                                    id="telefone"
                                    name="telefone"
                                    type="tel"
                                    value={formData.telefone}
                                    onChange={handleChange}
                                    placeholder="(00) 00000-0000"
                                    className={`flex-1 ${errors.telefone ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                                    required
                                />
                            </div>
                            {errors.telefone && <p className="text-red-500 text-xs">{errors.telefone}</p>}
                        </div>

                        {/* Email */}
                        <div className="space-y-1">
                            <Label htmlFor="email">E-mail</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="seu@email.com"
                                className={errors.email ? "border-red-500 focus-visible:ring-red-500" : ""}
                                required
                            />
                            {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                        </div>

                        {/* Disponibilidade */}
                        <div className="space-y-1">
                            <Label>Você tem disponibilidade para estar presente no dia a dia da loja?</Label>
                            <Select
                                value={formData.disponibilidade}
                                onValueChange={(val) => handleSelectChange('disponibilidade', val)}
                            >
                                <SelectTrigger className={errors.disponibilidade ? "border-red-500 focus:ring-red-500" : ""}>
                                    <SelectValue placeholder="Selecione..." />
                                </SelectTrigger>
                                <SelectContent className="z-[10000]">
                                    <SelectItem value="Sim">Sim</SelectItem>
                                    <SelectItem value="Não">Não</SelectItem>
                                </SelectContent>
                            </Select>
                            {errors.disponibilidade && <p className="text-red-500 text-xs">{errors.disponibilidade}</p>}
                        </div>

                        {/* Capital */}
                        <div className="space-y-1">
                            <Label>Qual seu capital disponível para investimento?</Label>
                            <Select
                                value={formData.capital}
                                onValueChange={(val) => handleSelectChange('capital', val)}
                            >
                                <SelectTrigger className={errors.capital ? "border-red-500 focus:ring-red-500" : ""}>
                                    <SelectValue placeholder="Selecione a faixa de valor" />
                                </SelectTrigger>
                                <SelectContent className="z-[10000]">
                                    <SelectItem value="300k-400k">De R$300.000 até R$400.000</SelectItem>
                                    <SelectItem value="400k-600k">De R$400.000 até R$600.000</SelectItem>
                                    <SelectItem value="mais-600k">Mais de R$600.000</SelectItem>
                                </SelectContent>
                            </Select>
                            {errors.capital && <p className="text-red-500 text-xs">{errors.capital}</p>}
                        </div>

                        {/* Botões de Ação */}
                        <div className="flex gap-3 pt-4">
                            <Button
                                type="button"
                                variant="outline"
                                className="flex-1"
                                onClick={onClose}
                                disabled={isLoading}
                            >
                                Cancelar
                            </Button>
                            <Button
                                type="submit"
                                variant="elegant"
                                className="flex-1 bg-brand-primary hover:bg-brand-primary/90 text-white"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Enviando...' : 'Enviar Solicitação'}
                            </Button>
                        </div>

                    </form>
                )}
            </div>
        </div>
    );
};

export default FranchiseModal;
