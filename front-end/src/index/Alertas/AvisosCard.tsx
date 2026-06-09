import { calcularStatusVacinas } from "../../../Database/vaccinesTakenAndNeeded";

interface AvisoCardProp {
  id_user: number;
}

function AvisoCard({ id_user }: AvisoCardProp) {
  const vacinasPendentes = calcularStatusVacinas(id_user).filter(
    (vacina) => vacina.faltam > 0
  );

  return (
    <>
      {vacinasPendentes.map((vacina) => {
        const proximaDose = vacina.tomadas + 1;

        return (
          <div
            key={vacina.nomeVacina}
            className="bg-surface-container-lowest border-l-4 border-error rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.06)] p-lg flex flex-col md:flex-row gap-lg items-start md:items-center mb-md"
          >
            <div className="grow">
              <div className="flex items-center gap-sm mb-xs">
                <span className="bg-error/10 text-error px-sm py-1 rounded text-caption font-bold uppercase tracking-wider">
                  Pendente
                </span>

                <h4 className="text-title-md text-on-surface">
                  {vacina.nomeVacina}
                </h4>
              </div>

              <p className="text-body-md text-on-surface-variant">
                {vacina.necessarias === 1
                  ? `Você ainda não tomou a vacina ${vacina.nomeVacina}.`
                  : `Falta a dose ${proximaDose} de ${vacina.necessarias} da vacina ${vacina.nomeVacina}.`}
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
        );
      })}
    </>
  );
}

export default AvisoCard;