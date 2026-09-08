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

      <section className="bg-soot-800">
        <div className="mx-auto grid max-w-6xl gap-0 md:grid-cols-2">
          <img src="/assets/room-1.jpg" alt="Cedar benches and stone heater in a private sauna" className="h-full min-h-[320px] w-full object-cover" />
          <div className="flex flex-col justify-center px-5 py-16 md:px-12">
            <p className="text-[11px] uppercase tracking-[0.28em] text-ember-300">How the session feels</p>
            <ol className="mt-8 space-y-8">
              {[
                ["01", "Settle in", "The room is already yours. Towels waiting. Heat rising."],
                ["02", "Build the heat", "Traditional or gentle. Adjust until the warmth matches the day."],
                ["03", "Add löyly", "A half ladle on the stones. Steam that changes the air."],
                ["04", "Cool down", "Step out. Drink. Let the quiet stay with you."],
              ].map(([n, t, b]) => (
                <li key={n} className="grid grid-cols-[3rem_1fr] gap-4">
                  <span className="font-display text-ember-300">{n}</span>
                  <div>
                    <h3 className="font-display text-2xl text-ember-50">{t}</h3>
                    <p className="mt-1 text-sm text-ember-100/70">{b}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="intro" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <h2 className="max-w-xl font-display text-4xl text-ember-50 md:text-5xl">One session to try it.<br />One week to understand it.</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <article className="bg-soot-800 p-8">
            <p className="text-[11px] uppercase tracking-[0.2em] text-ember-300">First-time guests</p>
            <h3 className="mt-3 font-display text-3xl">Intro session</h3>
            <p className="mt-2 font-display text-5xl text-ember-200">$30</p>
            <p className="mt-4 text-sm text-ember-100/70">Full 40-minute session. Complimentary essential oil.</p>
            <a href={BOOK} className="focus-ring mt-8 inline-block text-sm uppercase tracking-[0.16em] text-ember-200">Book the intro →</a>
          </article>
          <article className="bg-ember-200 p-8 text-soot-900">
            <p className="text-[11px] uppercase tracking-[0.2em]">First-time guests</p>
            <h3 className="mt-3 font-display text-3xl">Intro unlimited week</h3>
            <p className="mt-2 font-display text-5xl">$79</p>
            <p className="mt-4 text-sm">7 consecutive days. Personalized room setup. Complimentary essential oil.</p>
            <a href="tel:+19493172536" className="mt-8 inline-block text-sm uppercase tracking-[0.16em]">Call to start the week →</a>
          </article>
          <article className="border border-ember-200/20 p-8">
            <p className="text-[11px] uppercase tracking-[0.2em] text-ember-300">Drop-in</p>
            <h3 className="mt-3 font-display text-3xl">Single session</h3>
            <p className="mt-2 font-display text-5xl text-ember-200">$45</p>
            <p className="mt-4 text-sm text-ember-100/70">Pricing is per person, not per room.</p>
            <a href={BOOK} className="focus-ring mt-8 inline-block text-sm uppercase tracking-[0.16em] text-ember-200">Book a session →</a>
          </article>
        </div>
      </section>

      <section id="memberships" className="bg-soot-800 px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-4xl text-ember-50 md:text-5xl">The membership ritual</h2>
          <p className="mt-4 max-w-xl text-sm text-ember-100/70">2-month minimum. Auto-renews monthly. Flow and Pure sessions roll over for 90 days. Member perks included.</p>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              ["Nosta Flow", "$119", "/mo", "4 sessions each month"],
              ["Nosta Pure", "$169", "/mo", "8 sessions each month"],
              ["Wellness Circle", "$209", "/mo", "Unlimited sessions each month"],
            ].map(([name, price, unit, detail]) => (
              <article key={name} className="border border-ember-200/20 bg-soot-900 p-8">
                <h3 className="font-display text-2xl text-ember-50">{name}</h3>
                <p className="mt-4 font-display text-5xl text-ember-200">{price}<span className="text-lg text-ember-100/60">{unit}</span></p>
                <p className="mt-3 text-sm text-ember-100/70">{detail}</p>
                <a href="tel:+19493172536" className="focus-ring mt-8 inline-block text-sm uppercase tracking-[0.16em] text-ember-200">Call to join →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="hospitality" className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-2 md:px-8 md:py-28">
        <div>
          <p className="text-[11px] uppercase tracking-[0.28em] text-ember-300">Member hospitality</p>
          <h2 className="mt-3 font-display text-4xl text-ember-50 md:text-5xl">The room remembers you.</h2>
          <ul className="mt-8 space-y-3 text-sm text-ember-100/80">
            {[
              "Personalized room setup",
              "Priority room selection",
              "Custom aromatherapy",
              "Complimentary oils and ice crystals",
              "Slipper service",
              "Guest pass for a first-time guest",
              "20% off drinks",
              "Family discount — $10 monthly autopay when a family member joins",
              "Concierge service",
              "Discounted additional sessions",
            ].map((item) => (
              <li key={item} className="border-b border-white/10 pb-3">{item}</li>
            ))}
          </ul>
        </div>
        <div className="grid gap-4">
          <img src="/assets/stones.jpg" alt="Hot sauna stones releasing steam" className="h-64 w-full object-cover md:h-80" />
          <img src="/assets/oils.jpg" alt="Amber essential oil bottles for aromatherapy" className="h-56 w-full object-cover" />
        </div>
      </section>

      <section id="packages" className="bg-soot-800 px-5 py-20 md:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-4xl text-ember-50">Bring someone.</h2>
          <p className="mt-3 max-w-lg text-sm text-ember-100/70">Packages never expire and are fully transferable. No member perks.</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[["5 sessions", "$184"], ["10 sessions", "$349"], ["20 sessions", "$549"]].map(([n, p]) => (
              <article key={n} className="border border-ember-200/20 p-6">
                <p className="text-sm uppercase tracking-[0.16em] text-ember-300">{n}</p>
                <p className="mt-2 font-display text-4xl text-ember-50">{p}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 text-sm text-ember-100/60">Add-ons: essential oils $3 · Finnish menthol ice crystals $5</p>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <img src="/assets/room-2.jpg" alt="Warm backlit timber sauna benches" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-soot-900/70" />
        <div className="relative mx-auto max-w-6xl px-5 py-28 md:px-8">
          <h2 className="font-display text-4xl text-ember-50 md:text-6xl">Make heat part of the week.</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={BOOK} className="focus-ring rounded-full bg-ember-200 px-6 py-3 text-sm uppercase tracking-[0.14em] text-soot-900">Try Nosta — $30</a>
            <a href="tel:+19493172536" className="focus-ring rounded-full border border-ember-100/40 px-6 py-3 text-sm uppercase tracking-[0.14em]">Call 949-317-2536</a>
          </div>
          <p className="mt-8 text-sm text-ember-100/75">26012 Marguerite Pkwy, Ste C<br />Mission Viejo, CA 92692</p>
          <p className="mt-3 text-sm text-ember-100/60">Mon–Fri 8 AM–8 PM<br />Sat–Sun 9 AM–7 PM</p>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-10 text-sm text-ember-100/60 md:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:justify-between">
          <div>
            <p className="font-display text-2xl text-ember-100">nosta</p>
            <p className="mt-2">Mission Viejo’s private sauna ritual.</p>
          </div>
          <div className="flex flex-col gap-2">
            <a href="mailto:contact@nostasauna.com" className="focus-ring hover:text-ember-200">contact@nostasauna.com</a>
            <a href="https://nostasauna.com/" className="focus-ring hover:text-ember-200">Current site</a>
            <a href={GIFT} className="focus-ring hover:text-ember-200">Gift cards</a>
          </div>
          <p className="max-w-xs text-xs">Speculative redesign by Novenworks. Not an official Nosta website.</p>
        </div>
      </footer>
    </main>
  );
}
