export interface Vaccine {
  id: number;
  name: string;
  minAge: number;
  maxAge: number;
}

export const vaccines: Vaccine[] = [
  {
    id: 1,
    name: "Hepatite B",
    minAge: 0,
    maxAge: 100,
  },
  {
    id: 2,
    name: "HPV",
    minAge: 9,
    maxAge: 50,
  },
  {
    id: 3,
    name: "Febre amarela",
    minAge: 2,
    maxAge: 35,
  },
];
