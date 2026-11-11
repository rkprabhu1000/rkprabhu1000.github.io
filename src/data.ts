// All site content lives here — edit this file to update the website.

export const profile = {
  name: 'RK Prabhu',
  fullName: 'Radhakrishna Prabhu',
  title: 'Solutions Architect · Presales',
  location: 'Sweden',
  linkedin: 'https://www.linkedin.com/in/rk-prabhu/',
  headline: 'I help enterprises connect their systems, their teams and their strategy.',
  intro:
    'Technology, sales & operations leader with 13+ years across SaaS, CRM, iPaaS, CDN and cloud — designing enterprise architectures, leading high-performing presales teams and turning digital transformation goals into measurable business outcomes.',
  about: [
    'I started as a software engineer at Infosys, moved into solutions architecture for Fortune 500 clients at Akamai and Limelight Networks, and spent three years at HubSpot as team lead for solutions engineers across the Nordics and Benelux — setting direction, coaching and raising the bar for the team while carrying my own quota.',
    'At Invise I built and led a 10-person CRM strategy and architecture team with P&L responsibility. Today at Frends I work with CIOs and enterprise architects on integration strategy — designing API-led, event-driven and AI/MCP-led architectures across cloud, SaaS, ERP, CRM and legacy systems.',
    'Across every role, the thread is the same: align technology with how the business actually grows, build the operating frameworks that let teams deliver, and use AI and automation where they create real leverage.',
  ],
}

export const stats = [
  { value: '13+', label: 'Years in enterprise technology' },
  { value: '€1M+', label: 'ARR growth delivered' },
  { value: '20+', label: 'Fortune 500 clients architected for' },
  { value: '10', label: 'Person team built and led' },
  { value: '3', label: 'Continents of enterprise customers' },
  { value: '8', label: "Awards, incl. President's Club" },
]

export type Role = {
  company: string
  location: string
  title: string
  period: string
  earlier?: string
  points: string[]
  skills: string[]
}

export const experience: Role[] = [
  {
    company: 'Frends',
    location: 'Sweden',
    title: 'Solutions Architect — Presales',
    period: 'Feb 2026 — Present',
    points: [
      'Lead solution architecture in enterprise sales cycles, advising CIOs and enterprise architects on integration strategy and platform adoption.',
      'Design scalable API-led and event-driven integration architectures across cloud, SaaS, ERP, CRM and legacy ecosystems.',
      'Shape AI- and MCP-led integration solutions — exposing enterprise processes as tools that AI agents can call securely, and showing customers how to put AI to work on real business workflows.',
      'Translate digital transformation goals into integration blueprints, technical demos and proof-of-value solutions.',
      'Support go-to-market growth through partner enablement, technical advocacy and product feedback from customer engagements.',
    ],
    skills: ['Integration architecture', 'iPaaS', 'AI & MCP', 'API-led design', 'Presales'],
  },
  {
    company: 'Invise',
    location: 'Sweden',
    title: 'Head of CRM & Tech Team',
    period: 'Aug 2024 — Feb 2026',
    earlier: 'Principal Solutions Engineer',
    points: [
      'Built and scaled a 10-member CRM strategy and architecture team, significantly improving delivery efficiency.',
      'Led the team day to day — hiring, coaching and career development, setting clear goals and growing future leaders through mentorship and succession planning.',
      'Managed budget, P&L oversight and cost optimisation with executive leadership.',
      'Implemented AI-driven estimation and resource planning, reducing delivery delays and lifting customer satisfaction.',
      'Standardised operational KPIs across CSAT, utilisation and delivery timelines, reducing escalations.',
    ],
    skills: ['Operations leadership', 'CRM transformation', 'P&L', 'AI adoption'],
  },
  {
    company: 'HubSpot',
    location: 'Ireland',
    title: 'Principal Solutions Engineer, Team Lead',
    period: 'Jul 2021 — Jul 2024',
    earlier: 'Senior Solutions Engineer II, Senior Solutions Engineer',
    points: [
      'Team lead for 7 solutions engineers — guiding deal strategy, coaching and sharing best practice — while carrying a full individual quota and finishing as a top regional performer in Nordilux.',
      'Secured enterprise deals by aligning CRM architecture with customer growth strategies.',
      'Designed AI-driven CRM automation workflows that improved engagement and pipeline conversion.',
      'Built enablement programmes that got new sales engineers productive much faster.',
    ],
    skills: ['SaaS sales engineering', 'CRM architecture', 'Enablement', 'Team lead'],
  },
  {
    company: 'Limelight Networks',
    location: 'India',
    title: 'Solutions Engineer',
    period: 'May 2019 — Aug 2020',
    points: [
      'Supported enterprise streaming and CDN clients across APAC, consistently meeting quota.',
      'Developed analytics models for capacity planning and performance optimisation.',
      'Partnered with product teams to launch network optimisation features for enterprise deployments.',
    ],
    skills: ['CDN architecture', 'Presales', 'Analytics'],
  },
  {
    company: 'Akamai Technologies',
    location: 'India',
    title: 'Solutions Architect II',
    period: 'Nov 2015 — Apr 2019',
    earlier: 'Solutions Architect',
    points: [
      'Architected performance and security solutions for 20+ Fortune 500 clients, improving latency and user experience.',
      'Led end-to-end implementation of a $1M+ web and media delivery programme across North America.',
      'Automated deployment workflows, reducing delivery timelines and engineering effort.',
    ],
    skills: ['Solutions architecture', 'Web performance', 'Web security'],
  },
  {
    company: 'Infosys',
    location: 'India',
    title: 'Senior Systems Engineer',
    period: 'Feb 2013 — Oct 2015',
    earlier: 'Systems Engineer, Systems Engineer Trainee',
    points: [
      'Developed and delivered enterprise software applications for global clients.',
      'Improved delivery quality through process optimisation and defect-reduction initiatives.',
      'Recognised with the Best Project Award (2015) in the ICP business unit.',
    ],
    skills: ['Software engineering', 'Process improvement'],
  },
]

