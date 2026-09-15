import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { callLink, emailLink, hostel, whatsappLink } from "@/lib/hostel";
import {
  MapPin,
  Phone,
  Wifi,
  UtensilsCrossed,
  Store,
  Shield,
  MessageCircle,
  Navigation,
  Mail,
  Star,
} from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";

function AmenityIcon({ icon }: { icon: (typeof hostel.amenities)[number]["icon"] }) {
  const className = "size-6 text-teal";
  switch (icon) {
    case "meal":
      return <UtensilsCrossed className={className} aria-hidden />;
    case "wifi":
      return <Wifi className={className} aria-hidden />;
    case "shop":
      return <Store className={className} aria-hidden />;
    case "location":
      return <Shield className={className} aria-hidden />;
  }
}

function LinkButton({
  href,
  children,
  className,
  variant = "default",
  size = "default",
  external,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "default" | "outline" | "secondary" | "ghost" | "destructive" | "link";
  size?: "default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg";
  external?: boolean;
}) {
  return (
    <a
      href={href}
      className={cn(buttonVariants({ variant, size }), className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <>
      <header className="absolute inset-x-0 top-0 z-30">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6">
          <a
            href="#top"
            className="font-display text-lg font-bold tracking-tight text-white sm:text-xl"
          >
            {hostel.shortName}
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-white/85 md:flex">
            <a href="#amenities" className="transition hover:text-white">
              Facilities
            </a>
            <a href="#pricing" className="transition hover:text-white">
              Fees
            </a>
            <a href="#gallery" className="transition hover:text-white">
              Photos
            </a>
            <a href="#reviews" className="transition hover:text-white">
              Reviews
            </a>
            <a href="#location" className="transition hover:text-white">
              Location
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>
          <LinkButton
            href={callLink()}
            size="sm"
            className="bg-white text-ink hover:bg-white/90"
          >
            <Phone className="size-4" />
            Call now
          </LinkButton>
        </div>
      </header>

      <main id="top" className="flex-1">
        <section className="relative min-h-[100svh] overflow-hidden">
          <Image
            src="/gallery/exterior.png"
            alt="Hashim Girls Hostel exterior in Upper Chattar, Muzaffarabad"
            fill
            priority
            className="object-cover object-[center_35%] animate-fade-in"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1c24]/92 via-[#0a1c24]/72 to-[#0a1c24]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1c24]/80 via-transparent to-[#0a1c24]/40" />
          <div className="hero-grain absolute inset-0 opacity-20 mix-blend-soft-light" />

          <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20 lg:justify-center lg:pb-24">
            <p className="animate-rise font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              {hostel.name}
            </p>
            <h1 className="animate-rise-delay-1 mt-5 max-w-xl text-xl font-medium leading-snug text-white/95 sm:text-2xl">
              A secure girls hostel in Upper Chattar, Muzaffarabad.
            </h1>
            <p className="animate-rise-delay-2 mt-4 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg">
              {hostel.tagline}
            </p>
            <div className="animate-rise-delay-3 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <LinkButton
                href={callLink()}
                size="lg"
                className="h-12 bg-teal px-6 text-base text-white hover:bg-teal/90"
              >
                <Phone className="size-5" />
                Call {hostel.phoneDisplay}
              </LinkButton>
              <LinkButton
                href={whatsappLink()}
                external
                size="lg"
                variant="outline"
                className="h-12 border-white/40 bg-white/10 px-6 text-base text-white backdrop-blur hover:bg-white/20 hover:text-white"
              >
                <MessageCircle className="size-5" />
                WhatsApp
              </LinkButton>
            </div>
          </div>
        </section>

        <section id="amenities" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
              Facilities
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Everything a student needs, under one roof
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Daily meals, fast Wi‑Fi, an in-house shop, and a secure setting in Upper Chattar.
            </p>
          </div>

          <ul className="mt-12 grid gap-10 sm:grid-cols-2">
            {hostel.amenities.map((item) => (
              <li
                key={item.title}
                className="group border-t border-border pt-6 transition duration-500 hover:border-teal/50"
              >
                <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-teal/10 transition group-hover:bg-teal/15">
                  <AmenityIcon icon={item.icon} />
                </div>
                <h3 className="font-display text-xl font-bold text-ink">{item.title}</h3>
                <p className="mt-2 max-w-md leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section id="pricing" className="border-y border-border bg-white/70 py-20 backdrop-blur-sm sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">Fees</p>
              <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                Simple, student-friendly pricing
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">{hostel.pricing.note}</p>
            </div>

            <dl className="mt-12 grid gap-8 sm:grid-cols-3">
              <div className="border-t border-teal/30 pt-6">
                <dt className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  Monthly rent
                </dt>
                <dd className="font-display mt-2 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
                  ₨{hostel.pricing.monthlyRent.toLocaleString("en-PK")}
                </dd>
                <p className="mt-2 text-sm text-muted-foreground">Per month</p>
              </div>
              <div className="border-t border-teal/30 pt-6">
                <dt className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  Admission
                </dt>
                <dd className="font-display mt-2 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
                  ₨{hostel.pricing.admissionFee.toLocaleString("en-PK")}
                </dd>
                <p className="mt-2 text-sm text-muted-foreground">One-time fee</p>
              </div>
              <div className="border-t border-teal/30 pt-6">
                <dt className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  Security deposit
                </dt>
                <dd className="font-display mt-2 text-4xl font-extrabold tracking-tight text-teal sm:text-5xl">
                  None
                </dd>
                <p className="mt-2 text-sm text-muted-foreground">No security required</p>
              </div>
            </dl>

            <div className="mt-10">
              <LinkButton
                href={whatsappLink(
                  "Assalam o Alaikum! I want to ask about admission and a room at ₨15,000/month."
                )}
                external
                size="lg"
                className="h-12 bg-teal px-6 text-base text-white hover:bg-teal/90"
              >
                <MessageCircle className="size-5" />
                Ask about a room
              </LinkButton>
            </div>
          </div>
        </section>

        <section id="gallery" className="bg-[#10232c] py-20 text-white sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal/90">
                Photos
              </p>
              <h2 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                A closer look at life here
              </h2>
              <p className="mt-4 text-lg text-white/70">
                Real photos from Hashim Girls Hostel in Upper Chattar, Muzaffarabad.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
              {hostel.gallery.map((photo, i) => (
                <figure
                  key={photo.src}
                  className={`relative overflow-hidden ${
                    i === 0
                      ? "col-span-2 aspect-[16/10] md:col-span-2 md:row-span-2 md:aspect-auto md:min-h-[420px]"
                      : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition duration-700 hover:scale-[1.03]"
                    sizes={
                      i === 0 ? "(max-width:768px) 100vw, 66vw" : "(max-width:768px) 50vw, 33vw"
                    }
                  />
                  <figcaption className="absolute bottom-3 left-3 rounded bg-black/45 px-2.5 py-1 text-xs font-medium tracking-wide text-white backdrop-blur-sm">
                    {photo.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="border-y border-border bg-white/70 py-20 backdrop-blur-sm sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
                Reviews
              </p>
              <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                What families and students say
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Feedback from residents and parents about safety, meals, and study life in
                Muzaffarabad.
              </p>
            </div>

            <ul className="mt-12 grid gap-10 md:grid-cols-3">
              {hostel.reviews.map((review) => (
                <li key={review.name} className="border-t border-teal/30 pt-6">
                  <div className="flex gap-1" aria-label={`${review.rating} out of 5 stars`}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`size-4 ${
                          i < review.rating ? "fill-teal text-teal" : "text-border"
                        }`}
                        aria-hidden
                      />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-base leading-relaxed text-ink">
                    “{review.quote}”
                  </blockquote>
                  <p className="mt-4 font-display text-sm font-bold text-ink">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.role}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="location" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
                Location
              </p>
              <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                Upper Chattar, Muzaffarabad
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Located in Upper Chattar with mountain views — a practical base for girls studying
                in Muzaffarabad, Azad Kashmir.
              </p>

              <div className="mt-8 flex gap-3">
                <MapPin className="mt-1 size-5 shrink-0 text-teal" aria-hidden />
                <address className="not-italic leading-relaxed text-ink">
                  {hostel.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <LinkButton
                  href={hostel.mapsDirectionsUrl}
                  external
                  className="bg-teal text-white hover:bg-teal/90"
                >
                  <Navigation className="size-4" />
                  Get directions
                </LinkButton>
                <LinkButton href={hostel.mapsShareUrl} external variant="outline">
                  Open in Google Maps
                </LinkButton>
                <LinkButton href={hostel.mapsShareUrlAlt} external variant="outline">
                  Alternate Maps link
                </LinkButton>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-[0_20px_60px_-30px_rgba(18,32,42,0.35)]">
              <iframe
                title="Hostel location on Google Maps"
                src={hostel.mapsEmbedUrl}
                className="h-[320px] w-full border-0 sm:h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="border-t border-border bg-white/60 py-20 backdrop-blur-sm sm:py-28"
        >
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">Contact</p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Ready to reserve a bed?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Call, WhatsApp, or email for room availability, meal plans, and visiting hours.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
              <LinkButton
                href={callLink()}
                size="lg"
                className="h-12 min-w-[200px] bg-teal text-white hover:bg-teal/90"
              >
                <Phone className="size-5" />
                {hostel.phoneDisplay}
              </LinkButton>
              <LinkButton
                href={whatsappLink()}
                external
                size="lg"
                variant="outline"
                className="h-12 min-w-[200px] border-[#25D366]/40 text-[#128C7E] hover:bg-[#25D366]/10"
              >
                <MessageCircle className="size-5" />
                Chat on WhatsApp
              </LinkButton>
              <LinkButton
                href={emailLink()}
                size="lg"
                variant="outline"
                className="h-12 min-w-[200px]"
              >
                <Mail className="size-5" />
                {hostel.email}
              </LinkButton>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-[#10232c] py-10 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <p className="font-display text-lg font-bold">{hostel.name}</p>
            <p className="mt-1 text-sm text-white/60">{hostel.addressOneLine}</p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm">
            <a href={callLink()} className="text-white/80 transition hover:text-white">
              {hostel.phoneDisplay}
            </a>
            <a href={emailLink()} className="text-white/80 transition hover:text-white">
              {hostel.email}
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 transition hover:text-white"
            >
              WhatsApp
            </a>
            <a
              href={hostel.mapsShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 transition hover:text-white"
            >
              Maps
            </a>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-white/95 p-3 backdrop-blur md:hidden">
        <div className="grid grid-cols-2 gap-2">
          <LinkButton href={callLink()} className="bg-teal text-white hover:bg-teal/90">
            <Phone className="size-4" />
            Call
          </LinkButton>
          <LinkButton
            href={whatsappLink()}
            external
            className="bg-[#25D366] text-white hover:bg-[#1ebe57]"
          >
            <MessageCircle className="size-4" />
            WhatsApp
          </LinkButton>
        </div>
      </div>
      <div className="h-20 md:hidden" aria-hidden />
    </>
  );
}
