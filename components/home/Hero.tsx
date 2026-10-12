
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-staf-blue text-staf-white">
      {/* Gold accent */}
      <div className="absolute left-0 top-0 z-20 h-full w-1 bg-staf-yellow" />

      <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 items-stretch lg:min-h-[min(760px,calc(100vh-84px))] lg:grid-cols-[1.05fr_0.95fr]">
        {/* LEFT — FOUNDATION MESSAGE */}
        <div className="relative flex min-w-0 flex-col justify-center px-6 py-12 sm:px-10 sm:py-14 lg:px-10 lg:py-14 xl:px-16">
          <div className="relative z-10 mx-auto w-full max-w-2xl lg:mx-0">
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3 sm:mb-6 sm:gap-4">
              <span className="h-px w-8 shrink-0 bg-staf-yellow sm:w-12" />

              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-staf-yellow sm:text-[11px] sm:tracking-[0.26em]">
                St. Thomas Aquinas Foundation
              </p>
            </div>

            {/* Main Heading */}
            <h1 className="font-heading text-[2.35rem] font-medium leading-[1.08] tracking-[-0.035em] sm:text-5xl lg:text-[3.65rem] xl:text-[4.15rem]">
              Forming Minds.
              <br />
              <span className="text-staf-yellow">
                Building Character.
              </span>
              <br />
              <span className="text-white">Serving God.</span>
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-xl text-sm leading-6 text-white/75 sm:mt-6 sm:text-base sm:leading-7">
              A Catholic foundation dedicated to nurturing young people
              through faith, academic excellence, discipline and hard work.
            </p>

            {/* Institution */}
            <div className="mt-6 flex items-start gap-4 sm:mt-7">
              <div className="mt-1 h-10 w-px shrink-0 bg-staf-yellow sm:h-12" />

              <div className="min-w-0">
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/45 sm:text-[10px] sm:tracking-[0.24em]">
                  Our Institution
                </p>

                <h2 className="mt-1 font-heading text-lg text-white sm:text-xl lg:text-2xl">
                  Wari Secondary School
                </h2>

                <p className="mt-1 max-w-md text-xs leading-5 text-white/60 sm:text-sm">
                  Form V–VI education shaped by knowledge, character and purpose.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-7 flex flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-4">
              <Link
                href="#institutions"
                className="group inline-flex min-h-12 items-center justify-center gap-3 bg-staf-yellow px-5 py-3 text-sm font-bold text-staf-blue transition-colors duration-300 hover:bg-white"
              >
                Explore Wari
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="#about"
                className="inline-flex min-h-12 items-center justify-center border border-white/25 px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:border-staf-yellow hover:text-staf-yellow"
              >
                Our Foundation
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT — IMAGE */}
        <div className="relative min-w-0 px-4 pb-5 sm:px-8 sm:pb-8 lg:flex lg:items-center lg:px-8 lg:py-10 xl:px-10">
          <div className="relative h-[340px] w-full overflow-hidden sm:h-[430px] lg:h-[min(620px,calc(100vh-180px))] lg:min-h-[440px]">
            <Image
              src="/images/hero/school.JPG"
              alt="Students of Wari Secondary School"
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 47vw"
              className="object-cover object-[center_35%]"
            />

            {/* Subtle Image Treatment */}
            <div className="absolute inset-0 bg-staf-blue/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-staf-blue/35 via-transparent to-staf-blue/5" />

            {/* Gold Frame */}
            <div className="pointer-events-none absolute inset-3 border border-staf-yellow/50 sm:inset-5 lg:inset-6" />

            {/* Compact Image Information Card */}
            <div className="absolute bottom-5 right-5 sm:bottom-7 sm:right-7 lg:bottom-8 lg:right-8">
              <div className="max-w-[230px] border-l-2 border-staf-yellow bg-staf-blue/90 px-3 py-3 shadow-lg backdrop-blur-sm sm:max-w-[260px] sm:px-4 sm:py-3.5">
                <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-staf-yellow sm:text-[9px]">
                  Education with Purpose
                </p>

                <p className="mt-1 font-heading text-sm leading-snug text-white sm:text-base">
                  Knowledge that shapes character.
                </p>

                <p className="mt-1 text-[10px] leading-relaxed text-white/70 sm:text-[11px]">
                  Preparing young people for responsibility, service and excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM VALUES STRIP */}
      <div className="relative z-10 border-t border-white/10 bg-staf-blue-light/40">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-4 gap-y-2 px-4 py-3 text-[9px] font-semibold uppercase tracking-[0.15em] text-white/55 sm:gap-x-7 sm:px-6 sm:text-[10px] sm:tracking-[0.2em]">
          <span>Faith</span>
          <span className="h-1 w-1 rounded-full bg-staf-yellow" />
          <span>Knowledge</span>
          <span className="h-1 w-1 rounded-full bg-staf-yellow" />
          <span>Character</span>
          <span className="h-1 w-1 rounded-full bg-staf-yellow" />
          <span>Excellence</span>
          <span className="h-1 w-1 rounded-full bg-staf-yellow" />
          <span>Service</span>
        </div>
      </div>
    </section>
  );
}

