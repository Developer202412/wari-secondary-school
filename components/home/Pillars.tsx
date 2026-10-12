import {
  BookOpen,
  Cross,
  ShieldCheck,
  Hammer,
} from "lucide-react";

const pillars = [
  {
    number: "01",
    title: "Liturgy & Spirituality",
    description:
      "Nurturing a living faith through prayer, liturgy and spiritual formation, helping young people grow in their relationship with God.",
    icon: Cross,
  },
  {
    number: "02",
    title: "Academic Excellence",
    description:
      "Creating a culture of serious learning, intellectual curiosity and academic achievement that prepares students for their future.",
    icon: BookOpen,
  },
  {
    number: "03",
    title: "Discipline",
    description:
      "Building responsible young people through self-discipline, respect, integrity and a strong sense of responsibility.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Hard Working",
    description:
      "Cultivating perseverance, commitment and a strong work ethic so that students learn to pursue excellence through effort.",
    icon: Hammer,
  },
];

export default function Pillars() {
  return (
    <section
      id="pillars"
      className="bg-staf-cream py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="max-w-3xl">
          <div className="mb-5 flex items-center gap-3 sm:mb-6 sm:gap-4">
            <span className="h-px w-8 bg-staf-yellow sm:w-10" />

            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-staf-green sm:text-[11px] sm:tracking-[0.28em]">
              Our Foundation
            </p>
          </div>

          <h2 className="font-heading text-[2.15rem] font-medium leading-[1.12] tracking-tight text-staf-blue sm:text-5xl lg:text-[3.5rem]">
            Four pillars that shape{" "}
            <span className="text-staf-green">
              every student.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-[14px] leading-7 text-staf-muted sm:mt-6 sm:text-[15px] sm:leading-8">
            Our formation goes beyond the classroom. We seek to develop
            young people whose faith, knowledge, discipline and work ethic
            prepare them to serve God, their communities and society.
          </p>
        </div>

        {/* PILLARS */}
        <div className="mt-12 grid gap-px overflow-hidden border border-staf-border bg-staf-border sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <article
                key={pillar.number}
                className="
                  group
                  relative
                  bg-staf-white
                  px-6
                  py-8
                  transition-colors
                  duration-300
                  hover:bg-staf-blue
                  sm:px-8
                  sm:py-10
                "
              >
                {/* Number + Icon */}
                <div className="flex items-center justify-between">
                  <span className="font-heading text-sm text-staf-yellow">
                    {pillar.number}
                  </span>

                  <Icon
                    className="
                      h-6
                      w-6
                      text-staf-green
                      transition-colors
                      duration-300
                      group-hover:text-staf-yellow
                    "
                    strokeWidth={1.5}
                  />
                </div>

                {/* Title */}
                <h3
                  className="
                    mt-9
                    font-heading
                    text-[1.4rem]
                    leading-tight
                    text-staf-blue
                    transition-colors
                    duration-300
                    group-hover:text-white
                    sm:mt-12
                    sm:text-2xl
                  "
                >
                  {pillar.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    mt-4
                    text-[13px]
                    leading-6
                    text-staf-muted
                    transition-colors
                    duration-300
                    group-hover:text-white/65
                    sm:mt-5
                    sm:text-sm
                    sm:leading-7
                  "
                >
                  {pillar.description}
                </p>

                {/* Bottom accent */}
                <div
                  className="
                    mt-7
                    h-px
                    w-10
                    bg-staf-yellow
                    transition-all
                    duration-300
                    group-hover:w-full
                    sm:mt-8
                  "
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}