export const navLinks = [
  { label: 'Home', path: '/' },
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Services',
    path: '/services',
    children: [
      { label: 'Brokerage & Investing', path: '/services/brokerage' },
      { label: 'Property Management', path: '/services/management' },
      { label: 'Construction', path: '/services/construction' },
      { label: 'Development', path: '/services/development' },
    ],
  },
  { label: 'Properties', path: '/properties' },
  { label: 'Quail Lakes', path: '/quail-lakes' },
  { label: 'News', path: '/news' },
  { label: 'Contact', path: '/contact' },
];

export const footerLinks = {
  services: [
    { label: 'Brokerage & Investing', path: '/services/brokerage' },
    { label: 'Property Management', path: '/services/management' },
    { label: 'Construction', path: '/services/construction' },
    { label: 'Development', path: '/services/development' },
  ],
  company: [
    { label: 'About Us', path: '/about' },
    { label: 'Properties', path: '/properties' },
    { label: 'Quail Lakes', path: '/quail-lakes' },
    { label: 'News & Insights', path: '/news' },
  ],
  contact: [
    { label: 'Contact Us', path: '/contact' },
  ],
};
