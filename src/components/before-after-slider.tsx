"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ImagePlaceholder } from "@/lib/placeholder-images";

interface BeforeAfterSliderProps {
  beforeImage: ImagePlaceholder;
  afterImage: ImagePlaceholder;
}

export function BeforeAfterSlider({ beforeImage, afterImage }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };
  
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
  };

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  }, [isDragging, handleMove]);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (isDragging) {
      handleMove(e.touches[0].clientX);
    }
  }, [isDragging, handleMove]);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[900px] aspect-[3/2] mx-auto select-none overflow-hidden rounded-2xl shadow-2xl"
      onMouseUp={handleMouseUp}
      onTouchEnd={handleMouseUp}
    >
      <Image
        src={afterImage.imageUrl}
        alt={afterImage.description}
        data-ai-hint={afterImage.imageHint}
        fill
        className="object-cover"
        priority
      />
      <div
        className="absolute top-0 left-0 h-full w-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={beforeImage.imageUrl}
          alt={beforeImage.description}
          data-ai-hint={beforeImage.imageHint}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div
        className="absolute top-0 bottom-0 w-1 bg-white/80 backdrop-blur-sm cursor-ew-resize"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
      >
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-12 w-12 rounded-full bg-primary shadow-lg flex items-center justify-center text-primary-foreground transition-transform hover:scale-110"
          style={{ touchAction: "none" }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          <ChevronLeft className="h-6 w-6" />
          <ChevronRight className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
}
