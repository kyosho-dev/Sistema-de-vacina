// src/components/Sidebar.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Sidebar() {
  const location = useLocation();

  // Função auxiliar para verificar se o link está ativo
  const isActive = (path: string) => location.pathname === path;

  // Estilos base e variantes para reaproveitar
  const linkBaseStyle = "flex items-center gap-md px-md py-sm rounded-lg transition-all duration-200";
  const activeStyle = "bg-primary-container text-on-primary-container font-bold scale-95";
  const inactiveStyle = "text-on-surface-variant hover:bg-surface-container-high";

  return (
    <nav className="fixed left-0 top-0 h-screen w-64 hidden md:flex flex-col bg-surface-container-low border-r border-outline-variant p-md gap-sm z-40">
      <div className="px-md py-lg">
        <h1 className="text-headline-lg text-primary">VaxWallet</h1>
        <p className="text-label-sm text-on-surface-variant">Portal de Cuidados Clínicos</p>
      </div>
      
      <div className="flex flex-col gap-xs flex-grow">
        {/* Usando o <Link> com caminhos reais */}
        <Link to="/" className={`${linkBaseStyle} ${isActive('/') ? activeStyle : inactiveStyle}`}>
          <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
          <span className="text-label-sm">Painel principal</span>
        </Link>

        <Link to="/buscarVacinas" className={`${linkBaseStyle} ${isActive('/buscarVacinas') ? activeStyle : inactiveStyle}`}>
          <span className="material-symbols-outlined" data-icon="dashboard">search</span>
          <span className="text-label-sm">Buscar Vacinas</span>
        </Link>
        
        <Link to="/historico" className={`${linkBaseStyle} ${isActive('/historico') ? activeStyle : inactiveStyle}`}>
          <span className="material-symbols-outlined" data-icon="history">history</span>
          <span className="text-label-sm">Histórico</span>
        </Link>
        
        <Link to="/alertas" className={`${linkBaseStyle} ${isActive('/alertas') ? activeStyle : inactiveStyle}`}>
          <span className="material-symbols-outlined" data-icon="notifications_active">notifications_active</span>
          <span className="text-label-sm">Alertas</span>
        </Link>
        
        <Link to="/perfil" className={`${linkBaseStyle} ${isActive('/perfil') ? activeStyle : inactiveStyle}`}>
          <span className="material-symbols-outlined" data-icon="person">person</span>
          <span className="text-label-sm">Perfil</span>
        </Link>
      </div>
      
      <div className="flex flex-col gap-xs border-t border-outline-variant pt-md">
        <button className="w-full bg-primary text-on-primary py-sm rounded-lg text-label-sm font-bold mb-md hover:opacity-90 transition-opacity">
          Agendar Consulta
        </button>

        <Link to="/suporte" className="flex items-center gap-md px-md py-xs text-on-surface-variant hover:bg-surface-container-high rounded-lg">
          <span className="material-symbols-outlined" data-icon="help">help</span>
          <span className="text-label-sm">Suporte</span>
        </Link>
        
        <Link to="/configuracoes" className="flex items-center gap-md px-md py-xs text-on-surface-variant hover:bg-surface-container-high rounded-lg">
          <span className="material-symbols-outlined" data-icon="settings">settings</span>
          <span className="text-label-sm">Configurações</span>
        </Link>
      </div>
    </nav>
  );
}