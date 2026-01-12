import React from 'react';

const WarningBanner: React.FC = () => {
    return (
        <div className="w-full bg-[#E5A8B9]/90 text-white py-4 px-4 text-center font-medium text-lg shadow-sm">
            <p className="max-w-4xl mx-auto drop-shadow-md">
                ⚠️ Aviso Importante: Todos os produtos podem ser encomendados, basta entrar em contato com a unidade mais próxima de você.
            </p>
        </div>
    );
};

export default WarningBanner;
