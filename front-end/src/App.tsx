import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";

import { PainelPrincipal } from "./index/PainelPrincipal/PainelPrincipal";
import { Historico } from "./index/Historico/Historico";
import { Alertas } from "./index/Alertas";
import Perfil from "./index/Perfil";
import { BuscarVacinas } from "./index/BuscarVacinas";
import { PaginaMapaCobertura } from "./index/Dashboard/Map";

function App() {
  const currentUserId = 4;
  return (
    <Layout>
      {/* O gerenciador de rotas decide dinamicamente o que renderizar aqui dentro */}
      <Routes>
        <Route path="/" element={<PainelPrincipal user_id={currentUserId} />} />
        <Route
          path="/historico"
          element={<Historico user_id={currentUserId} />}
        />
        <Route path="/alertas" element={<Alertas user_id={currentUserId} />} />
        <Route
          path="/perfil"
          element={<Perfil idUsuarioLogado={currentUserId} />}
        />
        <Route path="/buscarVacinas" element={<BuscarVacinas />} />
        <Route path="/cobertura" element={<PaginaMapaCobertura />} />
      </Routes>

      {/* Footer fixa abaixo da troca de páginas */}
      <footer className="mt-xl border-t border-outline-variant bg-surface-container-lowest py-lg rounded-xl">
        <div className="max-w-1200px mx-auto px-lg flex flex-col md:flex-row justify-between items-center gap-md">
          <p className="text-caption text-on-surface-variant">
            © 2026 Carteira de Vacinação Digital. Secure Health Data Management.
          </p>
        </div>
      </footer>
    </Layout>
  );
}

export default App;
