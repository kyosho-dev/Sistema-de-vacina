import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';

import { PainelPrincipal } from './index/PainelPrincipal';
import { Historico } from './index/Historico';
import { Alertas } from './index/Alertas';
import { Perfil } from './index/Perfil';
import { BuscarVacinas } from './index/BuscarVacinas';

function App() {
  return (
    <Layout>
      {/* O gerenciador de rotas decide dinamicamente o que renderizar aqui dentro */}
      <Routes>
        <Route path="/" element={<PainelPrincipal />} />
        <Route path="/historico" element={<Historico />} />
        <Route path="/alertas" element={<Alertas />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/buscarVacinas" element={<BuscarVacinas />} />
      </Routes>

      {/* Footer fixa abaixo da troca de páginas */}
      <footer className="mt-xl border-t border-outline-variant bg-surface-container-lowest py-lg rounded-xl">
        <div className="max-w-[1200px] mx-auto px-lg flex flex-col md:flex-row justify-between items-center gap-md">
          <p className="text-caption text-on-surface-variant">© 2026 VaxWallet. Secure Health Data Management.</p>
        </div>
      </footer>
    </Layout>
  );
}

export default App;