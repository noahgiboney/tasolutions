// All site copy lives here so text edits never require touching layout code.

export const company = {
  name: 'Tooling & Assembly Solutions',
  shortName: 'TAS',
  founded: 1996,
  email: 'email@tasolutions.com',
}

export const externalSites = {
  tas: { label: 'Tooling & Assembly Solutions', href: 'https://www.tasolutions.com/' },
  products: { label: 'Slat Washer', href: 'https://www.slatwasher.com/' },
  dreamTeam: { label: 'Automation Dream Team', href: 'https://www.automationdreamteam.com/' },
}

// slatwasher.com (copy from the 2023 Slat Washer page)
export const slatWasher = {
  name: 'Slat Washer',
  patent: 'Patent #7252102',
  description:
    'The Slat Washer by Tooling & Assembly Solutions: an automated, stainless steel machine that cleans filling-line slats for the pharmaceutical industry.',
  lead: 'An automated slat cleaning machine for the pharmaceutical industry, designed and built by Tooling & Assembly Solutions.',
  intro:
    'Along with the custom machinery, tooling and fixtures we build specifically based on customer requirements, we have a few products of our own.',
  body: [
    'This machine is called a Slatwasher. The Slatwasher is used in the pharmaceutical industry to clean Slats used on equipment in the filling process of vitamins and tablets into bottles. These slats need to be cleaned in an efficient manner to reduce cross contamination. We at TAS have developed this machine to be a cost effective solution to the manual way of cleaning currently being done all over the world.',
    'The machine design is 304 and 316 stainless steel construction with a complete outside washdown design. There are no external fasteners on the machine to collect debris during the cleaning process. The machine design utilizes a horizontal rotary carousel that holds 72 slats ranging in length from 15” to 42” in length. The machine design utilizes King, Lakso and Merril style slats. The machine controls are based on an Allen Bradley PLC and touch screen and all are UL Listed. There are 4 modes of operation for the Slatwasher, Pressure wash, Ultrasonic wash, Rinse and dry. We can supply an optional USP rinse on the machine. The complete cycle of the machine is 1 hour to process 72 slats.',
  ],
  stats: [
    { value: '72', label: 'Slats per cycle' },
    { value: '1 hr', label: 'Complete cycle' },
    { value: '15–42"', label: 'Slat lengths' },
    { value: '4', label: 'Modes of operation' },
  ],
  specs: [
    { label: 'Construction', value: '304 and 316 stainless steel' },
    { label: 'Design', value: 'Complete outside washdown, no external fasteners' },
    { label: 'Carousel', value: 'Horizontal rotary, holds 72 slats' },
    { label: 'Slat lengths', value: '15” to 42”' },
    { label: 'Slat styles', value: 'King, Lakso and Merril' },
    { label: 'Controls', value: 'Allen Bradley PLC and touch screen, UL Listed' },
    { label: 'Cycle time', value: '1 hour for 72 slats' },
    { label: 'Option', value: 'USP rinse' },
    { label: 'Patent', value: '#7252102' },
  ],
  modes: ['Pressure wash', 'Ultrasonic wash', 'Rinse', 'Dry'],
}

// automationdreamteam.com (copy from the 2023 Dream Team page)
export const dreamTeam = {
  name: 'Automation Dream Team',
  description:
    'Automation Dream Team by Tooling & Assembly Solutions: hand-selected engineers, technicians, HAAS machines and suppliers building automated assembly machines.',
  lead: 'Hand-selected engineers, technicians, machines and suppliers, committed to automation excellence.',
  body: [
    'Tooling and Assembly Solutions believes that in order to produce superior machinery we have to employ a superior group of resources including engineers, technicians, and a supply chain of reliable quality components and machines.',
    'This is where the "Dream Team" concept began. Each aspect of what makes up the Dream Team has been hand selected for being the best available to get the job done. From our HAAS machines to our technicians with years of experience in automation technology. The Dream Team commitment to Automation Excellence will provide you with the most productivity for your investment dollar.',
  ],
  team: [
    { title: 'Engineers', body: 'Hand selected for being the best available to get the job done.' },
    { title: 'Technicians', body: 'Years of experience in automation technology.' },
    { title: 'HAAS machines', body: 'HAAS CNC machining centers, including 5-axis.' },
    { title: 'Supply chain', body: 'Reliable quality components and machines.' },
  ],
}

