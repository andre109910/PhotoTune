"use client";

import { useState, useEffect, useRef } from "react";
import { TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface AnimatedStatsProps {
  target: number;
  duration?: number;
  className?: string;
}

export function AnimatedStats({ target, duration = 2500, className }: AnimatedStatsProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = target;
    let startTime: number | null = null;

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      const easedValue = percentage < 0.5 ? 2 * percentage * percentage : -1 + (4 - 2 * percentage) * percentage;

      const currentCount = Math.floor(easedValue * (end - start) + start);
      setCount(currentCount);

      if (progress < duration) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animateCount);
  }, [isInView, target, duration]);

  return (
    <div ref={ref} className={cn("flex items-center justify-center gap-6 mb-12", className, isInView ? "opacity-100" : "opacity-0")}>
        <div className={cn("relative text-green-500 transition-opacity duration-1000", isInView ? "opacity-100" : "opacity-0")}>
            <TrendingUp className="h-16 w-16 opacity-20" />
            <div className={cn("absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-out", isInView ? "opacity-100 scale-100" : "opacity-0 scale-50 -translate-y-2")}>
                <TrendingUp className="h-8 w-8" />
            </div>
        </div>
        <div>
            <div className="flex items-baseline">
                <span className="font-headline text-6xl font-bold text-green-600">+{count}%</span>
            </div>
            <p className="font-semibold text-muted-foreground text-lg -mt-1">no aumento das vendas</p>
        </div>
    </div>
  );
}
