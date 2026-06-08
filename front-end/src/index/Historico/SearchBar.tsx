import { useState } from "react";
import { userVaccines } from "../../../Database/userVaccines";
import { vaccines } from "../../../Database/vaccines";
import VaccineCard from "./VacineCard";

interface SearchBarProps {
  user_id: number;
}



export function SearchBar({ user_id }: SearchBarProps) {
  const current_userID = user_id;

  const [searchTerm, setSearchTerm] = useState("");

  const filteredVaccines = userVaccines.filter((userVaccine) => {
    if (userVaccine.userId !== current_userID) return false;

    const vaccineInfo = vaccines.find((v) => v.id === userVaccine.vaccineId);

    if (!vaccineInfo) return false;

    return vaccineInfo.name.toLowerCase().includes(searchTerm.toLowerCase());
  });


  const uniqueVaccines = filteredVaccines.filter(
    (vaccine, index, self) =>
      index ===
      self.findIndex(
        (v) => v.vaccineId === vaccine.vaccineId && v.userId === vaccine.userId,
      ),
  );

  return (
    <>
      <div className="searchBar-card">
        <div className="searchBar-input-wrapper">
          <div className="searchBar-flex">
            <span className="searchBar-icon material-symbols-outlined">
              filter_list
            </span>

            <input
              className="searchBar-input"
              placeholder="Pesquisar vacina"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="VaccineCards">
        {uniqueVaccines.map((vaccine) => (
          <VaccineCard
            key={`${vaccine.userId}-${vaccine.vaccineId}`}
            user_id={vaccine.userId}
            vaccine_id={vaccine.vaccineId}
          />
        ))}
      </div>
    </>
  );
}

export default SearchBar;
