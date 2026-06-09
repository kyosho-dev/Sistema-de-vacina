import { calcularStatusVacinas } from "../../../Database/vaccinesTakenAndNeeded";

interface AvisosHeadProps {
  user_id: number;
}

function AvisosHead({ user_id }: AvisosHeadProps) {
  const totalFaltam = calcularStatusVacinas(user_id)
    .filter((vacina) => vacina.faltam > 0)
    .reduce((total, vacina) => total + vacina.faltam, 0);
  return (
    <>
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
          {totalFaltam}
        </span>
      </div>
    </>
  );
}

export default AvisosHead;
