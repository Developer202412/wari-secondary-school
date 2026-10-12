"use client";

import { useEffect, useState } from "react";
import { Download, MessageSquare, X, Globe, FileText } from "lucide-react";
import OnlineApplicationForm from "@/components/admissions/OnlineApplicationForm";

export default function AdmissionsCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"choose" | "online">("choose");

  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
        setModalMode("choose");
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  return (
    <>
      <section
        id="admissions"
        className="overflow-hidden bg-staf-white py-20 sm:py-24 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-staf-blue">
            {/* DECORATIVE ELEMENTS */}
            <div className="absolute left-0 top-0 h-full w-1 bg-staf-yellow" />
            <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full border border-staf-yellow/10 sm:h-72 sm:w-72" />
            <div className="absolute -bottom-32 right-6 h-60 w-60 rounded-full border border-white/5 sm:right-16 sm:h-80 sm:w-80" />

            {/* MAIN CONTENT */}
            <div className="relative z-10 grid lg:grid-cols-[1.15fr_0.85fr]">
              {/* MAIN MESSAGE */}
              <div className="px-5 py-9 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
                <div className="mb-5 flex items-center gap-3 sm:mb-6 sm:gap-4">
                  <span className="h-px w-8 shrink-0 bg-staf-yellow sm:w-10" />
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-staf-yellow sm:text-[11px] sm:tracking-[0.28em]">
                    Admissions
                  </p>
                </div>

                <h2 className="max-w-2xl font-heading text-[2rem] font-medium leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[3.7rem]">
                  Begin the journey at{" "}
                  <span className="text-staf-yellow">
                    Wari Secondary School.
                  </span>
                </h2>

                <p className="mt-5 max-w-2xl text-[13px] leading-7 text-white/75 sm:mt-6 sm:text-[15px] sm:leading-8">
                  Join a learning community committed to academic excellence,
                  faith, discipline and hard work. Choose between filling our
                  online application or downloading the official admission forms.
                </p>
              </div>

              {/* APPLICATION ACTIONS */}
              <div className="flex items-center border-t border-white/10 bg-staf-blue-light/35 lg:border-l lg:border-t-0">
                <div className="w-full px-5 py-9 sm:px-10 sm:py-12 lg:px-12">
                  <div className="flex h-12 w-12 items-center justify-center border border-staf-yellow/50 bg-staf-blue">
                    <Download
                      className="h-6 w-6 text-staf-yellow"
                      strokeWidth={1.7}
                    />
                  </div>

                  <h3 className="mt-5 font-heading text-2xl text-white sm:text-3xl">
                    Application Portal
                  </h3>

                  <p className="mt-3 text-[13px] leading-6 text-white/70 sm:text-sm sm:leading-7">
                    Apply online directly through our secure database system or
                    download traditional PDF admission forms.
                  </p>

                  {/* ACTION BUTTONS */}
                  <div className="mt-6 flex flex-col gap-3.5">
                    <button
                      type="button"
                      onClick={() => {
                        setModalMode("online");
                        setIsModalOpen(true);
                      }}
                      className="inline-flex min-h-12 w-full cursor-pointer items-center justify-center gap-2 bg-staf-yellow px-5 py-3.5 text-[11px] font-bold uppercase tracking-[0.1em] text-staf-blue transition-colors duration-300 hover:bg-white sm:text-xs"
                    >
                      <Globe className="h-4 w-4 shrink-0" />
                      Jaza Fomu Mtandaoni (Online)
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setModalMode("choose");
                        setIsModalOpen(true);
                      }}
                      className="inline-flex min-h-12 w-full cursor-pointer items-center justify-center gap-2 border border-staf-yellow bg-transparent px-5 py-3.5 text-[11px] font-bold uppercase tracking-[0.1em] text-staf-yellow transition-all duration-300 hover:bg-staf-yellow hover:text-staf-blue sm:text-xs"
                    >
                      <FileText className="h-4 w-4 shrink-0" />
                      Pakua Fomu za PDF
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* BOTTOM STRIP */}
            <div className="relative z-10 border-t border-white/10 bg-staf-blue-light/30 px-5 py-5 sm:px-10 lg:px-14">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <p className="text-[10px] leading-5 text-white/70 sm:text-xs">
                  Wari Secondary School · Form V–VI · Advanced Level Education
                </p>
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-staf-yellow" />
                  <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/70 sm:text-[10px]">
                    Faith · Knowledge · Character
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADMISSION MODAL (HYBRID: ONLINE FORM OR PDF DOWNLOADS) */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/80 p-3 backdrop-blur-sm sm:p-5"
          onClick={() => {
            setIsModalOpen(false);
            setModalMode("choose");
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="admission-modal-title"
            className="relative my-auto w-full max-w-2xl overflow-hidden border border-staf-yellow/40 bg-staf-blue p-5 shadow-2xl sm:p-8 max-h-[90vh] overflow-y-auto"
            onClick={(event) => event.stopPropagation()}
          >
            {/* TOP ACCENT */}
            <div className="absolute left-0 top-0 h-1.5 w-full bg-staf-yellow" />

            {/* CLOSE BUTTON */}
            <button
              type="button"
              onClick={() => {
                setIsModalOpen(false);
                setModalMode("choose");
              }}
              className="absolute right-3 top-3 flex h-10 w-10 cursor-pointer items-center justify-center text-white/70 transition-colors hover:text-staf-yellow sm:right-4 sm:top-4"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {modalMode === "online" ? (
              <div>
                <div className="mb-4 pr-9">
                  <h3 id="admission-modal-title" className="font-heading text-xl font-bold leading-tight text-white sm:text-2xl">
                    Maombi ya Kujiunga Mtandaoni
                  </h3>
                  <p className="mt-1 text-xs text-white/70">
                    Jaza fomu hii kwa umakini. Hakikisha umelipia Tsh 40,000 kupitia Benki ya CRDB.
                  </p>
                </div>
                <OnlineApplicationForm />
              </div>
            ) : (
              <div>
                <div className="pr-9">
                  <h3 id="admission-modal-title" className="font-heading text-xl font-bold leading-tight text-white sm:text-2xl">
                    Pakua Fomu ya Kujiunga (PDF)
                  </h3>
                  <p className="mt-2 text-xs leading-6 text-white/70 sm:text-sm">
                    Tafadhali chagua kategoria sahihi ya fomu unayohitaji kupakua:
                  </p>
                </div>

                {/* FORM OPTIONS */}
                <div className="mt-6 flex flex-col gap-4">
                  {/* PRE-FORM FIVE */}
                  <div className="border border-white/20 bg-staf-blue-light/40 p-4 transition-colors hover:border-staf-yellow">
                    <h4 className="font-heading text-base font-semibold leading-snug text-staf-yellow">
                      Pre-Form Five (Kidato cha Tano)
                    </h4>
                    <p className="mt-2 text-[11px] leading-5 text-white/75 sm:text-xs">
                      Mahususi kwa wahitimu wa Kidato cha Nne wanaotaka kujiunga na masomo ya A-Level.
                    </p>
                    <a
                      href="/docs/pre-form-5-admission-form.pdf"
                      download
                      className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 bg-staf-yellow px-3 py-3 text-center text-[10px] font-bold text-staf-blue transition-colors duration-300 hover:bg-white sm:w-fit sm:px-4 sm:text-xs"
                    >
                      <Download className="h-3.5 w-3.5 shrink-0" />
                      Download Pre-Form V (.PDF)
                    </a>
                  </div>

                  {/* GENERAL ADMISSION */}
                  <div className="border border-white/20 bg-staf-blue-light/40 p-4 transition-colors hover:border-staf-yellow">
                    <h4 className="font-heading text-base font-semibold leading-snug text-staf-yellow">
                      General Admission and Transfer Form
                    </h4>
                    <p className="mt-2 text-[11px] leading-5 text-white/75 sm:text-xs">
                      Kwa wanafunzi wanaojiunga na shule kwa ujumla au wanaohitaji kuhamia (Transfer).
                    </p>
                    <a
                      href="/docs/general-admission-form.pdf"
                      download
                      className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 bg-staf-yellow px-3 py-3 text-center text-[10px] font-bold text-staf-blue transition-colors duration-300 hover:bg-white sm:w-fit sm:px-4 sm:text-xs"
                    >
                      <Download className="h-3.5 w-3.5 shrink-0" />
                      Download General Form (.PDF)
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* CLOSE FOOTER */}
            <div className="mt-6 border-t border-white/10 pt-4 text-center">
              <button
                type="button"
                onClick={() => {
                  setIsModalOpen(false);
                  setModalMode("choose");
                }}
                className="min-h-10 cursor-pointer px-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/60 transition-colors hover:text-staf-yellow"
              >
                Ghairi / Funga
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
