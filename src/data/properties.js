export const properties = [
  {
    id: 1,
    title: 'Quail Lakes Office Park',
    type: 'Office',
    status: 'In Development',
    address: 'NW 150th & Serenita Ave, Oklahoma City, OK',
    size: '10 Acres',
    price: 'Contact for Details',
    year: 2025,
    image: '/assets/properties/quail-lakes.jpg',
    features: ['3-Phase Development', 'Lake Views', 'Modern Architecture', 'Premium Finishes'],
    description:
      'A premier 10-acre office development in Northwest Oklahoma City. Quail Lakes represents the future of commercial real estate with modern architecture harmonized with natural beauty.',
    featured: true,
  },
  {
    id: 2,
    title: 'NW 66th Street Office',
    type: 'Office',
    status: 'Available',
    address: '200 NW 66th St, Oklahoma City, OK',
    size: '12,500 SF',
    price: '$18.50/SF/Yr NNN',
    year: 2005,
    image: '/assets/properties/office-build.png',
    features: ['Class A Office', 'Professional Suites', 'Ample Parking', 'Highway Access'],
    description:
      'Professional office space in a prime Northwest OKC location with excellent highway visibility and access to major corridors.',
    featured: true,
  },
  {
    id: 3,
    title: 'Memorial Road Retail Center',
    type: 'Retail',
    status: 'Available',
    address: '2400 W Memorial Rd, Oklahoma City, OK',
    size: '32,000 SF',
    price: '$22.00/SF/Yr NNN',
    year: 2012,
    image: '/assets/properties/yukon-retail.png',
    features: ['High Traffic', 'Signage Rights', 'End Cap Available', 'Drive-Through Capable'],
    description:
      'High-visibility retail center on one of OKC\'s busiest retail corridors with strong co-tenancy and excellent signage opportunities.',
    featured: true,
  },
  {
    id: 4,
    title: 'Edmond Business Park',
    type: 'Office',
    status: 'Available',
    address: '1500 E 15th St, Edmond, OK',
    size: '8,200 SF',
    price: '$16.00/SF/Yr FSG',
    year: 2010,
    image: '/assets/properties/commercial-okc.png',
    features: ['Updated Interiors', 'Conference Room', 'Fiber Optic', 'Professional Landscaping'],
    description:
      'Modern office space in the growing Edmond market with recently updated interiors and a professional campus environment.',
  },
  {
    id: 5,
    title: 'I-35 Industrial Warehouse',
    type: 'Industrial',
    status: 'Available',
    address: '7800 S I-35 Service Rd, Oklahoma City, OK',
    size: '48,000 SF',
    price: '$6.50/SF/Yr NNN',
    year: 2008,
    image: '/assets/properties/westmark.jpg',
    features: ['24\' Clear Height', 'Dock High Doors', 'Heavy Power', 'Fenced Yard'],
    description:
      'Well-maintained industrial warehouse with direct I-35 access, ideal for distribution, manufacturing, or logistics operations.',
  },
  {
    id: 6,
    title: 'NW Expressway Pad Site',
    type: 'Land',
    status: 'Available',
    address: 'NW Expressway & Council Rd, Oklahoma City, OK',
    size: '2.5 Acres',
    price: 'Contact for Pricing',
    year: 2025,
    image: '/assets/properties/yukon-angle.jpg',
    features: ['High Visibility', 'Hard Corner', 'Utilities Available', 'Build-to-Suit'],
    description:
      'Premium development pad site at a major intersection on NW Expressway. Ideal for retail, restaurant, or professional office development.',
  },
];

export const propertyTypes = ['All', 'Office', 'Retail', 'Industrial', 'Land'];
export const propertyStatuses = ['All', 'Available', 'In Development'];

export const featuredProperties = properties.filter((p) => p.featured);

export const getPropertyById = (id) =>
  properties.find((p) => p.id === Number(id));
