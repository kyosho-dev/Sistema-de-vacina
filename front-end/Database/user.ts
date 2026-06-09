export interface FamilyMember {
  id: number;
  name: string;
  birthDate: string;
  email: string;
  cpf: string;
  ageMonths: number;
  relationship: string;
}

export interface User {
  id: number;
  name: string;
  birthDate: string;
  email: string;
  cpf: string;
  ageMonths: number;
  familyMembers: FamilyMember[];
}

export const users: User[] = [
  {
    id: 1,
    name: "Ricardo Silva",
    birthDate: "15/02/1983",
    email: "ricardo@email.com",
    cpf: "123.456.789-00",
    ageMonths: 516,
    familyMembers: [
      {
        id: 2,
        name: "Pedro Exemplo",
        birthDate: "16/05/1998",
        email: "pedro@email.com",
        cpf: "987.654.321-00",
        ageMonths: 336,
        relationship: "Filho",
      },
    ],
  },
  {
    id: 3,
    name: "Maria Anti-vacina",
    birthDate: "24/01/1926",
    email: "maria@email.com",
    cpf: "111.222.333-44",
    ageMonths: 1188,
    familyMembers: [],
  },
  {
    id: 4,
    name: "joão Machado De Assis",
    birthDate: "22/04/1926",
    email: "joaomachadogrande@email.com",
    cpf: "111.222.333-44",
    ageMonths: 1188,
    familyMembers: [],
  },
];