export const expertise = [
  {
    title: 'Solutions & Integration Architecture',
    body: 'Integration strategy, solution design and architecture reviews that connect cloud, SaaS, ERP and legacy systems — turning disconnected landscapes into reliable, scalable platforms the business can grow on.',
  },
  {
    title: 'Presales & Go-to-Market',
    body: 'Enterprise account strategy, technical discovery, demos and proof-of-value, partner enablement and strategic partnerships.',
  },
  {
    title: 'Executive & Operations Leadership',
    body: 'Org building, KPI/OKR management, P&L and budget ownership, scaled delivery frameworks and change management.',
  },
  {
    title: 'AI & Automation',
    body: 'Bringing AI into real workflows — estimation, resource planning, CRM automation — and analytics-driven decision-making.',
  },
  {
    title: 'Technology Transformation',
    body: 'Broad, hands-on experience across the stack — CDN and web performance at Akamai and Limelight, CRM on HubSpot, integration on iPaaS, and now AI — aligning technology with how the business grows.',
  },
  {
    title: 'Stakeholder & Programme Management',
    body: 'C-level and enterprise client engagement, Agile and Scrum delivery, risk mitigation and cross-functional alignment.',
  },
]

export const tools = ['Frends', 'HubSpot', 'Salesforce', 'Akamai', 'AWS', 'Claude', 'Jira', 'Confluence', 'Productive']

export const awards = [
  { year: '2024', title: "President's Club Winner", detail: 'Top performer SE, Nordilux FY 2023 — HubSpot' },
  { year: '2023', title: 'Top Performer SE', detail: 'Nordilux FY 2022 — HubSpot' },
  { year: '2022', title: 'HEART Award', detail: 'HubSpot' },
  { year: '2021', title: 'Titan Award', detail: 'Largest deal signed in APAC, FY 2020 — Limelight Networks' },
  { year: '2020', title: 'Spot Award', detail: 'Limelight Networks' },
  { year: '2018', title: 'Spot Award', detail: 'Akamai Technologies' },
  { year: '2015', title: 'Best Project Award', detail: 'ICP business unit — Infosys' },
  { year: '2015', title: 'Spot Award', detail: 'Infosys' },
]

export const education = [
  {
    school: 'University of Limerick',
    degree: 'Master of Engineering, Information & Network Security',
    period: '2020 — 2021',
    grade: 'QCA 3.84 / 4',
  },
  {
    school: 'NMAM Institute of Technology, Nitte',
    degree: 'Bachelor of Engineering, Computer Science',
    period: '2008 — 2012',
    grade: 'CGPA 8.91 / 10',
  },
]

export const principles = [
  {
    title: 'Set the bar high — then help people clear it.',
    body: 'I hold myself and my teams to high standards, do the work to help people go beyond them, and make sure it gets noticed when they do.',
  },
  {
    title: 'Make feedback easy to give.',
    body: 'I listen first and make sure I understand the real challenge before we talk about solutions. People share more when it feels safe to.',
  },
  {
    title: "Lean into the conversation you're avoiding.",
    body: "Progress usually sits on the other side of a difficult conversation. I'd rather have it early, honestly and with respect.",
  },
  {
    title: 'Decide with data, sharpen with instinct.',
    body: 'I use data and AI to inform decisions, question my emotional first reactions, trust my judgement — and accept that real progress means taking considered risks.',
  },
]
