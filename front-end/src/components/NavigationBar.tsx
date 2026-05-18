// src/components/Sidebar.tsx
import React from 'react';

export function NavigationBar() {
  return (
      <header className="sticky top-0 z-30 bg-surface shadow-sm px-lg py-sm flex justify-between items-center rounded-xl mb-lg">
        <div className="flex items-center gap-md">
          <span className="md:hidden material-symbols-outlined text-primary" data-icon="menu">menu</span>
          <h2 className="font-title-md text-title-md text-primary font-bold">Carteira de vacinação</h2>
        </div>
        <div className="flex items-center gap-lg">
          <div className="hidden md:flex items-center bg-surface-container-low px-md py-xs rounded-full border border-outline-variant">
            <span className="material-symbols-outlined text-on-surface-variant mr-sm" data-icon="search">search</span>
            <input className="bg-transparent border-none focus:ring-0 text-body-md w-48 outline-none" placeholder="Pesquisar registros..." type="text" />
          </div>
          <div className="flex items-center gap-md">
            <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:bg-surface-container-low p-xs rounded-full" data-icon="notifications">notifications</span>
            <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed font-bold text-caption">
              JD
            </div>
          </div>
        </div>
      </header>
  );
}