export const home = {
  intro: {
    title: 'Precision Machining',
    body: "At Tooling and Assembly Solutions, we process large and small projects, with the idea that all projects get the same delicate care in planning and processing. This is because we realize that being the best at machining has little to do with meeting a dimension even up +/- .0001 but more about our commitment to the customer and the parts we are fabricating. This thought keeps us a level above the competition in all areas. Our staff works the process not the part to ensure the part will come out correct. It's for this reason we make every effort to eliminate error with a thorough process and understanding of the customers needs.",
  },
  stats: [
    { value: '1996', label: 'Doors opened' },
    { value: '±.0001"', label: 'Dimensional precision' },
    { value: '5-axis', label: 'Haas machining center' },
    { value: '40 yrs', label: 'Machine building experience' },
  ],
  work: [
    {
      title: 'Stem Load Station',
      alt: 'SolidWorks model of a stem load station beside a rotary dial, with its control panel',
      body: 'This station loads stems into a Pop up Turkey Timer',
      image: '/images/work/stem-load-station.webp',
      fit: 'contain',
    },
    {
      title: 'Lyophilizing Machine',
      alt: 'Lyophilizing machine built by TAS, enclosed in clear panels in a clean room',
      body: 'This equipment was built to load lyospheres into sample test kits',
      image: '/images/work/lyophilizing-machine.webp',
      fit: 'cover',
    },
    {
      title: 'Military Ordnance Guidance',
      alt: 'Two machined guidance components for military ordnance, one with tail fins',
      body: 'Used as guidance and propulsion fins',
      image: '/images/work/military-ordnance-guidance.jpg',
      fit: 'cover',
    },
    {
      title: 'Aerospace Navigation Platform',
      alt: 'Machined aluminum navigation platform with a cone-shaped center pocket',
      body: 'Foundation platform for Navigation Gyro used in space shuttle travel',
      image: '/images/work/aerospace-navigation-platform.jpg',
      fit: 'cover',
    },
    {
      title: 'Facial Reconstruction Plates',
      alt: 'Small star-shaped and chain-shaped surgical plates next to a penny for scale',
      body: 'Titanium plates used to support bone positioning',
      image: '/images/work/facial-reconstruction-plates.jpg',
      fit: 'cover',
    },
    {
      title: 'Micro Tube Cap Seating Tool',
      alt: 'Machined aluminum micro tube cap seating tool and numbered hole plate',
      body: 'This tool locks the cap down on sample media for testing',
      image: '/images/work/micro-tube-cap-seating-tool.webp',
      fit: 'cover',
    },
  ] as const,
  process: [
    {
      title: 'Design',
      body: 'Starting with the design or analysis of a design, we systematically go through technical drawings looking for flaws and inconsistencies that will show up later and could potentially be costly to repair. Using SolidWorks, accompanied by Cosmos F.E.A., we can analyze components size, interference, material application, and geometry to add a second level of manufacturing experience onto the process. From this point, the parts are streamed into Mastercam where we begin the fabrication process.',
    },
    {
      title: 'Fabrication',
      body: 'From Mastercam to Machine, each part is analyzed as to the most effective tool path and cutting tools to do the job in a cost effective, yet precision manner. Some machine shops tend to think steel is steel, but we understand the cost and time loss in a part with a chip or burr in an un-welcome place. Tooling considerations are also dealt with at this time. Into the HAAS CNC Machining Centers and the parts are on their way to becoming their intended shape.',
    },
    {
      title: 'Application Engineering',
      body: 'Once parts and assemblies are complete we will make all efforts to support our customers where as required. An example of this could be anything from installation of a piece of equipment; to troubleshooting a process problem with your manufacturing staff; or even on site repairs and maintenance of existing machinery and tooling.',
    },
  ],
}

