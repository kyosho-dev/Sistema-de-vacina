// src/pages/History.tsx
import React from 'react';

export function Historico() {
  return (
    <section className="p-lg max-w-[1200px] mx-auto w-full flex-grow">
      {/* Page Header Actions */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-md mb-xl">
        <div>
          <h1 className="text-headline-lg text-on-surface">Medical Immunization Records</h1>
          <p className="text-body-md text-on-surface-variant mt-xs">
            View and manage your verified vaccination data securely.
          </p>
        </div>
        <button className="flex items-center gap-sm bg-primary text-on-primary px-lg py-md rounded-lg text-label-sm hover:opacity-90 transition-opacity card-shadow">
          <span className="material-symbols-outlined">download</span>
          Download Full Certificate (PDF)
        </button>
      </div>

      {/* Search and Filters Bar */}
      <div className="bg-surface-container-lowest rounded-xl p-md mb-lg flex flex-wrap gap-md items-center card-shadow border border-outline-variant">
        <div className="flex-grow min-w-[240px] relative">
          <span className="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-on-surface-variant">
            filter_list
          </span>
          <input
            className="w-full pl-xl pr-md py-sm rounded-lg border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary bg-surface outline-none"
            placeholder="Filter by vaccine name or batch..."
            type="text"
          />
        </div>
        <div className="flex gap-sm">
          <select className="rounded-lg border border-outline-variant bg-surface text-label-sm py-sm px-md focus:border-primary focus:ring-primary outline-none">
            <option>All Years</option>
            <option>2024</option>
            <option>2023</option>
            <option>2022</option>
            <option>Prior</option>
          </select>
          <select className="rounded-lg border border-outline-variant bg-surface text-label-sm py-sm px-md focus:border-primary focus:ring-primary outline-none">
            <option>All Types</option>
            <option>Viral</option>
            <option>Bacterial</option>
            <option>mRNA</option>
          </select>
        </div>
        <button className="text-primary text-label-sm px-md hover:underline transition-all">
          Clear Filters
        </button>
      </div>

      {/* Bento-style Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg">
        
        {/* Vaccine Card: COVID-19 (Active/Highlighted) */}
        <div className="lg:col-span-2 bg-surface-container-lowest rounded-xl card-shadow overflow-hidden border-l-4 border-primary relative">
          <div className="p-lg">
            <div className="flex justify-between items-start mb-md">
              <div className="flex items-center gap-md">
                <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center">
                  <span 
                    className="material-symbols-outlined text-on-primary-fixed-variant"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    coronavirus
                  </span>
                </div>
                <div>
                  <h3 className="text-title-md text-on-surface">COVID-19</h3>
                  <span className="bg-primary-container text-on-primary-container px-sm py-xs rounded-full text-caption">
                    Complete Schedule
                  </span>
                </div>
              </div>
              <span className="text-label-sm text-on-surface-variant">Last Update: Oct 2023</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-md mt-lg">
              <div className="p-md bg-surface-container-low rounded-lg border border-outline-variant">
                <p className="text-caption text-on-surface-variant">Dose 1</p>
                <p className="text-label-sm font-bold text-on-surface">12/03/2021</p>
                <p className="text-caption text-secondary">Verified</p>
              </div>
              <div className="p-md bg-surface-container-low rounded-lg border border-outline-variant">
                <p className="text-caption text-on-surface-variant">Dose 2</p>
                <p className="text-label-sm font-bold text-on-surface">15/05/2021</p>
                <p className="text-caption text-secondary">Verified</p>
              </div>
              <div className="p-md bg-primary-container/10 rounded-lg border border-primary/30">
                <p className="text-caption text-primary">Booster (Reforço)</p>
                <p className="text-label-sm font-bold text-on-surface">10/10/2023</p>
                <p className="text-caption text-secondary">Verified</p>
              </div>
            </div>

            <div className="mt-lg flex gap-md">
              <button className="text-primary text-label-sm flex items-center gap-xs hover:bg-primary/5 px-sm py-xs rounded transition-colors">
                <span className="material-symbols-outlined text-[18px]">visibility</span> View Details
              </button>
              <button className="text-primary text-label-sm flex items-center gap-xs hover:bg-primary/5 px-sm py-xs rounded transition-colors">
                <span className="material-symbols-outlined text-[18px]">share</span> Share QR Code
              </button>
            </div>
          </div>
        </div>

        {/* Vaccine Card: Febre Amarela */}
        <div className="bg-surface-container-lowest rounded-xl card-shadow border-l-4 border-secondary overflow-hidden">
          <div className="p-lg">
            <div className="flex items-center gap-md mb-md">
              <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center">
                <span 
                  className="material-symbols-outlined text-on-secondary-container"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  vaccines
                </span>
              </div>
              <div>
                <h3 className="text-title-md text-on-surface">Febre Amarela</h3>
                <p className="text-caption text-on-surface-variant">Single Dose Lifetime</p>
              </div>
            </div>
            <div className="mt-xl py-md border-y border-outline-variant">
              <div className="flex justify-between items-center">
                <span className="text-label-sm text-on-surface-variant">Applied Date</span>
                <span className="text-label-sm font-bold">22/01/2018</span>
              </div>
              <div className="flex justify-between items-center mt-sm">
                <span className="text-label-sm text-on-surface-variant">Batch No.</span>
                <span className="text-label-sm font-bold">FA-9923-X</span>
              </div>
            </div>
            <div className="mt-md">
              <div className="flex items-center gap-sm text-secondary">
                <span className="material-symbols-outlined">check_circle</span>
                <span className="text-caption">Permanently Valid</span>
              </div>
            </div>
          </div>
        </div>

        {/* Vaccine Card: Hepatite B */}
        <div className="bg-surface-container-lowest rounded-xl card-shadow border-l-4 border-tertiary overflow-hidden">
          <div className="p-lg">
            <div className="flex items-center gap-md mb-md">
              <div className="w-12 h-12 rounded-full bg-tertiary-fixed flex items-center justify-center">
                <span 
                  className="material-symbols-outlined text-on-tertiary-fixed"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  medical_services
                </span>
              </div>
              <div>
                <h3 className="text-title-md text-on-surface">Hepatite B</h3>
                <p className="text-caption text-on-surface-variant">3 Doses Required</p>
              </div>
            </div>
            <div className="mt-lg space-y-sm">
              <div className="flex items-center justify-between">
                <span className="text-caption">Dose 1: 01/2015</span>
                <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-caption">Dose 2: 03/2015</span>
                <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-caption">Dose 3: 07/2015</span>
                <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
              </div>
            </div>
            <div className="mt-xl h-1 bg-surface-container rounded-full overflow-hidden">
              <div className="bg-secondary h-full w-full"></div>
            </div>
            <p className="mt-xs text-caption text-on-surface-variant text-right">100% Complete</p>
          </div>
        </div>

        {/* QR Code Spotlight Card */}
        <div className="lg:col-span-2 bg-on-primary-fixed-variant text-on-primary-container rounded-xl card-shadow p-lg flex flex-col md:flex-row items-center gap-xl relative overflow-hidden">
          {/* Decorative pattern */}
          <div className="absolute right-0 top-0 w-64 h-64 bg-primary-container/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
          
          <div className="flex-shrink-0 bg-white p-md rounded-xl">
            <img 
              alt="Verification QR Code" 
              className="w-32 h-32"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBS2sqqTnX2_pe6xyKegkm--Ac2ge9K2lBxrjciYoPAzacyJuRyRfPl7JFBEV5u9d9falXe6DFZHC2ne-ThAVC-JZrvmhfBNR57pOvwWu4APm3vpDJkouJVI4XJfkh0-UsDEXZBx0tdQZS37xt2wn2WiHfA80LYGSsouaXLdqAts5u8W0vZ_Hk3pZB_zCIgaFaVzqGc-tiLacdPLKXj1dimtfAtlDf_OfsOPG5pmf4gGbXgbccs-9WI2L4bxnD-YH8zdnadOUbMlCA" 
            />
          </div>
          <div className="relative z-10 text-center md:text-left">
            <h4 className="text-title-md mb-xs">Fast Verification QR</h4>
            <p className="text-body-md opacity-90 mb-md max-w-md">
              Present this code at international borders or healthcare facilities to instantly verify your full vaccination history securely.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-md">
              <button className="bg-surface-container-lowest text-primary px-md py-sm rounded-lg text-label-sm flex items-center gap-sm">
                <span className="material-symbols-outlined">print</span> Print Card
              </button>
              <button className="border border-on-primary-container text-on-primary-container px-md py-sm rounded-lg text-label-sm flex items-center gap-sm">
                <span className="material-symbols-outlined">smartphone</span> Save to Phone
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Missing Vaccine Promo / Alert Section */}
      <div className="mt-xl bg-surface-container-high rounded-xl p-lg border border-outline-variant flex items-center justify-between">
        <div className="flex items-center gap-lg">
          <span className="material-symbols-outlined text-tertiary text-[40px]">info</span>
          <div>
            <h4 className="text-title-md text-on-surface">Pending Flu Shot (Gripe)</h4>
            <p className="text-body-md text-on-surface-variant">
              The 2024 seasonal campaign is now active. Schedule your dose today.
            </p>
          </div>
        </div>
        <button className="bg-tertiary-container text-on-tertiary-container px-lg py-md rounded-lg text-label-sm hover:opacity-90">
          Find Nearest Clinic
        </button>
      </div>
    </section>
  );
}





        
        



