export type Stat = { value: string; label: string; approved: boolean; featured?: boolean };

export const stats: Stat[] = [
  { value: "10+", label: "years in sales and sales leadership", approved: true, featured: true },
  { value: "300%", label: "of quota as a business development rep", approved: true, featured: true },
  { value: "211%", label: "of new-business target as an account executive", approved: true },
  { value: "22", label: "new logos in one year as an account executive", approved: true },
  { value: "1st", label: "built a company's first SMB and strategic sales teams", approved: true },
  { value: "Manager of the Year", label: "as a sales leader", approved: true, featured: true },
  { value: "3", label: "reps to President's Club in one year", approved: true, featured: true },
  { value: "5", label: "reps promoted to enterprise roles in one year", approved: true },
];
