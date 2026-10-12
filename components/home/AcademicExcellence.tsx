import Link from "next/link";
import { ArrowRight, BookOpen, GraduationCap } from "lucide-react";

const academicFeatures = [
  {
    number: "01",
    title: "Serious Learning",
    description:
      "A focused learning environment that encourages students to take their studies seriously and pursue meaningful academic growth.",
  },
  {
    number: "02",
    title: "Strong Foundation",
    description:
      "Students develop knowledge and skills that prepare them for higher education, professional life and responsible citizenship.",
  },
  {
    number: "03",
    title: "Purposeful Formation",
    description:
      "Academic development is combined with character formation, discipline and values so that knowledge is put into meaningful service.",
  },
];

export default function AcademicExcellence() {
  return (
    <section
      id="academics"
      className="bg-staf-white py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* TOP INTRO */}
        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-end lg:gap-20">
          {/* LABEL + HEADING */}
          <div>
            <div className="mb-5 flex items-center gap-3 sm:mb-6 sm:gap-4">
              <span className="h-px w-8 bg-staf-yellow sm:w-10" />

              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-staf-green sm:text-[11px] sm:tracking-[0.28em]">
                Academic Excellence
              </p>
            </div>

            <h2 className="font-heading text-[2.15rem] font-medium leading-[1.12] tracking-tight text-staf-blue sm:text-5xl lg:text-[3.6rem]">
              Preparing students to{" "}
              <span className="text-staf-green">
                think, achieve and serve.
              </span>
            </h2>
          </div>

          {/* INTRO */}
          <div className="max-w-2xl lg:pb-2">
            <p className="text-[14px] leading-7 text-staf-muted sm:text-[15px] sm:leading-8">
              At Wari Secondary School, academic excellence is more than
              examination results. We seek to develop disciplined,
              knowledgeable and confident young people who are prepared for
              university, professional life and service to society.
            </p>

            <div className="mt-6 flex items-center gap-3 sm:mt-7">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-staf-blue sm:h-11 sm:w-11">
                <GraduationCap
                  className="h-5 w-5 text-staf-yellow"
                  strokeWidth={1.5}
                />
              </div>

              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-staf-blue sm:text-xs">
                  Form V – VI
                </p>

                <p className="mt-0.5 text-[11px] text-staf-muted sm:text-xs">
                  Advanced Level Education
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FEATURES */}
        <div className="mt-12 border-t border-staf-border sm:mt-16">
          <div className="grid lg:grid-cols-3">
            {academicFeatures.map((feature) => (
              <article
                key={feature.number}
                className="
                  group
                  border-b
                  border-staf-border
                  py-8
                  sm:py-9
                  lg:border-b-0
                  lg:border-r
                  lg:px-8
                  lg:first:pl-0
                  lg:last:border-r-0
                  lg:last:pr-0
                "
              >
                <div className="flex items-start justify-between">
                  <span className="font-heading text-sm text-staf-yellow">
                    {feature.number}
                  </span>

                  <BookOpen
                    className="
                      h-5
                      w-5
                      text-staf-green
                      transition-transform
                      duration-300
                      group-hover:-translate-y-1
                    "
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="mt-8 font-heading text-xl text-staf-blue sm:mt-10 sm:text-2xl">
                  {feature.title}
                </h3>

                <p className="mt-3 text-[13px] leading-6 text-staf-muted sm:mt-4 sm:text-sm sm:leading-7">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* ACADEMIC PATH */}
        <div className="mt-12 bg-staf-blue px-6 py-8 sm:mt-16 sm:px-10 sm:py-10 lg:flex lg:items-center lg:justify-between lg:px-12 lg:py-12">
          <div className="max-w-2xl">
            <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-staf-yellow sm:text-[10px] sm:tracking-[0.25em]">
              Find Your Path
            </p>

            <h3 className="mt-3 font-heading text-2xl leading-tight text-white sm:text-4xl">
              Explore our A-Level combinations.
            </h3>

            <p className="mt-4 text-[13px] leading-6 text-white/65 sm:text-sm sm:leading-7">
              Discover the subject combinations offered at Wari Secondary
              School and find an academic path aligned with each student's
              interests and future goals.
            </p>
          </div>

          <Link
            href="#combinations"
            className="
              group
              mt-6
              inline-flex
              w-full
              items-center
              justify-center
              gap-3
              bg-staf-yellow
              px-6
              py-3.5
              text-sm
              font-bold
              text-staf-blue
              transition-all
              duration-300
              hover:bg-white
              sm:w-auto
              lg:mt-0
            "
          >
            Explore Combinations

            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}