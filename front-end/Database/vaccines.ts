export interface Vaccine {
  id: number;
  name: string;
  minAge: number;
  maxAge: number;
  uniqueDose: boolean;
}

export const vaccines: Vaccine[] = [
  {
    id: 1,
    name: "Hepatite B",
    minAge: 0,
    maxAge: 100,
    uniqueDose: false
  },
  {
    id: 2,
    name: "HPV",
    minAge: 9,
    maxAge: 50,
    uniqueDose: true
  },
  {
    id: 3,
    name: "Febre amarela",
    minAge: 2,
    maxAge: 35,
    uniqueDose: true
  },
];
