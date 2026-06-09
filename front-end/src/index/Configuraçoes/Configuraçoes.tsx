import { useState } from "react";

function Configuracoes({ setCurrentUserId }) {
  const [userId, setUserId] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setCurrentUserId(Number(userId));
      setUserId("");
    }
  };

  return (
    <div className="px-6">
      <input
        type="number"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Digite o ID do usuário que você quer trocar para"
        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-md placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-100"
      />
    </div>
  );
}

export default Configuracoes;
