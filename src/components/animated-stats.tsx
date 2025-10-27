"use client";

import { useState, useEffect, useRef } from "react";
import { TrendingUp } from "lucide-react";

interface AnimatedStatsProps {
  target: number;
  duration?: number;
  className?: string;
}

export function AnimatedStats({ target, duration = 1500, className }: AnimatedStatsProps) {
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
    <div ref={ref} className="bg-white/80 backdrop-blur-sm border border-blue-100 rounded-2xl p-6 shadow-lg flex items-center justify-center gap-6 mb-12">
        <div className="relative text-blue-500">
            <TrendingUp className="h-16 w-16 opacity-20" />
            <div className="absolute inset-0 flex items-center justify-center animate-pulse">
                <TrendingUp className="h-8 w-8" />
            </div>
        </div>
        <div>
            <div className="flex items-baseline">
                <span className="font-headline text-6xl font-bold text-title-blue">+{count}%</span>
            </div>
            <p className="font-semibold text-muted-foreground text-lg -mt-1">no aumento das vendas</p>
        </div>
    </div>
  );
}