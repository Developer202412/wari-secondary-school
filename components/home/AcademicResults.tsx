"use client";

import Link from "next/link";
import {
  BarChart3,
  ExternalLink,
  FileText,
  Trophy,
  Users,
  Download,
} from "lucide-react";

const resultHighlights = [
  {
    value: "Form V",
    label: "Academic Progress",
    description:
      "Continuous assessment, tests and examinations support consistent academic growth.",
  },
  {
    value: "Form VI",
    label: "Final Preparation",
    description:
      "Focused preparation for Advanced Level examinations and future studies.",
  },
  {
    value: "Mock",
    label: "November",
    description:
      "Mock examinations provide an important opportunity to assess readiness and identify areas for improvement.",
  },
];

const performanceStats = [
  {
    value: "176",
    label: "Total Students",
    description: "Students represented in the 2026 academic performance.",
  },
  {
    value: "158",
    label: "Division I",
    description: "Students achieving Division I in the 2026 results.",
  },
  {
    value: "18",
    label: "Division II",
    description: "Students achieving Division II in the 2026 results.",
  },
];

// Mock Results archive za miaka husika
const mockArchives = [
  {
    year: "2026",
    title: "Mock Examination Results 2026",
    description: "Matokeo rasmi ya mitihani ya Mock ya Kidato cha Tano na Sita kwa mwaka 2026.",
    fileUrl: "/docs/mock-results-2026.pdf",
  },
  {
    year: "2025",
    title: "Mock Examination Results 2025",
    description: "Kumbukumbu na ripoti ya matokeo ya Mock ya mwaka 2025.",
    fileUrl: "/docs/mock-results-2025.pdf",
  },
  {
    year: "2024",
    title: "Mock Examination Results 2024",
    description: "Nyaraka na matokeo ya mtihani wa Mock wa mwaka 2024.",
    fileUrl: "/docs/mock-results-2024.pdf",
  },
];

