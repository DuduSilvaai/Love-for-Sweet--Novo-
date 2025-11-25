import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  children: ReactNode;
  delay?: number;
  animationType?:
    | "fade-up"
    | "fade-in"
    | "slide-left"
    | "slide-right"
    | "scale-in"
    | "fade-down";
  className?: string;
  threshold?: number;
}

export const AnimatedCard = ({
  children,
  delay = 0,
  animationType = "fade-up",
  className,
  threshold = 0.1,
}: AnimatedCardProps) => {
  const animation = useScrollAnimation<HTMLDivElement>({
    animationType,
    delay,
    threshold,
  });

  return (
    <div ref={animation.ref} className={cn(animation.className, className)}>
      {children}
    </div>
  );
};
