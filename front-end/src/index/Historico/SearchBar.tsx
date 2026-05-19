import { userVaccines } from "../../../Database/userVaccines";
import "./Historico.css";
import "./VacineCard";
import VaccineCard from "./VacineCard";


export function SearchBar() {
    const current_userID = 1
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
              placeholder="Pesquisar"
              type="text"
            />
          </div>
        </div>
        <div className="searchBar-select-group">
          <select className="searchBar-select">
            <option>All Years</option>
            <option>2024</option>
            <option>2023</option>
            <option>2022</option>
            <option>Prior</option>
          </select>
          <select className="searchBar-select">
            <option>All Types</option>
            <option>Viral</option>
            <option>Bacterial</option>
            <option>mRNA</option>
          </select>
        </div>
        <button className="searchBar-clear">Clear Filters</button>
      </div>

      <div className="VaccineCards">
        {userVaccines
          .filter((vaccine) => vaccine.userId === current_userID)
          .map((vaccine) => (
            <VaccineCard
              key={vaccine.vaccineId}
              user_id={vaccine.userId}
              vaccine_id={vaccine.vaccineId}
            />
          ))}
      </div>
    </>
  );
}

export default SearchBar;