export default function AcademicResults() {
  return (
    <section
      id="results"
      className="bg-staf-blue py-20 text-white sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-20">
          <div>
            <div className="mb-5 flex items-center gap-3 sm:mb-6 sm:gap-4">
              <span className="h-px w-8 shrink-0 bg-staf-yellow sm:w-10" />
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-staf-yellow sm:text-[11px] sm:tracking-[0.28em]">
                Academic Results
              </p>
            </div>

            <h2 className="max-w-3xl font-heading text-[2rem] font-medium leading-[1.12] tracking-tight sm:text-5xl lg:text-[3.6rem]">
              Measuring progress.
              <br />
              <span className="text-staf-yellow">
                Celebrating achievement.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-[13px] leading-7 text-white/65 sm:text-[15px] sm:leading-8 lg:pb-1">
            Academic results provide a window into our students&apos; progress.
            We value both achievement and the consistent effort behind every
            step forward.
          </p>
        </div>

        {/* ACADEMIC JOURNEY */}
        <div className="mt-10 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:mt-14 md:grid-cols-3">
          {resultHighlights.map((item, index) => (
            <article
              key={item.value}
              className="group bg-staf-blue px-5 py-7 transition-colors duration-300 hover:bg-staf-blue-light sm:px-8 sm:py-10"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/35 sm:text-[10px]">
                  0{index + 1}
                </span>

                {index === 0 && <BarChart3 className="h-5 w-5 shrink-0 text-staf-yellow" strokeWidth={1.5} />}
                {index === 1 && <Trophy className="h-5 w-5 shrink-0 text-staf-yellow" strokeWidth={1.5} />}
                {index === 2 && <FileText className="h-5 w-5 shrink-0 text-staf-yellow" strokeWidth={1.5} />}
              </div>

              <p className="mt-7 font-heading text-3xl text-white sm:mt-10">
                {item.value}
              </p>
              <h3 className="mt-2 text-sm font-bold text-staf-yellow">
                {item.label}
              </h3>
              <p className="mt-3 text-[12px] leading-6 text-white/55 sm:mt-4 sm:text-sm sm:leading-7">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        {/* 2026 PERFORMANCE STATS */}
        <div id="performance-2026" className="mt-12 scroll-mt-24 border-y border-white/10 py-10 sm:mt-16 sm:py-12">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-staf-yellow sm:text-[10px]">
                2026 Academic Performance
              </p>
              <h3 className="mt-3 font-heading text-2xl leading-snug text-white sm:text-3xl">
                2026 Academic Performance.
              </h3>
              <p className="mt-3 max-w-2xl text-[12px] leading-6 text-white/50 sm:text-sm sm:leading-7">
                The 2026 results reflect the academic performance of 176
                students, with students achieving Division I and Division II.
              </p>
            </div>
            <span className="w-fit shrink-0 border border-staf-yellow/30 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.18em] text-staf-yellow">
              2026 Results
            </span>
          </div>

          <div className="mt-8 grid border border-white/10 sm:grid-cols-3">
            {performanceStats.map((stat, index) => (
              <div
                key={stat.label}
                className={`px-5 py-7 sm:px-7 sm:py-8 ${
                  index !== performanceStats.length - 1
                    ? "border-b border-white/10 sm:border-b-0 sm:border-r"
                    : ""
                }`}
              >
                <p className="font-heading text-4xl text-white sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.12em] text-staf-yellow sm:text-xs">
                  {stat.label}
                </p>
                <p className="mt-3 max-w-xs text-[11px] leading-5 text-white/40 sm:text-xs sm:leading-6">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* =====================================================
            MOCK RESULTS ARCHIVES (2024 - 2026 PDF DOWNLOADS)
        ===================================================== */}
        <div id="mock-results" className="mt-12 sm:mt-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-staf-yellow sm:text-[10px]">
                Mock Examination Archives
              </p>
              <h3 className="mt-3 font-heading text-2xl leading-snug text-white sm:text-3xl">
                Pakua Matokeo ya Mock (2024 - 2026).
              </h3>
              <p className="mt-3 text-[12px] leading-6 text-white/55 sm:text-sm sm:leading-7">
                Fikia na u-download kumbukumbu za mitihani ya Mock kwa miaka ya 2024, 2025, na 2026.
              </p>
            </div>

            {/* NECTA OFFICIAL EXTERNAL LINK CARD */}
            <a
              href="https://matokeo.necta.go.tz/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between gap-4 border border-staf-yellow bg-staf-yellow/10 p-4 transition-colors hover:bg-staf-yellow hover:text-staf-blue group"
            >
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-staf-yellow group-hover:text-staf-blue">
                  Matokeo Rasmi ya Taifa
                </p>
                <p className="text-sm font-bold text-white group-hover:text-staf-blue mt-0.5">
                  Tembelea Tovuti ya NECTA
                </p>
              </div>
              <ExternalLink className="h-5 w-5 text-staf-yellow group-hover:text-staf-blue shrink-0" />
            </a>
          </div>

          {/* MOCK CARDS GRID */}
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {mockArchives.map((archive) => (
              <div
                key={archive.year}
                className="border border-white/10 bg-staf-blue-light/30 p-6 flex flex-col justify-between transition-all hover:border-staf-yellow"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="bg-staf-yellow px-2.5 py-1 text-[10px] font-bold uppercase text-staf-blue">
                      Mock {archive.year}
                    </span>
                    <FileText className="h-5 w-5 text-staf-yellow" strokeWidth={1.5} />
                  </div>

                  <h4 className="font-heading text-lg font-bold text-white">
                    {archive.title}
                  </h4>

                  <p className="mt-2 text-xs leading-5 text-white/60">
                    {archive.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <a
                    href={archive.fileUrl}
                    download
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-staf-yellow hover:text-white transition-colors"
                  >
                    <Download className="h-4 w-4 shrink-0" />
                    Pakua PDF ya Mock {archive.year}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FOOTNOTE */}
        <div className="mt-12 flex items-start gap-3 text-[10px] leading-5 text-white/30">
          <Users className="mt-0.5 h-3.5 w-3.5 shrink-0" />
          <p>
            Published academic information is provided for the school
            community and should be read together with official examination
            records where applicable.
          </p>
        </div>
      </div>
    </section>
  );
}