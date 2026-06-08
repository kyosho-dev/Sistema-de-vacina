import { useState, useMemo } from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';
import { scaleLinear } from 'd3-scale';
import { CoberturaVacinal } from './MapVaccines';

// URL do mapa do Brasil simplificado com identificadores de Estados (siglas em geo.properties.sigla)
const geoUrl = '/brazil-states.json';

// Mapeamento para calcular os avisos regionais automaticamente
const mapeamentoRegioes: { [key: string]: string } = {
    AC: 'Norte', AP: 'Norte', AM: 'Norte', PA: 'Norte', RO: 'Norte', RR: 'Norte', TO: 'Norte',
    AL: 'Nordeste', BA: 'Nordeste', CE: 'Nordeste', MA: 'Nordeste', PB: 'Nordeste', PE: 'Nordeste', PI: 'Nordeste', RN: 'Nordeste', SE: 'Nordeste',
    DF: 'Centro-Oeste', GO: 'Centro-Oeste', MT: 'Centro-Oeste', MS: 'Centro-Oeste', 
    ES: 'Sudeste', MG: 'Sudeste', RJ: 'Sudeste', SP: 'Sudeste',
    PR: 'Sul', RS: 'Sul', SC: 'Sul'
};

export function PaginaMapaCobertura() {
    const [selectedVaccine, setSelectedVaccine] = useState('BCG');
    const [selectedYear, setSelectedYear] = useState(2022);
    const [hoveredEstado, setHoveredEstado] = useState<{ nome: string; valor: number } | null>(null);

    // Processamento Inteligente de dados com useMemo
    const { dadosMapeados, regiaoMaior, regiaoMenor, estadoMaiorRegiao, estadoMenorRegiao } = useMemo(() => {
        const filtrados = CoberturaVacinal.filter(
            (d) => d.Vacina_id === selectedVaccine && d.ano === selectedYear
        );

        // Dicionário de busca rápida para o mapa
        const mapaEstados: { [key: string]: { cobertura: number; nome: string } } = {};
        filtrados.forEach((item) => {
            mapaEstados[item.estado_id] = {
                cobertura: item.cobertura,
                nome: item.nome_estado
            };
        });

        // Agrupamento por regiões geográficas
        const regioesMapeadas: { [key: string]: { total: number; qtd: number } } = {};
        filtrados.forEach((item) => {
            const regiao = mapeamentoRegioes[item.estado_id];
            if (regiao) {
                if (!regioesMapeadas[regiao]) {
                    regioesMapeadas[regiao] = { total: 0, qtd: 0 };
                }
                regioesMapeadas[regiao].total += item.cobertura;
                regioesMapeadas[regiao].qtd += 1;
            }
        });

        // Calcula médias das Regiões
        const mediasRegionais = Object.entries(regioesMapeadas).map(([nome, dados]) => ({
            nome,
            media: dados.total / dados.qtd,
        }));

        // Descobre as regiões extremas
        let maiorR = { nome: 'Sem dados', media: 0 };
        let menorR = { nome: 'Sem dados', media: 0 };

        if (mediasRegionais.length > 0) {
            mediasRegionais.sort((a, b) => b.media - a.media);
            maiorR = mediasRegionais[0];
            menorR = mediasRegionais[mediasRegionais.length - 1];
        }

        // Descobre o MELHOR estado de dentro da MELHOR região
        const estadosDaMaiorRegiao = filtrados.filter(item => mapeamentoRegioes[item.estado_id] === maiorR.nome);
        let melhorEstado = { nome: 'Sem dados', cobertura: 0 };
        if (estadosDaMaiorRegiao.length > 0) {
            estadosDaMaiorRegiao.sort((a, b) => b.cobertura - a.cobertura); // Maior cobertura primeiro
            melhorEstado = { nome: estadosDaMaiorRegiao[0].nome_estado, cobertura: estadosDaMaiorRegiao[0].cobertura };
        }

        // Descobre o PIOR estado de dentro da PIOR região
        const estadosDaPiorRegiao = filtrados.filter(item => mapeamentoRegioes[item.estado_id] === menorR.nome);
        let piorEstado = { nome: 'Sem dados', cobertura: 0 };
        if (estadosDaPiorRegiao.length > 0) {
            estadosDaPiorRegiao.sort((a, b) => a.cobertura - b.cobertura); // Menor cobertura primeiro
            piorEstado = { nome: estadosDaPiorRegiao[0].nome_estado, cobertura: estadosDaPiorRegiao[0].cobertura };
        }

        return { 
            dadosMapeados: mapaEstados, 
            regiaoMaior: maiorR, 
            regiaoMenor: menorR,
            estadoMaiorRegiao: melhorEstado,
            estadoMenorRegiao: piorEstado
        };
    }, [selectedVaccine, selectedYear]);


    const colorScale = scaleLinear<string>()
        .domain([50, 75, 90, 100])
        .range(['#e57373', '#fff176', '#81c784', '#388e3c']);

    return (
        <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif', maxWidth: '1100px', margin: '0 auto' }}>
            <h1 style={{ color: '#1a237e', marginBottom: '5px', fontSize: '30px' }}><strong>Análise de Cobertura Vacinal Nacional</strong></h1>
            <p style={{ color: '#666', marginBottom: '30px' }}>Monitore os índices oficiais de cobertura vacinal do DATASUS aplicados em todo o território.</p>

            {/* FILTROS */}
            <div style={{ display: 'flex', gap: '20px', marginBottom: '25px', backgroundColor: '#f5f5f5', padding: '15px', borderRadius: '8px' }}>
                <div>
                    <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Vacina:</label>
                    <select value={selectedVaccine} onChange={(e) => setSelectedVaccine(e.target.value)} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}>
                        <option value="BCG">BCG (Tuberculose)</option>
                        <option value="Hepatite B idade <= 30 dias">Hepatite B idade menor ou igual a 30 dias</option>
                        <option value="Rotavírus Humano">Rotavírus Humano</option>
                        <option value="Meningococo C">Meningococo C</option>
                    </select>
                </div>
                <div>
                    <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Ano de Referência:</label>
                    <select value={selectedYear} onChange={(e) => setSelectedYear(Number(e.target.value))} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}>
                        <option value={2022}>2022</option>
                        <option value={2021}>2021</option>
                    </select>
                </div>
            </div>

            {/* NOVOS CARDS DE DESTAQUES REGIONAIS (DESIGN COMPLETO) */}
            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
                
                {/* CARD VERDE - MAIOR COBERTURA */}
                <div style={{ 
                    flex: 1, 
                    backgroundColor: '#f0fff4', 
                    borderLeft: '5px solid #38a169', 
                    padding: '20px', 
                    borderRadius: '6px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                }}>
                    <h4 style={{ margin: '0 0 8px 0', color: '#22543d', fontSize: '16px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <strong>Maior</strong> Cobertura Regional
                    </h4>
                    <p style={{ margin: 0, fontSize: '15px', color: '#2f855a', lineHeight: '1.4' }}>
                        Região <strong>{regiaoMaior.nome}</strong> com média geral de <strong>{regiaoMaior.media.toFixed(1)}%</strong>.
                    </p>
                    <p style={{ margin: '6px 0 0 0', fontSize: '13px', color: '#4a5568' }}>
                        Estado líder dela: <span style={{ color: '#22543d', fontWeight: 'bold' }}>{estadoMaiorRegiao.nome}</span> ({estadoMaiorRegiao.cobertura.toFixed(1)}%)
                    </p>
                </div>

                {/* CARD VERMELHO - MENOR COBERTURA */}
                <div style={{ 
                    flex: 1, 
                    backgroundColor: '#fff5f5', 
                    borderLeft: '5px solid #e53e3e', 
                    padding: '20px', 
                    borderRadius: '6px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                }}>
                    <h4 style={{ margin: '0 0 8px 0', color: '#742a2a', fontSize: '16px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <strong>Menor</strong> Cobertura Regional
                    </h4>
                    <p style={{ margin: 0, fontSize: '15px', color: '#c53030', lineHeight: '1.4' }}>
                        Região <strong>{regiaoMenor.nome}</strong> com média geral de <strong>{regiaoMenor.media.toFixed(1)}%</strong>.
                    </p>
                    <p style={{ margin: '6px 0 0 0', fontSize: '13px', color: '#4a5568' }}>
                        Sendo o Estado dela com a menor cobertura: <span style={{ color: '#742a2a', fontWeight: 'bold' }}>{estadoMenorRegiao.nome}</span> ({estadoMenorRegiao.cobertura.toFixed(1)}%)
                    </p>
                </div>

            </div>

            {/* ÁREA CENTRAL COM MAPA E TOOLTIP */}
            <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
                <div style={{ width: '60%', backgroundColor: '#fcfcfc', border: '1px solid #eee', borderRadius: '12px', padding: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
                    
                    <ComposableMap projection="geoMercator" projectionConfig={{ scale: 750 }} style={{ width: '100%', height: 'auto' }}>
                        <ZoomableGroup center={[-52, -15]} maxZoom={5}>
                            <Geographies geography={geoUrl}>
                                {({ geographies }) =>
                                    geographies.map((geo) => {
                                        const siglaEstado = geo.properties.sigla; 
                                        const estadoInfo = dadosMapeados[siglaEstado];
                                        
                                        const coberturaReal = estadoInfo ? estadoInfo.cobertura : 0;
                                        const nomeReal = estadoInfo ? estadoInfo.nome : (geo.properties.nome || 'Estado Desconhecido');

                                        return (
                                            <Geography 
                                                key={geo.rsmKey}
                                                geography={geo}
                                                onMouseEnter={() => setHoveredEstado({ nome: nomeReal, valor: coberturaReal })}
                                                onMouseLeave={() => setHoveredEstado(null)}
                                                style={{
                                                    default: {
                                                        fill: coberturaReal > 0 ? colorScale(Math.min(coberturaReal, 100)) : '#e0e0e0',
                                                        stroke: '#ffffff',
                                                        strokeWidth: 0.8,
                                                        outline: 'none',
                                                        transition: 'fill 0.2s',
                                                    },
                                                    hover: {
                                                        fill: '#1a237e',
                                                        stroke: '#ffffff',
                                                        strokeWidth: 1,
                                                        outline: 'none',
                                                        cursor: 'pointer'
                                                    },
                                                    pressed: {
                                                        outline: 'none'
                                                    }
                                                }}
                                            />
                                        );
                                    })
                                }
                            </Geographies>
                        </ZoomableGroup>
                    </ComposableMap>
                </div>

                {/* TOOLTIP / DETALHES AO PASSAR O MOUSE */}
                <div style={{ width: '40%', minHeight: '150px', padding: '20px', border: '1px solid #e0e0e0', borderRadius: '8px', backgroundColor: '#fafafa', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
                    <h3 style={{ marginTop: '0', color: '#333' }}> Informações do Estado</h3>
                    {hoveredEstado ? (
                        <div>
                            <p style={{ fontSize: '18px', margin: '5px 0' }}>Estado: <strong>{hoveredEstado.nome}</strong></p>
                            <p style={{ fontSize: '24px', margin: '5px 0', color: hoveredEstado.valor >= 90 ? '#2e7d32' : '#c62828', fontWeight: 'bold' }}>
                                {hoveredEstado.valor > 0 ? `${hoveredEstado.valor.toFixed(2)}%` : 'Dado não cadastrado'}
                            </p>
                        </div>
                    ) : (
                        <p style={{ color: '#888', fontStyle: 'italic' }}>Passe o mouse sobre algum Estado no mapa para visualizar a taxa de cobertura vacinal exata.</p>
                    )}
                </div>
            </div>

            {/* NOTA EXPLICATIVA DO DATASUS */}
            <div style={{ marginTop: '30px', backgroundColor: '#fff8e1', border: '1px solid #ffe082', padding: '15px', borderRadius: '6px' }}>
                <p style={{ margin: 0, fontSize: '13px', color: '#5d4037', lineHeight: '1.4' }}>
                    <strong>Nota sobre dados estatísticos superiores a 100%:</strong> Conforme o padrão DATASUS, taxas superiores a 100% podem acontecer devido ao cálculo cruzar o número bruto de doses aplicadas com as estimativas demográficas do Censo do IBGE, ou devido à migração de pacientes que residem em um local mas buscam atendimento em outro Estado.
                </p>
            </div>
        </div>
    );
}