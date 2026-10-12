import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Images } from "lucide-react";

const galleryImages = [
  {
    src: "/images/hero/students.JPG",
    alt: "Students during the Thanksgiving Mass celebration",
    label: "Thanksgiving Mass",
    className: "lg:col-span-2 lg:row-span-2",
  },
  {
    src: "/images/hero/boys-kwaya.JPG",
    alt: "Students singing during the Thanksgiving Mass",
    label: "Choir & Worship",
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    src: "/images/hero/kwaya-girl.JPG",
    alt: "Students participating in the Thanksgiving Mass celebration",
    label: "Faith & Community",
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    src: "/images/hero/ala-muziki.JPG",
    alt: "Students serving through music during the Thanksgiving Mass",
    label: "Music Ministry",
    className: "lg:col-span-1 lg:row-span-2",
  },
  {
    src: "/images/hero/utoto.JPG",
    alt: "Students gathered during the Thanksgiving celebration",
    label: "School Community",
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    src: "/images/hero/utotos.JPG",
    alt: "Wari students during the Thanksgiving Mass celebration",
    label: "Celebration",
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    src: "/images/hero/father.jpg",
    alt: "Priests serving during the Thanksgiving Mass",
    label: "Holy Mass",
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    src: "/images/hero/mkuu2.JPG",
    alt: "Wari Secondary School leadership during the Thanksgiving celebration",
    label: "School Leadership",
    className: "lg:col-span-1 lg:row-span-1",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="overflow-hidden bg-staf-cream py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* =====================================================
            HEADER
        ====================================================== */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <div className="min-w-0 max-w-3xl">
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3 sm:mb-6 sm:gap-4">
              <span className="h-px w-8 shrink-0 bg-staf-yellow sm:w-10" />

              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-staf-green sm:text-[11px] sm:tracking-[0.28em]">
                Thanksgiving Mass
              </p>
            </div>

            {/* Heading */}
            <h2 className="font-heading text-[2rem] font-medium leading-[1.12] tracking-tight text-staf-blue sm:text-5xl lg:text-[3.6rem]">
              A day of{" "}
              <span className="text-staf-green">thanksgiving.</span>
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-2xl text-[13px] leading-7 text-staf-muted sm:mt-6 sm:text-[15px] sm:leading-8">
              A glimpse into the Thanksgiving Mass celebrated by the Wari
              Secondary School community on 26 September 2026 — a day of
              faith, gratitude, worship, music and fellowship.
            </p>
          </div>

          {/* Event Date */}
          <div className="flex w-fit items-center gap-3 rounded-full border border-staf-border bg-white/60 px-4 py-2.5 text-[9px] font-bold uppercase tracking-[0.14em] text-staf-muted sm:px-5 sm:py-3 sm:text-xs sm:tracking-[0.16em]">
            <CalendarDays className="h-4 w-4 shrink-0 text-staf-green" />

            <span>26 September 2026</span>
          </div>
        </div>

        {/* =====================================================
            GALLERY GRID
        ====================================================== */}
        <div
          className="
            mt-10 grid grid-cols-1 auto-rows-[210px] gap-3
            sm:mt-14 sm:grid-cols-2 sm:auto-rows-[230px] sm:gap-4
            lg:grid-cols-4 lg:auto-rows-[190px]
          "
        >
          {galleryImages.map((image) => (
            <Link
              key={image.src}
              href={image.src}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open image: ${image.label}`}
              className={`group relative block min-w-0 overflow-hidden ${image.className}`}
            >
              {/* IMAGE */}
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="
                  (max-width: 640px) 100vw,
                  (max-width: 1024px) 50vw,
                  25vw
                "
              />

              {/* DARK GRADIENT */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t from-staf-blue/90
                  via-staf-blue/15
                  to-transparent
                  opacity-80
                  transition-opacity duration-300
                  group-hover:opacity-100
                "
              />

              {/* GOLD FRAME */}
              <div
                className="
                  absolute inset-3
                  border border-staf-yellow/0
                  transition-all duration-300
                  group-hover:border-staf-yellow/70
                  sm:inset-4
                "
              />

              {/* IMAGE CONTENT */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                {/* Category */}
                <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-staf-yellow sm:text-[9px] sm:tracking-[0.2em]">
                  {image.label}
                </p>

                {/* Title + Arrow */}
                <div className="mt-1.5 flex items-end justify-between gap-2 sm:mt-2 sm:gap-4">
                  <p className="min-w-0 max-w-[85%] break-words font-heading text-base leading-tight text-white sm:text-xl">
                    {image.alt}
                  </p>

                  <ArrowRight
                    className="
                      h-4 w-4 shrink-0 text-staf-yellow
                      opacity-0 transition-all duration-300
                      group-hover:translate-x-1
                      group-hover:opacity-100
                    "
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* =====================================================
            EVENT NOTE
        ====================================================== */}
        <div className="mt-10 border-t border-staf-border pt-7 sm:mt-12 sm:pt-8">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            {/* Message */}
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <Images className="h-4 w-4 shrink-0 text-staf-green" />

                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-staf-green sm:text-[10px]">
                  Thanksgiving Mass · 26 September 2026
                </p>
              </div>

              <p className="mt-3 max-w-3xl font-heading text-xl leading-snug text-staf-blue sm:text-3xl">
                A celebration of faith, gratitude and community at Wari
                Secondary School.
              </p>
            </div>

            {/* Visit Wari */}
            <Link
              href="#contact"
              className="
                group inline-flex w-fit shrink-0 items-center gap-2.5
                text-[10px] font-bold uppercase tracking-[0.1em]
                text-staf-blue transition-colors hover:text-staf-green
                sm:text-sm sm:normal-case sm:tracking-normal
              "
            >
              Visit Wari

              <ArrowRight
                className="
                  h-4 w-4 shrink-0
                  transition-transform duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}