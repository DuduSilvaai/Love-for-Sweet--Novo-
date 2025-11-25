import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type AnimationType =
  | "fade-up"
  | "fade-in"
  | "slide-left"
  | "slide-right"
  | "scale-in"
  | "fade-down";

interface UseScrollAnimationOptions {
  animationType?: AnimationType;
  delay?: number;
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = <T extends HTMLElement = HTMLDivElement>({
  animationType = "fade-up",
  delay = 0,
  threshold = 0.1,
  rootMargin = "0px",
  triggerOnce = true,
}: UseScrollAnimationOptions = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          } else if (!triggerOnce) {
            setIsVisible(false);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [delay, threshold, rootMargin, triggerOnce]);

  return {
    ref: elementRef,
    className: cn(
      "transition-all duration-700 ease-out",
      isVisible
        ? `animate-${animationType}`
        : `opacity-0 ${getInitialState(animationType)}`
    ),
  };
};

const getInitialState = (animationType: AnimationType): string => {
  switch (animationType) {
    case "fade-up":
      return "translate-y-8";
    case "fade-in":
      return "";
    case "slide-left":
      return "translate-x-8";
    case "slide-right":
      return "-translate-x-8";
    case "scale-in":
      return "scale-95";
    case "fade-down":
      return "-translate-y-8";
    default:
      return "";
  }
};
