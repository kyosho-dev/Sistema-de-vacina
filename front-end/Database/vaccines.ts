export interface Vaccine {
  id: number;
  name: string;
  minAgeMonths: number;
  maxAge?: number;
  uniqueDose: boolean;
}

export const vaccines: Vaccine[] = [
  {
    id: 1,
    name: "Hepatite B",
    minAgeMonths: 120,
    maxAge: 100,
    uniqueDose: false
  },
  {
    id: 2,
    name: "HPV",
    minAgeMonths: 108,
    maxAge: 50,
    uniqueDose: true
  },
  {
    id: 3,
    name: "Febre amarela",
    minAgeMonths: 6,
    maxAge: 35,
    uniqueDose: true
  },
];
