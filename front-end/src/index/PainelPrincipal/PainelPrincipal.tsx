import React from "react";
import ProgressBar from "./ProgressBar";
import { useMemo } from 'react';
import { calcularStatusVacinas } from "../../../Database/vaccinesTakenAndNeeded";



export function PainelPrincipal() {

  const idUsuarioLogado = 2;

  //Busca a lista com o status de todas as vacinas obrigatórias do usuário
  const listaVacinasUsuario = useMemo (() => {
    return calcularStatusVacinas(idUsuarioLogado);
  }, [idUsuarioLogado]);

  //Aqui fazemos a média: somamos todas as porcentagens e dividimos pelo total de vacinas
  const progress = useMemo(() => {
    //Se o usuário não precisar de nenhuma vacina, de acordo com a sua idade, o progresso dele é 100%
    if (listaVacinasUsuario.length === 0) return 100;

    //Soma a porcentagem de cada vacina da lista
    const somaPorcentagens = listaVacinasUsuario.reduce((acumulador, vacina) => {
      return acumulador + vacina.porcentagem;
    }, 0)

    //Arredonda o número da porcentagem para um número inteiro
    return Math.round(somaPorcentagens / listaVacinasUsuario.length);

    //Divide a soma pelo número de vacinas para ter o progresso geral da carteira
    return somaPorcentagens / listaVacinasUsuario.length;
  }, [listaVacinasUsuario]);

  return (
    <section className="max-w-[1200px] mx-auto flex flex-col gap-lg">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-lg">
        <ProgressBar progress={progress} />

        {/* Next Scheduled Card */}
        <div className="md:col-span-4 bg-primary text-on-primary card-shadow rounded-xl p-lg flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-sm opacity-90">
              <span className="material-symbols-outlined" data-icon="event">
                event
              </span>
              <span className="font-label-sm text-label-sm">
                Próximo Agendamento
              </span>
            </div>
            <h3 className="font-title-md text-title-md mt-md">
              Influenza
            </h3>
            <p className="font-body-md text-body-md opacity-80">
              15 de Outubro 2026
            </p>
          </div>
          <button className="mt-xl w-full py-sm bg-on-primary text-primary rounded-lg font-bold font-label-sm text-label-sm hover:bg-primary-fixed transition-colors">
            Mostrar detalhes
          </button>
        </div>

        {/* Quick Actions Grid */}
        <div className="md:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
          <div className="bg-surface card-shadow rounded-xl p-md flex items-center gap-md hover:bg-surface-container-low cursor-pointer transition-colors border border-outline-variant">
            <div className="w-12 h-12 rounded-lg bg-primary-container flex items-center justify-center text-on-primary-container">
              <span className="material-symbols-outlined" data-icon="qr_code_2">
                qr_code_2
              </span>
            </div>
            <div>
              <p className="font-title-md text-label-sm font-bold">
                Ver QR Code
              </p>
              <p className="font-caption text-caption text-on-surface-variant">
                Verificação rapida
              </p>
            </div>
          </div>
          <div className="bg-surface card-shadow rounded-xl p-md flex items-center gap-md hover:bg-surface-container-low cursor-pointer transition-colors border border-outline-variant">
            <div className="w-12 h-12 rounded-lg bg-tertiary-container flex items-center justify-center text-on-tertiary-container">
              <span className="material-symbols-outlined" data-icon="add_task">
                add_task
              </span>
            </div>
            <div>
              <p className="font-title-md text-label-sm font-bold">Agendar</p>
              <p className="font-caption text-caption text-on-surface-variant">
                Nova dose ou reforço
              </p>
            </div>
          </div>
          <div className="bg-surface card-shadow rounded-xl p-md flex items-center gap-md hover:bg-surface-container-low cursor-pointer transition-colors border border-outline-variant">
            <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary">
              <span className="material-symbols-outlined" data-icon="download">
                download
              </span>
            </div>
            <div>
              <p className="font-title-md text-label-sm font-bold">
                Download PDF
              </p>
              <p className="font-caption text-caption text-on-surface-variant">
                Certificado oficial
              </p>
            </div>
          </div>
          <div className="bg-surface card-shadow rounded-xl p-md flex items-center gap-md hover:bg-surface-container-low cursor-pointer transition-colors border border-outline-variant">
            <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary">
              <span className="material-symbols-outlined" data-icon="share">
                share
              </span>
            </div>
            <div>
              <p className="font-title-md text-label-sm font-bold">
                Compartilhar registro
              </p>
              <p className="font-caption text-caption text-on-surface-variant">
                Enviar ao médico
              </p>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="md:col-span-7 bg-surface card-shadow rounded-xl overflow-hidden flex flex-col border border-outline-variant">
          <div className="p-lg border-b border-outline-variant flex justify-between items-center">
            <h3 className="font-title-md text-title-md">Atividade Recente</h3>
            <button className="text-primary font-label-sm text-label-sm hover:underline">
              Ver Tudo
            </button>
          </div>
          <div className="flex flex-col">
            {/* Activity Item 1 */}
            <div className="p-lg flex items-center justify-between border-b border-outline-variant hover:bg-surface-container-lowest transition-colors">
              <div className="flex items-center gap-md">
                <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                  <span
                    className="material-symbols-outlined"
                    data-icon="check_circle"
                  >
                    check_circle
                  </span>
                </div>
                <div>
                  <p className="font-body-md text-body-md font-bold">
                    COVID-19 Dose de reforço
                  </p>
                  <p className="font-caption text-caption text-on-surface-variant">
                    Aplicada por Enfermeira Fernanda Silva • Centro de Saúde Maria Goretti/Ipê
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-label-sm text-label-sm font-bold">
                  12 de Maio 2026
                </p>
                <p className="font-caption text-caption text-secondary">
                  Verificado
                </p>
              </div>
            </div>

            {/* Activity Item 2 */}
            <div className="p-lg flex items-center justify-between border-b border-outline-variant hover:bg-surface-container-lowest transition-colors">
              <div className="flex items-center gap-md">
                <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                  <span
                    className="material-symbols-outlined"
                    data-icon="check_circle"
                  >
                    check_circle
                  </span>
                </div>
                <div>
                  <p className="font-body-md text-body-md font-bold">
                    Febre amarela
                  </p>
                  <p className="font-caption text-caption text-on-surface-variant">
                    Aplicada por Enfermeira Marta Peixoto • Centro de Saúde Barreiro de Cima
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-label-sm text-label-sm font-bold">
                  05 de Janeiro 2026
                </p>
                <p className="font-caption text-caption text-secondary">
                  Verificado
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Clinical Reminders */}
        <div className="md:col-span-5 flex flex-col gap-lg">
          <div className="bg-surface-container-high card-shadow rounded-xl p-lg relative overflow-hidden">
            <div className="relative z-10">
              <h4 className="font-title-md text-title-md text-on-surface font-bold">
                Dicas de Saúde
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant mt-sm">
                Manter sua carteira de vacinação sempre atualizada garante um check-in mais
                rápido nas clínicas e ter suas vacinas sempre em dia permite que tenha menos problemas ao fazer uma viagem internacional!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
