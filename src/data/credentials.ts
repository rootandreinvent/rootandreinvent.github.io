export type Role = {
  title: string;
  context?: string;
  highlights: string[];
};

export type Build = { title: string; body: string };

export const career: Role[] = [
  {
    title: "Sales and Customer Service Manager",
    context: "Manufacturing · 2014–2018",
    highlights: [
      "Promoted twice in four years, from inside sales rep to sales supervisor to manager.",
      "Rebuilt the customer journey and built a consumer business line that grew to 30% of sales.",
    ],
  },
  {
    title: "Business Development Rep, Enterprise Accounts",
    context: "Enterprise technology · 2018–2019",
    highlights: [
      "300% of quota and 180% of pipeline target.",
      "Named team MVP, team lead and the team's first enablement lead.",
    ],
  },
  {
    title: "Account Executive, Small Business",
    context: "2019–2020",
    highlights: [
      "211% of new-business target, with 22 new logos in one year.",
      "31% close rate, with about half of her bookings self-sourced.",
    ],
  },
  {
    title: "Account Executive, Growth Business",
    context: "2020–2022",
    highlights: [
      "Promoted to senior account executive after one year as an AE.",
      "Closed the most new logos in her sales organization.",
      "Recognized as a customer champion after a customer named her in a satisfaction survey.",
      "Onboarded three new reps and coached a teammate from SDR to AE.",
    ],
  },
  {
    title: "Manager, Strategic Commercial Sales",
    context: "2022–2024",
    highlights: [
      "Promoted twice in her first year as a manager, from velocity SMB to corporate to strategic sales.",
      "Built the company's first SMB sales team and its first strategic team.",
      "Named Manager of the Year.",
      "Sent 3 reps to President's Club and saw 5 promoted to enterprise roles in one year.",
      "Team finished above target in each of her first two years.",
    ],
  },
  {
    title: "Regional Sales Director, SMB",
    context: "2024–2026",
    highlights: [
      "Ran joint pursuits that paired integration and AI products with the core platform.",
      "Credited by her account executive as critical to closing a multi-product new-logo win.",
    ],
  },
  {
    title: "Regional Sales Director, New Logo Commercial Growth",
    context: "2026",
    highlights: [
      "Coached the rep chosen for the best pitch in the entire sales organization.",
      "Won the managers' weekly contest for closed new business.",
      "Led her team to its first-ever deal in a new product line.",
      "Launched an invite-only competitive event that marketing rolled out across the sales organization.",
    ],
  },
  {
    title: "Senior Director, Marketplace Sales",
    context: "Manufacturing technology · 2026",
    highlights: [],
  },
];

export const builds: Build[] = [
  {
    title: "Prospecting dashboards",
    body: "Accounts ranked by industry, ownership and funding signals, and win rates. Her reps replaced their own views with hers.",
  },
  {
    title: "Account tiering",
    body: "Scored tiering, funding-signal and territory reports, so the team works the accounts most likely to buy first.",
  },
  {
    title: "Dead-opportunity win-backs",
    body: "A team session on reopening stalled and lost deals instead of starting from cold.",
  },
  {
    title: "Weekly discovery role-play",
    body: "Friday practice plus recorded, peer-led sessions so new hires ramp faster.",
  },
  {
    title: "Big-bet working sessions",
    body: "A weekly session to build point-of-view pitches for the largest accounts in the territory.",
  },
  {
    title: "A clear operating cadence",
    body: "Activity targets, a Monday numbers review, forecast discipline and structured 1:1s.",
  },
];
