"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { sendInquiry } from "@/app/actions/send-inquiry";

const contactDetails = [
  {
    icon: MapPin,
    label: "Our Location",
    title: "Machame, Hai District",
    description: "Kilimanjaro, Tanzania",
  },
  {
    icon: Phone,
    label: "Official School Phones",
    title: "+255 745 777 015",
    description: "School office enquiries.",
    secondary: "+255 788 438 341",
  },
  {
    icon: Mail,
    label: "Official School Email",
    title: "warisecondaryschool@gmail.com",
    description: "Send us an email for enquiries and information.",
  },
  {
    icon: Clock3,
    label: "Office Hours",
    title: "Monday – Friday",
    description: "8:00 AM – 18:00 PM",
    saturday: "Saturday · 7:00 AM – 13:00 PM",
  },
];

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setFeedback(null);

    const formData = new FormData(e.currentTarget);
    const res = await sendInquiry(formData);

    setLoading(false);
    if (res.success) {
      setFeedback({ type: "success", message: res.message });
      (e.target as HTMLFormElement).reset();
    } else {
      setFeedback({ type: "error", message: res.message });
    }
  };

  return (
    <section id="contact" className="bg-staf-cream py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-20">
          <div>
            <div className="mb-5 flex items-center gap-3 sm:mb-6 sm:gap-4">
              <span className="h-px w-8 bg-staf-yellow sm:w-10" />
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-staf-green sm:text-[11px] sm:tracking-[0.28em]">
                Contact Us
              </p>
            </div>

            <h2 className="max-w-3xl font-heading text-[2.15rem] font-medium leading-[1.12] tracking-tight text-staf-blue sm:text-5xl lg:text-[3.6rem]">
              Let&apos;s stay <span className="text-staf-green">connected.</span>
            </h2>

            <p className="mt-5 max-w-2xl text-[13px] leading-7 text-staf-muted sm:mt-6 sm:text-[15px] sm:leading-8">
              Whether you are a prospective student, parent, guardian, teacher,
              partner or member of our wider community, we welcome you to
              connect with St. Thomas Aquinas Foundation and Wari Secondary
              School.
            </p>
          </div>

          <div className="border-l-2 border-staf-yellow pl-5 sm:pl-6 lg:mb-1">
            <p className="font-heading text-xl leading-snug text-staf-blue sm:text-3xl">
              “Education becomes meaningful when it is shared with a
              community.”
            </p>
          </div>
        </div>

        {/* CONTACT DETAILS CARDS */}
        <div className="mt-10 grid gap-px overflow-hidden border border-staf-border bg-staf-border sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
          {contactDetails.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.label}
                className="group bg-staf-white px-5 py-7 transition-colors duration-300 hover:bg-staf-blue sm:px-7 sm:py-9"
              >
                <div className="flex h-11 w-11 items-center justify-center border border-staf-border transition-colors duration-300 group-hover:border-staf-yellow group-hover:bg-staf-yellow">
                  <Icon
                    className="h-5 w-5 text-staf-green transition-colors duration-300 group-hover:text-staf-blue"
                    strokeWidth={1.5}
                  />
                </div>

                <p className="mt-6 text-[9px] font-bold uppercase tracking-[0.2em] text-staf-muted transition-colors duration-300 group-hover:text-white/45 sm:mt-7 sm:text-[10px]">
                  {item.label}
                </p>

                {item.icon === Phone ? (
                  <div className="mt-2 space-y-1">
                    <a
                      href="tel:+255745777015"
                      className="block break-words font-heading text-lg leading-tight text-staf-blue transition-colors duration-300 hover:text-staf-green group-hover:text-white group-hover:hover:text-staf-yellow sm:text-xl"
                    >
                      {item.title}
                    </a>
                    {item.secondary && (
                      <a
                        href="tel:+255788438341"
                        className="block break-words text-sm font-medium text-staf-green transition-colors duration-300 hover:text-staf-blue group-hover:text-staf-yellow"
                      >
                        {item.secondary}
                      </a>
                    )}
                  </div>
                ) : item.icon === Mail ? (
                  <a
                    href="mailto:warisecondaryschool@gmail.com"
                    className="mt-2 block break-words font-heading text-base leading-tight text-staf-blue transition-colors duration-300 hover:text-staf-green group-hover:text-white group-hover:hover:text-staf-yellow sm:text-lg"
                  >
                    {item.title}
                  </a>
                ) : (
                  <h3 className="mt-2 font-heading text-lg text-staf-blue transition-colors duration-300 group-hover:text-white sm:text-xl">
                    {item.title}
                  </h3>
                )}

                <p className="mt-3 text-[12px] leading-6 text-staf-muted transition-colors duration-300 group-hover:text-white/55 sm:text-sm">
                  {item.description}
                </p>

                {item.saturday && (
                  <p className="mt-2 text-[11px] font-medium leading-5 text-staf-green transition-colors duration-300 group-hover:text-staf-yellow sm:text-xs">
                    {item.saturday}
                  </p>
                )}
              </article>
            );
          })}
        </div>

        {/* INQUIRY FORM & GOOGLE MAP SECTION */}
        <div
          id="contact-form"
          className="mt-12 scroll-mt-24 grid gap-8 lg:grid-cols-2 lg:items-start"
        >
          {/* FORM */}
          <div className="border border-staf-border bg-staf-white p-6 sm:p-10 shadow-sm">
            <h3 className="font-heading text-2xl font-bold text-staf-blue sm:text-3xl">
              Send an Enquiry
            </h3>
            <p className="mt-2 text-xs text-staf-muted">
              Fill in the form below and our administration team will respond promptly.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
              <div>
                <label className="block text-[11px] font-bold uppercase text-staf-blue/80 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="e.g. John Doe"
                  className="w-full border border-staf-border bg-staf-cream/40 p-3 text-xs text-staf-blue outline-none focus:border-staf-yellow"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-[11px] font-bold uppercase text-staf-blue/80 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="name@example.com"
                    className="w-full border border-staf-border bg-staf-cream/40 p-3 text-xs text-staf-blue outline-none focus:border-staf-yellow"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase text-staf-blue/80 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+255..."
                    className="w-full border border-staf-border bg-staf-cream/40 p-3 text-xs text-staf-blue outline-none focus:border-staf-yellow"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase text-staf-blue/80 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="e.g. Form V Admission Inquiry"
                  className="w-full border border-staf-border bg-staf-cream/40 p-3 text-xs text-staf-blue outline-none focus:border-staf-yellow"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase text-staf-blue/80 mb-1">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Write your message here..."
                  className="w-full border border-staf-border bg-staf-cream/40 p-3 text-xs text-staf-blue outline-none focus:border-staf-yellow"
                />
              </div>

              {feedback && (
                <div
                  className={`flex items-center gap-2 p-3 text-xs font-medium ${
                    feedback.type === "success"
                      ? "border border-green-500/40 bg-green-500/10 text-green-700"
                      : "border border-red-500/40 bg-red-500/10 text-red-700"
                  }`}
                >
                  {feedback.type === "success" ? (
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                  ) : (
                    <AlertCircle className="h-4 w-4 shrink-0" />
                  )}
                  <span>{feedback.message}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="mt-2 inline-flex items-center justify-center gap-2 bg-staf-blue px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-staf-yellow hover:bg-staf-blue/90 transition-colors"
              >
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                {loading ? "Sending..." : "Submit Message"}
              </button>
            </form>
          </div>

          {/* GOOGLE MAP */}
          <div className="border border-staf-border bg-staf-white p-2 shadow-sm h-full min-h-[400px]">
            <iframe
              title="Wari Secondary School Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15933.208151214068!2d37.2345!3d-3.2100!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x183762888888888b%3A0x8888888888888888!2sMachame%2C%20Hai%20District%2C%20Kilimanjaro!5e0!3m2!1sen!2stz!4v1700000000000!5m2!1sen!2stz"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "450px" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}