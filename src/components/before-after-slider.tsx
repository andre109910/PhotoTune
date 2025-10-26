"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ImagePlaceholder } from "@/lib/placeholder-images";

interface BeforeAfterSliderProps {
  beforeImage: ImagePlaceholder;
  afterImage: ImagePlaceholder;
}

export function BeforeAfterSlider({ beforeImage, afterImage }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  }, []);

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) return;
    handleMove(e.clientX);
  };
  
  const startDragging = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };
  
  const stopDragging = useCallback(() => {
    if (isDragging) {
      setIsDragging(false);
    }
  }, [isDragging]);

  const onDrag = useCallback((e: MouseEvent | TouchEvent) => {
    if (!isDragging) return;
    if ('touches' in e) {
      handleMove(e.touches[0].clientX);
    } else {
      handleMove(e.clientX);
    }
  }, [isDragging, handleMove]);

  useEffect(() => {
    window.addEventListener("mousemove", onDrag);
    window.addEventListener("touchmove", onDrag);
    window.addEventListener("mouseup", stopDragging);
    window.addEventListener("touchend", stopDragging);

    return () => {
      window.removeEventListener("mousemove", onDrag);
      window.removeEventListener("touchmove", onDrag);
      window.removeEventListener("mouseup", stopDragging);
      window.removeEventListener("touchend", stopDragging);
    };
  }, [onDrag, stopDragging]);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[700px] aspect-[4/3] mx-auto select-none overflow-hidden rounded-2xl shadow-2xl cursor-pointer"
      onClick={handleContainerClick}
    >
        <Image
          src={afterImage.imageUrl}
          alt={afterImage.description}
          data-ai-hint={afterImage.imageHint}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute top-2 right-2 bg-black/50 text-white text-xs font-bold px-2 py-1 rounded-full">DEPOIS</div>

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
        <div className="absolute top-2 left-2 bg-black/50 text-white text-xs font-bold px-2 py-1 rounded-full">ANTES</div>
      </div>

      <div
        className="absolute top-0 bottom-0 w-1 bg-white/80 backdrop-blur-sm cursor-ew-resize"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
      >
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-10 w-10 rounded-full bg-primary shadow-lg flex items-center justify-center text-primary-foreground transition-transform hover:scale-110 cursor-ew-resize"
          style={{ touchAction: "none" }}
          onMouseDown={startDragging}
          onTouchStart={startDragging}
        >
          <ChevronLeft className="h-5 w-5" />
          <ChevronRight className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}
