import Image from "next/image";
import {
  Award,
  HeartHandshake,
  Users,
  Target,
} from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Academic Focus",
    description:
      "A learning environment that encourages students to take their academic journey seriously and pursue excellence.",
  },
  {
    icon: HeartHandshake,
    title: "Faith & Character",
    description:
      "Education rooted in Catholic values, helping students grow in faith, integrity, responsibility and service.",
  },
  {
    icon: Users,
    title: "Student Formation",
    description:
      "We look beyond academic performance to develop disciplined, confident and responsible young people.",
  },
  {
    icon: Target,
    title: "Purpose & Direction",
    description:
      "Students are encouraged to connect what they learn today with their future studies, careers and contribution to society.",
  },
];

const differences = [
  {
    number: "01",
    title: "A-Level Focus",
    text: "A focused Form V–VI environment designed around advanced-level learning.",
  },
  {
    number: "02",
    title: "Focused Pathways",
    text: "Three-subject combinations that help students build a clear academic direction.",
  },
  {
    number: "03",
    title: "Whole-Person Formation",
    text: "Academic growth shaped alongside faith, discipline, character and service.",
  },
  {
    number: "04",
    title: "Future Direction",
    text: "Encouraging students to connect their studies with higher education and future careers.",
  },
];

export default function WhyWari() {
  return (
    <section
      id="institutions"
      className="bg-staf-white py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* =====================================================
            MAIN CONTENT
        ===================================================== */}
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          {/* =================================================
              IMAGE
          ================================================= */}
          <div className="relative">
            {/* Decorative block */}
            <div className="absolute -left-3 -top-3 h-20 w-20 bg-staf-yellow/15 sm:-left-5 sm:-top-5 sm:h-24 sm:w-24" />

            {/* Image */}
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/hero/utotos.JPG"
                alt="Students of Wari Secondary School"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-staf-blue/65 via-transparent to-transparent" />

              {/* Gold frame */}
              <div className="absolute inset-3 border border-staf-yellow/70 sm:inset-5" />

              {/* Image caption */}
              <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-staf-yellow sm:text-[10px] sm:tracking-[0.22em]">
                  Wari Secondary School
                </p>

                <p className="mt-2 max-w-sm font-heading text-lg leading-tight text-white sm:text-2xl">
                  Growing together. Learning together. Serving together.
                </p>
              </div>
            </div>

            {/* =================================================
                FLOATING ACADEMIC MARK
                Mobile: placed below image
                sm+: floating over image
            ================================================= */}
            <div className="mt-3 ml-auto w-fit bg-staf-blue px-5 py-4 shadow-xl sm:absolute sm:-bottom-6 sm:right-8 sm:mt-0 sm:px-6 sm:py-5">
              <p className="font-heading text-xl text-staf-yellow sm:text-2xl">
                Form V–VI
              </p>

              <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/55 sm:text-[10px] sm:tracking-[0.2em]">
                Advanced Level
              </p>
            </div>
          </div>

          {/* =================================================
              CONTENT
          ================================================= */}
          <div>
            {/* LABEL */}
            <div className="mb-5 flex items-center gap-3 sm:mb-6 sm:gap-4">
              <span className="h-px w-8 bg-staf-yellow sm:w-10" />

              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-staf-green sm:text-[11px] sm:tracking-[0.28em]">
                Why Wari
              </p>
            </div>

            {/* HEADING */}
            <h2 className="max-w-2xl font-heading text-[2rem] font-medium leading-[1.12] tracking-tight text-staf-blue sm:text-5xl lg:text-[3.5rem]">
              More than a school.
              <br />
              <span className="text-staf-green">
                A place to grow.
              </span>
            </h2>

            {/* INTRO */}
            <p className="mt-5 max-w-xl text-[13px] leading-7 text-staf-muted sm:mt-7 sm:text-[15px] sm:leading-8">
              Wari Secondary School provides an environment where academic
              development and personal formation go hand in hand. Our aim is
              to help young people become knowledgeable, disciplined and
              purposeful members of society.
            </p>

            {/* =================================================
                REASONS
            ================================================= */}
            <div className="mt-8 border-t border-staf-border sm:mt-10">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;

                return (
                  <div
                    key={reason.title}
                    className="group flex gap-4 border-b border-staf-border py-5 sm:gap-5 sm:py-6"
                  >
                    {/* ICON */}
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-staf-border transition-colors duration-300 group-hover:border-staf-yellow group-hover:bg-staf-yellow">
                      <Icon
                        className="h-[18px] w-[18px] text-staf-green transition-colors duration-300 group-hover:text-staf-blue"
                        strokeWidth={1.5}
                      />
                    </div>

                    {/* TEXT */}
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                        <span className="text-[9px] font-bold text-staf-yellow sm:text-[10px]">
                          0{index + 1}
                        </span>

                        <h3 className="font-heading text-lg text-staf-blue sm:text-xl">
                          {reason.title}
                        </h3>
                      </div>

                      <p className="mt-2 max-w-lg text-[12px] leading-6 text-staf-muted sm:text-sm">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* =====================================================
            THE WARI DIFFERENCE
        ===================================================== */}
        <div className="mt-14 border-y border-staf-border sm:mt-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {differences.map((item) => (
              <div
                key={item.number}
                className="
                  border-b border-staf-border
                  px-5 py-7
                  last:border-b-0
                  sm:px-6 sm:py-8
                  sm:[&:nth-child(n+3)]:border-b-0
                  lg:border-b-0
                  lg:border-r
                  lg:last:border-r-0
                "
              >
                <span className="text-[10px] font-bold tracking-[0.2em] text-staf-yellow">
                  {item.number}
                </span>

                <h3 className="mt-3 font-heading text-lg text-staf-blue sm:text-xl">
                  {item.title}
                </h3>

                <p className="mt-2 text-[12px] leading-6 text-staf-muted sm:text-[13px]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ===================================================== */}
        <div className="mt-14 border-y border-staf-border py-7 sm:mt-20 sm:py-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl font-heading text-xl leading-snug text-staf-blue sm:text-3xl">
              “Faith in God. Excellence in Learning. Character in Action.”
            </p>

            <div className="h-px w-16 bg-staf-yellow sm:w-24" />
          </div>
        </div>
      </div>
    </section>
  );
}