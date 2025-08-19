export type Feature = {
  title: string;
  description: string;
  //   icon: React.ReactNode;
};

export type Item = {
  name: string;
  //   icon?: React.ReactNode; // Optional icon for partner
}

export const SOLUTION_FEATURES: Feature[] = [
  {
    title: 'Cloud Native',
    description:
      'Migrate to a modern, future-proof, high-performance cloud platform with cost-effective licensing',
    //     icon: <SiVmware className="text-indigo-400 text-2xl" />,
  },
  {
    title: 'Infrastruture Services',
    description:
      'Build, deploy, manage and host apps on any infrastructure anywhere, with DevOps integration',
    //     icon: <FaCloud className="text-indigo-400 text-2xl" />,
  },
  {
    title: 'IT Automation',
    description:
      'Get fast, scalable, cost-efficient storage with the best price-performance',
    //     icon: <MdStorage className="text-indigo-400 text-2xl" />,
  },
  {
    title: 'DevSecOps',
    description:
      'Host, build, deploy, modernize & manage apps in efficient elastic cloud with DevOps integration',
    //     icon: <BsCpu className="text-indigo-400 text-2xl" />,
  },
  {
    title: 'Training & Certification',
    description:
      'Simplify database infrastructure, automate management, move to database as a service',
    //     icon: <FaDatabase className="text-indigo-400 text-2xl" />,
  }
];

export const INDUSTRY_FEATURES: Feature[] = [
  {
    title: 'Banking & Insurance',
    description:
      'HawkStack Technologies empowers banking and insurance institutions with cutting-edge DevOps, cloud, and security solutions.',
    //     icon: <SiVmware className="text-indigo-400 text-2xl" />,
  },
  {
    title: 'E-commerce & Retail',
    description:
      'HawkStack Technologies empowers e-commerce and retail businesses with scalable, secure, and high-performance IT solutions.',
    //     icon: <SiVmware className="text-indigo-400 text-2xl" />,
  },
  {
    title: 'Telecom',
    description:
      'HawkStack Technologies enables telecom companies to modernize their infrastructure with scalable, secure, and automated solutions.',
    //     icon: <SiVmware className="text-indigo-400 text-2xl" />,
  },
  {
    title: 'Manufacturing',
    description:
      'HawkStack Technologies drives digital transformation in manufacturing with secure, scalable, and automated IT solutions.',
    //     icon: <SiVmware className="text-indigo-400 text-2xl" />,
  },
  {
    title: 'Healthcare & Technology',
    description:
      'HawkStack Technologies empowers healthcare and technology providers with secure, scalable, and compliant IT solutions.',
    //     icon: <SiVmware className="text-indigo-400 text-2xl" />,
  },
];

export const PARTNERS: Item[] = [
  {
    name: 'IaaS Providers',
  },
  {
    name: 'PaaS Providers',
  },
  {
    name: 'Technology Partners',
  },
  {
    name: 'Distributers',
  },
  {
    name: 'Resellers',
  },
]

export const COMPANY: Item[] = [
  {
    name: 'Overview',
  },
  {
    name: 'Careers',
  },
  {
    name: 'Contact Us',
  }
]


export const WHYHAWKSTACK = [
  {
    title: 'Integrated Excellence',
    description:
      'Our integrated approach ensures synergy across diverse technology domains empowering comprehensive organizational advancement.',
    position: 'top-left',
  },
  {
    title: 'Innovate with Confidence',
    description:
      'With a culture of continuous improvement and forward-looking strategies, HawkStack\'s commitment to innovation is unparalleled.',
    position: 'top-right',
  },
  {
    title: 'End-to-End Empowerment',
    description:
      'From IT Automation to Training & Certification, HawkStack empowers clients with comprehensive solutions to empower your business.',
    position: 'bottom-left',
  },
  {
    title: 'Strategic Foresight',
    description:
      'Stay ahead of the digital wave with HawkStack\'s foresight-driven, strategic solutions and grow your business.',
    position: 'bottom-right',
  },
];
