export const NAV_LINKS = [
  { href: "/about", label: "About" },
  { 
    href: "/services", 
    label: "Services",
    submenu: [
      { href: "/services/civil-works", label: "Civil Works", desc: "Structural & concrete works" },
      { href: "/services/mechanical-installations", label: "Mechanical", desc: "HVAC & piping systems" },
      { href: "/services/electrical-mep", label: "Electrical & MEP", desc: "Power & automation" },
      { href: "/services/dewatering-shoring", label: "Dewatering", desc: "Shoring & excavation" },
      { href: "/services/manpower-equipment", label: "Manpower", desc: "Skilled workforce" },
      { href: "/services/interior-fitout", label: "Interior Fit-Out", desc: "Turnkey solutions" },
    ]
  },
  { 
    href: "/industries", 
    label: "Industries",
    submenu: [
      { href: "/industries/oil-gas", label: "Oil & Gas", desc: "Upstream & downstream" },
      { href: "/industries/epc-industrial", label: "EPC & Industrial", desc: "Complex builds" },
      { href: "/industries/infrastructure-civil", label: "Infrastructure", desc: "Public works" },
      { href: "/industries/healthcare-medical", label: "Healthcare", desc: "Medical facilities" },
      { href: "/industries/hospitality-residential", label: "Hospitality", desc: "Hotels & residential" },
      { href: "/industries/commercial-corporate", label: "Commercial", desc: "Office & retail" },
    ]
  },
  { href: "/projects", label: "Projects" },
  { href: "/hse", label: "HSE" },
  { href: "/careers", label: "Careers" },
];