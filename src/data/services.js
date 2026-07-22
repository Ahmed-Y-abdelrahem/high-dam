//  استيراد الصور من assets
import civilImg from "@/assets/images/services/civil.png";
import mechanicalImg from "@/assets/images/services/mechanical.png";
import electricalImg from "@/assets/images/services/electrical.png";
import dewateringImg from "@/assets/images/services/dewatering.png";
import manpowerImg from "@/assets/images/services/manpower.png";
import fitoutImg from "@/assets/images/services/fitout.png";
import medicalImg from "@/assets/images/services/medical.png";
import mobilizationImg from "@/assets/images/services/mobilization.png";

export const services = [
  {
    code: "SRV-CIV",
    slug: "civil-works",
    title: { en: "Civil Works", ar: "الأعمال المدنية" },
    company: { en: "High Dam General Contracting", ar: "السد العالي للمقاولات العامة" },
    shortDescription: { en: "Civil, concrete, and structural works executed to ARAMCO, SABIC, and EPC standards.", ar: "أعمال مدنية وخرسانة وإنشائية منفذة وفقاً لمعايير أرامكو وسابك وEPC." },
    description: { en: "Our civil works division delivers comprehensive construction solutions including concrete structures, steel fabrication, and civil infrastructure.", ar: "يقسم الأعمال المدنية يقدم حلول إنشاءات شاملة تشمل الهياكل الخرسانية وتصنيع الحديد والإنشاءات المدنية." },
    image: civilImg,
    altText: { en: "Civil works construction services in Saudi Arabia", ar: "خدمات الإنشاءات والأعمال المدنية في السعودية" },
    features: {
      en: ["Reinforced concrete structures", "Steel fabrication and erection", "Foundation and substructure works", "Roads and pavement construction", "Site preparation and earthworks", "Structural inspections and testing"],
      ar: ["الهياكل الخرسانية المسلحة", "تصنيع وتركيب الحديد", "أعمال الأساسات والأعمال التحتانية", "إنشاء الطرق والأرصفة", "تجهيز المواقع وأعمال الحفر", "فحوصات واختبارات إنشائية"],
    },
    advantages: {
      en: ["Compliance with ARAMCO and SABIC standards", "Experienced engineering team", "Modern equipment and machinery", "Quality assurance at every stage"],
      ar: ["الالتزام بمعايير أرامكو وسابك", "فريق هندسي ذو خبرة", "معدات وآلات حديثة", "ضمان الجودة في كل مرحلة"],
    },
  },
  {
    code: "SRV-MEC",
    slug: "mechanical-installations",
    title: { en: "Mechanical Installations", ar: "التركيبات الميكانيكية" },
    company: { en: "High Dam General Contracting", ar: "السد العالي للمقاولات العامة" },
    shortDescription: { en: "Industrial piping, HVAC systems, and mechanical installations for industrial plants.", ar: "تمديدات الأنابيب الصناعية، أنظمة التكييف، والتركيبات الميكانيكية للمصانع." },
    description: { en: "We provide complete mechanical installation services for industrial facilities, including piping systems, HVAC, and specialized mechanical equipment.", ar: "نقدم خدمات تركيب ميكانيكية كاملة للمرافق الصناعية، بما في ذلك أنظمة الأنابيب والتكييف والمعدات الميكانيكية المتخصصة." },
    image: mechanicalImg,
    altText: { en: "Mechanical installations and industrial piping services", ar: "خدمات التركيبات الميكانيكية والأنابيب الصناعية" },
    features: {
      en: ["Industrial piping systems", "HVAC installation and commissioning", "Pump and compressor installation", "Mechanical equipment alignment", "Pressure testing and inspection", "Preventive maintenance programs"],
      ar: ["أنظمة الأنابيب الصناعية", "تركيب وتشغيل أنظمة التكييف", "تركيب المضخات والضواغط", "محاذاة المعدات الميكانيكية", "اختبار وفحص الضغط", "برامج الصيانة الوقائية"],
    },
    advantages: {
      en: ["Certified mechanical engineers", "Advanced welding techniques", "Comprehensive testing protocols", "Long-term maintenance support"],
      ar: ["مهندسون ميكانيكيون معتمدون", "تقنيات لحام متقدمة", "بروتوكولات اختبار شاملة", "دعم الصيانة طويلة الأمد"],
    },
  },
  {
    code: "SRV-ELE",
    slug: "electrical-mep",
    title: { en: "Electrical & MEP", ar: "الأعمال الكهربائية و MEP" },
    company: { en: "High Dam General Contracting", ar: "السد العالي للمقاولات العامة" },
    shortDescription: { en: "Power distribution, lighting systems, and full MEP execution and testing.", ar: "توزيع الطاقة، أنظمة الإضاءة، والتنفيذ والاختبار الكامل لأعمال MEP." },
    description: { en: "Our electrical and MEP services cover complete power distribution systems, lighting, fire alarm systems, and building automation.", ar: "تغطي خدماتنا الكهربائية وMEP أنظمة توزيع الطاقة الكاملة، والإضاءة، وأنظمة إنذار الحريق، وأتمتة المباني." },
    image: electricalImg,
    altText: { en: "Electrical and MEP contracting services Saudi Arabia", ar: "خدمات مقاولات الكهرباء وMEP في السعودية" },
    features: {
      en: ["High and medium voltage systems", "Power distribution panels", "Lighting systems design and installation", "Fire alarm and detection systems", "Building automation systems", "Cable management and routing"],
      ar: ["أنظمة الجهد العالي والمتوسط", "لوحات توزيع الطاقة", "تصميم وتركيب أنظمة الإضاءة", "أنظمة إنذار وكشف الحريق", "أنظمة أتمتة المباني", "إدارة وتمديد الكابلات"],
    },
    advantages: {
      en: ["Licensed electrical engineers", "Latest testing equipment", "Energy-efficient solutions", "24/7 technical support"],
      ar: ["مهندسون كهربائيون مرخصون", "أحدث معدات الاختبار", "حلول موفرة للطاقة", "دعم فني على مدار الساعة"],
    },
  },
  {
    code: "SRV-DEW",
    slug: "dewatering-shoring",
    title: { en: "Dewatering & Shoring", ar: "نزح المياه وتدعيم الحفر" },
    company: { en: "Azal Projects", ar: "أزال للمشاريع" },
    shortDescription: { en: "Dewatering pump rental, shoring systems, and excavation support for uninterrupted execution.", ar: "تأجير مضخات نزح المياه، أنظمة التدعيم، ودعم الحفر للتنفيذ دون انقطاع." },
    description: { en: "Azal Projects specializes in dewatering and shoring solutions, providing reliable equipment and expert support for excavation and foundation works.", ar: "تتخصص أزال للمشاريع في حلول نزح المياه والتدعيم، وتوفر معدات موثوقة ودعم خبراء لأعمال الحفر والأساسات." },
    image: dewateringImg,
    altText: { en: "Dewatering and shoring services Saudi Arabia", ar: "خدمات نزح المياه وتدعيم الحفر في السعودية" },
    features: {
      en: ["Wellpoint dewatering systems", "Deep well dewatering", "Sheet pile shoring", "Soldier pile and lagging", "Excavation support design", "24/7 monitoring and maintenance"],
      ar: ["أنظمة نزح المياه بالنقاط", "نزح المياه بالآبار العميقة", "تدعيم الخوازيق المعدنية", "تدعيم الخوازيق والألواح", "تصميم دعم الحفر", "المراقبة والصيانة على مدار الساعة"],
    },
    advantages: {
      en: ["Modern dewatering equipment", "Experienced geotechnical team", "Rapid mobilization", "Comprehensive site assessment"],
      ar: ["معدات نزح مياه حديثة", "فريق جيوتقني ذو خبرة", "تعبئة سريعة", "تقييم شامل للموقع"],
    },
  },
  {
    code: "SRV-MAN",
    slug: "manpower-equipment",
    title: { en: "Manpower & Equipment", ar: "توفير العمالة والمعدات" },
    company: { en: "Azal Projects", ar: "أزال للمشاريع" },
    shortDescription: { en: "Skilled and unskilled manpower supply plus heavy equipment and machinery rental.", ar: "توفير عمالة ماهرة وغير ماهرة بالإضافة إلى تأجير المعدات والآلات الثقيلة." },
    description: { en: "We provide comprehensive manpower solutions and heavy equipment rental services, ensuring your project has the right people and machinery.", ar: "نقدم حلول عمالة شاملة وخدمات تأجير معدات ثقيلة، لضمان حصول مشروعك على الأشخاص والآلات المناسبة." },
    image: manpowerImg,
    altText: { en: "Manpower supply and heavy equipment rental Saudi Arabia", ar: "توفير العمالة وتأجير المعدات الثقيلة في السعودية" },
    features: {
      en: ["Skilled craftsmen and technicians", "Heavy equipment operators", "HSE officers and supervisors", "Crane and lifting equipment", "Earthmoving machinery", "Specialized construction equipment"],
      ar: ["حرفيون وفنيون مهرة", "مشغلو المعدات الثقيلة", "ضباط ومشرفو الصحة والسلامة", "معدات الرافعات والرفع", "آلات تحريك التربة", "معدات بناء متخصصة"],
    },
    advantages: {
      en: ["ARAMCO-approved personnel", "Flexible rental terms", "Regular equipment maintenance", "Competitive pricing"],
      ar: ["موظفون معتمدون من أرامكو", "شروط تأجير مرنة", "صيانة دورية للمعدات", "أسعار تنافسية"],
    },
  },
  {
    code: "SRV-FIT",
    slug: "interior-fitout",
    title: { en: "Interior Fit-Out", ar: "التصميم الداخلي والتشطيبات" },
    company: { en: "Mega Projects", ar: "ميجا بروجيكتس" },
    shortDescription: { en: "Turnkey interior fit-out, architecture, and custom furniture for commercial facilities.", ar: "تشطيبات داخلية مفتاحية، هندسة معمارية، وأثاث مخصص للمرافق التجارية." },
    description: { en: "Mega Projects delivers premium interior fit-out solutions for offices, hospitality, and commercial spaces.", ar: "تقدم ميجا بروجيكتس حلول تشطيبات داخلية فاخرة للمكاتب والضيافة والمساحات التجارية." },
    image: fitoutImg,
    altText: { en: "Interior fit-out and design services Saudi Arabia", ar: "خدمات التصميم الداخلي والتشطيبات في السعودية" },
    features: {
      en: ["Office interior design and fit-out", "Hospitality and retail spaces", "Custom furniture manufacturing", "MEP coordination for interiors", "Project management and supervision", "Post-completion support"],
      ar: ["تصميم وتجهيز المكاتب الداخلية", "مساحات الضيافة والتجزئة", "تصنيع الأثاث المخصص", "تنسيق MEP للتصاميم الداخلية", "إدارة المشاريع والإشراف", "دعم ما بعد الانتهاء"],
    },
    advantages: {
      en: ["Award-winning design team", "In-house manufacturing facility", "Fast-track delivery", "Sustainable materials"],
      ar: ["فريق تصميم حائز على جوائز", "مرافق تصنيع داخلية", "تسليم سريع", "مواد مستدامة"],
    },
  },
  {
    code: "SRV-MED",
    slug: "medical-equipment",
    title: { en: "Medical Equipment Supply", ar: "توريد المعدات الطبية" },
    company: { en: "Emdadat Aljazira Medical Company", ar: "شركة إمدادات الجزيرة الطبية" },
    shortDescription: { en: "Surgical and medical equipment supply and after-sales support for healthcare projects.", ar: "توريد المعدات الطبية والجراحية ودعم ما بعد البيع لمشاريع الرعاية الصحية." },
    description: { en: "EAMCO specializes in supplying medical and surgical equipment to hospitals and healthcare facilities across Saudi Arabia.", ar: "تتخصص إمدادات الجزيرة الطبية في توريد المعدات الطبية والجراحية للمستشفيات ومرافق الرعاية الصحية في جميع أنحاء السعودية." },
    image: medicalImg,
    altText: { en: "Medical equipment supply Saudi Arabia", ar: "توريد المعدات الطبية في السعودية" },
    features: {
      en: ["Surgical instruments and equipment", "Diagnostic imaging systems", "Patient monitoring systems", "Hospital furniture and fixtures", "Sterilization equipment", "Laboratory equipment"],
      ar: ["الأدوات والمعدات الجراحية", "أنظمة التصوير التشخيصي", "أنظمة مراقبة المرضى", "أثاث وتجهيزات المستشفيات", "معدات التعقيم", "معدات المختبرات"],
    },
    advantages: {
      en: ["Authorized distributor partnerships", "Comprehensive training programs", "24/7 technical support", "Preventive maintenance contracts"],
      ar: ["شراكات مع موزعين معتمدين", "برامج تدريب شاملة", "دعم فني على مدار الساعة", "عقود صيانة وقائية"],
    },
  },
  {
    code: "SRV-MOB",
    slug: "corporate-travel",
    title: { en: "Corporate Travel & Mobilization", ar: "سفر الشركات وتعبئة القوى العاملة" },
    company: { en: "Hayyakom Travel & Tourism", ar: "هياكم للسفر والسياحة" },
    shortDescription: { en: "Visa processing, corporate travel, and structured project mobilization.", ar: "معالجة التأشيرات، سفر الشركات، وتعبئة المشاريع المنظمة." },
    description: { en: "Hayyakom Travel & Tourism manages all corporate travel and workforce mobilization needs.", ar: "تدير هياكم للسفر والسياحة جميع احتياجات سفر الشركات وتعبئة القوى العاملة." },
    image: mobilizationImg,
    altText: { en: "Corporate travel and workforce mobilization Saudi Arabia", ar: "سفر الشركات وتعبئة القوى العاملة في السعودية" },
    features: {
      en: ["Visa processing and documentation", "Flight and accommodation booking", "Workforce mobilization planning", "Transportation logistics", "Travel insurance and compliance", "Emergency travel support"],
      ar: ["معالجة التأشيرات والوثائق", "حجز الرحلات والإقامة", "تخطيط تعبئة القوى العاملة", "اللوجستيات والنقل", "تأمين السفر والامتثال", "دعم السفر في حالات الطوارئ"],
    },
    advantages: {
      en: ["Established government relationships", "Dedicated account managers", "Cost-effective solutions", "24/7 customer support"],
      ar: ["علاقات حكومية راسخة", "مديرو حسابات مخصصون", "حلول فعالة من حيث التكلفة", "دعم عملاء على مدار الساعة"],
    },
  },
];

export const capabilityMatrix = {
  capabilities: {
    en: ["Civil Works", "Mechanical Works", "Electrical Works", "Manpower Supply", "Equipment Rental", "Dewatering & Shoring", "Earthworks", "Corporate Travel & Visa", "Project Mobilization"],
    ar: ["الأعمال المدنية", "الأعمال الميكانيكية", "الأعمال الكهربائية", "توفير العمالة", "تأجير المعدات", "نزح المياه وتدعيم الحفر", "أعمال الحفر", "سفر الشركات والتأشيرات", "تعبئة المشاريع"],
  },
  companies: ["High-Dam GC", "Azal Projects", "Hayyakom Travel"],
  matrix: [
    [true, false, false], [true, false, false], [true, false, false],
    [false, true, false], [false, true, false], [false, true, false],
    [false, true, false], [false, false, true], [true, false, true],
  ],
};