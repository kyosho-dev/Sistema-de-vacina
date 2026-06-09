// src/components/AlertsContent.tsx
import ProgressMini from "./Alertas/ProgressoMini";
import DicasDeSaude from "./Alertas/DicasDeSaude";
import AvisosCard from "./Alertas/AvisosCard";
import AvisosHead from "./Alertas/AvisosHead";
import { AtividadeRecente } from "./PainelPrincipal/AtividadeRecente/AtividadeRecente";

interface AlertasPros {
  user_id: number;
}

export function Alertas({ user_id }: AlertasPros) {
  const current_id = user_id;
  return (
    <div className="grid grid-cols-12 gap-lg max-w-1200px mx-auto w-full p-lg">
      {/* Content Area (Left/Main Column) */}
      <section className="col-span-12 lg:col-span-8 flex flex-col gap-lg">
        <AvisosHead user_id={current_id} />
        {/*Aqui deveria ficr os aviso card */}
        <AvisosCard id_user={current_id} />

        <AtividadeRecente idUser={current_id} />
      </section>

      {/* Sidebar Content (Right Column) */}
      <aside className="col-span-12 lg:col-span-4 flex flex-col gap-lg">
        {/* Health Tips Card */}
        <DicasDeSaude />

        <ProgressMini user_id={current_id} />
        {/* Location Quick Link */}
        <div className="bg-surface-container-lowest rounded-xl p-lg shadow-[0_4px_12px_rgba(0,0,0,0.06)] border border-outline-variant">
          <h3 className="text-title-md mb-md">
            Centros de Saúde proximos a você
          </h3>
          <div className="relative h-40 rounded-lg overflow-hidden mb-md border border-outline-variant">
            <img
              alt="Map of clinic locations"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhAr1KfQusU0zEPP-UPcDyiZPUMXLJo-FmT-w9visSSO5uov8lp4I5LLKINsDibaFWuZJyahrWVewN-2AFNuPyA10YyHme_t8Bmk1F2xHZJwBE8ynZQII2IOfEYSuzznD9AF7Fj2RMDYZjh5y7wMBeJGv3dyeIp5ki7ycnbJ3xsIn_p_hHQYq6KzEZ-lBka4BM_vvLGSwoG6glli25K1PyDQGR2Q3YCKQ5K2LYHKnHnVkIon2e8USaXYbE1GT__CYtAf-Z_UnZtr0"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent flex items-end p-md">
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