export const story = {
  mission:
    "We do not believe you can do today's jobs, with yesterday's technology and be in business tomorrow",
  story: [
    'Welcome to the Tooling and Assembly Solutions Home Page. At Tooling and Assembly we take pride in the fact we produce some of the most advanced automation systems in the world. Whether your business is Automotive or Medical Devices, we have what it takes to get the job done.',
    'Since 1996, when we opened our doors, we have strived to push the limits of new technology, taking on jobs that at some time seem impossible. Our latest acquisition, a 5-axis Haas machining center, sums up our commitment to technology driven machining & machine building.',
    'In combination with 40 years of experience in the machine building business we are confident no job is too large, small, or complicated for our abilities.',
  ],
  // The Dream Team is a TAS idea with its own domain, not a separate company.
  dream: [
    'The Automation Dream Team is how we build machines at Tooling & Assembly Solutions. Superior machinery takes a superior group of resources: engineers, technicians, HAAS machines and a supply chain of reliable quality components, each hand selected for being the best available to get the job done.',
    'It has its own site, automationdreamteam.com, where you can read more about the people and machines behind our automation work.',
  ],
}

// Error page for addresses that don't exist, on all three sites
export const notFound = {
  label: 'Sheet 404 · Not found',
  title: "This page isn't on the drawing",
  lead: 'The address may be mistyped, or the page moved when we rebuilt the site.',
  pathLabel: 'Requested',
  linksLabel: 'Try one of these',
}

// "Our sites" section on the contact page
export const ourSites = {
  tas: 'Precision machining and automation machine building.',
  dreamTeam: 'Our approach to automation: the people and machines behind every TAS machine.',
}

export const automation = {
  intro: [
    'As with our description of the machine shop process tooling and assembly solutions automation machine building is thorough and detailed. Beginning with the same care and path you will notice we take great care in understanding the operations of our automation Projects.',
    'Peruse our diverse array of machinery, each engineered with precision to facilitate the production of distinct products.',
  ],
  steps: [
    {
      title: 'Development',
      body: [
        'Starting with the design or analysis of a design, we initially recommend a trip to the customer facility so that we can establish a clear concise understanding of the project at hand. With this understanding, we can move forward with concepts and problem solving or technical challenges that you are trying to overcome. We analyze what you are doing now, and what we have done in the past that has a proven track record and merge them together to solve your problem.',
      ],
      image: '/images/automation/development.webp',
      alt: 'Collaborative robot arms on a test bench',
      fit: 'cover',
    },
    {
      title: 'Design',
      body: [
        'We systematically go through technical drawings looking for flaws and inconsistencies. Using SolidWorks, accompanied by Cosmos F.E.A. we can analyze components size, interference, material application, and geometry. We can also inspect in great detail each sub-assembly condition, at your request show you exactly how any particular station might function or respond in an certain condition either in CAD, or in a computer animation of the design.',
        'From this point, the parts are streamed into Mastercam where we begin the fabrication process using design software.',
      ],
      image: '/images/automation/design.webp',
      alt: 'SolidWorks model of a spin fixture station',
      fit: 'contain',
    },
    {
      title: 'Fabrication',
      body: [
        'This process follows the same path as any machined part we make, from Mastercam to Machine, each part is analyzed as to the most effective tool path and tools to do the job in a cost effective, yet careful manner. Some machine shops tend to think steel is steel, but we understand the cost and time loss in a part with a chip or burr in an un-welcomed place.',
        'Into the HAAS CNC Machining Centers and the parts are on their way to becoming their intended shape.',
      ],
      image: '/images/automation/fabrication.webp',
      alt: 'Vision inspection screen showing a part passing',
      fit: 'contain',
    },
    {
      title: 'Inspection',
      body: [
        'After each part is machined, they are carefully inspected with internal measuring equipment or out sourced to hi-end Coordinate Measurement Systems or Laser inspection when required.',
      ],
      image: '/images/automation/inspection.webp',
      alt: 'Camera measurement of a machined edge',
      fit: 'cover',
    },
    {
      title: 'Assembly',
      body: [
        'As parts are assembled, consideration is taken as to how well things are going together and what changes can be made to improve the fits. If any changes are required, each is clearly documented on the original drawing and the process for that piece begins again.',
        'Our automated assembly machines are built in small modules. This allows us to start the debug phase of the machine before the tooling gets to the machine. Each machine builder and machinist can verify and test fit form and function with each component. This saves time at machine debug phase.',
        'Our philosophy is simple, look at the details and adjust your process to make sure the end result is met for everyone.',
      ],
      image: '/images/automation/assembly.webp',
      alt: 'Technician assembling a station in a clean room',
      fit: 'cover',
    },
    {
      title: 'Application Engineering',
      body: [
        'Once machine parts, jigs, fixtures, and fully automated assemblies are complete we will dedicate 110% to make sure the customer is satisfied. This could mean any thing from an installation of a machine we built or troubleshooting an existing machine or process with your manufacturing staff.',
      ],
      image: '/images/automation/application-engineering.webp',
      alt: 'Input stations on a finished automation machine',
      fit: 'cover',
    },
  ] as const,
}

