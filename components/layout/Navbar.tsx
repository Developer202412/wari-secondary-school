"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Our Institutions", href: "#institutions" },
  { name: "Academics", href: "#academics" },
  { name: "Student Life", href: "#student-life" },
  { name: "Admissions", href: "#admissions" },
  { name: "Results", href: "#results" },
  { name: "News", href: "#news" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-staf-border bg-staf-white/95 backdrop-blur-md">
      <nav
        className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:h-[80px] sm:px-6 lg:h-[84px] lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="/"
          className="group flex min-w-0 items-center gap-2.5 sm:gap-3"
          aria-label="St. Thomas Aquinas Foundation home"
        >
          <div className="relative h-11 w-11 shrink-0 sm:h-14 sm:w-14">
            <Image
              src="/logo1/thomas-logo.jpeg"
              alt="St. Thomas Aquinas Foundation Logo"
              fill
              priority
              className="object-contain"
              sizes="(max-width: 640px) 44px, 56px"
            />
          </div>

          <div className="min-w-0 leading-none">
            <p className="truncate font-heading text-[13px] font-semibold tracking-wide text-staf-blue sm:text-[15px]">
              St. Thomas Aquinas
            </p>

            <p className="mt-1 text-[8px] font-semibold uppercase tracking-[0.22em] text-staf-muted sm:text-[10px] sm:tracking-[0.28em]">
              Foundation
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-5 lg:flex xl:gap-6">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="
                relative whitespace-nowrap py-2 text-[12px] font-medium tracking-wide
                text-staf-blue/80 transition-colors duration-200
                hover:text-staf-blue
                after:absolute after:bottom-0 after:left-0 after:h-px after:w-0
                after:bg-staf-yellow after:transition-all after:duration-300
                hover:after:w-full
              "
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <a
            href="#admissions"
            className="
              inline-flex items-center justify-center whitespace-nowrap
              bg-staf-yellow px-5 py-3 text-[11px] font-bold
              uppercase tracking-[0.12em] text-staf-blue
              transition-all duration-200
              hover:bg-staf-blue hover:text-staf-white
              xl:px-6
            "
          >
            Apply to Wari
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileOpen((open) => !open)}
          className="
            flex h-10 w-10 shrink-0 items-center justify-center
            border border-staf-border text-staf-blue
            transition-colors duration-200
            hover:border-staf-yellow hover:bg-staf-cream
            focus:outline-none focus:ring-2 focus:ring-staf-yellow focus:ring-offset-2
            lg:hidden
          "
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-staf-border bg-staf-white shadow-lg lg:hidden"
        >
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <div className="flex flex-col">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="
                    border-b border-staf-border/70 py-3.5
                    text-sm font-medium text-staf-blue
                    transition-colors duration-200
                    hover:text-staf-green
                  "
                >
                  {item.name}
                </a>
              ))}

              <a
                href="#admissions"
                onClick={() => setMobileOpen(false)}
                className="
                  mt-4 inline-flex items-center justify-center
                  bg-staf-yellow px-5 py-3.5
                  text-sm font-bold uppercase tracking-wide
                  text-staf-blue
                  transition-colors duration-200
                  hover:bg-staf-blue hover:text-staf-white
                "
              >
                Apply to Wari
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}