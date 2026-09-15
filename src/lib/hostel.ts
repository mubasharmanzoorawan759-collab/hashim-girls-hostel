export const hostel = {
  name: "Hashim Girls Hostel",
  shortName: "Hashim Hostel",
  tagline: "Clean rooms, three meals, and Wi‑Fi — steps from Global Academy & College.",
  phoneDisplay: "0346 8414184",
  phoneTel: "+923468414184",
  whatsapp: "923468414184",
  whatsappMessage:
    "Assalam o Alaikum! I found your hostel website and want to ask about room availability (₨15,000/month).",
  email: "",
  addressLines: [
    "Near Global Academy & College",
    "Westridge 3, Main Iqbal Road",
    "Rawalpindi, Punjab, Pakistan",
  ],
  addressOneLine:
    "Near Global Academy & College, Westridge 3, Main Iqbal Road, Rawalpindi, Punjab, Pakistan",
  mapsShareUrl: "https://share.google/JjVbXnLJI2QZKBIla",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=Global%20Academy%20Girls%20Westridge%203%20Rawalpindi&z=16&output=embed",
  mapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Global+Academy+Girls+Westridge+3,+Main+Iqbal+Road,+Rawalpindi",
  lat: 33.609411,
  lng: 73.0169623,
  pricing: {
    monthlyRent: 15000,
    admissionFee: 3000,
    securityDeposit: 0,
    currency: "PKR",
    note: "Monthly rent includes three-time meals. No security deposit required.",
  },
  amenities: [
    {
      title: "Three-time meals",
      description:
        "Homestyle breakfast, lunch, and dinner prepared fresh every day — no kitchen stress for students.",
      icon: "meal" as const,
    },
    {
      title: "High-speed Wi‑Fi",
      description:
        "Reliable internet for online classes, assignments, and staying connected with family.",
      icon: "wifi" as const,
    },
    {
      title: "Shop inside",
      description:
        "Everyday essentials available on the premises so you don’t need a long walk for small needs.",
      icon: "shop" as const,
    },
    {
      title: "Near Global Academy & College",
      description:
        "Short commute to Global Academy and nearby colleges — more time for study, less time in traffic.",
      icon: "location" as const,
    },
  ],
  gallery: [
    {
      src: "/gallery/hero-hostel.jpg",
      alt: "Comfortable hostel living space",
      label: "Stay",
    },
    {
      src: "/gallery/room-1.jpg",
      alt: "Furnished student room",
      label: "Rooms",
    },
    {
      src: "/gallery/room-2.jpg",
      alt: "Quiet bedroom for rest and study",
      label: "Rest",
    },
    {
      src: "/gallery/food.jpg",
      alt: "Daily meals prepared for residents",
      label: "Meals",
    },
    {
      src: "/gallery/shop.jpg",
      alt: "Convenient shop inside the hostel",
      label: "Shop",
    },
    {
      src: "/gallery/neighborhood.jpg",
      alt: "Neighborhood near Global Academy, Rawalpindi",
      label: "Location",
    },
  ],
} as const;

export function whatsappLink(message: string = hostel.whatsappMessage) {
  return `https://wa.me/${hostel.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function callLink() {
  return `tel:${hostel.phoneTel}`;
}