export type Machine = {
  slug: string
  name: string
  image: string
  productImage: string
  specs: { label: string; value: string }[]
}

const spec = (
  rate: string,
  voltage: string,
  style: string,
  size: string,
  io: string,
  controls: string,
) => [
  { label: 'Production rate', value: rate },
  { label: 'Voltage', value: voltage },
  { label: 'Air pressure', value: '60 PSI' },
  { label: 'Style', value: style },
  { label: 'Size', value: size },
  { label: 'I/O count', value: io },
  { label: 'Controls', value: controls },
]

export const machines: Machine[] = [
  {
    slug: 'simplate-assembly',
    name: 'Simplate Assembly',
    image: '/images/machines/simplate-assembly.jpg',
    productImage: '/images/machines/simplate-assembly-product.jpg',
    specs: spec('30 assemblies per minute', '120 Volts AC', 'Indexing Conveyor', '80"L × 40"W × 60"H', '100', 'Allen Bradley'),
  },
  {
    slug: 'ear-ring-assembly',
    name: 'Ear Ring Assembly',
    image: '/images/machines/ear-ring-assembly.jpg',
    productImage: '/images/machines/ear-ring-assembly-product.jpg',
    specs: spec('65 assemblies per minute', '120 Volts AC', 'Rotary', '64"L × 40"W × 60"H', '80', 'Allen Bradley'),
  },
  {
    slug: 'swab-assembly',
    name: 'Swab Assembly',
    image: '/images/machines/swab-assembly.jpg',
    productImage: '/images/machines/swab-assembly-product.jpg',
    specs: spec('45 assemblies per minute', '240 Volts AC', 'Rotary', '180"L × 180"W × 60"H', '800', 'Allen Bradley'),
  },
  {
    slug: 'anode-bending',
    name: 'Anode Bending',
    image: '/images/machines/anode-bending.jpg',
    productImage: '/images/machines/anode-bending-product.jpg',
    specs: spec('6 second cycle time', 'NA / Air Logic', 'Fixed Nest', '18"L × 6"W × 12"H', 'None', 'Festo'),
  },
  {
    slug: 'gear-box-assembly',
    name: 'Gear Box Assembly',
    image: '/images/machines/gear-box-assembly.jpg',
    productImage: '/images/machines/gear-box-assembly-product.jpg',
    specs: spec('15 assemblies per minute', '120 Volts AC', 'Indexing Conveyor', '120"L × 50"W × 70"H', '150', 'Allen Bradley'),
  },
]

export const quality = {
  body: [
    'At Tooling and Assembly Solutions we pride ourselves in quality machines and machining services. With our newest addition to the Dreamteam, a Brown & Sharpe CNC Coordinate Measuring Machine Controlled by PC-Dmis Software. When it comes to quality inspection, we use the newest, most up-to-date hardware and software available in the industry.',
    'As we progress through the manufacturing process each part is machined and eventually certified for material and dimensional correctness.',
    'From providing Certificate of Conformance for material specifications, to our 14 section Quality Manual which outlines all the necessary criteria for First Article and General Inspections. Hands down we can get the job done right every time.',
  ],
  highlights: [
    { value: 'CNC CMM', label: 'Brown & Sharpe coordinate measuring machine' },
    { value: 'PC-DMIS', label: 'Inspection software' },
    { value: '14 sections', label: 'Quality manual for first article and general inspection' },
  ],
  documents: [
    {
      title: 'Certificate of Conformance',
      body: 'Material specification certification provided with our parts.',
      href: '/documents/certificate-of-conformance.pdf',
    },
    {
      title: 'Quality Manual',
      body: 'Our 14 section manual covering First Article and General Inspections.',
      href: '/documents/quality-manual.pdf',
    },
  ],
}

