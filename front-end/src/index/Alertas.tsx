// src/components/AlertsContent.tsx
import React from "react";

export function Alertas() {
  return (
    <div className="grid grid-cols-1 grid-cols-12 gap-lg max-w-[1200px] mx-auto w-full p-lg">
      {/* Content Area (Left/Main Column) */}
      <section className="col-span-12 lg:col-span-8 flex flex-col gap-lg">
        <div className="flex items-center justify-between mb-xs">
          <h3 className="text-title-md flex items-center gap-sm">
            <span
              className="material-symbols-outlined text-error"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              warning
            </span>
            Avisos
          </h3>
          <span className="bg-error-container text-on-error-container px-md py-xs rounded-full text-caption font-bold">
            2 Urgentes
          </span>
        </div>

        {/* Alert Card 1: Tetanus */}
        <div className="bg-surface-container-lowest border-l-4 border-error rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.06)] p-lg flex flex-col md:flex-row gap-lg items-start md:items-center">
          <div className="flex-grow">
            <div className="flex items-center gap-sm mb-xs">
              <span className="bg-error/10 text-error px-sm py-1 rounded text-caption font-bold uppercase tracking-wider">
                Vencido
              </span>
              <h4 className="text-title-md text-on-surface">Reforço Anti-Tétano</h4>
            </div>
            <p className="text-body-md text-on-surface-variant">
              Sua última vacina Anti-Tétano foi a 11 anos atrás. Uma nova dose é recomendada a cada 10 anos para manter sua imunidade.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-md w-full md:w-auto">
            <button className="bg-primary text-on-primary text-label-sm px-lg py-md rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap">
              Agendar agora
            </button>
            <button className="bg-primary-fixed text-on-primary-fixed-variant text-label-sm px-lg py-md rounded-lg hover:bg-primary-fixed-dim transition-colors whitespace-nowrap">
              Ver locais
            </button>
          </div>
        </div>

        {/* Alert Card 2: Dengue */}
        <div className="bg-surface-container-lowest border-l-4 border-tertiary rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.06)] p-lg flex flex-col md:flex-row gap-lg items-start md:items-center">
          <div className="flex-grow">
            <div className="flex items-center gap-sm mb-xs">
              <span className="bg-tertiary-container/10 text-tertiary px-sm py-1 rounded text-caption font-bold uppercase tracking-wider">
                A vencer
              </span>
              <h4 className="text-title-md text-on-surface">Dengue (Dose 2)</h4>
            </div>
            <p className="text-body-md text-on-surface-variant">
              Sua segunda dose deve ser tomada em até 5 dias. Deixar sua carteira sempre completa garante uma maior imunidade.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-md w-full md:w-auto">
            <button className="bg-primary text-on-primary text-label-sm px-lg py-md rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap">
              Agendar agora
            </button>
            <button className="bg-primary-fixed text-on-primary-fixed-variant text-label-sm px-lg py-md rounded-lg hover:bg-primary-fixed-dim transition-colors whitespace-nowrap">
              Ver locais
            </button>
          </div>
        </div>

        {/* Notification History */}
        <div className="mt-xl">
          <h3 className="text-title-md mb-md">Histórico Recente</h3>
          <div className="bg-surface-container-lowest rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.06)] overflow-hidden">
            <div className="divide-y divide-outline-variant">
              {/* History Item 1 */}
              <div className="p-md flex gap-md hover:bg-surface-container-low transition-colors group cursor-pointer">
                <div className="h-10 w-10 rounded-full bg-secondary-container flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-on-secondary-container">
                    check_circle
                  </span>
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <p className="text-label-sm text-on-surface">
                      Vacinação verificada
                    </p>
                    <span className="text-caption text-on-surface-variant">
                      1 dia atrás
                    </span>
                  </div>
                  <p className="text-body-md text-on-surface-variant">
                    Sua vacinação para Influenza no Centro de Saúde Maria Goretti/Ipê foi atualizada com sucesso.
                  </p>
                </div>
              </div>

              {/* History Item 2 */}
              <div className="p-md flex gap-md hover:bg-surface-container-low transition-colors group cursor-pointer">
                <div className="h-10 w-10 rounded-full bg-primary-fixed flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-primary">
                    info
                  </span>
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <p className="text-label-sm text-on-surface">
                      Informações para viajantes
                    </p>
                    <span className="text-caption text-on-surface-variant">
                      4 dias atrás
                    </span>
                  </div>
                  <p className="text-body-md text-on-surface-variant">
                    Os requisitos da vacinação contra Febre Amarela para visitantes na América do Sul foram atualizados.
                  </p>
                </div>
              </div>

              {/* History Item 3 */}
              <div className="p-md flex gap-md hover:bg-surface-container-low transition-colors group cursor-pointer">
                <div className="h-10 w-10 rounded-full bg-surface-container-highest flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-on-surface-variant">
                    security
                  </span>
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <p className="text-label-sm text-on-surface">
                      Alerta de segurança: Novo dispositivo conectado
                    </p>
                    <span className="text-caption text-on-surface-variant">
                      28 de Maio
                    </span>
                  </div>
                  <p className="text-body-md text-on-surface-variant">
                    Novo login detectado em MacBook Pro em Belo Horizonte, BH.
                  </p>
                </div>
              </div>
            </div>
            <button className="w-full py-md text-primary text-label-sm hover:bg-surface-container-low transition-colors border-t border-outline-variant outline-none">
              Ver todas as notificações
            </button>
          </div>
        </div>
      </section>

      {/* Sidebar Content (Right Column) */}
      <aside className="col-span-12 lg:col-span-4 flex flex-col gap-lg">
        {/* Health Tips Card */}
        <div className="bg-primary-container text-on-primary-container rounded-xl p-lg shadow-lg relative overflow-hidden group">
          <div className="relative z-10">
            <h3 className="text-title-md mb-md flex items-center gap-sm">
              <span className="material-symbols-outlined">lightbulb</span>
              Dica de Saúde do Dia
            </h3>
            <p className="text-body-md opacity-90 mb-lg">
              Ficar hidratado depois de tomar uma vacina ajuda a reduzir efeitos colaterais como dores de cabeça e fadiga. Tente tomar 8 copos de água no dia que tomar uma vacina!
            </p>
            <img
              alt="Fresh vegetables and water"
              className="w-full h-32 object-cover rounded-lg mb-md"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEFZNUeQHjhb4NioigdFlN5mEPB3_A7XTdizQWPCLi36ApxQS-NTqtP_7jT8W1o43Lck-qC8CVmcdbHIubObNozThow2QuPKFk9JbaMMlfofWwTwFeOaZ0dOUHH1p88Ch69lQje64SYb1WwI20_PDiRpIVh5ITg26onFs0uoX46QAOf3wJ7Ob-SNPm5K089VYfp7iyxIvb6bbzROhHekiLYUH2CG1TGPhuahRfjRyWO49HH0he9D2gYmgeS0wOauba2--xI6TmUas"
            />
            <a
              className="text-on-primary-container underline text-label-sm"
              href="#"
            >
              Leia mais sobre dicas saudáveis
            </a>
          </div>
          {/* Abstract background pattern */}
          <div className="absolute -right-8 -bottom-8 opacity-10">
            <span
              className="material-symbols-outlined !text-9xl"
              style={{ fontVariationSettings: "'wght' 700" }}
            >
              healing
            </span>
          </div>
        </div>

        {/* Vaccination Progress Card */}
        <div className="bg-surface-container-lowest rounded-xl p-lg shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
          <h3 className="text-title-md mb-md">Seu progresso de imunização</h3>
          <div className="flex items-end gap-md mb-sm">
            <span className="text-4xl font-bold text-secondary">84%</span>
            <span className="text-caption text-on-surface-variant pb-1">
              Ótima cobertura
            </span>
          </div>
          <div className="w-full bg-surface-container-highest h-2 rounded-full mb-lg overflow-hidden">
            <div className="bg-secondary h-full" style={{ width: "84%" }}></div>
          </div>
          <div className="space-y-md">
            <div className="flex items-center justify-between">
              <span className="text-label-sm text-on-surface-variant">
                Vacinas essenciais
              </span>
              <span
                className="material-symbols-outlined text-secondary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check_circle
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-label-sm text-on-surface-variant">
                Doses sazonais
              </span>
              <span className="material-symbols-outlined text-tertiary">
                pending
              </span>
            </div>
          </div>
        </div>

        {/* Location Quick Link */}
        <div className="bg-surface-container-lowest rounded-xl p-lg shadow-[0_4px_12px_rgba(0,0,0,0.06)] border border-outline-variant">
          <h3 className="text-title-md mb-md">Centros de Saúde proximos a você</h3>
          <div className="relative h-40 rounded-lg overflow-hidden mb-md border border-outline-variant">
            <img
              alt="Map of clinic locations"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhAr1KfQusU0zEPP-UPcDyiZPUMXLJo-FmT-w9visSSO5uov8lp4I5LLKINsDibaFWuZJyahrWVewN-2AFNuPyA10YyHme_t8Bmk1F2xHZJwBE8ynZQII2IOfEYSuzznD9AF7Fj2RMDYZjh5y7wMBeJGv3dyeIp5ki7ycnbJ3xsIn_p_hHQYq6KzEZ-lBka4BM_vvLGSwoG6glli25K1PyDQGR2Q3YCKQ5K2LYHKnHnVkIon2e8USaXYbE1GT__CYtAf-Z_UnZtr0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-md">
              <p className="text-white text-caption font-bold">
                3 Centros dentro de 5km
              </p>
            </div>
          </div>
          <button className="w-full border-2 border-primary text-primary text-label-sm py-md rounded-lg hover:bg-primary/5 transition-colors outline-none">
            Encontre um Posto
          </button>
        </div>
      </aside>
    </div>
  );
}
