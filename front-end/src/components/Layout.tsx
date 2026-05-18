// src/components/Layout.tsx
import React from 'react';
import { Sidebar } from './Sidebar';
import { NavigationBar } from './NavigationBar';

interface LayoutProps {
  children: React.ReactNode; // Representa a página secundária atual
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar Principal - Sempre fixa na esquerda */}
      <Sidebar />

      {/* Área de Conteúdo Secundário (Margem esquerda de 64 para dar espaço à sidebar fixa) */}
      <main className="flex-1 md:pl-64 p-md">
        <NavigationBar />
        {children}
      </main>
    </div>
  );
}