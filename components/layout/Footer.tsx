
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const foundationLinks = [
  { label: "About the Foundation", href: "#about" },
  { label: "Our Pillars", href: "#pillars" },
  { label: "Catholic Identity", href: "#catholic-identity" },
  { label: "News & Events", href: "#news" },
  { label: "Gallery", href: "#gallery" },
];

const wariLinks = [
  { label: "About Wari", href: "#institutions" },
  { label: "Academics", href: "#academics" },
  { label: "Subject Combinations", href: "#combinations" },
  { label: "Student Life", href: "#student-life" },
  { label: "Academic Results", href: "#results" },
  { label: "Admissions", href: "#admissions" },
];

const currentYear = new Date().getFullYear();

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1GUpiPpoix/",
    Icon: FaFacebookF,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/warisecondary?mdxt=MXExcmZpZTFnNjF4MQ%3D%3D",
    Icon: FaInstagram,
  },
  {
    label: "X",
    Icon: FaXTwitter,
  },
  {
    label: "LinkedIn",
    Icon: FaLinkedinIn,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@warionlinetv?si=_6bWgX4_Myymj1y5",
    Icon: FaYoutube,
  },
];

const socialIconClass =
  "group flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/75 transition-all duration-300 hover:-translate-y-1 hover:border-staf-yellow hover:bg-staf-yellow hover:text-staf-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-staf-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-staf-blue";

const navigationLinkClass =
  "group inline-flex items-center gap-2 text-sm text-white/65 transition-colors duration-300 hover:text-staf-yellow";

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-staf-blue text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* Foundation Brand */}
          <div className="min-w-0 sm:col-span-2 lg:col-span-4">
            <Link
              href="/"
              aria-label="St. Thomas Aquinas Foundation Home"
              className="inline-flex max-w-full items-center gap-3"
            >
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-white p-1.5 sm:h-[72px] sm:w-[72px]">
                <Image
                  src="/logo1/thomas-logo.jpeg"
                  alt="St. Thomas Aquinas Foundation Logo"
                  fill
                  sizes="72px"
                  className="object-contain"
                />
              </div>

              <div className="min-w-0">
                <p className="font-heading text-lg leading-tight text-white sm:text-xl">
                  St. Thomas Aquinas
                </p>

                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-staf-yellow sm:text-xs">
                  Foundation
                </p>
              </div>
            </Link>

            <p className="mt-7 max-w-sm text-sm leading-7 text-white/70">
              St. Thomas Aquinas Foundation is committed to forming minds,
              building character and serving God through faith, academic
              excellence, discipline and hard work.
            </p>

            <p className="mt-6 font-heading text-xl italic leading-relaxed text-staf-yellow sm:text-2xl">
              “Forming Minds. Building Character. Serving God.”
            </p>

            {/* Social Media */}
            <div className="mt-8">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                Connect With Us
              </p>

              <div className="flex flex-wrap items-center gap-3">
                {socialLinks.map(({ label, href, Icon }) => {
                  const icon = (
                    <Icon
                      size={19}
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  );

                  if (!href) {
                    return (
                      <span
                        key={label}
                        aria-label={label}
                        title={label}
                        className={`${socialIconClass} cursor-default`}
                      >
                        {icon}
                      </span>
                    );
                  }

                  return (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit Wari Secondary School on ${label}`}
                      title={label}
                      className={socialIconClass}
                    >
                      {icon}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Foundation Navigation */}
          <div className="min-w-0 lg:col-span-2">
            <h3 className="font-heading text-lg text-white sm:text-xl">
              The Foundation
            </h3>

            <nav
              aria-label="Foundation navigation"
              className="mt-6 flex flex-col items-start gap-4"
            >
              {foundationLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={navigationLinkClass}
                >
                  {link.label}
                  <ArrowUpRight
                    size={13}
                    aria-hidden="true"
                    className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </Link>
              ))}
            </nav>
          </div>

          {/* Wari Navigation */}
          <div className="min-w-0 lg:col-span-2">
            <h3 className="font-heading text-lg text-white sm:text-xl">
              Wari Secondary School
            </h3>

            <nav
              aria-label="Wari Secondary School navigation"
              className="mt-6 flex flex-col items-start gap-4"
            >
              {wariLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={navigationLinkClass}
                >
                  {link.label}
                  <ArrowUpRight
                    size={13}
                    aria-hidden="true"
                    className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Information */}
          <div className="min-w-0 sm:col-span-2 lg:col-span-4">
            <h3 className="font-heading text-lg text-white sm:text-xl">
              Contact Information
            </h3>

            <div className="mt-6 space-y-6">
              {/* Postal Address */}
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-staf-yellow">
                  <Mail size={17} aria-hidden="true" />
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-staf-yellow">
                    Foundation Postal Address
                  </p>

                  <address className="mt-2 text-sm not-italic leading-6 text-white/75">
                    P.O. Box 1988,
                    <br />
                    Moshi – Kilimanjaro, Tanzania
                  </address>
                </div>
              </div>

              {/* School Location */}
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-staf-yellow">
                  <MapPin size={17} aria-hidden="true" />
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-staf-yellow">
                    School Location
                  </p>

                  <p className="mt-2 text-sm leading-6 text-white/75">
                    Wari Secondary School,
                    <br />
                    Machame, Hai District,
                    <br />
                    Kilimanjaro, Tanzania
                  </p>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-staf-yellow">
                  <Phone size={17} aria-hidden="true" />
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-staf-yellow">
                    Phone Numbers
                  </p>

                  <div className="mt-2 flex flex-col items-start gap-2 text-sm text-white/75">
                    <a
                      href="tel:+255745777015"
                      className="transition-colors hover:text-staf-yellow"
                    >
                      +255 745 777 015
                    </a>

                    <a
                      href="tel:+255788438341"
                      className="transition-colors hover:text-staf-yellow"
                    >
                      +255 788 438 341
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Address */}
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-staf-yellow">
                  <Mail size={17} aria-hidden="true" />
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-staf-yellow">
                    Email Address
                  </p>

                  <a
                    href="mailto:warisecondaryschool@gmail.com"
                    className="mt-2 inline-block break-all text-sm text-white/75 transition-colors hover:text-staf-yellow"
                  >
                    warisecondary@gmail.com
                  </a>
                </div>
              </div>

              {/* Office Hours */}
              <div className="border-t border-white/15 pt-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-staf-yellow">
                  Office Hours
                </p>

                <div className="mt-3 space-y-2 text-sm text-white/65">
                  <p className="flex flex-wrap justify-between gap-2">
                    <span>Monday – Friday</span>
                    <span>8:00 AM – 5:00 PM</span>
                  </p>

                  <p className="flex flex-wrap justify-between gap-2">
                    <span>Saturday</span>
                    <span>7:00 AM – 1:00 PM</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <Link
              href="#contact"
              className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-full bg-staf-yellow px-6 py-3 text-sm font-semibold text-staf-blue transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-staf-blue"
            >
              Get in Touch
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-6 text-center sm:px-6 md:flex-row md:text-left lg:px-8">
          <p className="text-xs leading-6 text-white/55 sm:text-sm">
            © {currentYear} St. Thomas Aquinas Foundation. All rights reserved.
          </p>

          <p className="text-xs leading-6 text-white/55 sm:text-sm">
            Faith <span className="px-1 text-staf-yellow">•</span>
            Knowledge <span className="px-1 text-staf-yellow">•</span>
            Character <span className="px-1 text-staf-yellow">•</span>
            Excellence <span className="px-1 text-staf-yellow">•</span>
            Service
          </p>
        </div>
      </div>
    </footer>
  );
}