// Tab titles and search/share descriptions for each tasolutions.com page.
// The sister sites use slatWasher.description and dreamTeam.description.
export const pageMeta = {
  home: {
    title: `${company.name} | Precision Machining & Automation`,
    description:
      'Tooling & Assembly Solutions: precision machining and custom automated assembly machines for medical, aerospace, defense and automotive manufacturers, since 1996.',
  },
  ourStory: {
    title: `Our Story | ${company.name}`,
    description:
      'How Tooling & Assembly Solutions has machined precision parts and built automated assembly machines since 1996, and the Automation Dream Team behind them.',
  },
  automation: {
    title: `Automation | ${company.name}`,
    description:
      'From development and design to fabrication, inspection, assembly and application engineering: how TAS builds custom automated assembly machines.',
  },
  quality: {
    title: `Quality | ${company.name}`,
    description:
      'Quality at TAS: a Brown & Sharpe CNC coordinate measuring machine, PC-DMIS inspection software and first article inspection, plus our certificate of conformance and quality manual.',
  },
  contact: {
    title: `Contact Us | ${company.name}`,
    description:
      'Contact Tooling & Assembly Solutions about precision machining or a custom automated assembly machine.',
  },
  privacy: {
    title: `Privacy Policy | ${company.name}`,
    description:
      'What Tooling & Assembly Solutions collects through tasolutions.com, slatwasher.com and automationdreamteam.com, and how it is used.',
  },
  notFound: {
    title: `Page not found | ${company.name}`,
    description: notFound.lead,
  },
}

/** Description for a machine page, built from its specs. */
export function machineDescription(m: Machine) {
  const get = (label: string) => m.specs.find((s) => s.label === label)?.value
  return `${m.name}: a custom automated assembly machine built by ${company.name}. ${get('Production rate')}, ${get('Style')?.toLowerCase()} design, ${get('Controls')} controls.`
}

// Privacy policy, shared by all three sites (tasolutions.com/privacy).
export const privacy = {
  updated: 'November 8, 2026',
  lead: 'This policy covers tasolutions.com, slatwasher.com and automationdreamteam.com. In short: we only collect what you send us through the contact form, and we only use it to reply.',
  sections: [
    {
      title: 'What we collect',
      body: [
        'When you use the contact form, we receive your name, email address and message, plus your company and phone number if you add them, and which of our sites you sent it from.',
        'Like any website, our hosting provider records basic request information, such as your IP address, browser type and the pages you load, to keep the sites running and secure.',
      ],
    },
    {
      title: 'How we use it',
      body: [
        'We use contact form details only to reply to you and to discuss the work you asked about. We do not sell your information, add you to a mailing list or share it for marketing.',
      ],
    },
    {
      title: 'Who else handles it',
      body: [
        'Vercel hosts the sites. Resend delivers contact form messages to our inbox. Google Fonts serves the typefaces the sites use, so your browser requests them from Google. Each of these companies processes data under its own privacy policy.',
      ],
    },
    {
      title: 'Cookies and tracking',
      body: [
        'The sites do not set cookies and do not use analytics or advertising trackers.',
      ],
    },
    {
      title: 'How long we keep it',
      body: [
        'Messages you send us stay in our email for as long as they are useful for our work together. Ask us and we will delete them.',
      ],
    },
    {
      title: 'Your choices',
      body: [
        'You can ask what information we hold about you, or ask us to correct or delete it, through the contact form or the email address at the bottom of this page.',
      ],
    },
    {
      title: 'Changes to this policy',
      body: [
        'If we change how we handle information, we will update this page and the date at the top.',
      ],
    },
  ],
  formNote: 'We only use these details to reply to you.',
}
