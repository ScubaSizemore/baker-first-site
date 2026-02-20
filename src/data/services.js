export const services = [
  {
    id: 'brokerage',
    title: 'Brokerage & Investing',
    slug: 'brokerage',
    tagline: 'Strategic Acquisitions & Dispositions',
    description:
      'Strategic acquisitions, dispositions, and investment analysis for commercial properties across Oklahoma.',
    features: [
      'Market Analysis',
      'Property Valuation',
      'Lease Negotiation',
      'Investment Advisory',
      'Tenant Representation',
      'Landlord Representation',
    ],
    stats: [
      { label: 'Transactions Closed', value: '500+' },
      { label: 'Years of Experience', value: '37+' },
      { label: 'Active Listings', value: '50+' },
    ],
    icon: 'TrendingUp',
    color: 'heritage-red',
  },
  {
    id: 'management',
    title: 'Property Management',
    slug: 'management',
    tagline: 'Protecting Your Investment',
    description:
      'Comprehensive management services maximizing property value and tenant satisfaction through Baker First Management Corporation.',
    features: [
      'Tenant Relations',
      'Maintenance & Repairs',
      'Financial Reporting',
      'Lease Administration',
      'Vendor Management',
      'Capital Improvements',
    ],
    stats: [
      { label: 'SF Under Management', value: '2M+' },
      { label: 'Properties Managed', value: '50+' },
      { label: 'Tenant Retention', value: '95%' },
    ],
    icon: 'Building2',
    color: 'accent-cyan',
  },
  {
    id: 'construction',
    title: 'Construction',
    slug: 'construction',
    tagline: 'Quality Built from the Ground Up',
    description:
      'Ground-up construction and tenant build-outs delivered on time and on budget with uncompromising quality.',
    features: [
      'Ground-Up Construction',
      'Tenant Build-Outs',
      'Renovations',
      'Project Management',
      'Pre-Construction Planning',
      'Quality Assurance',
    ],
    stats: [
      { label: 'Projects Completed', value: '500+' },
      { label: 'SF Constructed', value: '2M+' },
      { label: 'On-Time Delivery', value: '98%' },
    ],
    icon: 'Hammer',
    color: 'accent-gold',
  },
  {
    id: 'development',
    title: 'Development',
    slug: 'development',
    tagline: 'From Vision to Landmark',
    description:
      'Identifying opportunities and transforming vision into reality through Alliance Property Development, established 1995.',
    features: [
      'Site Selection',
      'Feasibility Studies',
      'Land Acquisition',
      'Entitlements & Permitting',
      'Project Development',
      'Disposition Strategy',
    ],
    stats: [
      { label: 'Developments Completed', value: '40+' },
      { label: 'Featured Project', value: 'Quail Lakes' },
      { label: 'Since', value: '1995' },
    ],
    icon: 'BarChart3',
    color: 'heritage-red',
  },
];

export const getServiceBySlug = (slug) =>
  services.find((s) => s.slug === slug);
