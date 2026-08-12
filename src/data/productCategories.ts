// Reusable local data store for product category detail pages.
// Replaces the inline categoryImages / categoryTitles maps so product
// data is easy to maintain and reuse across the category detail pages.

export interface ProductItem {
  name: string;
  image: string;
}

export interface ProductCategory {
  slug: string;
  title: string;
  products: ProductItem[];
}

export const productCategories: ProductCategory[] = [
  {
    slug: "solar-panels",
    title: "Solar Panels",
    products: [
      { name: "Solar Panel", image: "/images/solarpanel.jpg" },
      { name: "Poly Crystalline Solar Panel", image: "/images/solarpanel1.jpg" },
      { name: "Mono Crystalline Solar Panel", image: "/images/solarpanel2.jpg" },
    ],
  },
  {
    slug: "inverters",
    title: "Inverters",
    products: [
      { name: "Hybrid Inverter", image: "/images/inverter.jpg" },
      { name: "Off Grid Inverter", image: "/images/inverter1.jpg" },
    ],
  },
  {
    slug: "batteries",
    title: "Batteries",
    products: [
      { name: "Wall Mounted Lithium Ion Battery", image: "/images/battery.jpg" },
      { name: "Lithium Ion Battery", image: "/images/battery1.jpg" },
      { name: "Gel Battery", image: "/images/battery2.jpg" },
    ],
  },
  {
    slug: "accessories",
    title: "Accessories",
    products: [
      { name: "PV Combiner", image: "/images/pvcombiner.jpg" },
      { name: "MC4 Connector", image: "/images/mc4connector.jpg" },
      { name: "PV Cables", image: "/images/pvcable1.jpg" },
      { name: "2P AC Breaker", image: "/images/2pacbreaker.jpg" },
      { name: "4 Pole AC Breaker", image: "/images/4pacbreaker.jpg" },
      { name: "4P MCCB", image: "/images/4pmccb.jpg" },
      { name: "PV Cable", image: "/images/pvcable2.jpg" },
      { name: "Armoured Cable", image: "/images/armouredcable.jpg" },
      { name: "Cable Tray", image: "/images/cabletray.jpg" },
      { name: "PV Breaker", image: "/images/pvbreaker.jpg" },
      { name: "Battery Breaker", image: "/images/batterybreaker.jpg" },
      { name: "Unistruct", image: "/images/unistruct.jpg" },
      { name: "Cable Lugs", image: "/images/cablelugs.jpg" },
      { name: "Solar Mounting Rail", image: "/images/solarmountingrail.jpg" },
      { name: "Hanger Bolt with L-Foot", image: "/images/hangerbolt.jpg" },
      { name: "Mid Clamp", image: "/images/midclamp.jpg" },
      { name: "End Clamp", image: "/images/endclamp.jpg" },
      { name: "AC Surge Protection Device 2P", image: "/images/2pacsurge.jpg" },
      { name: "AC Surge Protection Device 4P", image: "/images/4pacsurge.jpg" },
      { name: "DC Surge Protection Device", image: "/images/dcsurge.jpg" },
    ],
  },
  {
    slug: "backup-systems",
    title: "Backup Systems",
    products: [{ name: "Backup System", image: "/images/backup.jpg" }],
  },
];

export function getProductCategory(slug: string): ProductCategory | undefined {
  return productCategories.find((category) => category.slug === slug);
}

export function getProductCategorySlugs(): string[] {
  return productCategories.map((category) => category.slug);
}
