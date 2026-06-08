import { users } from './user';
import { vaccines } from './vaccines';
import { userVaccines } from './userVaccines';

export function calcularStatusVacinas (idUsuarioLogado: number) {

    //Encontra o utilizador usando o array 'user' e a propriedade 'id'
    const usuarioEncontrado = users.find((u) => u.id === idUsuarioLogado);
    
    //Se não encontrar o utilizador (undefined), a função para
    if (!usuarioEncontrado) {
        return[];
    }

    const idadeMeses = usuarioEncontrado.ageMonths;

    //Filtra as vacinas (da array 'vaccines') pela idade
    const listaNecessarias = vaccines.filter((vacina) => {
        //Verifica se a idade do utilizador  é maior ou igual a minAgeMonths
        const temMinAge = idadeMeses >= vacina.minAgeMonths
        //Trasnformando a maxAge que está em anos em meses
        const temMaxAge = vacina.maxAge
        ? idadeMeses <= (vacina.maxAge * 12)
        : true;

        return temMinAge && temMaxAge;
    });

    //Conta o históricona array 'userVaccines' e faz a matemática
    const resultadoFinal = listaNecessarias.map((vacinaNecessaria) => {

        //Conta quantas vezes o userId e o vaccineId coincidem no histórico
        const dosesTomadas = userVaccines.filter (
            (dose) => dose.userId === idUsuarioLogado && dose.vaccineId === vacinaNecessaria.id ).length;

            //Se uniqueDose for true, é 1 dose, se for false, assume-se que são várias (nesse caso usamos 3 doses)
            const dosesNecessarias = vacinaNecessaria.uniqueDose ? 1 : 3;

            //Conta quantas faltam
            const dosesFaltantes = dosesNecessarias - dosesTomadas;

            //Conta da porcentagem
            const porcentagemIndividual = (dosesTomadas / dosesNecessarias) * 100;

            return {
                nomeVacina: vacinaNecessaria.name,
                tomadas: dosesTomadas,
                necessarias: dosesNecessarias,
                faltam: dosesFaltantes > 0 ? dosesFaltantes : 0,
                porcentagem: Math.min(porcentagemIndividual, 100)
            };
    });

    return resultadoFinal;
}