
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Cross, ShieldCheck, BriefcaseBusiness } from "lucide-react";

const pillars = [
  {
    title: "Liturgy & Spirituality",
    description: "Nurturing faith and spiritual growth.",
    icon: Cross,
  },
  {
    title: "Academic Excellence",
    description: "Pursuing knowledge, truth, and wisdom.",
    icon: BookOpen,
  },
  {
    title: "Discipline",
    description: "Building integrity and responsibility.",
    icon: ShieldCheck,
  },
  {
    title: "Hard Work",
    description: "Cultivating perseverance and commitment.",
    icon: BriefcaseBusiness,
  },
];

export default function FoundationIntro() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-staf-white py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* FOUNDATION IMAGE */}
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -left-4 h-24 w-24 bg-staf-yellow/15 sm:-bottom-5 sm:-left-5 sm:h-28 sm:w-28"
            />

            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/hero/utoto.JPG"
                alt="Students representing the educational mission of St. Thomas Aquinas Foundation"
                fill
                priority={false}
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-staf-blue/10"
              />

              <div
                aria-hidden="true"
                className="absolute inset-3 border border-staf-yellow/70 sm:inset-5"
              />
            </div>

            {/* FOUNDATION IDENTITY */}
            <div className="absolute -bottom-6 right-3 bg-staf-blue px-4 py-4 shadow-xl sm:-bottom-7 sm:right-8 sm:px-6 sm:py-5">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-staf-yellow sm:text-[10px] sm:tracking-[0.22em]">
                Our Educational Mission
              </p>

              <p className="mt-1 font-heading text-base text-white sm:text-lg">
                Forming Minds. Building Character.
              </p>
            </div>
          </div>

          {/* FOUNDATION INTRODUCTION */}
          <div className="lg:pl-4">
            {/* SECTION LABEL */}
            <div className="mb-5 flex items-center gap-3 sm:mb-6 sm:gap-4">
              <span
                aria-hidden="true"
                className="h-px w-8 bg-staf-yellow sm:w-10"
              />

              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-staf-green sm:text-[11px] sm:tracking-[0.28em]">
                About the Foundation
              </p>
            </div>

            {/* HEADING */}
            <h2
              id="about-heading"
              className="max-w-xl font-heading text-[2.15rem] font-medium leading-[1.12] tracking-tight text-staf-blue sm:text-5xl lg:text-[3.4rem]"
            >
              Education that shapes{" "}
              <span className="text-staf-green">
                minds, character, and purpose.
              </span>
            </h2>

            {/* INSTITUTIONAL STORY */}
            <div className="mt-6 max-w-xl space-y-4 text-[14px] leading-7 text-staf-muted sm:mt-7 sm:space-y-5 sm:text-[15px] sm:leading-8">
              <p>
                St. Thomas Aquinas Foundation is committed to providing
                quality education rooted in Catholic values, academic
                excellence, and the holistic development of young people.
                Through Wari Secondary School, the Foundation seeks to
                nurture learners who are intellectually capable, morally
                grounded, spiritually formed, and socially responsible.
              </p>

              <p>
                Inspired by the intellectual and spiritual legacy of
                St. Thomas Aquinas, we believe that education goes beyond
                the acquisition of knowledge. It should develop critical
                thinking, strengthen moral character, and encourage the
                pursuit of truth through the complementary roles of faith
                and reason.
              </p>

              <p>
                Our commitment is to create an environment where learners
                discover their potential, embrace discipline and hard work,
                and prepare to use their knowledge and abilities in service
                to God, humanity, and society.
              </p>
            </div>

            {/* OFFICIAL FOUNDATION PILLARS */}
            <div className="mt-8 grid grid-cols-1 gap-5 border-y border-staf-border py-6 sm:mt-9 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-7">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;

                return (
                  <div key={pillar.title} className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-staf-yellow/15">
                      <Icon
                        aria-hidden="true"
                        className="h-5 w-5 text-staf-green"
                        strokeWidth={1.7}
                      />
                    </div>

                    <div>
                      <h3 className="font-heading text-base font-medium text-staf-blue">
                        {pillar.title}
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-staf-muted">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CALL TO ACTION */}
            <div className="mt-7 sm:mt-8">
              <Link
                href="#institutions"
                className="group inline-flex items-center gap-3 text-sm font-bold text-staf-blue transition-colors hover:text-staf-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-staf-green focus-visible:ring-offset-4"
              >
                Discover the Foundation

                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
