// All site content lives here — edit this file to update the website.

export const profile = {
  name: 'RK Prabhu',
  fullName: 'Radhakrishna Prabhu',
  title: 'Solutions Architect · Presales',
  location: 'Sweden',
  linkedin: 'https://www.linkedin.com/in/rk-prabhu/',
  headline: 'I help enterprises connect their systems, their teams and their strategy.',
  intro:
    'Technology & operations leader with 12+ years across SaaS, CRM, iPaaS, CDN and cloud — designing enterprise integration architectures, building high-performing presales teams and turning digital transformation goals into measurable business outcomes.',
  about: [
    'I started as a software engineer at Infosys, moved into solutions architecture for Fortune 500 clients at Akamai and Limelight Networks, and spent three years at HubSpot leading a team of solutions engineers across the Nordics and Benelux.',
    'At Invise I built and ran a 10-person CRM strategy and architecture team with P&L responsibility. Today at Frends I work with CIOs and enterprise architects on integration strategy — designing API-led and event-driven architectures across cloud, SaaS, ERP, CRM and legacy systems.',
    'Across every role, the thread is the same: align technology with how the business actually grows, build the operating frameworks that let teams deliver, and use AI and automation where they create real leverage.',
  ],
}

export const stats = [
  { value: '12+', label: 'Years in enterprise technology' },
  { value: '€1M+', label: 'ARR growth delivered' },
  { value: '25%', label: 'Faster sales cycles' },
  { value: '50%', label: 'Higher delivery efficiency' },
  { value: '40%', label: 'Faster SE onboarding' },
  { value: '20+', label: 'Fortune 500 clients architected for' },
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
      'Translate digital transformation goals into integration blueprints, technical demos and proof-of-value solutions.',
      'Support go-to-market growth through partner enablement, technical advocacy and product feedback from customer engagements.',
    ],
    skills: ['Integration architecture', 'iPaaS', 'API-led design', 'Presales'],
  },
  {
    company: 'Invise',
    location: 'Sweden',
    title: 'Head of CRM & Tech Team',
    period: 'Aug 2024 — Feb 2026',
    earlier: 'Principal Solutions Engineer',
    points: [
      'Built and scaled a 10-member CRM strategy and architecture team, improving delivery efficiency by 50%.',
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
      'Led a team of 7 solutions engineers while carrying a quota — full individual attainment and top regional performance in Nordilux.',
      'Secured enterprise deals by aligning CRM architecture with customer growth strategies.',
      'Designed AI-driven CRM automation workflows that improved engagement and pipeline conversion.',
      'Built enablement programmes that cut sales engineer onboarding time by 40%.',
    ],
    skills: ['SaaS sales engineering', 'CRM architecture', 'Enablement', 'Team leadership'],
  },
  {
    company: 'Limelight Networks',
    location: 'India',
    title: 'Solutions Engineer',
    period: 'May 2019 — Aug 2020',
    points: [
      'Supported enterprise streaming and CDN clients across APAC with 100% quota attainment.',
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
    body: 'API-led and event-driven integration across cloud, SaaS, ERP, CRM and legacy estates. iPaaS, CDN, cloud and edge.',
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
    title: 'CRM Transformation',
    body: 'CRM strategy and architecture on HubSpot and Salesforce, aligning customer processes with how the business grows.',
  },
  {
    title: 'Stakeholder & Programme Management',
    body: 'C-level and enterprise client engagement, Agile and Scrum delivery, risk mitigation and cross-functional alignment.',
  },
]

export const tools = ['Frends', 'HubSpot', 'Salesforce', 'Akamai', 'AWS', 'Jira', 'Confluence', 'Productive', 'Python', 'Bash']

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
