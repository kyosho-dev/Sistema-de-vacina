import { vaccines } from "../../../../Database/vaccines";
import { userVaccines } from "../../../../Database/userVaccines";
interface AtividadeRecenteProps {
  idUser: number;
}

export function AtividadeRecente({ idUser }: AtividadeRecenteProps) {
  const recentVaccines = userVaccines
    .filter((uv) => uv.userId === idUser)
    .filter(
      (vaccine, index, self) =>
        index ===
        self.findIndex(
          (v) =>
            v.vaccineId === vaccine.vaccineId && v.userId === vaccine.userId,
        ),
    )
    .sort(
      (a, b) => new Date(b.doseDate).getTime() - new Date(a.doseDate).getTime(),
    )
    .slice(0, 2);

  return (
    <div className="md:col-span-7 bg-surface card-shadow rounded-xl overflow-hidden flex flex-col border border-outline-variant">
      <div className="p-lg border-b border-outline-variant flex justify-between items-center">
        <h3 className="font-title-md text-title-md">Atividade Recente</h3>

        <a href="/historico" className="text-primary font-label-sm text-label-sm hover:underline">
          Ver Tudo
        </a>
      </div>

      <div className="flex flex-col">
        {recentVaccines.map((vaccine) => {
          const vaccineInfo = vaccines.find((v) => v.id === vaccine.vaccineId);

          if (!vaccineInfo) return null;

          return (
            <div
              key={`${vaccine.userId}-${vaccine.vaccineId}`}
              className="p-lg flex items-center justify-between border-b border-outline-variant hover:bg-surface-container-lowest transition-colors"
            >
              <div className="flex items-center gap-md">
                <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                  <span className="material-symbols-outlined">
                    check_circle
                  </span>
                </div>

                <div>
                  <p className="font-body-md text-body-md font-bold">
                    {vaccineInfo.name}
                  </p>

                  <p className="font-caption text-caption text-on-surface-variant">
                    Dose aplicada
                  </p>
                </div>
              </div>

              <div className="text-right">
                <p className="font-label-sm text-label-sm font-bold">
                  {new Date(vaccine.doseDate).toLocaleDateString("pt-BR")}
                </p>

                <p className="font-caption text-caption text-secondary">
                  Verificado
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
