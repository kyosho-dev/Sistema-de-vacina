import { useMemo } from "react";
import { calcularStatusVacinas } from "../../../Database/vaccinesTakenAndNeeded";

interface ProgressMiniProps {
  user_id: number;
}

function ProgressMini({ user_id }: ProgressMiniProps) {
  const idUsuarioLogado = user_id;

  //Busca a lista com o status de todas as vacinas obrigatórias do usuário
  const listaVacinasUsuario = useMemo(() => {
    return calcularStatusVacinas(idUsuarioLogado);
  }, [idUsuarioLogado]);

  //Aqui fazemos a média: somamos todas as porcentagens e dividimos pelo total de vacinas
  const progress = useMemo(() => {
    //Se o usuário não precisar de nenhuma vacina, de acordo com a sua idade, o progresso dele é 100%
    if (listaVacinasUsuario.length === 0) return 100;

    //Soma a porcentagem de cada vacina da lista
    const somaPorcentagens = listaVacinasUsuario.reduce(
      (acumulador, vacina) => {
        return acumulador + vacina.porcentagem;
      },
      0,
    );

    //Arredonda o número da porcentagem para um número inteiro
    return Math.round(somaPorcentagens / listaVacinasUsuario.length);

    //Divide a soma pelo número de vacinas para ter o progresso geral da carteira
    return somaPorcentagens / listaVacinasUsuario.length;
  }, [listaVacinasUsuario]);
  return progress <= 30 ? (
    <div className="bg-surface-container-lowest rounded-xl p-lg shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
      <h3 className="text-title-md mb-md">Seu progresso de imunização</h3>

      <div className="flex items-end gap-md mb-sm">
        <span className="text-4xl font-bold text-red-400">
          {progress + "%"}
        </span>
        <span className="text-caption text-on-surface-variant pb-1">
          Ótima cobertura
        </span>
      </div>

      <div className="w-full bg-surface-container-highest h-2 rounded-full mb-lg overflow-hidden">
        <div className="bg-red-400 h-full" style={{ width: `${progress}%` }} />
      </div>

      <div className="space-y-md">
        <div className="flex items-center justify-between">
          <span className="text-label-sm text-on-surface-variant">
            Vacinas essenciais
          </span>
          <span
            className="material-symbols-outlined text-red-400"
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
  ) : progress < 70 ? (
    <>
      <div className="bg-surface-container-lowest rounded-xl p-lg shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
        <h3 className="text-title-md mb-md">Seu progresso de imunização</h3>

        <div className="flex items-end gap-md mb-sm">
          <span className="text-4xl font-bold text-yellow-400">
            {progress + "%"}
          </span>
          <span className="text-caption text-on-surface-variant pb-1">
            Você está desprotegido
          </span>
        </div>

        <div className="w-full bg-surface-container-highest h-2 rounded-full mb-lg overflow-hidden">
          <div
            className="bg-yellow-400 h-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="space-y-md">
          <div className="flex items-center justify-between">
            <span className="text-label-sm text-on-surface-variant">
              Vacinas essenciais
            </span>
            <span
              className="material-symbols-outlined text-yellow-400"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              Cancel
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-label-sm text-on-surface-variant">
              Doses sazonais
            </span>
            <span className="material-symbols-outlined text-tertiary">
              Cancel
            </span>
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="bg-surface-container-lowest rounded-xl p-lg shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
        <h3 className="text-title-md mb-md">Seu progresso de imunização</h3>

        <div className="flex items-end gap-md mb-sm">
          <span className="text-4xl font-bold text-secondary">
            {progress + "%"}
          </span>
          <span className="text-caption text-on-surface-variant pb-1">
            Falta só mais um pouco
          </span>
        </div>

        <div className="w-full bg-surface-container-highest h-2 rounded-full mb-lg overflow-hidden">
          <div
            className="bg-secondary h-full"
            style={{ width: `${progress}%` }}
          />
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
    </>
  );
}

export default ProgressMini;
