// src/components/Sidebar.tsx
import React from 'react';

export function Sidebar() {
  return (
    
    <nav className="fixed left-0 top-0 h-screen w-64 hidden md:flex flex-col bg-surface-container-low border-r border-outline-variant p-md gap-sm z-40">
      <div className="px-md py-lg">
        <h1 className="font-headline-lg text-headline-lg text-primary">VaxWallet</h1>
        <p className="font-label-sm text-label-sm text-on-surface-variant">Clinical Care Portal</p>
      </div>
      
      <div className="flex flex-col gap-xs flex-grow">
        {/* Links dinâmicos - Provisoriamente com '#' até aplicar as rotas reais do React */}
        <a className="flex items-center gap-md px-md py-sm bg-primary-container text-on-primary-container rounded-lg font-bold transition-transform scale-95 active:scale-90" href="#">
          <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
          <span className="font-label-sm text-label-sm">Dashboard</span>
        </a>
        
        <a className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-container-high transition-all duration-200 rounded-lg" href="#">
          <span className="material-symbols-outlined" data-icon="history">history</span>
          <span className="font-label-sm text-label-sm">Vaccine History</span>
        </a>
        
        <a className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-container-high transition-all duration-200 rounded-lg" href="#">
          <span className="material-symbols-outlined" data-icon="notifications_active">notifications_active</span>
          <span className="font-label-sm text-label-sm">Alerts</span>
        </a>
        
        <a className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-container-high transition-all duration-200 rounded-lg" href="#">
          <span className="material-symbols-outlined" data-icon="person">person</span>
          <span className="font-label-sm text-label-sm">Profile</span>
        </a>
      </div>
      
      <div className="flex flex-col gap-xs border-t border-outline-variant pt-md">
        <button className="w-full bg-primary text-on-primary py-sm rounded-lg font-label-sm text-label-sm font-bold mb-md hover:opacity-90 transition-opacity">
          Schedule Appointment
        </button>
        <a className="flex items-center gap-md px-md py-xs text-on-surface-variant hover:bg-surface-container-high rounded-lg" href="#">
          <span className="material-symbols-outlined" data-icon="help">help</span>
          <span className="font-label-sm text-label-sm">Support</span>
        </a>
        <a className="flex items-center gap-md px-md py-xs text-on-surface-variant hover:bg-surface-container-high rounded-lg" href="#">
          <span className="material-symbols-outlined" data-icon="settings">settings</span>
          <span className="font-label-sm text-label-sm">Settings</span>
        </a>
      </div>
    </nav>
  );
}