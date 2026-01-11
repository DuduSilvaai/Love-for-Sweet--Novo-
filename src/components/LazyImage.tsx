import { useState, useEffect, useRef } from "react";

interface LazyImageProps {
    src: string;
    alt?: string;
    className?: string;
    style?: React.CSSProperties;
    wrapperClassName?: string;
    placeholderClassName?: string;
}

/**
 * Componente de lazy loading para imagens.
 * Carrega a imagem apenas quando ela está próxima do viewport (100px).
 */
const LazyImage = ({
    src,
    alt = "",
    className = "",
    style,
    wrapperClassName = "",
    placeholderClassName = "bg-gradient-to-br from-gray-100 to-gray-200",
}: LazyImageProps) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const imgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true);
                        observer.disconnect();
                    }
                });
            },
            {
                rootMargin: "200px", // Carrega 200px antes de entrar na viewport
            }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        if (isInView && !isLoaded) {
            const img = new Image();
            img.src = src;
            img.onload = () => setIsLoaded(true);
        }
    }, [isInView, src, isLoaded]);

    return (
        <div ref={imgRef} className={wrapperClassName}>
            {isLoaded ? (
                <div
                    className={className}
                    style={{
                        backgroundImage: `url("${src}")`,
                        ...style,
                    }}
                />
            ) : (
                <div className={`${className} ${placeholderClassName} animate-pulse`} style={style}>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 border-3 border-brand-primary border-t-transparent rounded-full animate-spin opacity-50"></div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LazyImage;
