import React from 'react';

export function BuscarVacinas() {
  return (
    <div className="flex-grow p-lg max-w-[1200px] mx-auto w-full">
      <div className="grid grid-cols-12 gap-lg h-full">
        {/* Left Panel: Search Results & Info */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-lg overflow-y-auto max-h-[calc(100vh-140px)] hide-scrollbar">
          
          {/* Selected Vaccine Card */}
          <section className="bg-surface-container-lowest rounded-xl p-lg shadow-[0_4px_12px_rgba(0,0,0,0.06)] border-l-4 border-primary">
            <div className="flex justify-between items-start mb-md">
              <div>
                <span className="bg-primary-fixed text-on-primary-fixed px-sm py-xs rounded-lg font-label-sm text-label-sm">
                  Vacina Selecionada
                </span>
                <h2 className="font-title-md text-title-md mt-sm">
                  HPV (Papilomavírus Humano)
                </h2>
              </div>
              <span className="material-symbols-outlined text-primary">info</span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant mb-lg">
              Protege contra os tipos mais comuns de HPV que podem causar
              câncer do colo do útero, vulva, vagina e ânus, além de verrugas
              genitais.
            </p>
            <div className="space-y-sm">
              <div className="flex items-center gap-sm">
                <span className="material-symbols-outlined text-secondary text-[20px]">
                  check_circle
                </span>
                <span className="font-body-md text-body-md text-on-surface">
                  Esquema: 2 a 3 doses
                </span>
              </div>
              <div className="flex items-center gap-sm">
                <span className="material-symbols-outlined text-primary text-[20px]">
                  calendar_today
                </span>
                <span className="font-body-md text-body-md text-on-surface">
                  Recomendado: 9 a 45 anos
                </span>
              </div>
            </div>
          </section>

          {/* Nearby Hospitals List */}
          <section className="flex flex-col gap-md">
            <h3 className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
              Hospitais e Clínicas Próximos
            </h3>

            {/* Hospital Card 1 */}
            <div className="bg-surface-container-lowest rounded-xl p-md shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:bg-surface-container-low transition-colors cursor-pointer border border-transparent hover:border-primary-fixed">
              <div className="flex gap-md">
                <div className="bg-secondary-container rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-on-secondary-container">
                    local_hospital
                  </span>
                </div>
                <div className="flex-grow">
                  <h4 className="font-body-lg text-body-lg font-semibold">
                    Hospital Sírio-Libanês
                  </h4>
                  <p className="font-caption text-caption text-on-surface-variant">
                    Rua Dona Adma Jafet, 91 - Bela Vista
                  </p>
                  <div className="flex items-center gap-sm mt-xs">
                    <span className="font-label-sm text-label-sm text-secondary">
                      Aberto agora
                    </span>
                    <span className="text-outline-variant">•</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      0.8 km
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hospital Card 2 */}
            <div className="bg-surface-container-lowest rounded-xl p-md shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:bg-surface-container-low transition-colors cursor-pointer border border-transparent">
              <div className="flex gap-md">
                <div className="bg-primary-fixed rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-on-primary-fixed">
                    vaccines
                  </span>
                </div>
                <div className="flex-grow">
                  <h4 className="font-body-lg text-body-lg font-semibold">
                    Clínica de Vacinação Imune
                  </h4>
                  <p className="font-caption text-caption text-on-surface-variant">
                    Av. Paulista, 1200 - Conj 42
                  </p>
                  <div className="flex items-center gap-sm mt-xs">
                    <span className="font-label-sm text-label-sm text-secondary">
                      Aberto agora
                    </span>
                    <span className="text-outline-variant">•</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      1.2 km
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hospital Card 3 */}
            <div className="bg-surface-container-lowest rounded-xl p-md shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:bg-surface-container-low transition-colors cursor-pointer border border-transparent">
              <div className="flex gap-md">
                <div className="bg-tertiary-fixed rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-on-tertiary-fixed">
                    medical_services
                  </span>
                </div>
                <div className="flex-grow">
                  <h4 className="font-body-lg text-body-lg font-semibold">
                    Hospital Santa Catarina
                  </h4>
                  <p className="font-caption text-caption text-on-surface-variant">
                    Av. Paulista, 200 - Bela Vista
                  </p>
                  <div className="flex items-center gap-sm mt-xs">
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      Fecha em 2h
                    </span>
                    <span className="text-outline-variant">•</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      1.5 km
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <button className="w-full bg-surface-container-highest text-on-surface py-md rounded-xl font-label-sm text-label-sm hover:bg-surface-variant transition-colors border border-outline-variant">
            Ver mais resultados
          </button>
        </div>

        {/* Right Panel: Interactive Map Area */}
        <div className="col-span-12 lg:col-span-8 flex flex-col gap-lg h-full">
          <div className="relative w-full h-[500px] lg:h-full min-h-[400px] bg-surface-container-low rounded-2xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.1)] border border-outline-variant">
            
            {/* Simulated Map Interface */}
            <img
              alt="Map View"
              className="w-full h-full object-cover opacity-60 mix-blend-multiply"
              data-alt="A high-quality top-down satellite view of a modern urban city grid with clean streets and organized architectural blocks. The image is stylized with a professional cartography aesthetic, featuring subtle blue and grey tones to match a medical UI. Translucent markers indicating hospitals are overlaid, creating a sense of precision and clinical data visualization. The lighting is even and clear."
              data-location="Sao Paulo"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTF4H9GC156D6w9Lx8WfAbaDnc_EKjXTd2vWKYsq2zn-1811DIN-kVjyFS3fDaXk9DxDbd2nlTl4C-BMxgbYgtWGOLHOKlB59HAJ_kGscwaI9l27h4Sfk8UiVIcZCTgnS-HhdwIWlJGmy5lxLECP0PQ2c67iZO9hnC15Hh1LyG6Kno-7r9PGNx4ka_kUhr7Yt-wAQj6lFHolIPXgFNidQzfifSkvUCvjgKeifxAi7ljHtmh7PVWvEyehpo8PR6HLmqU6LpQLRMkJU"
            />

            {/* Map Overlay UI */}
            <div className="absolute inset-0 pointer-events-none p-lg">
              <div className="flex flex-col h-full justify-between">
                <div className="flex justify-end gap-sm pointer-events-auto">
                  <button className="bg-surface rounded-lg p-sm shadow-md border border-outline-variant">
                    <span className="material-symbols-outlined">my_location</span>
                  </button>
                  <button className="bg-surface rounded-lg p-sm shadow-md border border-outline-variant">
                    <span className="material-symbols-outlined">layers</span>
                  </button>
                </div>

                <div className="flex flex-col gap-sm items-center justify-center h-full">
                  {/* Map Pin 1 */}
                  <div className="absolute top-1/4 left-1/3 flex flex-col items-center pointer-events-auto cursor-pointer group">
                    <div className="bg-primary text-on-primary p-xs px-md rounded-full shadow-lg text-label-sm font-label-sm mb-xs opacity-0 group-hover:opacity-100 transition-opacity">
                      Sírio-Libanês
                    </div>
                    <span
                      className="material-symbols-outlined text-primary text-[40px] drop-shadow-lg"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      location_on
                    </span>
                  </div>

                  {/* Map Pin 2 */}
                  <div className="absolute bottom-1/3 right-1/4 flex flex-col items-center pointer-events-auto cursor-pointer group">
                    <div className="bg-secondary text-on-secondary p-xs px-md rounded-full shadow-lg text-label-sm font-label-sm mb-xs opacity-0 group-hover:opacity-100 transition-opacity">
                      Clínica Imune
                    </div>
                    <span
                      className="material-symbols-outlined text-secondary text-[40px] drop-shadow-lg"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      location_on
                    </span>
                  </div>
                </div>

                <div className="flex justify-center pointer-events-auto">
                  <div className="bg-surface p-sm px-lg rounded-full shadow-lg border border-outline-variant flex items-center gap-md">
                    <span className="font-label-sm text-label-sm text-on-surface">
                      Mostrando 12 clínicas próximas a você
                    </span>
                    <div className="h-4 w-px bg-outline-variant"></div>
                    <button className="text-primary font-bold text-label-sm">
                      Refinar Busca
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}