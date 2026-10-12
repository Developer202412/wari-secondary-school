import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const activities = [
  {
    title: "Music & Choir",
    description:
      "Students discover and develop their talents through music, choir and creative expression.",
    image: "/images/hero/boys-kwaya.JPG",
  },
  {
    title: "Faith in Community",
    description:
      "Spiritual life brings students together in prayer, celebration and service.",
    image: "/images/hero/kwaya-girl.JPG",
  },
  {
    title: "Student Participation",
    description:
      "Students are encouraged to participate, contribute and grow together as a community.",
    image: "/images/hero/ala-muziki.JPG",
  },
];

export default function CampusLife() {
  return (
    <section
      id="student-life"
      className="bg-staf-cream py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* =====================================================
            HEADER
        ===================================================== */}
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <div className="max-w-3xl">
            {/* Label */}
            <div className="mb-5 flex items-center gap-3 sm:mb-6 sm:gap-4">
              <span className="h-px w-8 shrink-0 bg-staf-yellow sm:w-10" />

              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-staf-green sm:text-[11px] sm:tracking-[0.28em]">
                Campus Life
              </p>
            </div>

            {/* Heading */}
            <h2 className="max-w-3xl font-heading text-[2rem] font-medium leading-[1.12] tracking-tight text-staf-blue sm:text-5xl lg:text-[3.5rem]">
              Life at Wari is about{" "}
              <span className="text-staf-green">
                growing together.
              </span>
            </h2>

            {/* Intro */}
            <p className="mt-5 max-w-2xl text-[13px] leading-7 text-staf-muted sm:mt-6 sm:text-[15px] sm:leading-8">
              Beyond the classroom, students have opportunities to develop
              their talents, build friendships, participate in community
              life and discover the value of working together.
            </p>
          </div>

          {/* =================================================
              GALLERY LINK
          ================================================= */}
          <Link
            href="#gallery"
            className="
              group
              inline-flex
              w-fit
              shrink-0
              items-center
              gap-2.5
              text-xs
              font-bold
              uppercase
              tracking-[0.1em]
              text-staf-blue
              transition-colors
              hover:text-staf-green
              sm:text-sm
              sm:normal-case
              sm:tracking-normal
            "
          >
            View Gallery

            <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* =====================================================
            PHOTO EDITORIAL GRID
        ===================================================== */}
        <div className="mt-10 grid gap-3 sm:mt-14 sm:gap-4 lg:grid-cols-[1.25fr_0.75fr]">
          {/* =================================================
              LARGE IMAGE
          ================================================= */}
          <div className="group relative min-h-[390px] overflow-hidden sm:min-h-[520px]">
            <Image
              src={activities[0].image}
              alt="Students participating in choir at Wari Secondary School"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-staf-blue/90 via-staf-blue/10 to-transparent" />

            {/* Gold frame */}
            <div className="absolute inset-3 border border-staf-yellow/60 sm:inset-5" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-9">
              <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-staf-yellow sm:text-[10px] sm:tracking-[0.24em]">
                Student Life
              </p>

              <h3 className="mt-2 font-heading text-2xl leading-tight text-white sm:text-4xl">
                {activities[0].title}
              </h3>

              <p className="mt-2 max-w-lg text-[12px] leading-5 text-white/65 sm:mt-3 sm:text-sm sm:leading-6">
                {activities[0].description}
              </p>
            </div>

            {/* Wari label */}
            <div className="absolute right-4 top-4 border border-staf-yellow/70 px-2.5 py-1.5 sm:right-5 sm:top-5 sm:px-3 sm:py-2">
              <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-staf-yellow sm:text-[10px] sm:tracking-[0.18em]">
                Wari
              </span>
            </div>
          </div>

          {/* =================================================
              SMALL IMAGES
          ================================================= */}
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-1">
            {activities.slice(1).map((activity) => (
              <article
                key={activity.title}
                className="group relative min-h-[240px] overflow-hidden sm:min-h-[280px] lg:min-h-[250px]"
              >
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-staf-blue/85 via-transparent to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <h3 className="font-heading text-xl leading-tight text-white sm:text-2xl">
                    {activity.title}
                  </h3>

                  <p className="mt-2 text-[11px] leading-5 text-white/60 sm:text-xs">
                    {activity.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* =====================================================
            BOTTOM MESSAGE
        ===================================================== */}
        <div className="mt-10 grid gap-5 border-t border-staf-border pt-7 sm:mt-12 sm:gap-6 sm:pt-8 md:grid-cols-[1fr_auto] md:items-center">
          <p className="max-w-2xl font-heading text-xl leading-snug text-staf-blue sm:text-3xl">
            Every experience is an opportunity to discover talent, build
            character and serve others.
          </p>

          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-staf-yellow sm:h-2 sm:w-2" />

            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-staf-muted sm:text-[10px] sm:tracking-[0.2em]">
              Student Experience
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}