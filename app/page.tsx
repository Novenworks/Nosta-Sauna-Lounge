import Header from "../components/Header";

const BOOK = "https://booking.mangomint.com/321625?hp=1";
const GIFT = "https://clients.mangomint.com/gift-cards/321625";

export default function HomePage() {
  return (
    <main id="top">
      <Header />
      <section className="relative min-h-[92vh] pt-20">
        <img src="/assets/room-3.jpg" alt="Private timber sauna room with stone heater and löyly bucket" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-soot-900 via-soot-900/55 to-soot-900/25" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 md:px-8 md:pb-20">
          <p className="text-[11px] uppercase tracking-[0.28em] text-ember-200">Private sauna · Mission Viejo</p>
          <h1 className="mt-4 max-w-3xl font-display text-[2.6rem] leading-[0.95] text-ember-50 md:text-7xl">
            Your room.<br />Your heat.<br />Your ritual.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ember-50/85 md:text-lg">
            A private traditional sauna experience you can shape around the heat, steam, scent and quiet you want that day.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href={BOOK} className="focus-ring rounded-full bg-ember-200 px-6 py-3 text-sm font-medium uppercase tracking-[0.14em] text-soot-900">Try Nosta — $30</a>
            <a href="#memberships" className="focus-ring rounded-full border border-ember-100/40 px-6 py-3 text-sm uppercase tracking-[0.14em] text-ember-50">Explore memberships</a>
          </div>
          <p className="mt-4 text-xs tracking-wide text-ember-100/70">First visit · 40 minutes · complimentary essential oil</p>
        </div>
      </section>
      <section id="ritual" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <p className="text-[11px] uppercase tracking-[0.28em] text-ember-300">What makes it Nosta</p>
        <h2 className="mt-3 font-display text-4xl text-ember-50 md:text-5xl">Not just a hot room.</h2>
        <div className="mt-12 grid gap-10 md:grid-cols-5">
          {[
            ["Private room", "Your session is yours. Larger rooms fit 2–3 comfortably, up to 4 if you choose."],
            ["Traditional stones + löyly", "Pour water on the stones. Staff will guide you through steam."],
            ["Personalized heat", "Traditional dry intensity or a gentler, steam-softened session."],
            ["Aromatherapy", "Essential oils and Finnish menthol ice crystals, chosen for the day."],
            ["Hospitality", "The room is prepared for you. Quiet luxury, not a locker-room rush."],
          ].map(([title, body]) => (
            <article key={title} className="border-t border-ember-200/25 pt-5">
              <h3 className="font-display text-xl text-ember-100">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ember-100/70">{body}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
