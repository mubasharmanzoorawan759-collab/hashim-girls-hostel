export const hostel = {
  name: "Hashim Girls Hostel",
  shortName: "Hashim Hostel",
  tagline:
    "Secure rooms, three meals, and Wi‑Fi in Upper Chattar, Muzaffarabad.",
  phoneDisplay: "0346 8414184",
  phoneTel: "+923468414184",
  whatsapp: "923468414184",
  whatsappMessage:
    "Assalam o Alaikum! I found your hostel website and want to ask about room availability (₨15,000/month).",
  email: "HGH.MZD@GMAIL.COM",
  addressLines: [
    "Upper Chattar",
    "Muzaffarabad, Azad Kashmir",
    "Pakistan",
  ],
  addressOneLine: "Upper Chattar, Muzaffarabad, Azad Kashmir, Pakistan",
  mapsShareUrl: "https://maps.app.goo.gl/w6zA6MsUTqEZMRSU8",
  mapsShareUrlAlt: "https://share.google/qVPZv47o3nkh3PYsl",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=Hashim%20Girls%20Hostel%20Upper%20Chattar%20Muzaffarabad&z=16&output=embed",
  mapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Hashim+Girls+Hostel,+Upper+Chattar,+Muzaffarabad",
  lat: 34.3443453,
  lng: 73.4715484,
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
      title: "Secure location",
      description:
        "Gated premises in Upper Chattar with a calm mountain setting — suitable for girls studying in Muzaffarabad.",
      icon: "location" as const,
    },
  ],
  gallery: [
    {
      src: "/gallery/exterior.png",
      alt: "Hashim Girls Hostel exterior with signboard in Upper Chattar, Muzaffarabad",
      label: "Exterior",
    },
    {
      src: "/gallery/room-beds.png",
      alt: "Shared room with three single beds",
      label: "Rooms",
    },
    {
      src: "/gallery/room-wardrobe.png",
      alt: "Hostel room with wardrobe and storage",
      label: "Storage",
    },
    {
      src: "/gallery/terrace.png",
      alt: "Terrace with mountain view of Muzaffarabad",
      label: "Terrace",
    },
    {
      src: "/gallery/hallway.png",
      alt: "Interior with floral wallpaper and attached bathroom",
      label: "Bathroom",
    },
    {
      src: "/gallery/lounge.png",
      alt: "Common seating area with red curtains",
      label: "Common",
    },
    {
      src: "/gallery/interior-tiles.png",
      alt: "Interior hallway with tiled walls and wooden door",
      label: "Interior",
    },
    {
      src: "/gallery/interior-corner.png",
      alt: "Living area corner with carpet and red curtain",
      label: "Living",
    },
  ],
  reviews: [
    {
      name: "Ayesha K.",
      role: "Student",
      rating: 5,
      quote:
        "Clean rooms, timely meals, and the location in Upper Chattar feels safe. Easy to settle in for studies.",
    },
    {
      name: "Fatima R.",
      role: "Parent",
      rating: 5,
      quote:
        "We visited before admission — gated building, helpful management, and clear fees. Comfortable recommending it.",
    },
    {
      name: "Sana M.",
      role: "Resident",
      rating: 4,
      quote:
        "Wi‑Fi is reliable and the terrace view is peaceful. Meals are home-style and consistent.",
    },
  ],
  navItems: [
    { href: "#amenities", label: "Facilities" },
    { href: "#pricing", label: "Fees" },
    { href: "#gallery", label: "Photos" },
    { href: "#reviews", label: "Reviews" },
    { href: "#location", label: "Location" },
    { href: "#contact", label: "Contact" },
  ],
} as const

export type AmenityIconName = (typeof hostel.amenities)[number]["icon"]
export type ButtonVariant = "default" | "outline" | "secondary" | "ghost" | "destructive" | "link"
export type ButtonSize = "default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg"

export const whatsappLink = (message: string = hostel.whatsappMessage) => {
  return `https://wa.me/${hostel.whatsapp}?text=${encodeURIComponent(message)}`
}

export const callLink = () => {
  return `tel:${hostel.phoneTel}`
}

export const emailLink = () => {
  return `mailto:${hostel.email}`
}
