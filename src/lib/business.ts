export const SITE_URL = "https://aztecahome.com";
export const BUSINESS_ID = `${SITE_URL}/#business`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const business = {
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  "@id": BUSINESS_ID,
  name: "AZTECA Home Services",
  url: SITE_URL,
  telephone: "+1-602-926-2021",
  image: `${SITE_URL}/favicon.svg`,
  logo: `${SITE_URL}/favicon.svg`,
  description:
    "Pest control, pool, and landscape services in the Phoenix, AZ valley.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3655 W Anthem Way A-109 #342",
    addressLocality: "Phoenix",
    addressRegion: "AZ",
    postalCode: "85086",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Phoenix" },
    { "@type": "AdministrativeArea", name: "Maricopa County" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Home Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pest Control",
          url: `${SITE_URL}/pest-control/`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Landscaping",
          url: `${SITE_URL}/landscaping/`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pool Services",
          url: `${SITE_URL}/pools/`,
        },
      },
    ],
  },
};

export const website = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE_URL,
  name: "AZTECA Home Services",
  publisher: { "@id": BUSINESS_ID },
};

type BreadcrumbItem = { name: string; url: string };

export function breadcrumb(items: BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

type ServiceArgs = {
  name: string;
  url: string;
  description?: string;
  serviceType?: string;
  image?: string;
};

export function service({
  name,
  url,
  description,
  serviceType,
  image,
}: ServiceArgs) {
  return {
    "@type": "Service",
    name,
    url,
    ...(description && { description }),
    ...(serviceType && { serviceType }),
    ...(image && { image }),
    provider: { "@id": BUSINESS_ID },
    areaServed: [
      { "@type": "City", name: "Phoenix" },
      { "@type": "AdministrativeArea", name: "Maricopa County" },
    ],
  };
}
