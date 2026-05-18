// src/components/AccountProfile.tsx
import React from 'react';

export function Perfil() {
  return (
    <div className="max-w-[1200px] mx-auto p-lg w-full">
      
      {/* Breadcrumbs / Page Header */}
      <div className="mb-xl">
        <h1 className="text-headline-lg text-on-surface">Account Profile</h1>
        <p className="text-body-md text-on-surface-variant">
          Manage your digital health records and family information.
        </p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg">
        
        {/* Personal Info Card & Dependents (L-Grid 7) */}
        <section className="lg:col-span-7 flex flex-col gap-lg">
          
          {/* Personal Information */}
          <div className="bg-surface-container-lowest rounded-xl p-xl shadow-[0_4px_12px_rgba(0,0,0,0.06)] border-l-4 border-primary">
            <div className="flex justify-between items-start mb-lg">
              <h2 className="text-title-md">Personal Information</h2>
              <button className="text-primary text-label-sm flex items-center gap-xs hover:underline outline-none">
                <span className="material-symbols-outlined">edit</span> Edit
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
              <div>
                <label className="text-label-sm text-on-surface-variant block mb-xs">Full Name</label>
                <p className="text-body-md font-semibold">Ricardo Silva</p>
              </div>
              <div>
                <label className="text-label-sm text-on-surface-variant block mb-xs">CPF (Tax ID)</label>
                <p className="text-body-md font-semibold">***.482.908-**</p>
              </div>
              <div>
                <label className="text-label-sm text-on-surface-variant block mb-xs">Date of Birth</label>
                <p className="text-body-md font-semibold">October 24, 1982</p>
              </div>
              <div>
                <label className="text-label-sm text-on-surface-variant block mb-xs">Email Address</label>
                <p className="text-body-md font-semibold">ricardo.silva@email.com</p>
              </div>
            </div>
          </div>

          {/* Dependents Management */}
          <div className="bg-surface-container-lowest rounded-xl p-xl shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
            <div className="flex justify-between items-center mb-lg">
              <h2 className="text-title-md">Family Dependents</h2>
              <button className="bg-secondary-container text-on-secondary-container px-md py-sm rounded-lg text-label-sm flex items-center gap-sm hover:opacity-90 transition-opacity outline-none">
                <span className="material-symbols-outlined">person_add</span> Add Dependent
              </button>
            </div>

            <div className="flex flex-col gap-md">
              {/* Dependent 1: Enzo */}
              <div className="flex items-center justify-between p-md bg-surface-container-low rounded-lg border border-outline-variant">
                <div className="flex items-center gap-md">
                  <img 
                    alt="Dependent profile" 
                    className="w-10 h-10 rounded-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7eNLYfSev4leOX-LWY8Zz_H3ERm5GFc9DrKfJFbwaeSlD0sdFXWwK0viwQ-YCzU6ajAtBtbWqPkaz7TVF1XJAnIQuCKORc1FqvepGNS-nvIcsUZ0AUUNPFVV_HrJkdLvSfsm5nvLS7yZZqu5XMZOQK1qwtS9HDiVViLvJ73i6lRciKGM9EsJnFk5q5f3zz36pghvoJfbW5hw8OUkLJbYHumEaWExYgF5utvoytmPSkOiIO7L0Ty2jri569y7itXs4HoWV9cv51lA" 
                  />
                  <div>
                    <p className="text-body-md font-bold">Enzo Silva</p>
                    <p className="text-caption text-on-surface-variant">Son • 8 years old</p>
                  </div>
                </div>
                <div className="flex items-center gap-sm">
                  <span className="bg-secondary/10 text-secondary px-sm py-xs rounded text-caption font-bold">
                    UP TO DATE
                  </span>
                  <span className="material-symbols-outlined text-on-surface-variant cursor-pointer">
                    chevron_right
                  </span>
                </div>
              </div>

              {/* Dependent 2: Beatriz */}
              <div className="flex items-center justify-between p-md bg-surface-container-low rounded-lg border border-outline-variant">
                <div className="flex items-center gap-md">
                  <img 
                    alt="Dependent profile" 
                    className="w-10 h-10 rounded-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVv7281kvkPUUfpCrp9Cn1M_g-FmhWEipMQ8f7rmFTXFxOvG6K0gL0K7Z-A66V4biNwvUyUXhpyJfnHqCo5h7x8GA4FKip1lTAAkCKYlHKZZi1i7gnyj7BbtHpHUrRYvAc_TXDh8gy-nRndzdimaG2CDuFOLt9VYLEFhwiLqa94w7YGmYfmfUV6w_NZyaQyMoisvakLJxI5PBrVyT3LB0NzY_phdKOu0yQlPs5x1hwxq0hH69qrAScTe-ifwhKvCIoqKcAK6wF5iY" 
                  />
                  <div>
                    <p className="text-body-md font-bold">Beatriz Silva</p>
                    <p className="text-caption text-on-surface-variant">Daughter • 15 years old</p>
                  </div>
                </div>
                <div className="flex items-center gap-sm">
                  <span className="bg-tertiary/10 text-tertiary px-sm py-xs rounded text-caption font-bold">
                    1 ALERT
                  </span>
                  <span className="material-symbols-outlined text-on-surface-variant cursor-pointer">
                    chevron_right
                  </span>
                </div>
              </div>
            </div>
          </div>

        </section>

        {/* Sidebar Content (L-Grid 5) */}
        <aside className="lg:col-span-5 flex flex-col gap-lg">
          
          {/* Digital Health Card */}
          <div className="relative bg-gradient-to-br from-primary to-on-primary-fixed-variant rounded-xl p-xl text-on-primary shadow-[0_8px_24px_rgba(0,88,188,0.25)] overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-xl"></div>
            
            <div className="relative z-10 flex flex-col gap-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-title-md mb-xs">Digital Vax Card</h3>
                  <p className="text-caption opacity-80 uppercase tracking-widest">Global Health ID</p>
                </div>
                <span className="material-symbols-outlined text-[32px]">contactless</span>
              </div>

              {/* QR Code Placeholder */}
              <div className="bg-white p-sm rounded-lg self-center shadow-lg">
                <div className="w-32 h-32 bg-surface-container-highest flex items-center justify-center border-2 border-dashed border-outline">
                  <span className="material-symbols-outlined text-on-surface-variant text-[48px]">
                    qr_code_2
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-end border-t border-white/20 pt-md">
                <div>
                  <p className="text-caption opacity-80">Holder</p>
                  <p className="text-body-md font-bold uppercase">Ricardo Silva</p>
                </div>
                <div className="text-right">
                  <p className="text-caption opacity-80">Valid Thru</p>
                  <p className="text-body-md font-bold">12/2026</p>
                </div>
              </div>
            </div>
          </div>

          {/* Administrative Controls */}
          <div className="bg-surface-container-lowest rounded-xl p-xl shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
            <h2 className="text-title-md mb-lg">Account Settings</h2>
            
            <div className="flex flex-col gap-sm">
              {/* Security & Login */}
              <button className="flex items-center gap-md p-md w-full text-left hover:bg-surface-container-low transition-colors rounded-lg group outline-none">
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary">
                  security
                </span>
                <div className="flex-grow">
                  <p className="text-label-sm font-bold">Security & Login</p>
                  <p className="text-caption text-on-surface-variant">Password, 2FA, and sessions</p>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant">navigate_next</span>
              </button>

              {/* Notification Prefs */}
              <button className="flex items-center gap-md p-md w-full text-left hover:bg-surface-container-low transition-colors rounded-lg group outline-none">
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary">
                  notifications_paused
                </span>
                <div className="flex-grow">
                  <p className="text-label-sm font-bold">Notification Prefs</p>
                  <p className="text-caption text-on-surface-variant">Alerts and reminders frequency</p>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant">navigate_next</span>
              </button>

              {/* Privacy & Data */}
              <button className="flex items-center gap-md p-md w-full text-left hover:bg-surface-container-low transition-colors rounded-lg group outline-none">
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary">
                  folder_shared
                </span>
                <div className="flex-grow">
                  <p className="text-label-sm font-bold">Privacy & Data</p>
                  <p className="text-caption text-on-surface-variant">Control who sees your health info</p>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant">navigate_next</span>
              </button>

              {/* Sign Out Action */}
              <div className="pt-md mt-md border-t border-outline-variant">
                <button className="flex items-center gap-md p-md w-full text-left text-error hover:bg-error-container/20 transition-colors rounded-lg group outline-none">
                  <span className="material-symbols-outlined">logout</span>
                  <p className="text-label-sm font-bold">Sign Out</p>
                </button>
              </div>
            </div>
          </div>

        </aside>
      </div>

    </div>
  );
}