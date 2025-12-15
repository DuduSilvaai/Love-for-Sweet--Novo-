import React, { useState } from 'react';
import { X, Check } from 'lucide-react';
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

    if (!isOpen) return null;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSelectChange = (name: string, value: string) => {
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validação básica
        if (!formData.nome || !formData.telefone || !formData.email || !formData.capital || !formData.disponibilidade) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        setIsLoading(true);

        try {
            // Simulação do envio (O backend Python seria chamado aqui)
            // await api.post('/send-franchise-email', formData);

            console.log("Dados coletados:", formData);

            // Simular delay de rede
            await new Promise(resolve => setTimeout(resolve, 1500));

            alert("Obrigado pelo contato! Sua solicitação foi enviada com sucesso.");
            onClose();
            setFormData({
                nome: '',
                ddi: '+55',
                telefone: '',
                email: '',
                disponibilidade: '',
                capital: '',
            });
        } catch (error) {
            alert("Erro ao enviar. Por favor, tente novamente.");
            console.error(error);
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

                <form onSubmit={handleSubmit} className="space-y-4">

                    {/* Nome */}
                    <div className="space-y-2">
                        <Label htmlFor="nome">Nome Completo</Label>
                        <Input
                            id="nome"
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
                            placeholder="Seu nome"
                            required
                        />
                    </div>

                    {/* Celular (Composto) */}
                    <div className="space-y-2">
                        <Label htmlFor="telefone">Celular / WhatsApp</Label>
                        <div className="flex gap-2">
                            <Select
                                value={formData.ddi}
                                onValueChange={(val) => handleSelectChange('ddi', val)}
                            >
                                <SelectTrigger className="w-[100px]">
                                    <SelectValue placeholder="DDI" />
                                </SelectTrigger>
                                <SelectContent className="z-[10000]">
                                    <SelectItem value="+55">🇧🇷 +55</SelectItem>
                                    <SelectItem value="+1">🇺🇸 +1</SelectItem>
                                    <SelectItem value="+351">🇵🇹 +351</SelectItem>
                                </SelectContent>
                            </Select>
                            <Input
                                id="telefone"
                                name="telefone"
                                type="tel"
                                value={formData.telefone}
                                onChange={handleChange}
                                placeholder="(00) 00000-0000"
                                className="flex-1"
                                required
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                        <Label htmlFor="email">E-mail</Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="seu@email.com"
                            required
                        />
                    </div>

                    {/* Disponibilidade */}
                    <div className="space-y-2">
                        <Label>Você tem disponibilidade para estar presente no dia a dia da loja?</Label>
                        <Select
                            value={formData.disponibilidade}
                            onValueChange={(val) => handleSelectChange('disponibilidade', val)}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Selecione..." />
                            </SelectTrigger>
                            <SelectContent className="z-[10000]">
                                <SelectItem value="Sim">Sim</SelectItem>
                                <SelectItem value="Não">Não</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Capital */}
                    <div className="space-y-2">
                        <Label>Qual o seu caixa atual</Label>
                        <Select
                            value={formData.capital}
                            onValueChange={(val) => handleSelectChange('capital', val)}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Selecione a faixa de valor" />
                            </SelectTrigger>
                            <SelectContent className="z-[10000]">
                                <SelectItem value="300k-400k">De R$300.000 até R$400.000</SelectItem>
                                <SelectItem value="400k-600k">De R$400.000 até R$600.000</SelectItem>
                                <SelectItem value="mais-600k">Mais de R$600.000</SelectItem>
                            </SelectContent>
                        </Select>
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
            </div>
        </div>
    );
};

export default FranchiseModal;
