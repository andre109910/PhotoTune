"use client";

import { useState } from 'react';
import { AlertTriangle, X } from "lucide-react";
import { Button } from '@/components/ui/button';

export function UrgencyBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="relative bg-amber-400 text-amber-900">
      <div className="container mx-auto max-w-screen-xl px-4 py-3">
        <div className="flex items-center justify-center gap-3">
          <AlertTriangle className="h-5 w-5 shrink-0" />
          <p className="text-sm font-semibold">
            <strong className="font-bold">Promoção por tempo limitado!</strong> Os primeiros 50 pedidos ganham entrega prioritária gratuita.
          </p>
        </div>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 text-amber-900 hover:bg-amber-500/50 hover:text-amber-900"
        onClick={() => setIsVisible(false)}
        aria-label="Dispensar aviso"
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  );
}
