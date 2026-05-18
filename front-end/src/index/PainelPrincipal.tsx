import React from 'react';

export function PainelPrincipal() {
  return (
      <section className="max-w-[1200px] mx-auto flex flex-col gap-lg">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-lg">
          
          {/* Overall Status Card */}
          <div className="md:col-span-8 bg-surface card-shadow rounded-xl p-lg flex flex-col justify-between border-l-4 border-secondary min-h-[240px]">
            <div className="flex justify-between items-start">
              <div>
                <span className="px-sm py-xs bg-secondary-container text-on-secondary-container rounded-full font-label-sm text-label-sm">Em dia</span>
                <h3 className="font-headline-lg text-headline-lg mt-sm">Status de Vacinação</h3>
              </div>
              <div className="text-right">
                <p className="font-display-lg text-display-lg text-secondary">90%</p>
                <p className="font-label-sm text-label-sm text-on-surface-variant">Perfil completo</p>
              </div>
            </div>
            <div className="w-full bg-surface-container-highest h-3 rounded-full overflow-hidden mt-lg">
              <div className="bg-secondary h-full rounded-full" style={{ width: '90%' }}></div>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant mt-md">
              Você está protegido contra a maioria dos riscos clínicos. Conclua sua dose restante para alcançar 100%.
            </p>
          </div>

          {/* Next Scheduled Card */}
          <div className="md:col-span-4 bg-primary text-on-primary card-shadow rounded-xl p-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-sm opacity-90">
                <span className="material-symbols-outlined" data-icon="event">event</span>
                <span className="font-label-sm text-label-sm">Próxima Agendada</span>
              </div>
              <h3 className="font-title-md text-title-md mt-md">Influenza (Flu Shot)</h3>
              <p className="font-body-md text-body-md opacity-80">October 15, 2024</p>
            </div>
            <button className="mt-xl w-full py-sm bg-on-primary text-primary rounded-lg font-bold font-label-sm text-label-sm hover:bg-primary-fixed transition-colors">
              Mostar detalhes
            </button>
          </div>

          {/* Quick Actions Grid */}
          <div className="md:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
            <div className="bg-surface card-shadow rounded-xl p-md flex items-center gap-md hover:bg-surface-container-low cursor-pointer transition-colors border border-outline-variant">
              <div className="w-12 h-12 rounded-lg bg-primary-container flex items-center justify-center text-on-primary-container"><span className="material-symbols-outlined" data-icon="qr_code_2">qr_code_2</span></div>
              <div>
                <p className="font-title-md text-label-sm font-bold">Ver QR Code</p>
                <p className="font-caption text-caption text-on-surface-variant">Verificação rapida</p>
              </div>
            </div>
            <div className="bg-surface card-shadow rounded-xl p-md flex items-center gap-md hover:bg-surface-container-low cursor-pointer transition-colors border border-outline-variant">
              <div className="w-12 h-12 rounded-lg bg-tertiary-container flex items-center justify-center text-on-tertiary-container"><span className="material-symbols-outlined" data-icon="add_task">add_task</span></div>
              <div>
                <p className="font-title-md text-label-sm font-bold">Agendar</p>
                <p className="font-caption text-caption text-on-surface-variant">Nova dose ou reforço</p>
              </div>
            </div>
            <div className="bg-surface card-shadow rounded-xl p-md flex items-center gap-md hover:bg-surface-container-low cursor-pointer transition-colors border border-outline-variant">
              <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary"><span className="material-symbols-outlined" data-icon="download">download</span></div>
              <div>
                <p className="font-title-md text-label-sm font-bold">Download PDF</p>
                <p className="font-caption text-caption text-on-surface-variant">Certificado oficial</p>
              </div>
            </div>
            <div className="bg-surface card-shadow rounded-xl p-md flex items-center gap-md hover:bg-surface-container-low cursor-pointer transition-colors border border-outline-variant">
              <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary"><span className="material-symbols-outlined" data-icon="share">share</span></div>
              <div>
                <p className="font-title-md text-label-sm font-bold">Compartilhar registro</p>
                <p className="font-caption text-caption text-on-surface-variant">Enviar ao médico</p>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="md:col-span-7 bg-surface card-shadow rounded-xl overflow-hidden flex flex-col border border-outline-variant">
            <div className="p-lg border-b border-outline-variant flex justify-between items-center">
              <h3 className="font-title-md text-title-md">Atividade Recente</h3>
              <button className="text-primary font-label-sm text-label-sm hover:underline">Ver Tudo</button>
            </div>
            <div className="flex flex-col">
              {/* Activity Item 1 */}
              <div className="p-lg flex items-center justify-between border-b border-outline-variant hover:bg-surface-container-lowest transition-colors">
                <div className="flex items-center gap-md">
                  <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container"><span className="material-symbols-outlined" data-icon="check_circle">check_circle</span></div>
                  <div>
                    <p className="font-body-md text-body-md font-bold">COVID-19 Dose de reforço</p>
                    <p className="font-caption text-caption text-on-surface-variant">Aplicada por Dr. Sarah Miller • City Clinic</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-label-sm text-label-sm font-bold">Aug 12, 2024</p>
                  <p className="font-caption text-caption text-secondary">Vereficado</p>
                </div>
              </div>

              {/* Activity Item 2 */}
              <div className="p-lg flex items-center justify-between border-b border-outline-variant hover:bg-surface-container-lowest transition-colors">
                <div className="flex items-center gap-md">
                  <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container"><span className="material-symbols-outlined" data-icon="check_circle">check_circle</span></div>
                  <div>
                    <p className="font-body-md text-body-md font-bold">Febre amarela</p>
                    <p className="font-caption text-caption text-on-surface-variant">Certificação de Viagem Internacional</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-label-sm text-label-sm font-bold">Jan 05, 2024</p>
                  <p className="font-caption text-caption text-secondary">Verificado</p>
                </div>
              </div>
            </div>
          </div>

          {/* Clinical Reminders */}
          <div className="md:col-span-5 flex flex-col gap-lg">
            <div className="bg-surface-container-high card-shadow rounded-xl p-lg relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="font-title-md text-title-md text-on-surface font-bold">Dica de Saúde</h4>
                <p className="font-body-md text-body-md text-on-surface-variant mt-sm">
                  Manter sua carteira digital atualizada garante um check-in mais rápido nas clínicas..
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

  );
}