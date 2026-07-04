export type Project = {
  id: string;
  slug: string;
  title: string;
  client: string;
  director: string;
  dp: string;
  colourist: string;
  stage: string;
  stageIndex: number;
  progress: number;
  deadline: string;
  budget: string;
  priority: "High" | "Standard" | "Rush";
  status: "Active" | "Review" | "Delivery" | "Paused";
  poster: string;
  notes: string;
};

export const STAGES = [
  "Brief",
  "Look Dev",
  "Offline Edit",
  "Conform",
  "Primary Grade",
  "Secondary Grade",
  "Review",
  "Master",
  "Delivery",
] as const;

export const PROJECTS: Project[] = [
  {
    id: "P-018",
    slug: "verdant-path",
    title: "The Verdant Path",
    client: "Okafor Films",
    director: "Amara Okafor",
    dp: "L. Mbeki",
    colourist: "K. Njoroge",
    stage: "Secondary Grade",
    stageIndex: 5,
    progress: 68,
    deadline: "Jul 18",
    budget: "$84,000",
    priority: "High",
    status: "Active",
    poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&q=80&auto=format&fit=crop",
    notes: "Reel 03 secondary in progress. Client review Thursday.",
  },
  {
    id: "P-023",
    slug: "halogen",
    title: "Halogen",
    client: "Ogilvy Africa",
    director: "T. Wanjiru",
    dp: "N. Osei",
    colourist: "M. Adeyemi",
    stage: "Conform",
    stageIndex: 3,
    progress: 42,
    deadline: "Jul 09",
    budget: "$26,500",
    priority: "Rush",
    status: "Active",
    poster: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=1200&q=80&auto=format&fit=crop",
    notes: "60s TVC. Awaiting online conform pass.",
  },
  {
    id: "P-025",
    slug: "long-coast",
    title: "The Long Coast",
    client: "Sony Music EA",
    director: "J. Owuor",
    dp: "L. Mbeki",
    colourist: "K. Njoroge",
    stage: "Delivery",
    stageIndex: 8,
    progress: 92,
    deadline: "Jul 05",
    budget: "$18,200",
    priority: "Standard",
    status: "Delivery",
    poster: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1200&q=80&auto=format&fit=crop",
    notes: "HDR trim approved. IMF export in transit to Netflix.",
  },
  {
    id: "P-026",
    slug: "iron-bloom",
    title: "Iron Bloom",
    client: "Trace Studios",
    director: "S. Kirui",
    dp: "R. Achieng",
    colourist: "M. Adeyemi",
    stage: "Primary Grade",
    stageIndex: 4,
    progress: 31,
    deadline: "Aug 02",
    budget: "$51,800",
    priority: "Standard",
    status: "Active",
    poster: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1200&q=80&auto=format&fit=crop",
    notes: "Look development approved. First primary in review.",
  },
  {
    id: "P-027",
    slug: "north-star",
    title: "North Star",
    client: "BBC Studios",
    director: "F. Otieno",
    dp: "P. Mensah",
    colourist: "K. Njoroge",
    stage: "Review",
    stageIndex: 6,
    progress: 74,
    deadline: "Jul 22",
    budget: "$62,000",
    priority: "High",
    status: "Review",
    poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&q=80&auto=format&fit=crop",
    notes: "Reel 02 v04 uploaded for producer review.",
  },
];

export const CLIENT_VISIBLE_IDS = ["P-018", "P-023", "P-025"];

export const TEAM = [
  { name: "K. Njoroge", role: "Senior Colourist", load: 82, status: "In Session · Suite 1", tenure: "9y" },
  { name: "M. Adeyemi", role: "Colourist", load: 64, status: "Available", tenure: "4y" },
  { name: "L. Kagwe", role: "Online Editor", load: 71, status: "Conform · Halogen", tenure: "6y" },
  { name: "N. Wafula", role: "DIT / Data", load: 44, status: "Ingest queue", tenure: "3y" },
  { name: "R. Achieng", role: "Producer", load: 88, status: "Client review", tenure: "7y" },
  { name: "T. Mwangi", role: "Delivery QC", load: 55, status: "IMF export", tenure: "5y" },
];

export const CLIENTS = [
  { name: "Okafor Films", city: "Nairobi", projects: 4, spend: "$284k", contact: "Amara Okafor", since: "2019" },
  { name: "Ogilvy Africa", city: "Nairobi", projects: 11, spend: "$612k", contact: "T. Wanjiru", since: "2016" },
  { name: "Sony Music EA", city: "Lagos", projects: 3, spend: "$92k", contact: "J. Owuor", since: "2022" },
  { name: "Trace Studios", city: "Johannesburg", projects: 6, spend: "$318k", contact: "S. Kirui", since: "2020" },
  { name: "BBC Studios", city: "London", projects: 2, spend: "$164k", contact: "F. Otieno", since: "2023" },
  { name: "Netflix EMEA", city: "Amsterdam", projects: 5, spend: "$742k", contact: "H. van Dijk", since: "2021" },
];

export const SUITES = [
  { name: "Colour Suite 1", tag: "DaVinci · HDR Reference", status: "In Session", session: "Verdant · K. Njoroge", until: "19:00" },
  { name: "Colour Suite 2", tag: "DaVinci · SDR", status: "Available", session: "—", until: "—" },
  { name: "Reference Theatre", tag: "Christie 4K · 7.1.4", status: "Booked", session: "Ogilvy · Halogen QC", until: "Thu 15:00" },
  { name: "Render Farm", tag: "8× RTX 6000 Ada", status: "Rendering", session: "Long Coast IMF", until: "22%" },
  { name: "Storage · Vault A", tag: "1.2 PB Ceph", status: "68% used", session: "Nominal", until: "—" },
];

export const INVOICES = [
  { id: "FPH-24-018", project: "The Verdant Path", client: "Okafor Films", amount: "$28,400", status: "Paid", date: "Jun 12" },
  { id: "FPH-24-023", project: "Halogen", client: "Ogilvy Africa", amount: "$12,900", status: "Due", date: "Jun 28" },
  { id: "FPH-24-025", project: "The Long Coast", client: "Sony Music EA", amount: "$8,200", status: "Draft", date: "Jul 01" },
  { id: "FPH-24-026", project: "Iron Bloom", client: "Trace Studios", amount: "$34,000", status: "Sent", date: "Jul 02" },
  { id: "FPH-24-027", project: "North Star", client: "BBC Studios", amount: "$21,400", status: "Paid", date: "Jun 20" },
];
