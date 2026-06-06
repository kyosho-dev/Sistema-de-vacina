interface ProgressBarProps {
  progress: number;
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <>
      {/* Overall Status Card */}
      {progress <= 30 ? (
        <div className="md:col-span-8 bg-surface card-shadow rounded-xl p-lg flex flex-col justify-between border-l-4 border-red-700 min-h-[240px]">
          <div className="flex justify-between items-start">
            <div>
              <span className="px-sm py-xs bg-red-100 text-red-700 rounded-full font-label-sm text-label-sm">
                Muito atrasado
              </span>
              <h3 className="font-headline-lg text-headline-lg mt-sm">
                Status de Vacinação
              </h3>
            </div>
            <div className="text-right">
              <p className="font-display-lg text-display-lg text-red-700">
                {String(progress) + "%"}
              </p>
              <p className="font-label-sm text-label-sm text-on-surface-variant">
                Incompleto
              </p>
            </div>
          </div>
          <div className="w-full bg-surface-container-highest h-3 rounded-full overflow-hidden mt-lg">
            <div
              className="bg-red-700 h-full rounded-full"
              style={{ width: progress + "%" }}
            ></div>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant mt-md">
            Você não está protegido contra a maioria dos riscos clínicos. Cuidado, sua saúde e a dos próximos a você estão em risco!
            Conclua suas doses restantes para alcançar 100%.
          </p>
        </div>
      ) : progress < 70 ? (
        <div className="md:col-span-8 bg-surface card-shadow rounded-xl p-lg flex flex-col justify-between border-l-4 border-orange-500 min-h-[240px]">
          <div className="flex justify-between items-start">
            <div>
              <span className="px-sm py-xs bg-yellow-100 text-yellow-600 rounded-full font-label-sm text-label-sm">
                Atrasado
              </span>
              <h3 className="font-headline-lg text-headline-lg mt-sm">
                Status de Vacinação
              </h3>
            </div>
            <div className="text-right">
              <p className="font-display-lg text-display-lg text-yellow-500">
                {String(progress) + "%"}
              </p>
              <p className="font-label-sm text-label-sm text-on-surface-variant">
                Começando
              </p>
            </div>
          </div>
          <div className="w-full bg-surface-container-highest h-3 rounded-full overflow-hidden mt-lg">
            <div
              className="bg-yellow-500 h-full rounded-full"
              style={{ width: progress + "%" }}
            ></div>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant mt-md">
            Você está protegido contra poucos riscos clínicos.
            Conclua suas doses restantes para alcançar 100%.
          </p>
        </div>
      ) : progress < 100 ? (
        <div className="md:col-span-8 bg-surface card-shadow rounded-xl p-lg flex flex-col justify-between border-l-4 border-secondary min-h-[240px]">
          <div className="flex justify-between items-start">
            <div>
              <span className="px-sm py-xs bg-green-100 text-green-600 rounded-full font-label-sm text-label-sm">
                Quase em dia
              </span>
              <h3 className="font-headline-lg text-headline-lg mt-sm">
                Status de Vacinação
              </h3>
            </div>
            <div className="text-right">
              <p className="font-display-lg text-display-lg text-green-400">
                {String(progress) + "%"}
              </p>
              <p className="font-label-sm text-label-sm text-on-surface-variant">
                Quase lá
              </p>
            </div>
          </div>
          <div className="w-full bg-surface-container-highest h-3 rounded-full overflow-hidden mt-lg">
            <div
              className="bg-green-400 h-full rounded-full"
              style={{ width: progress + "%" }}
            ></div>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant mt-md">
            Você está protegido contra a maioria dos riscos clínicos. Você está indo bem! Conclua
            suas doses restantes para que seu progresso esteja em 100%.
          </p>
        </div>
      ) : (
        <div className="md:col-span-8 bg-surface card-shadow rounded-xl p-lg flex flex-col justify-between border-l-4 border-secondary min-h-[240px]">
          <div className="flex justify-between items-start">
            <div>
              <span className="px-sm py-xs bg-secondary-container text-on-secondary-container rounded-full font-label-sm text-label-sm">
                Em dia
              </span>
              <h3 className="font-headline-lg text-headline-lg mt-sm">
                Status de Vacinação
              </h3>
            </div>
            <div className="text-right">
              <p className="font-display-lg text-display-lg text-secondary">
                {String(progress) + "%"}
              </p>
              <p className="font-label-sm text-label-sm text-on-surface-variant">
                Completo
              </p>
            </div>
          </div>
          <div className="w-full bg-surface-container-highest h-3 rounded-full overflow-hidden mt-lg">
            <div
              className="bg-secondary h-full rounded-full"
              style={{ width: progress + "%" }}
            ></div>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant mt-md">
            Você está protegido contra quase todos os riscos clínicos. Parabéns, você tomou todas as suas vacinas necessárias, continue assim para estar sempre protegido!
          </p>
        </div>
      )}
    </>
  );
}

export default ProgressBar;
