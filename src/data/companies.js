import azalImg from "@/assets/logos/azal-logo.png";

export const companies = [
  {
    code: "HDGC",
    slug: "high-dam-general-contracting",
    name: { 
      en: "High Dam General Contracting", 
      ar: "السد العالي للمقاولات العامة" 
    },
    tagline: { 
      en: "General Contracting | Civil | Mechanical | Electrical (MEP)", 
      ar: "مقاولات عامة | مدني | ميكانيكا | كهرباء (MEP)" 
    },
    role: { 
      en: "Primary construction and execution arm delivering core works for EPC and industrial projects.", 
      ar: "ذراع البناء والتنفيذ الأساسي لتقديم الأعمال الأساسية لمشاريع EPC والصناعة." 
    },
    description: { 
      en: "High Dam General Contracting provides general contracting and sub-contracting services with strong expertise in civil, mechanical, and electrical works, executed in accordance with ARAMCO, SABIC, and EPC standards.", 
      ar: "تقدم السد العالي للمقاولات العامة خدمات المقاولات العامة ومن الباطن بخبرة قوية في الأعمال المدنية والميكانيكية والكهربائية، منفذة وفقاً لمعايير أرامكو وسابك و EPC." 
    },
    capabilities: {
      en: [
        "General and sub-contracting services", 
        "Civil, concrete, and structural works", 
        "Mechanical installations and industrial piping", 
        "Electrical power distribution and lighting systems", 
        "Site execution, supervision, and project control"
      ],
      ar: [
        "خدمات المقاولات العامة ومن الباطن", 
        "الأعمال المدنية والخرسانية والإنشائية", 
        "التركيبات الميكانيكية والأنابيب الصناعية", 
        "أنظمة توزيع الطاقة الكهربائية والإضاءة", 
        "تنفيذ الموقع، الإشراف، والتحكم في المشاريع"
      ],
    },
    clientValue: { 
      en: "Reliable execution aligned with EPC, operator, and HSE standards.", 
      ar: "تنفيذ موثوق يتوافق مع معايير EPC والمشغل والصحة والسلامة." 
    },
    logo: "/images/logos/high-dam-gc.svg",
    color: "#0E6BA8",
    website: "https://www.high-dam.co",
  },
  {
    code: "AZAL",
    slug: "azal-projects",
    name: { en: "Azal Projects", ar: "أزال للمشاريع" },
    tagline: { en: "Dewatering | Shoring | Earthworks | Manpower | Equipment Rental | Trading", ar: "نزح المياه | التدعيم | الحفر | العمالة | تأجير المعدات | التجارة" },
    role: { en: "Project enabling and site support specialist ensuring continuity and momentum.", ar: "متخصص في تمكين المشاريع ودعم المواقع لضمان الاستمرارية والزخم." },
    description: { en: "Azal Projects provides site-enabling and project support services essential for uninterrupted EPC execution.", ar: "تقدم أزال للمشاريع خدمات تمكين المواقع ودعم المشاريع الضرورية للتنفيذ المستمر لمشاريع EPC." },
    capabilities: {
      en: ["Dewatering pump rental and sales", "Shoring systems and excavation support", "Earthworks and site preparation", "Skilled and unskilled manpower supply", "Heavy equipment and machinery rental", "Trading of construction and industrial materials"],
      ar: ["تأجير وبيع مضخات نزح المياه", "أنظمة التدعيم ودعم الحفر", "أعمال الحفر وتجهيز المواقع", "توفير العمالة الماهرة وغير الماهرة", "تأجير المعدات والآلات الثقيلة", "تجارة مواد البناء والصناعة"],
    },
    clientValue: { en: "Rapid mobilization, cost efficiency, and reduced site downtime.", ar: "تعبئة سريعة، كفاءة في التكلفة، وتقليل وقت تعطل الموقع." },
    logo: azalImg,
    color: "#7C3AED",
    website: "https://www.azalprojects.com/",
  },
  {
    code: "HYK",
    slug: "hayyakom-travel",
    name: { en: "Hayyakom Travel & Tourism", ar: "هياكم للسفر والسياحة" },
    tagline: { en: "Corporate Travel | Workforce Mobilization | Recruitment | Visa Assistance", ar: "سفر الشركات | تعبئة القوى العاملة | التوظيف | المساعدة في التأشيرات" },
    role: { en: "Workforce mobility and logistics partner for project-based organizations.", ar: "شريك تنقل القوى العاملة واللوجستيات للمنظمات القائمة على المشاريع." },
    description: { en: "Hayyakom Travel & Tourism manages corporate travel and mobilization requirements for projects and executive operations.", ar: "تدير هياكم للسفر والسياحة متطلبات سفر الشركات وتعبئة القوى العاملة للمشاريع والعمليات التنفيذية." },
    capabilities: {
      en: ["Corporate travel account management", "Visa processing and documentation", "Structured project mobilization travel", "Cost-efficient and compliant solutions"],
      ar: ["إدارة حسابات سفر الشركات", "معالجة التأشيرات والوثائق", "سفر منظم لتعبئة المشاريع", "حلول فعالة من حيث التكلفة ومتوافقة مع الأنظمة"],
    },
    clientValue: { en: "Faster workforce deployment with full compliance and coordination.", ar: "نشر أسرع للقوى العاملة مع الامتثال والتنسيق الكامل." },
    logo: "/images/logos/hayyakom.svg",
    color: "#1E3A8A",
    website: "https://www.hayyakom.com",
  },
  {
    code: "MEGA",
    slug: "mega-projects",
    name: { en: "Mega Projects", ar: "ميجا بروجيكتس" },
    tagline: { en: "Interior Design & Fit-Out Solutions — KSA", ar: "حلول التصميم الداخلي والتشطيبات — السعودية" },
    role: { en: "Interior design, fit-out, and furniture solutions for commercial and project facilities.", ar: "حلول التصميم الداخلي، التشطيبات، والأثاث للمرافق التجارية والمشاريع." },
    description: { en: "A leading full-service integrated fit-out company in the Middle East, specializing in delivering high-quality interiors for prestigious multinational projects, through SUNON Design and MEGA Furnitures.", ar: "شركة رائدة متكاملة الخدمات في التشطيبات بالشرق الأوسط، متخصصة في تقديم تصاميم داخلية عالية الجودة لمشاريع متعددة الجنسيات مرموقة، من خلال SUNON Design و MEGA Furnitures." },
    capabilities: {
      en: ["Turnkey interior fit-out execution", "Custom furniture manufacturing and supply", "Office, hospitality, and residential interiors", "Fast-track delivery for project facilities"],
      ar: ["تنفيذ تشطيبات داخلية مفتاحية", "تصنيع وتوريد الأثاث المخصص", "تصاميم داخلية للمكاتب والضيافة والسكن", "تسليم سريع لمرافق المشاريع"],
    },
    clientValue: { en: "Turnkey interior solutions with premium finishes and controlled timelines.", ar: "حلول داخلية مفتاحية بتشطيبات فاخرة وجداول زمنية مضبوطة." },
    logo: "/images/logos/mega-projects.svg",
    color: "#A3B826",
    website: "https://www.mega-projects.sa",
  },
  {
    code: "EAMCO",
    slug: "emdadat-aljazira-medical",
    name: { en: "Emdadat Aljazira Medical Company", ar: "شركة إمدادات الجزيرة الطبية" },
    tagline: { en: "Your Surgery Equipment Partner", ar: "شريكك في معدات الجراحة" },
    role: { en: "Medical and surgical equipment supply arm supporting healthcare projects.", ar: "ذراع توريد المعدات الطبية والجراحية الداعمة لمشاريع الرعاية الصحية." },
    description: { en: "Headquartered in Riyadh, Saudi Arabia, EAMCO serves hospitals, clinics, and healthcare providers across the Kingdom.", ar: "يقع مقرها الرئيسي في الرياض، المملكة العربية السعودية، وتخدم إمدادات الجزيرة الطبية المستشفيات والعيادات ومقدمي الرعاية الصحية في جميع أنحاء المملكة." },
    capabilities: {
      en: ["Medical and surgical equipment supply", "Hospital and clinic equipment solutions", "Healthcare project support", "After-sales service and technical support"],
      ar: ["توريد المعدات الطبية والجراحية", "حلول معدات المستشفيات والعيادات", "دعم مشاريع الرعاية الصحية", "خدمة ما بعد البيع والدعم الفني"],
    },
    clientValue: { en: "Reliable, compliant medical solutions for modern healthcare environments.", ar: "حلول طبية موثوقة ومتوافقة لبيئات الرعاية الصحية الحديثة." },
    logo: "/images/logos/eamco.svg",
    color: "#0D9488",
    website: "https://www.eamco.sa",
  },
];