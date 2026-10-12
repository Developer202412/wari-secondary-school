
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HeadMessage() {
  return (
    <section
      aria-labelledby="head-message-heading"
      className="bg-staf-white py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          {/* HEAD OF SCHOOL IMAGE */}
          <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute -bottom-3 -right-3 h-20 w-20 bg-staf-yellow/15 sm:-bottom-5 sm:-right-5 sm:h-28 sm:w-28"
            />

            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/hero/mkuu2.JPG"
                alt="Stephen Mosses Luhende, Head of Wari Secondary School"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 35vw"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-staf-blue/50 via-transparent to-transparent"
              />

              <div
                aria-hidden="true"
                className="absolute inset-3 border border-staf-yellow/70 sm:inset-5"
              />
            </div>

            {/* SCHOOL IDENTITY */}
            <div className="absolute bottom-4 left-3 right-3 bg-staf-blue px-4 py-4 shadow-xl sm:bottom-7 sm:left-8 sm:right-auto sm:max-w-[calc(100%-4rem)] sm:px-6 sm:py-5">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-staf-yellow sm:text-[10px] sm:tracking-[0.22em]">
                Educational Leadership
              </p>

              <p className="mt-1 font-heading text-lg leading-tight text-white sm:text-xl">
                Wari Secondary School
              </p>
            </div>
          </div>

          {/* MESSAGE */}
          <div>
            {/* SECTION LABEL */}
            <div className="mb-5 flex items-center gap-3 sm:mb-6 sm:gap-4">
              <span
                aria-hidden="true"
                className="h-px w-8 shrink-0 bg-staf-yellow sm:w-10"
              />

              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-staf-green sm:text-[11px] sm:tracking-[0.28em]">
                A Message from the Head of School
              </p>
            </div>

            {/* HEADING */}
            <h2
              id="head-message-heading"
              className="max-w-2xl font-heading text-[2rem] font-medium leading-[1.12] tracking-tight text-staf-blue sm:text-5xl lg:text-[3.5rem]"
            >
              Forming minds through{" "}
              <span className="text-staf-green">
                faith and reason.
              </span>
            </h2>

            {/* PHILOSOPHICAL MESSAGE */}
            <div className="relative mt-8 max-w-2xl border-l-2 border-staf-yellow pl-5 sm:mt-9 sm:pl-8">
              <span
                aria-hidden="true"
                className="absolute -left-2.5 -top-5 bg-staf-white px-1 font-heading text-4xl leading-none text-staf-yellow"
              >
                “
              </span>

              <p className="font-heading text-xl leading-[1.55] text-staf-blue sm:text-3xl sm:leading-relaxed">
                True education goes beyond the acquisition of knowledge.
                It develops the intellect, forms virtuous character, and
                guides learners towards truth through the harmony of
                faith and reason.
              </p>
            </div>

            {/* MESSAGE BODY */}
            <div className="mt-6 max-w-xl space-y-4 text-[13px] leading-7 text-staf-muted sm:mt-7 sm:text-[15px] sm:leading-8">
              <p>
                Inspired by the philosophy of St. Thomas Aquinas, Wari
                Secondary School is committed to educating the whole
                person. We believe that learners should be encouraged
                to think critically, seek truth, develop wisdom, and
                understand the moral responsibilities that accompany
                knowledge.
              </p>

              <p>
                Our educational mission brings together spiritual
                formation, academic excellence, discipline, and hard
                work. We strive to nurture young people who combine
                intellectual ability with integrity, self-discipline,
                and respect for human dignity.
              </p>

              <p>
                Through this commitment, we prepare our students to
                pursue their aspirations, contribute positively to
                society, and use their talents in service to God and
                humanity.
              </p>
            </div>

            {/* SIGNATURE */}
            <div className="mt-8 flex items-end justify-between gap-4 border-t border-staf-border pt-5 sm:mt-9 sm:gap-5 sm:pt-6">
              <div className="min-w-0">
                <p className="font-heading text-lg leading-tight text-staf-blue sm:text-xl">
                  Stephen Mosses Luhende
                </p>

                <p className="mt-1 text-[9px] font-semibold uppercase leading-4 tracking-[0.16em] text-staf-muted sm:text-[10px] sm:tracking-[0.2em]">
                  Head of School · Wari Secondary School
                </p>
              </div>

              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 shrink-0 text-staf-yellow sm:h-5 sm:w-5"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
