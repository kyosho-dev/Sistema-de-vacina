import { vaccines } from "../../../Database/vaccines";
import { users } from "../../../Database/user";
import { userVaccines } from "../../../Database/userVaccines";
import "./Historico.css";

interface VaccineCardProps {
  vaccine_id: number;
  user_id: number;
}

function VaccineCard({ vaccine_id, user_id }: VaccineCardProps) {
  const currentUser = users.find((u) => u.id === user_id);

  const currentVaccine = vaccines.find(
    (vaccine) => vaccine.id === vaccine_id,
  );

  const takenDoses = userVaccines.filter(
    (uv) => uv.userId === user_id && uv.vaccineId === vaccine_id,
  );

  if (!currentUser || !currentVaccine) {
    return <p>Dados não encontrados</p>;
  }

  return (
    <>
      {currentVaccine.uniqueDose ? (
        <div className="card-unique">
          <div className="card-content">
            <div className="card-header">
              <div className="card-header-left">
                <div className="icon-circle-unique">
                  <span className="material-symbols-outlined icon-unique">
                    vaccines
                  </span>
                </div>

                <div>
                  <h3 className="card-title">{currentVaccine.name}</h3>
                  <span className="badge-unique">Dose única</span>
                </div>
              </div>
            </div>

            <div className="card-grid">
              {takenDoses.map((dose, index) => (
                <div key={index} className="dose-box">
                  <p className="dose-date">
                    {dose.doseDate.toLocaleDateString("pt-BR")}
                  </p>

                  <p className="dose-status">Aplicada</p>
                </div>
              ))}
            </div>

            <div className="card-actions-unique">
              <button className="action-btn">
                <span className="material-symbols-outlined">
                  visibility
                </span>
                View Details
              </button>

              <button className="action-btn">
                <span className="material-symbols-outlined">
                  share
                </span>
                Share QR Code
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="card">
          <div className="card-content">
            <div className="card-header">
              <div className="card-header-left">
                <div className="icon-circle">
                  <span className="material-symbols-outlined icon">
                    vaccines
                  </span>
                </div>

                <div>
                  <h3 className="card-title">{currentVaccine.name}</h3>
                  <span className="badge">Complete Schedule</span>
                </div>
              </div>
            </div>

            <div className="card-grid">
              {takenDoses.map((dose, index) => (
                <div key={index} className="dose-box">
                  <p className="dose-label">
                    Dose {index + 1}
                  </p>

                  <p className="dose-date">
                    {dose.doseDate.toLocaleDateString("pt-BR")}
                  </p>

                  <p className="dose-status">Aplicada</p>
                </div>
              ))}
            </div>

            <div className="card-actions">
              <button className="action-btn">
                <span className="material-symbols-outlined">
                  visibility
                </span>
                View Details
              </button>

              <button className="action-btn">
                <span className="material-symbols-outlined">
                  share
                </span>
                Share QR Code
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default VaccineCard;