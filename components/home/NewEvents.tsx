
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";

const newsItems = [
  {
    date: "September 2026",
    category: "School Community",
    title: "Thanksgiving Mass at Wari Secondary School",
    description:
      "A moment of faith, thanksgiving and community as students and members of the school community gathered in celebration.",
    image: "/images/hero/kwaya-girl.JPG",
  },
  {
    date: "September 2026",
    category: "Student Life",
    title: "Students Growing Through Talent & Participation",
    description:
      "Students continue to discover their talents and develop confidence through music, participation and community activities.",
    image: "/images/hero/ala-muziki.JPG",
  },
  {
    date: "Academic Year 2026",
    category: "Academics",
    title: "Preparing Students for Academic Excellence",
    description:
      "Wari continues to build a focused academic environment that encourages students to learn, work hard and pursue their goals.",
    image: "/images/hero/students.JPG",
  },
];

export default function NewsEvents() {
  return (
    <section
      id="news"
      className="overflow-hidden bg-staf-white py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <div className="min-w-0 max-w-3xl">
            <div className="mb-5 flex items-center gap-3 sm:mb-6 sm:gap-4">
              <span className="h-px w-8 shrink-0 bg-staf-yellow sm:w-10" />

              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-staf-green sm:text-[11px] sm:tracking-[0.28em]">
                News & Events
              </p>
            </div>

            <h2 className="font-heading text-[2rem] font-medium leading-[1.12] tracking-tight text-staf-blue sm:text-5xl lg:text-[3.6rem]">
              What is happening at{" "}
              <span className="text-staf-green">Wari.</span>
            </h2>

            <p className="mt-5 max-w-2xl text-[13px] leading-7 text-staf-muted sm:mt-6 sm:text-[15px] sm:leading-8">
              Stay connected with the latest activities, achievements,
              celebrations and important moments from St. Thomas Aquinas
              Foundation and Wari Secondary School.
            </p>
          </div>

          <Link
            href="#all-news"
            className="
              group inline-flex w-fit shrink-0 items-center gap-2.5
              text-[10px] font-bold uppercase tracking-[0.1em]
              text-staf-blue transition-colors hover:text-staf-green
              sm:text-sm sm:normal-case sm:tracking-normal
            "
          >
            View All News
            <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* NEWS GRID */}
        <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {newsItems.map((item) => (
            <article
              key={item.title}
              className="
                group flex min-w-0 flex-col overflow-hidden
                border border-staf-border bg-staf-white
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-xl
              "
            >
              {/* IMAGE */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />

                <div className="absolute inset-0 bg-staf-blue/10 transition-colors duration-300 group-hover:bg-staf-blue/0" />

                {/* CATEGORY */}
                <div className="absolute left-3 top-3 max-w-[calc(100%-1.5rem)] bg-staf-yellow px-2.5 py-1.5 sm:left-5 sm:top-5 sm:px-3 sm:py-2">
                  <span className="block truncate text-[8px] font-bold uppercase tracking-[0.14em] text-staf-blue sm:text-[9px] sm:tracking-[0.16em]">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="flex flex-1 flex-col p-5 sm:p-7">
                {/* DATE */}
                <div className="flex flex-wrap items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-staf-muted sm:text-[10px] sm:tracking-[0.16em]">
                  <CalendarDays className="h-3.5 w-3.5 shrink-0 text-staf-green" />
                  <span>{item.date}</span>
                </div>

                {/* TITLE */}
                <h3 className="mt-3 break-words font-heading text-xl leading-tight text-staf-blue transition-colors duration-300 group-hover:text-staf-green sm:mt-4 sm:text-2xl">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-3 text-[13px] leading-6 text-staf-muted sm:mt-4 sm:text-sm sm:leading-7">
                  {item.description}
                </p>

                {/* READ MORE */}
                <div className="mt-auto border-t border-staf-border pt-4 sm:mt-6 sm:pt-5">
                  <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.1em] text-staf-blue transition-colors group-hover:text-staf-green sm:text-xs sm:tracking-[0.12em]">
                    Read More
                    <ArrowRight className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* FEATURED EVENT STRIP */}
        <div className="mt-10 overflow-hidden bg-staf-blue sm:mt-14">
          <div className="grid lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="px-5 py-8 sm:px-10 sm:py-9 lg:px-12 lg:py-10">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-staf-yellow sm:h-2 sm:w-2" />

                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-staf-yellow sm:text-[10px] sm:tracking-[0.22em]">
                  Stay Connected
                </p>
              </div>

              <h3 className="mt-3 font-heading text-xl leading-tight text-white sm:mt-4 sm:text-3xl">
                Follow the journey of our students.
              </h3>

              <p className="mt-3 max-w-2xl text-[12px] leading-6 text-white/60 sm:text-sm sm:leading-7">
                School activities, announcements, celebrations and
                achievements will be shared here to keep parents, students,
                alumni and the wider community connected with Wari.
              </p>
            </div>

            <Link
              href="#contact"
              className="
                group flex min-h-14 items-center justify-center gap-3
                border-t border-white/10 bg-staf-blue-light px-6 py-5
                text-[11px] font-bold uppercase tracking-[0.1em]
                text-staf-yellow transition-colors
                hover:bg-staf-yellow hover:text-staf-blue
                sm:px-8 sm:text-sm sm:normal-case sm:tracking-normal
                lg:h-full lg:min-h-0 lg:border-l lg:border-t-0
              "
            >
              Stay Connected
              <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}