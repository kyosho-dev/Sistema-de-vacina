// src/pages/History.tsx
import SearchBar from "./SearchBar";

interface historicoProps{
  user_id : number;
}

export function Historico({user_id}: historicoProps) {
  const currentUser = user_id
  return (
    <section className="p-lg max-w-1200px mx-auto w-full grow">
      {/* Page Header Actions */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-md mb-xl">
        <div>
          <h1 className="text-headline-lg text-on-surface">
            Registros de Imunização Médica
          </h1>
          <p className="text-body-md text-on-surface-variant mt-xs">
            Visualize e gerencie seus dados de vacinação verificados com
            segurança.
          </p>
        </div>
        <button className="flex items-center gap-sm bg-primary text-on-primary px-lg py-md rounded-lg text-label-sm hover:opacity-90 transition-opacity card-shadow">
          <span className="material-symbols-outlined">download</span>
          Baixar certificado (PDF)
        </button>
      </div>

      {/* Missing Vaccine Promo / Alert Section */}
      <div className="mt-xl bg-surface-container-high rounded-xl p-lg border border-outline-variant flex items-center justify-between mb-4">
        <div className="flex items-center gap-lg">
          <span className="material-symbols-outlined text-tertiary text-[40px]">
            info
          </span>
          <div>
            <h4 className="text-title-md text-on-surface">
              Pendente vacina contra gripe (Gripe)
            </h4>
            <p className="text-body-md text-on-surface-variant">
              A campanha sazonal de 2026 já está ativa. Agende sua dose hoje.
            </p>
          </div>
        </div>
        <a
          href="/buscarVacinas"
          className="bg-tertiary-container text-on-tertiary-container px-lg py-md rounded-lg text-label-sm hover:opacity-90 inline-block"
        >
          Encontrar clínica mais próxima
        </a>
      </div>
      {/* Search and Filters Bar */}
      <SearchBar user_id={currentUser}/>
    </section>
  );
}
