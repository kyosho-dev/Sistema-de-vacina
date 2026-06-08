import React, { useEffect, useState } from "react";

type UserProfile = {
  fullName?: string;
  cpf?: string;
  dateOfBirth?: string;
  email?: string;
};

type PainelPrincipalProps = {
  idUsuarioLogado: string | number;
};

export function PainelPrincipal({ idUsuarioLogado }: PainelPrincipalProps) {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [email, setEmail] = useState("");
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [loading, setLoading] = useState(true);
  const [savingEmail, setSavingEmail] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProfile() {
      try {
        setLoading(true);
        setError("");

        if (!idUsuarioLogado) {
          throw new Error("ID do usuário logado não informado.");
        }

        const response = await fetch(`/api/users/${idUsuarioLogado}`);

        if (!response.ok) {
          throw new Error("Não foi possível carregar o perfil.");
        }

        const data: UserProfile = await response.json();
        setProfile(data);
        setEmail(data.email || "");
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : "Erro ao carregar perfil.");
      } finally {
        setLoading(false);
      }
    }

    loadProfile();
  }, [idUsuarioLogado]);

  async function handleSaveEmail() {
    try {
      setSavingEmail(true);
      setError("");

      const response = await fetch(`/api/users/${idUsuarioLogado}/email`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Não foi possível atualizar o e-mail.");
      }

      const updated: UserProfile = await response.json();
      setEmail(updated.email || email);
      setIsEditingEmail(false);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Erro ao salvar e-mail.");
    } finally {
      setSavingEmail(false);
    }
  }

  if (loading) {
    return (
      <div className="max-w-[1200px] mx-auto p-lg w-full">
        <p className="text-body-md text-on-surface-variant">Carregando painel...</p>
      </div>
    );
  }

  return (
    <div className="max-w-[1200px] mx-auto p-lg w-full">
      <div className="mb-xl">
        <h1 className="text-headline-lg text-on-surface">Painel Principal</h1>
        <p className="text-body-md text-on-surface-variant">
          Gerencie seus dados, dependentes e configurações da conta.
        </p>
      </div>

      {error && (
        <div className="mb-lg rounded-lg border border-error/30 bg-error-container/20 p-md text-error">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg">
        <section className="lg:col-span-7 flex flex-col gap-lg">
          <div className="bg-surface-container-lowest rounded-xl p-xl shadow-[0_4px_12px_rgba(0,0,0,0.06)] border-l-4 border-primary">
            <div className="flex justify-between items-start mb-lg">
              <h2 className="text-title-md">Informações pessoais</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
              <div>
                <label className="text-label-sm text-on-surface-variant block mb-xs">
                  Nome completo
                </label>
                <p className="text-body-md font-semibold">
                  {profile?.fullName || `Usuário #${idUsuarioLogado}`}
                </p>
              </div>

              <div>
                <label className="text-label-sm text-on-surface-variant block mb-xs">
                  CPF
                </label>
                <p className="text-body-md font-semibold">
                  {profile?.cpf || "***.482.908-**"}
                </p>
              </div>

              <div>
                <label className="text-label-sm text-on-surface-variant block mb-xs">
                  Data de nascimento
                </label>
                <p className="text-body-md font-semibold">
                  {profile?.dateOfBirth
                    ? new Date(profile.dateOfBirth).toLocaleDateString("pt-BR")
                    : "-"}
                </p>
              </div>

              <div>
                <label className="text-label-sm text-on-surface-variant block mb-xs">
                  E-mail
                </label>

                {isEditingEmail ? (
                  <div className="flex flex-col gap-sm">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border border-outline-variant rounded-lg px-md py-sm text-body-md"
                    />
                    <div className="flex gap-sm">
                      <button
                        type="button"
                        onClick={handleSaveEmail}
                        disabled={savingEmail}
                        className="px-md py-sm rounded-lg bg-primary text-on-primary disabled:opacity-60"
                      >
                        {savingEmail ? "Salvando..." : "Salvar"}
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setEmail(profile?.email || "");
                          setIsEditingEmail(false);
                        }}
                        className="px-md py-sm rounded-lg bg-surface-container-high text-on-surface"
                      >
                        Cancelar
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-sm">
                    <p className="text-body-md font-semibold">{email || "-"}</p>
                    <button
                      type="button"
                      onClick={() => setIsEditingEmail(true)}
                      className="text-primary text-label-sm hover:underline"
                    >
                      Editar
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-xl shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
            <div className="flex justify-between items-center mb-lg">
              <h2 className="text-title-md">Dependentes</h2>
              <button
                type="button"
                className="bg-secondary-container text-on-secondary-container px-md py-sm rounded-lg text-label-sm flex items-center gap-sm hover:opacity-90 transition-opacity outline-none"
              >
                <span className="material-symbols-outlined">person_add</span> Adicionar
                dependente
              </button>
            </div>

            <div className="flex flex-col gap-md">
              <div className="flex items-center justify-between p-md bg-surface-container-low rounded-lg border border-outline-variant">
                <div className="flex items-center gap-md">
                  <img
                    alt="Perfil do dependente"
                    className="w-10 h-10 rounded-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7eNLYfSev4leOX-LWY8Zz_H3ERm5GFc9DrKfJFbwaeSlD0sdFXWwK0viwQ-YCzU6ajAtBtbWqPkaz7TVF1XJAnIQuCKORc1FqvepGNS-nvIcsUZ0AUUNPFVV_HrJkdLvSfsm5nvLS7yZZqu5XMZOQK1qwtS9HDiVViLvJ73i6lRciKGM9EsJnFk5q5f3zz36pghvoJfbW5hw8OUkLJbYHumEaWExYgF5utvoytmPSkOiIO7L0Ty2jri569y7itXs4HoWV9cv51lA"
                  />
                  <div>
                    <p className="text-body-md font-bold">Enzo Silva</p>
                    <p className="text-caption text-on-surface-variant">Filho • 8 anos</p>
                  </div>
                </div>
                <div className="flex items-center gap-sm">
                  <span className="bg-secondary/10 text-secondary px-sm py-xs rounded text-caption font-bold">
                    EM DIA
                  </span>
                  <span className="material-symbols-outlined text-on-surface-variant cursor-pointer">
                    chevron_right
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between p-md bg-surface-container-low rounded-lg border border-outline-variant">
                <div className="flex items-center gap-md">
                  <img
                    alt="Perfil do dependente"
                    className="w-10 h-10 rounded-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVv7281kvkPUUfpCrp9Cn1M_g-FmhWEipMQ8f7rmFTXFxOvG6K0gL0K7Z-A66V4biNwvUyUXhpyJfnHqCo5h7x8GA4FKip1lTAAkCKYlHKZZi1i7gnyj7BbtHpHUrRYvAc_TXDh8gy-nRndzdimaG2CDuFOLt9VYLEFhwiLqa94w7YGmYfmfUV6w_NZyaQyMoisvakLJxI5PBrVyT3LB0NzY_phdKOu0yQlPs5x1hwxq0hH69qrAScTe-ifwhKvCIoqKcAK6wF5iY"
                  />
                  <div>
                    <p className="text-body-md font-bold">Beatriz Silva</p>
                    <p className="text-caption text-on-surface-variant">Filha • 15 anos</p>
                  </div>
                </div>
                <div className="flex items-center gap-sm">
                  <span className="bg-tertiary/10 text-tertiary px-sm py-xs rounded text-caption font-bold">
                    1 ALERTA
                  </span>
                  <span className="material-symbols-outlined text-on-surface-variant cursor-pointer">
                    chevron_right
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <aside className="lg:col-span-5 flex flex-col gap-lg">
          <div className="relative bg-gradient-to-br from-primary to-on-primary-fixed-variant rounded-xl p-xl text-on-primary shadow-[0_8px_24px_rgba(0,88,188,0.25)] overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-xl"></div>

            <div className="relative z-10 flex flex-col gap-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-title-md mb-xs">Carteira Digital</h3>
                  <p className="text-caption opacity-80 uppercase tracking-widest">
                    Identificação de saúde
                  </p>
                </div>
                <span className="material-symbols-outlined text-[32px]">contactless</span>
              </div>

              <div className="bg-white p-sm rounded-lg self-center shadow-lg">
                <div className="w-32 h-32 bg-surface-container-highest flex items-center justify-center border-2 border-dashed border-outline">
                  <span className="material-symbols-outlined text-on-surface-variant text-[48px]">
                    qr_code_2
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-end border-t border-white/20 pt-md">
                <div>
                  <p className="text-caption opacity-80">Titular</p>
                  <p className="text-body-md font-bold uppercase">
                    {profile?.fullName || "Ricardo Silva"}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-caption opacity-80">Validade</p>
                  <p className="text-body-md font-bold">12/2026</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-xl shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
            <h2 className="text-title-md mb-lg">Configurações da conta</h2>

            <div className="flex flex-col gap-sm">
              <button
                type="button"
                className="flex items-center gap-md p-md w-full text-left hover:bg-surface-container-low transition-colors rounded-lg group outline-none"
              >
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary">
                  security
                </span>
                <div className="flex-grow">
                  <p className="text-label-sm font-bold">Segurança e login</p>
                  <p className="text-caption text-on-surface-variant">Senha, 2FA e sessões</p>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant">
                  navigate_next
                </span>
              </button>

              <button
                type="button"
                className="flex items-center gap-md p-md w-full text-left hover:bg-surface-container-low transition-colors rounded-lg group outline-none"
              >
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary">
                  notifications_paused
                </span>
                <div className="flex-grow">
                  <p className="text-label-sm font-bold">Preferências de notificação</p>
                  <p className="text-caption text-on-surface-variant">
                    Alertas e lembretes
                  </p>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant">
                  navigate_next
                </span>
              </button>

              <button
                type="button"
                className="flex items-center gap-md p-md w-full text-left hover:bg-surface-container-low transition-colors rounded-lg group outline-none"
              >
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary">
                  folder_shared
                </span>
                <div className="flex-grow">
                  <p className="text-label-sm font-bold">Privacidade e dados</p>
                  <p className="text-caption text-on-surface-variant">
                    Controle de acesso às informações
                  </p>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant">
                  navigate_next
                </span>
              </button>

              <div className="pt-md mt-md border-t border-outline-variant">
                <button
                  type="button"
                  className="flex items-center gap-md p-md w-full text-left text-error hover:bg-error-container/20 transition-colors rounded-lg group outline-none"
                >
                  <span className="material-symbols-outlined">logout</span>
                  <p className="text-label-sm font-bold">Sair</p>
                </button>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
