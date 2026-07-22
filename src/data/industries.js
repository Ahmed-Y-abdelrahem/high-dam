//  استيراد الصور من assets
import oilGasImg from "@/assets/images/industries/oil-gas.png";
import epcIndustrialImg from "@/assets/images/industries/epc-industrial.png";
import infrastructureImg from "@/assets/images/industries/infrastructure-civil.png";
import healthcareImg from "@/assets/images/industries/healthcare-medical.png";
import hospitalityImg from "@/assets/images/industries/hospitality-residential.png";
import commercialImg from "@/assets/images/industries/commercial-corporate.png";

export const industries = [
  {
    code: "IND-01",
    slug: "oil-gas",
    name: { en: "Oil & Gas", ar: "النفط والغاز" },
    description: { en: "Upstream and downstream oil & gas facilities, refineries, and petrochemical plants.", ar: "مرافق النفط والغاز upstream و downstream، المصافي، ومصانع البتروكيماويات." },
    longDescription: { en: "Comprehensive execution services for the oil & gas sector, including upstream production facilities, downstream refineries, petrochemical plants, and gas processing facilities. We deliver projects in compliance with ARAMCO, SABIC, and international standards.", ar: "خدمات تنفيذ شاملة لقطاع النفط والغاز، تشمل مرافق الإنتاج، المصافي، مصانع البتروكيماويات، ومرافق معالجة الغاز. ننفذ المشاريع وفقاً لمعايير أرامكو وسابك والمعايير الدولية." },
    image: oilGasImg,
    altText: { en: "Oil & Gas industry services Saudi Arabia", ar: "خدمات قطاع النفط والغاز في السعودية" },
    services: {
      en: ["Process piping and mechanical installations", "Electrical and instrumentation works", "HVAC systems for industrial facilities", "Fire fighting and suppression systems", "Civil and structural works", "Dewatering and shoring for excavation", "Manpower supply and equipment rental"],
      ar: ["تمديدات الأنابيب والتركيبات الميكانيكية", "الأعمال الكهربائية والأجهزة", "أنظمة التكييف للمرافق الصناعية", "أنظمة مكافحة الحرائق والإخماد", "الأعمال المدنية والإنشائية", "أنظمة التجفيف والتدعيم للحفر", "توريد العمالة وتأجير المعدات"],
    },
    projects: {
      en: ["Haradh Gas Compression Plant", "Sadara LSPB & Isocyanates Project", "Multiple ARAMCO facility upgrades"],
      ar: ["محطة ضغط الغاز في حرض", "مشروع صدرة LSPB والأيزوسيانات", "تحديثات متعددة لمرافق أرامكو"],
    },
    challenges: {
      en: ["Hazardous area installations (Zone 1 & 2)", "Extreme desert climate conditions", "Strict ARAMCO safety protocols", "Integration with existing plant systems", "Remote location logistics"],
      ar: ["التركيبات في المناطق الخطرة (منطقة 1 و 2)", "ظروف مناخ الصحراء القاسية", "بروتوكولات السلامة الصارمة لأرامكو", "التكامل مع أنظمة المصنع القائمة", "اللوجستيات في المواقع النائية"],
    },
    solutions: {
      en: ["Explosion-proof equipment with ATEX certification", "Climate-resistant materials and systems", "Daily safety briefings and compliance audits", "Advanced PLC integration with plant DCS", "Dedicated logistics team and on-site storage"],
      ar: ["معدات مضادة للانفجار بشهادة ATEX", "مواد وأنظمة مقاومة للمناخ", "إيجازات السلامة اليومية وعمليات التدقيق", "تكامل PLC متقدم مع DCS المصنع", "فريق لوجستي مخصص وتخزين في الموقع"],
    },
  },
  {
    code: "IND-02",
    slug: "epc-industrial",
    name: { en: "EPC & Industrial", ar: "الهندسة والمشتريات والبناء (EPC) والصناعة" },
    description: { en: "Engineering, procurement, and construction for complex industrial projects.", ar: "الهندسة والمشتريات والبناء للمشاريع الصناعية المعقدة." },
    longDescription: { en: "Full EPC services for industrial projects including power plants, manufacturing facilities, warehouses, and industrial complexes. We provide integrated solutions from design through commissioning.", ar: "خدمات EPC كاملة للمشاريع الصناعية بما في ذلك محطات الطاقة، مرافق التصنيع، المستودعات، والمجمعات الصناعية. نقدم حلولاً متكاملة من التصميم حتى التشغيل." },
    image: epcIndustrialImg,
    altText: { en: "EPC industrial projects Saudi Arabia", ar: "مشاريع EPC الصناعية في السعودية" },
    services: {
      en: ["Civil and structural works", "Mechanical installations", "Electrical and MEP systems", "Industrial piping", "Steel fabrication and erection", "Equipment installation and commissioning", "Project management and supervision"],
      ar: ["الأعمال المدنية والإنشائية", "التركيبات الميكانيكية", "أنظمة الكهرباء وMEP", "الأنابيب الصناعية", "تصنيع وتركيب الحديد", "تركيب وتشغيل المعدات", "إدارة المشاريع والإشراف"],
    },
    projects: {
      en: ["Multiple industrial facility expansions", "Warehouse and logistics centers", "Manufacturing plant upgrades"],
      ar: ["توسعات متعددة للمرافق الصناعية", "مراكز المستودعات واللوجستيات", "تحديثات مصانع التصنيع"],
    },
    challenges: {
      en: ["Complex multi-discipline coordination", "Tight project schedules", "Integration with existing operations", "Quality control across multiple work fronts", "Vendor and subcontractor management"],
      ar: ["تنسيق معقد متعدد التخصصات", "جداول زمنية ضيقة للمشاريع", "التكامل مع العمليات القائمة", "مراقبة الجودة عبر واجهات عمل متعددة", "إدارة الموردين والمقاولين من الباطن"],
    },
    solutions: {
      en: ["Integrated project management team", "Fast-track construction methodologies", "Phased execution to minimize disruption", "Rigorous QA/QC procedures", "Pre-qualified vendor network"],
      ar: ["فريق إدارة مشاريع متكامل", "منهجيات بناء سريعة", "تنفيذ على مراحل لتقليل التعطيل", "إجراءات صارمة لضمان ومراقبة الجودة", "شبكة موردين مؤهلين مسبقاً"],
    },
  },
  {
    code: "IND-03",
    slug: "infrastructure-civil",
    name: { en: "Infrastructure & Civil", ar: "البنية التحتية والأعمال المدنية" },
    description: { en: "Public infrastructure, roads, bridges, and civil engineering projects.", ar: "البنية التحتية العامة، الطرق، الجسور، ومشاريع الهندسة المدنية." },
    longDescription: { en: "Infrastructure development services including roads, bridges, utilities, public facilities, and civil engineering projects. We support government entities and developers in delivering critical infrastructure.", ar: "خدمات تطوير البنية التحتية بما في ذلك الطرق، الجسور، المرافق، المرافق العامة، ومشاريع الهندسة المدنية. ندعم الجهات الحكومية والمطورين في تسليم البنية التحتية الحيوية." },
    image: infrastructureImg,
    altText: { en: "Infrastructure and civil projects Saudi Arabia", ar: "مشاريع البنية التحتية والمدنية في السعودية" },
    services: {
      en: ["Road construction and pavement", "Bridge and structural works", "Utility installation (water, sewer, electrical)", "Earthworks and site preparation", "Concrete and structural works", "Dewatering and shoring systems", "Manpower and equipment supply"],
      ar: ["إنشاء الطرق والأرصفة", "أعمال الجسور والإنشاءات", "تركيب المرافق (مياه، صرف صحي، كهرباء)", "أعمال الحفر وتجهيز المواقع", "الأعمال الخرسانية والإنشائية", "أنظمة نزح المياه وتدعيم الحفر", "توفير العمالة والمعدات"],
    },
    projects: {
      en: ["Riyadh Metro Line 3 Electrical Works", "Al-Khobar Water Tower Structural Strengthening", "Multiple road and infrastructure projects"],
      ar: ["الأعمال الكهربائية لمترو الرياض الخط 3", "التدعيم الإنشائي لبرج مياه الخبر", "مشاريع متعددة للطرق والبنية التحتية"],
    },
    challenges: {
      en: ["Working in urban environments", "Traffic management and public safety", "Utility relocation and coordination", "Geotechnical challenges", "Weather conditions affecting work"],
      ar: ["العمل في البيئات الحضرية", "إدارة المرور والسلامة العامة", "نقل وتنسيق المرافق", "التحديات الجيوتقنية", "ظروف الطقس المؤثرة على العمل"],
    },
    solutions: {
      en: ["Comprehensive traffic management plans", "Advanced geotechnical investigations", "Weather-adaptive work scheduling", "Close coordination with utility providers", "Specialized equipment for confined spaces"],
      ar: ["خطط شاملة لإدارة المرور", "تحقيقات جيوتقنية متقدمة", "جدولة عمل تتكيف مع الطقس", "تنسيق وثيق مع مقدمي المرافق", "معدات متخصصة للمساحات الضيقة"],
    },
  },
  {
    code: "IND-04",
    slug: "healthcare-medical",
    name: { en: "Healthcare & Medical", ar: "الرعاية الصحية والطبية" },
    description: { en: "Hospitals, clinics, medical facilities, and healthcare infrastructure.", ar: "المستشفيات، العيادات، المرافق الطبية، والبنية التحتية للرعاية الصحية." },
    longDescription: { en: "Specialized construction and MEP services for healthcare facilities including hospitals, clinics, medical centers, and laboratories. We ensure compliance with healthcare standards and infection control requirements.", ar: "خدمات إنشاءات وMEP متخصصة للمرافق الصحية بما في ذلك المستشفيات، العيادات، المراكز الطبية، والمختبرات. نضمن الامتثال لمعايير الرعاية الصحية ومتطلبات مكافحة العدوى." },
    image: healthcareImg,
    altText: { en: "Healthcare and medical facilities construction Saudi Arabia", ar: "إنشاء المرافق الصحية والطبية في السعودية" },
    services: {
      en: ["HVAC systems with HEPA filtration", "Medical gas piping systems", "Electrical and emergency power systems", "Fire alarm and suppression systems", "Clean room construction", "Laboratory facilities", "Infection control measures (ICRA)"],
      ar: ["أنظمة التكييف مع فلاتر HEPA", "أنظمة تمديد الغازات الطبية", "أنظمة الطاقة الكهربائية والطارئة", "أنظمة إنذار وإخماد الحريق", "بناء الغرف النظيفة", "مرافق المختبرات", "إجراءات مكافحة العدوى (ICRA)"],
    },
    projects: {
      en: ["King Faisal Specialist Hospital Jeddah", "Aramco Health Center Projects", "Multiple clinic and medical facility upgrades"],
      ar: ["مستشفى الملك فيصل التخصصي جدة", "مشاريع مراكز أرامكو الصحية", "تحديثات متعددة للعيادات والمرافق الطبية"],
    },
    challenges: {
      en: ["Working in operational healthcare facilities", "Strict infection control requirements", "Minimal disruption to patient care", "Coordination with medical equipment", "Compliance with healthcare regulations"],
      ar: ["العمل في مرافق رعاية صحية قيد التشغيل", "متطلبات صارمة لمكافحة العدوى", "أقل قدر من التعطيل لرعاية المرضى", "التنسيق مع المعدات الطبية", "الامتثال للوائح الرعاية الصحية"],
    },
    solutions: {
      en: ["Phased execution with ICRA protocols", "After-hours critical works", "Temporary systems during transition", "Close coordination with hospital staff", "Healthcare-experienced team"],
      ar: ["تنفيذ على مراحل مع بروتوكولات ICRA", "أعمال حرجة بعد ساعات العمل", "أنظمة مؤقتة أثناء الانتقال", "تنسيق وثيق مع طاقم المستشفى", "فريق ذو خبرة في الرعاية الصحية"],
    },
  },
  {
    code: "IND-05",
    slug: "hospitality-residential",
    name: { en: "Hospitality & Residential", ar: "الضيافة والسكن" },
    description: { en: "Hotels, resorts, residential towers, and mixed-use developments.", ar: "الفنادق، المنتجعات، الأبراج السكنية، والتطويرات متعددة الاستخدامات." },
    longDescription: { en: "Construction and fit-out services for hospitality and residential projects including hotels, resorts, residential towers, and mixed-use developments. We deliver premium quality with attention to detail.", ar: "خدمات البناء والتشطيب لمشاريع الضيافة والسكن بما في ذلك الفنادق، المنتجعات، الأبراج السكنية، والتطويرات متعددة الاستخدامات. نقدم جودة فاخرة مع الاهتمام بالتفاصيل." },
    image: hospitalityImg,
    altText: { en: "Hospitality and residential projects Saudi Arabia", ar: "مشاريع الضيافة والسكن في السعودية" },
    services: {
      en: ["Interior fit-out and finishing", "MEP systems installation", "Custom furniture manufacturing", "Landscaping and external works", "Smart building systems", "Audio-visual and entertainment systems", "Facility management support"],
      ar: ["التشطيبات والتجهيزات الداخلية", "تركيب أنظمة MEP", "تصنيع الأثاث المخصص", "أعمال تنسيق الحدائق والخارجية", "أنظمة المباني الذكية", "أنظمة الصوتيات والترفيه", "دعم إدارة المرافق"],
    },
    projects: {
      en: ["Multiple hotel fit-out projects", "Residential tower developments", "Mixed-use commercial complexes"],
      ar: ["مشاريع متعددة لتجهيز الفنادق", "تطويرات الأبراج السكنية", "مجمعات تجارية متعددة الاستخدامات"],
    },
    challenges: {
      en: ["High-quality finish requirements", "Coordination with multiple designers", "Custom and bespoke elements", "Tight handover deadlines", "Integration of smart systems"],
      ar: ["متطلبات تشطيبات عالية الجودة", "التنسيق مع مصممين متعددين", "عناصر مخصصة وفريدة", "مواعيد نهائية ضيقة للتسليم", "دمج الأنظمة الذكية"],
    },
    solutions: {
      en: ["In-house design and manufacturing", "Dedicated project management team", "Mock-up approvals before full production", "Fast-track construction methodologies", "Experienced fit-out specialists"],
      ar: ["التصميم والتصنيع الداخلي", "فريق إدارة مشاريع مخصص", "موافقات على النماذج الأولية قبل الإنتاج الكامل", "منهجيات بناء سريعة", "متخصصون ذوو خبرة في التشطيبات"],
    },
  },
  {
    code: "IND-06",
    slug: "commercial-corporate",
    name: { en: "Commercial & Corporate", ar: "التجاري والشركات" },
    description: { en: "Office buildings, retail spaces, and corporate headquarters.", ar: "مباني المكاتب، مساحات التجزئة، والمقار الرئيسية للشركات." },
    longDescription: { en: "Construction and fit-out services for commercial and corporate projects including office buildings, retail spaces, corporate headquarters, and business centers. We deliver functional and aesthetically pleasing spaces.", ar: "خدمات البناء والتشطيب للمشاريع التجارية والشركات بما في ذلك مباني المكاتب، مساحات التجزئة، المقار الرئيسية للشركات، ومراكز الأعمال. نقدم مساحات وظيفية وجمالية." },
    image: commercialImg,
    altText: { en: "Commercial and corporate projects Saudi Arabia", ar: "المشاريع التجارية والشركات في السعودية" },
    services: {
      en: ["Office fit-out and refurbishment", "Retail space construction", "Corporate headquarters development", "MEP systems installation", "Interior design and architecture", "Custom furniture and fixtures", "Building automation systems"],
      ar: ["تجهيز وتجديد المكاتب", "بناء مساحات التجزئة", "تطوير المقار الرئيسية للشركات", "تركيب أنظمة MEP", "التصميم الداخلي والهندسة المعمارية", "الأثاث والتجهيزات المخصصة", "أنظمة أتمتة المباني"],
    },
    projects: {
      en: ["Multiple corporate office fit-outs", "Retail center developments", "Business center constructions"],
      ar: ["تجهيزات متعددة لمكاتب الشركات", "تطويرات مراكز التجزئة", "إنشاءات مراكز الأعمال"],
    },
    challenges: {
      en: ["Minimal disruption to ongoing operations", "High-quality finish requirements", "Integration with existing building systems", "Tight project schedules", "Coordination with multiple stakeholders"],
      ar: ["أقل قدر من التعطيل للعمليات الجارية", "متطلبات تشطيبات عالية الجودة", "التكامل مع أنظمة المبنى القائمة", "جداول زمنية ضيقة للمشاريع", "التنسيق مع أصحاب مصلحة متعددين"],
    },
    solutions: {
      en: ["Phased execution during off-hours", "In-house design and manufacturing", "Advanced BIM coordination", "Fast-track construction methods", "Dedicated client liaison team"],
      ar: ["تنفيذ على مراحل خلال ساعات غير العمل", "التصميم والتصنيع الداخلي", "تنسيق BIM متقدم", "طرق بناء سريعة", "فريق اتصال مخصص مع العميل"],
    },
  },
];