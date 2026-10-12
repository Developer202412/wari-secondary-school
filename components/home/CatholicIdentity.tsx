import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Church,
  Heart,
  Cross,
  Users,
} from "lucide-react";

const formationAreas = [
  {
    icon: Church,
    title: "Liturgy",
    description:
      "Faith is nurtured through prayer, liturgical celebrations and participation in the life of the Church.",
  },
  {
    icon: Heart,
    title: "Spiritual Formation",
    description:
      "Students are encouraged to grow in their relationship with God and develop a life guided by Christian values.",
  },
  {
    icon: Cross,
    title: "Christian Values",
    description:
      "Faith, integrity, compassion, responsibility and service are woven into the formation of every student.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Students learn to live, work and serve together as members of a caring and responsible community.",
  },
];

export default function CatholicIdentity() {
  return (
    <section
      id="catholic-identity"
      className="bg-staf-cream py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="grid gap-7 lg:grid-cols-[1fr_0.85fr] lg:items-end lg:gap-20">
          <div>
            <div className="mb-5 flex items-center gap-3 sm:mb-6 sm:gap-4">
              <span className="h-px w-8 shrink-0 bg-staf-yellow sm:w-10" />

              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-staf-green sm:text-[11px] sm:tracking-[0.28em]">
                Catholic Identity
              </p>
            </div>

            <h2 className="max-w-3xl font-heading text-[2rem] font-medium leading-[1.12] tracking-tight text-staf-blue sm:text-5xl lg:text-[3.6rem]">
              Faith is at the heart of{" "}
              <span className="text-staf-green">our formation.</span>
            </h2>
          </div>

          <p className="max-w-xl text-[13px] leading-7 text-staf-muted sm:text-[15px] sm:leading-8 lg:pb-1">
            Inspired by the Catholic tradition, St. Thomas Aquinas Foundation
            seeks to form young people who grow in faith, wisdom, character
            and a spirit of service.
          </p>
        </div>

        {/* PHOTO LAYOUT */}
        <div className="mt-10 grid gap-3 sm:mt-14 sm:gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          {/* LEFT — FATHER IMAGE */}
          <div className="group relative min-h-[390px] overflow-hidden sm:min-h-[560px]">
            <Image
              src="/images/hero/father.jpg"
              alt="Priests serving the St. Thomas Aquinas Foundation community"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-staf-blue/90 via-staf-blue/20 to-transparent" />

            <div className="absolute inset-3 border border-staf-yellow/70 sm:inset-5" />

            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-10">
              <div className="flex h-10 w-10 items-center justify-center bg-staf-yellow sm:h-12 sm:w-12">
                <Cross
                  className="h-5 w-5 text-staf-blue sm:h-6 sm:w-6"
                  strokeWidth={1.7}
                />
              </div>

              <p className="mt-4 text-[9px] font-bold uppercase tracking-[0.22em] text-staf-yellow sm:mt-6 sm:text-[10px] sm:tracking-[0.24em]">
                Catholic Faith
              </p>

              <h3 className="mt-2 max-w-xl font-heading text-2xl leading-tight text-white sm:text-4xl">
                Faith, prayer and spiritual formation.
              </h3>

              <p className="mt-3 max-w-lg text-[11px] leading-5 text-white/65 sm:text-sm sm:leading-6">
                Our Catholic identity provides a foundation for the spiritual
                and moral formation of young people.
              </p>
            </div>
          </div>

          {/* RIGHT — TWO STUDENT IMAGES */}
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-1">
            {/* KWAYA */}
            <article className="group relative min-h-[230px] overflow-hidden sm:min-h-[280px] lg:min-h-[270px]">
              <Image
                src="/images/hero/kwaya-girl.JPG"
                alt="Students participating in a Catholic celebration"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-staf-blue/85 via-transparent to-transparent" />

              <div className="absolute inset-3 border border-staf-yellow/50 sm:inset-4" />

              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-staf-yellow sm:text-[10px] sm:tracking-[0.2em]">
                  Liturgy & Community
                </p>

                <h3 className="mt-2 font-heading text-xl leading-tight text-white sm:text-2xl">
                  Celebrating faith together.
                </h3>
              </div>
            </article>

            {/* MUSIC */}
            <article className="group relative min-h-[230px] overflow-hidden sm:min-h-[280px] lg:min-h-[270px]">
              <Image
                src="/images/hero/ala-muziki.JPG"
                alt="Students participating in music during a school celebration"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-staf-blue/85 via-transparent to-transparent" />

              <div className="absolute inset-3 border border-staf-yellow/50 sm:inset-4" />

              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-staf-yellow sm:text-[10px] sm:tracking-[0.2em]">
                  Faith in Action
                </p>

                <h3 className="mt-2 font-heading text-xl leading-tight text-white sm:text-2xl">
                  Worship, talent and service.
                </h3>
              </div>
            </article>
          </div>
        </div>

        {/* CATHOLIC TRADITION MESSAGE */}
        <div className="mt-3 bg-staf-blue px-5 py-8 sm:mt-4 sm:px-9 sm:py-10 lg:px-12 lg:py-12">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-staf-yellow sm:text-[10px] sm:tracking-[0.22em]">
                Our Catholic Tradition
              </p>

              <h3 className="mt-3 font-heading text-2xl leading-tight text-white sm:mt-4 sm:text-4xl">
                Forming the mind.
                <br />
                Forming the heart.
              </h3>
            </div>

            <div>
              <p className="text-[12px] leading-7 text-white/65 sm:text-[15px] sm:leading-8">
                We believe that education should help young people discover
                not only what they can achieve, but also who they are called
                to become and how they can use their gifts in service of God
                and others.
              </p>

              <Link
                href="#about"
                className="group mt-6 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.1em] text-staf-yellow transition-colors hover:text-white sm:mt-7 sm:text-sm sm:normal-case sm:tracking-normal"
              >
                Learn About the Foundation

                <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* FORMATION AREAS */}
        <div className="mt-3 grid gap-px overflow-hidden border border-staf-border bg-staf-border sm:mt-4 sm:grid-cols-2 lg:grid-cols-4">
          {formationAreas.map((area) => {
            const Icon = area.icon;

            return (
              <article
                key={area.title}
                className="group min-w-0 bg-staf-white px-5 py-7 transition-colors duration-300 hover:bg-staf-blue sm:px-7 sm:py-8"
              >
                <div className="flex h-10 w-10 items-center justify-center border border-staf-border transition-colors duration-300 group-hover:border-staf-yellow group-hover:bg-staf-yellow">
                  <Icon
                    className="h-[18px] w-[18px] text-staf-green transition-colors duration-300 group-hover:text-staf-blue"
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="mt-6 font-heading text-lg leading-tight text-staf-blue transition-colors duration-300 group-hover:text-white sm:mt-7 sm:text-xl">
                  {area.title}
                </h3>

                <p className="mt-2.5 text-[12px] leading-6 text-staf-muted transition-colors duration-300 group-hover:text-white/60 sm:mt-3 sm:text-sm">
                  {area.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* BOTTOM STATEMENT */}
        <div className="mt-12 flex flex-col gap-5 border-t border-staf-border pt-7 sm:mt-14 sm:pt-8 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-3xl font-heading text-xl leading-snug text-staf-blue sm:text-3xl">
            “Faith in God. Excellence in Learning. Character in Action.”
          </p>

          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-staf-yellow sm:h-2 sm:w-2" />

            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-staf-muted sm:text-[10px] sm:tracking-[0.2em]">
              St. Thomas Aquinas Foundation
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}