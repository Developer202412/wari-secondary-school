"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

const combinations = [
  {
    code: "PCM",
    name: "Physics • Chemistry • Mathematics",
    description:
      "A strong science combination for students interested in engineering, technology, physical sciences and related fields.",
    subjects: ["Physics", "Chemistry", "Mathematics"],
  },
  {
    code: "PGM",
    name: "Physics • Geography • Mathematics",
    description:
      "Combines physical science, mathematics and geography for students interested in technical, environmental and spatial disciplines.",
    subjects: ["Physics", "Geography", "Mathematics"],
  },
  {
    code: "PMCs",
    name: "Physics • Mathematics • Computer Science",
    description:
      "A technology-oriented combination connecting physics and mathematics with computer science and digital problem solving.",
    subjects: ["Physics", "Mathematics", "Computer Science"],
  },
  {
    code: "PCB",
    name: "Physics • Chemistry • Biology",
    description:
      "A science pathway for students interested in medicine, health sciences, laboratory sciences and related disciplines.",
    subjects: ["Physics", "Chemistry", "Biology"],
  },
  {
    code: "EGM",
    name: "Economics • Geography • Mathematics",
    description:
      "A combination that develops analytical, quantitative and geographical understanding for economics and related fields.",
    subjects: ["Economics", "Geography", "Mathematics"],
  },
  {
    code: "ECsM",
    name: "Economics • Computer Science • Mathematics",
    description:
      "Brings together economics, computing and mathematics for students interested in technology, business and analytical fields.",
    subjects: ["Economics", "Computer Science", "Mathematics"],
  },
  {
    code: "CBG",
    name: "Chemistry • Biology • Geography",
    description:
      "Connects natural sciences with geography for students interested in health, environmental and life-science related fields.",
    subjects: ["Chemistry", "Biology", "Geography"],
  },
  {
    code: "HGE",
    name: "History • Geography • Economics",
    description:
      "A humanities and social sciences pathway developing understanding of society, history, geography and economic systems.",
    subjects: ["History", "Geography", "Economics"],
  },
];

export default function CombinationExplorer() {
  const [activeCode, setActiveCode] = useState("PCM");

  const activeCombination =
    combinations.find((combination) => combination.code === activeCode) ??
    combinations[0];

  return (
    <section
      id="combinations"
      className="bg-staf-cream py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="max-w-3xl">
          <div className="mb-5 flex items-center gap-3 sm:mb-6 sm:gap-4">
            <span className="h-px w-8 bg-staf-yellow sm:w-10" />

            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-staf-green sm:text-[11px] sm:tracking-[0.28em]">
              Find Your Path
            </p>
          </div>

          <h2 className="font-heading text-[2.15rem] font-medium leading-[1.12] tracking-tight text-staf-blue sm:text-5xl lg:text-[3.6rem]">
            Choose an academic path{" "}
            <span className="text-staf-green">
              for your future.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-[14px] leading-7 text-staf-muted sm:mt-6 sm:text-[15px] sm:leading-8">
            Wari Secondary School offers a range of A-Level subject
            combinations designed to help students build the knowledge and
            skills required for their future studies and careers.
          </p>
        </div>

        {/* EXPLORER */}
        <div className="mt-10 grid overflow-hidden border border-staf-border bg-staf-white sm:mt-14 lg:grid-cols-[0.8fr_1.2fr]">
          {/* COMBINATION LIST */}
          <div className="border-b border-staf-border lg:border-b-0 lg:border-r">
            <div className="border-b border-staf-border px-5 py-4 sm:px-6 sm:py-5">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-staf-muted sm:text-[10px]">
                A-Level Combinations
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-1">
              {combinations.map((combination) => {
                const active = combination.code === activeCode;

                return (
                  <button
                    key={combination.code}
                    type="button"
                    onClick={() => setActiveCode(combination.code)}
                    aria-pressed={active}
                    className={`
                      group
                      flex
                      min-h-[72px]
                      items-center
                      justify-between
                      border-b
                      border-staf-border
                      px-5
                      py-4
                      text-left
                      transition-all
                      duration-200
                      sm:px-6
                      sm:py-5
                      ${
                        active
                          ? "bg-staf-blue text-white"
                          : "bg-white text-staf-blue hover:bg-staf-cream"
                      }
                    `}
                  >
                    <div>
                      <span
                        className={`
                          font-heading
                          text-lg
                          sm:text-xl
                          ${
                            active
                              ? "text-staf-yellow"
                              : "text-staf-blue"
                          }
                        `}
                      >
                        {combination.code}
                      </span>

                      <p
                        className={`
                          mt-1
                          text-[10px]
                          sm:text-[11px]
                          ${
                            active
                              ? "text-white/55"
                              : "text-staf-muted"
                          }
                        `}
                      >
                        3 Subjects
                      </p>
                    </div>

                    <ArrowRight
                      className={`
                        h-4
                        w-4
                        shrink-0
                        transition-transform
                        duration-200
                        ${
                          active
                            ? "translate-x-1 text-staf-yellow"
                            : "text-staf-muted group-hover:translate-x-1"
                        }
                      `}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* ACTIVE COMBINATION */}
          <div className="relative flex min-h-[460px] flex-col justify-between bg-staf-blue p-6 sm:min-h-[430px] sm:p-10 lg:min-h-[430px] lg:p-12">
            {/* Decorative gold line */}
            <div className="absolute right-0 top-0 h-full w-1 bg-staf-yellow" />

            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-staf-yellow sm:text-[11px] sm:tracking-[0.22em]">
                Selected Combination
              </p>

              <div className="mt-5 flex items-end gap-3 sm:mt-6 sm:gap-4">
                <h3 className="font-heading text-5xl font-medium leading-none text-white sm:text-7xl">
                  {activeCombination.code}
                </h3>

                <span className="mb-1 h-px w-8 bg-staf-yellow sm:w-12" />
              </div>

              <p className="mt-5 max-w-xl font-heading text-xl leading-snug text-white sm:mt-6 sm:text-3xl">
                {activeCombination.name}
              </p>

              <p className="mt-4 max-w-xl text-[13px] leading-6 text-white/65 sm:mt-5 sm:text-sm sm:leading-7">
                {activeCombination.description}
              </p>
            </div>

            {/* SUBJECTS */}
            <div className="mt-10 sm:mt-12">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/40 sm:text-[10px]">
                Subjects
              </p>

              <div className="mt-3 grid gap-2.5 sm:mt-4 sm:grid-cols-3 sm:gap-3">
                {activeCombination.subjects.map((subject) => (
                  <div
                    key={subject}
                    className="flex min-h-[52px] items-center gap-3 border border-white/10 bg-white/5 px-3.5 py-3 sm:px-4 sm:py-4"
                  >
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center bg-staf-yellow">
                      <Check className="h-3.5 w-3.5 text-staf-blue" />
                    </div>

                    <span className="text-[11px] font-semibold text-white sm:text-xs">
                      {subject}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* NOTE */}
        <div className="mt-5 flex flex-col gap-4 border-l-2 border-staf-yellow pl-4 sm:mt-6 sm:pl-5 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-2xl text-[11px] leading-5 text-staf-muted sm:text-xs sm:leading-6">
            Each A-Level combination consists of three principal subjects.
            Students should consider their interests, abilities and future
            academic direction when choosing a combination.
          </p>

          <a
            href="#admissions"
            className="group inline-flex shrink-0 items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-staf-blue transition-colors hover:text-staf-green sm:text-xs"
          >
            Admission Information

            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}