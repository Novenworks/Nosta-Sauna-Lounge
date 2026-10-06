import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosta Sauna Lounge — Novenworks Outreach",
  robots: { index: false, follow: false, nocache: true },
};

const DEMO_URL = "https://nosta-sauna-lounge-demo.vercel.app";
const ORIGINAL = "https://nostasauna.com";
const BOOKING = "https://booking.mangomint.com/321625?hp=1";
const GIFT = "https://clients.mangomint.com/gift-cards/321625";
const INSTAGRAM = "https://www.instagram.com/nostasauna/";
const PHONE = "949-317-2536";
const EMAIL = "contact@nostasauna.com";

const STATUS_FLAGS = [
  "Speculative — not commissioned",
  "Prospect confirmed",
  "Private route — noindex + robots disallow",
  "Concept deployed & live",
  "Not yet contacted",
  "Photos: Nosta's own, from nostasauna.com",
];

const SNAPSHOT: [string, string, string?][] = [
  ["Business", "Nosta Sauna Lounge", "Private traditional Finnish sauna — opened June 2024"],
  ["Market", "Mission Viejo, CA", "26012 Marguerite Pkwy, Ste C, Mission Viejo, CA 92692"],
  ["Equipment", "Helo heaters, 210 lbs vulcanite stones", "The proof it is a traditional sauna, not an infrared booth"],
  ["Phone", PHONE, "Mon–Fri 8 AM–8 PM · Sat–Sun 9 AM–7 PM"],
  ["Email", EMAIL, "Published on nostasauna.com (footer/contact) — checked 2026-10-06"],
  ["Booking & gift cards", "Mangomint", "Both run through the same account — do not pitch her software"],
  ["Deployed concept", "nosta-sauna-lounge-demo.vercel.app", "Verified live before this dossier was written"],
  ["Recipient", "Not named", "No owner or manager name found on the official site — address the team generically"],
  ["Current site", "Mature", "This repo's own research says so — see guardrail 2"],
  ["Pricing", "Re-verified 2026-10-06", "Intro $30, week $79, single $45, Flow $119, Pure $169, Circle $209, oils $3, crystals $5 match nostasauna.com/pricing"],
];

const OBSERVATIONS = [
  {
    title: "The $30 first visit doesn't lead",
    body: "The intro session is the whole acquisition offer, but on the pricing page it sits alongside five other numbers at the same weight.",
  },
  {
    title: "Per person, not per room, is a single line",
    body: "For a private-room business this is the detail most likely to surprise someone at the counter, and it is easy to miss.",
  },
  {
    title: "Membership terms read as fine print",
    body: "The two-month minimum, the monthly auto-renew, and the 90-day rollover on Flow and Pure are real commitments, presented below the prices rather than with them.",
  },
  {
    title: "The Finnish specifics are not what a first-time visitor meets first",
    body: "Helo heaters, 210 pounds of vulcanite stones, löyly — these are the proof this is a traditional sauna rather than an infrared booth, and they sit deeper in the page than that.",
  }
];

const UPGRADES = [
  {
    title: "The $30 first visit leads",
    body: "It opens the page and repeats at the end, with the 40 minutes and the complimentary essential oil attached to it.",
  },
  {
    title: "Per-person pricing said out loud",
    body: "Stated where the prices are, not once at the bottom.",
  },
  {
    title: "Membership terms on the cards",
    body: "Two-month minimum, auto-renew and the 90-day rollover presented with the price rather than underneath it.",
  },
  {
    title: "The traditional-sauna proof moved up",
    body: "The Helo heaters and the vulcanite stones near the top, where they do the work of separating Nosta from an infrared studio.",
  },
  {
    title: "Booking untouched",
    body: "Every action opens her existing Mangomint link. No new system, no new inbox, no migration.",
  },
];

const TALKING_POINTS = [
  {
    n: "1",
    heading: "The $30 first visit is the acquisition offer, and it doesn't lead",
    observed: "The intro session sits on the pricing page alongside five other numbers at the same visual weight.",
    shows: "It leads the page and repeats at the end, with the session length and the complimentary oil attached.",
    lands: "For a business that opened in 2024, the first visit is the entire funnel. Everything else on the menu is a retention decision that can only happen after it — so the first visit is the only thing that has to win the page.",
  },
  {
    n: "2",
    heading: "Per person, not per room",
    observed: "A genuinely important detail for a private-room sauna, currently one line on the pricing page.",
    shows: "Stated next to every price on the concept.",
    lands: "It prevents the most likely surprise on booking day, and surprises at the counter are what stop a first visit becoming a membership. That is an argument about her revenue that costs nothing to accept.",
  },
  {
    n: "3",
    heading: "Membership terms are commitments, not fine print",
    observed: "Two-month minimum, monthly auto-renew, 90-day rollover on Flow and Pure — published below the prices.",
    shows: "Those terms on the membership cards themselves.",
    lands: "Burying an auto-renew is how a wellness business earns chargebacks and one-star reviews. Putting it up front costs a few signups and prevents the ones that end badly. Say it that way — it is a retention argument, not a compliance lecture.",
  },
];

const HOOKS = [
  "Helo heaters and 210 pounds of vulcanite stones. That level of specificity means the equipment was chosen deliberately — naming it is the clearest possible proof you read her site rather than a template.",
  "Nosta opened in June 2024, so the base is still being built. The $30 first visit is not a discount, it is the acquisition channel — treat it as the centre of the business, because it is.",
  "Mission Viejo, and Novenworks is Inland Empire. Adjacent, not local. Do not overclaim proximity.",
  "Booking and gift cards both run through the same Mangomint account. She has already consolidated her tooling — do not pitch her software.",
];

const GUARDRAILS = [
  {
    rule: "Be clear which photos are in the demo.",
    detail: "The demo uses photographs published on nostasauna.com (room, bucket, slippers, hallway). Say so, and offer to swap or remove any she prefers. Do not describe them as new photography.",
  },
  {
    rule: "Never claim the current site is bad, dated, or broken.",
    detail: "The current site is mature. This is a structure and hierarchy argument, not a rescue.",
  },
  {
    rule: "Never make a health claim about sauna use.",
    detail: "No detox, cardiovascular, immune, recovery, sleep, longevity, calorie-burn, inflammation or skin claims.",
  },
  {
    rule: "Never advise on heat, session length, hydration, or who should or should not use a sauna.",
    detail: "That is safety guidance, not design.",
  },
  {
    rule: "Never state, change, or negotiate prices or membership terms.",
    detail: "Prices on the demo match nostasauna.com/pricing as of 2026-10-06. Point to her page; do not restate terms as confirmed on her behalf. The pricing page now also lists 5/10/20-session packages ($184/$349/$549) that the demo does not show.",
  },
  {
    rule: "Never invent perks, staff, awards, reviews, or a founder story.",
    detail: "Nothing about who runs Nosta has been verified.",
  },
  {
    rule: "Never claim improved SEO, bookings, traffic, or revenue.",
    detail: "Nothing was measured.",
  },
  {
    rule: "Never pitch her booking or gift-card software.",
    detail: "Both already run through Mangomint. The demo keeps using her existing links.",
  },
  {
    rule: "Never promise a timeline, price, support period, or outcome.",
    detail: "The package is described by what is included. Pricing is only discussed after she asks for the breakdown.",
  },
  {
    rule: "Never imply Novenworks was hired or commissioned.",
    detail: "Say plainly that nobody asked for it.",
  },
];

const SUBJECT_LINES = [
  "A homepage concept for Nosta that leads with the $30 first visit",
  "Where the $30 first visit sits on nostasauna.com",
  "Speculative redesign concept for Nosta Sauna Lounge",
];

const COLD_EMAIL = `Hi there,

I looked at the pricing page on nostasauna.com. The $30 first visit is what brings a new guest in, and on that page it sits at the same weight as five other prices, with per-person pricing and the membership terms further down.

I built a homepage concept that puts the $30 first visit at the top, says per-person pricing next to the prices, puts the membership terms on the cards, and moves the Helo heaters and löyly forward. Every booking button still opens your existing Mangomint link. It uses photos from your own site, and nobody asked me to build it: ${DEMO_URL}

If you like it, the done-for-you package covers the copy, the build, mobile polish, connecting your existing Mangomint booking, technical setup, and launch. I handle the work. You review and approve.

Want me to send over the full breakdown of what you get and what it costs?

Vincent
Novenworks`;

const FOLLOW_UP_ONE = `Hi there,

One more detail on the concept I sent: the Helo heaters and the vulcanite stones are what set Nosta apart from an infrared studio, and in the demo they sit near the top instead of deep in the page.

Concept: ${DEMO_URL}

I handle the work. You review and approve.

Want me to send over the full breakdown of what you get and what it costs?

Vincent
Novenworks`;

const FOLLOW_UP_TWO = `Hi there,

Last note from me. The concept stays up at ${DEMO_URL}, and you are welcome to take the pricing layout to whoever handles your site.

Want me to send over the full breakdown of what you get and what it costs?

Vincent
Novenworks`;

const PHONE_OPENING = `"Hi, this is Vincent with Novenworks. I built a homepage concept for Nosta on my own time and emailed the link. I wanted to check the email reached you. Did you see it?"`;

const PHONE_BRANCHES: [string, string][] = [
  [
    "If she hasn't seen it",
    '"No problem, it is one link and nothing to sign up for. It puts the $30 first visit at the top and keeps your Mangomint booking links."',
  ],
  [
    "If she asks about the photos",
    '"They are photos from your own website. If you would rather use different ones, or none, that is an easy change."',
  ],
  [
    'If she says "the site is fine"',
    '"It is in good shape. This is only about where the $30 first visit sits on the page. If that is not a problem worth solving, that is a fair answer."',
  ],
  [
    "If she asks what you changed",
    '"Order, not content. The $30 intro leads, per-person pricing sits next to the prices, membership terms are on the cards, and the heaters and stones are near the top. Booking still goes to your Mangomint link."',
  ],
  [
    "If she is interested",
    '"I can send over the full breakdown of what you get and what it costs. What email is best?"',
  ],
  [
    "If she isn't interested",
    '"Understood, I will leave it there. The link stays up if you ever want it."',
  ],
];

const VOICEMAIL = `"Hi, this is Vincent with Novenworks. I built a homepage concept for Nosta Sauna Lounge and emailed you the link. Nothing to buy. You can reach me back on this number. Thanks."`;

const VERIFY_BEFORE_SENDING: [string, string][] = [
  [
    "Channel",
    `Email ${EMAIL} is published on the official site (checked 2026-10-06). Phone ${PHONE} also published. No owner or manager name is public, so open generically.`,
  ],
  [
    "Pricing on the concept",
    "Re-verified against nostasauna.com/pricing on 2026-10-06 (intro, week, single, three memberships, oils, crystals). Re-check if more than a few weeks pass before sending.",
  ],
  [
    "Session packages",
    "The official pricing page now lists 5, 10 and 20-session packages ($184, $349, $549). The concept does not show them. Do not claim there is nothing between single sessions and memberships.",
  ],
  [
    "Photos",
    "Demo images are photographs published on nostasauna.com. Offer to swap or remove them.",
  ],
  [
    "Mangomint booking and gift-card links",
    "Confirm both destinations still resolve before sending.",
  ],
  [
    "Hours",
    "Mon–Fri 8 AM–8 PM, Sat–Sun 9 AM–7 PM per the official pricing page, 2026-10-06.",
  ],
];

const CARD = "rounded-lg border border-ember-200/20 bg-soot-800 p-6";
const MICRO = "text-[11px] uppercase tracking-[0.18em] text-ember-300 font-medium";

export default function OutreachPage() {
  return (
    <main className="min-h-screen bg-soot-900 px-5 py-14 font-sans text-ember-50">
      <div className="mx-auto max-w-4xl space-y-10">

        {/* Header */}
        <header className={CARD}>
          <p className={MICRO}>Novenworks strategic speculative dossier</p>
          <h1 className="mt-3 font-display text-4xl tracking-tight md:text-5xl">Nosta Sauna Lounge</h1>
          <p className="mt-2 text-ember-50/70">
            Private traditional sauna &middot; Mission Viejo, CA. Internal outreach brief for the speculative website
            demonstration. This route is unlinked, noindex, and disallowed in robots.txt.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {STATUS_FLAGS.map((flag) => (
              <span
                key={flag}
                className={`rounded-full border px-3 py-1 text-[11px] font-medium ${
                  flag.startsWith("Photos")
                    ? "border-ember-300 bg-ember-500/20 text-ember-100"
                    : "border-ember-200/20 text-ember-50/60"
                }`}
              >
                {flag}
              </span>
            ))}
          </div>
          <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <li><a className="text-ember-300 underline underline-offset-4" href={DEMO_URL}>Deployed concept</a></li>
            <li><a className="text-ember-300 underline underline-offset-4" href={ORIGINAL}>Original site</a></li>
            <li><a className="text-ember-300 underline underline-offset-4" href={BOOKING}>Mangomint booking</a></li>
            <li><a className="text-ember-300 underline underline-offset-4" href={GIFT}>Gift cards</a></li>
            <li><a className="text-ember-300 underline underline-offset-4" href={INSTAGRAM}>Instagram</a></li>
          </ul>
        </header>

        {/* Two standing facts */}
        <section className="rounded-lg border border-ember-300/50 bg-ember-500/10 p-6">
          <h2 className="font-display text-xl">Two things that shape every message here</h2>
          <ol className="mt-3 list-decimal space-y-2.5 pl-5 text-sm leading-relaxed text-ember-50/85">
            <li>
              <strong>The current site is mature.</strong> This is a structure and hierarchy argument, not a rescue,
              and the outreach opens by saying so.
            </li>
            <li>
              <strong>The concept uses Nosta&apos;s own photos.</strong> They are published on nostasauna.com. Say so,
              and offer to swap or remove any she prefers.
            </li>
          </ol>
        </section>

        {/* Snapshot */}
        <section>
          <h2 className="font-display text-2xl">Business snapshot &amp; verified facts</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {SNAPSHOT.map(([k, v, note]) => (
              <div key={k} className="rounded-lg border border-ember-200/15 bg-soot-800 p-4">
                <p className="text-[11px] uppercase tracking-wider text-ember-50/45">{k}</p>
                <p className="mt-1 break-words text-sm font-medium">{v}</p>
                {note ? <p className="mt-1.5 text-xs leading-relaxed text-ember-50/50">{note}</p> : null}
              </div>
            ))}
          </div>
        </section>

        {/* Observations & upgrades */}
        <section className="grid gap-6 md:grid-cols-2">
          <div className={CARD}>
            <h2 className="font-display text-xl">Current-site observations</h2>
            <p className={`${MICRO} mt-1`}>Structural, not faults</p>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ember-50/80">
              {OBSERVATIONS.map((o) => (
                <li key={o.title}><strong className="text-ember-100">{o.title}:</strong> {o.body}</li>
              ))}
            </ul>
          </div>
          <div className={CARD}>
            <h2 className="font-display text-xl">Concrete redesign upgrades</h2>
            <p className={`${MICRO} mt-1`}>What the concept actually does</p>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ember-50/80">
              {UPGRADES.map((u) => (
                <li key={u.title}><strong className="text-ember-100">{u.title}:</strong> {u.body}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Talking points */}
        <section>
          <h2 className="font-display text-2xl">Three strongest talking points</h2>
          <div className="mt-4 space-y-4">
            {TALKING_POINTS.map((p) => (
              <div key={p.n} className="rounded-lg border border-ember-200/15 border-l-2 border-l-ember-300 bg-soot-800 p-5">
                <p className={MICRO}>Point {p.n}</p>
                <h3 className="mt-1.5 font-display text-lg">{p.heading}</h3>
                <div className="mt-3 space-y-2.5 text-sm leading-relaxed text-ember-50/80">
                  <p><span className={`${MICRO} mb-1 block`}>Observed</span>{p.observed}</p>
                  <p><span className={`${MICRO} mb-1 block`}>What the concept shows</span>{p.shows}</p>
                  <p><span className={`${MICRO} mb-1 block`}>Why it lands here</span>{p.lands}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Hooks */}
        <section>
          <h2 className="font-display text-2xl">Natural personalization hooks</h2>
          <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-ember-50/80">
            {HOOKS.map((h) => (
              <li key={h} className="rounded-lg border border-ember-200/15 bg-soot-800 p-4">{h}</li>
            ))}
          </ul>
        </section>

        {/* Guardrails */}
        <section className="rounded-lg border border-ember-300/40 bg-soot-800 p-6">
          <h2 className="font-display text-2xl">Guardrails &mdash; what NOT to say</h2>
          <ul className="mt-4 space-y-3.5 text-sm leading-relaxed text-ember-50/80">
            {GUARDRAILS.map((g) => (
              <li key={g.rule} className="flex items-start gap-2.5">
                <span className="shrink-0 font-bold text-ember-300">&#10005;</span>
                <span>
                  <strong className="block text-ember-100">{g.rule}</strong>
                  <span className="mt-1 block text-ember-50/60">{g.detail}</span>
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Subject lines */}
        <section>
          <h2 className="font-display text-2xl">Subject lines</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {SUBJECT_LINES.map((line, i) => (
              <li key={line} className="rounded-lg border border-ember-200/15 bg-soot-800 p-3">
                <span className="text-ember-300">{i + 1}.</span> {line}
              </li>
            ))}
          </ul>
        </section>

        {/* Emails */}
        {[
          ["Cold email", COLD_EMAIL],
          ["Follow-up one — adds something new", FOLLOW_UP_ONE],
          ["Follow-up two — lighter, leaves the door open", FOLLOW_UP_TWO],
        ].map(([label, body]) => (
          <section key={label}>
            <h2 className="font-display text-2xl">{label}</h2>
            <pre className="mt-3 whitespace-pre-wrap rounded-lg border border-ember-200/15 bg-soot-800 p-5 font-sans text-sm leading-relaxed text-ember-50/85">
              {body}
            </pre>
          </section>
        ))}

        {/* Phone & voicemail */}
        <section>
          <h2 className="font-display text-2xl">Phone follow-up &amp; voicemail</h2>

          <p className={`${MICRO} mt-4`}>Opening &mdash; 15 to 20 seconds</p>
          <p className="mt-2 rounded-lg border border-ember-200/15 border-l-2 border-l-ember-300 bg-soot-800 p-5 text-sm leading-relaxed text-ember-50/85">
            {PHONE_OPENING}
          </p>

          <p className={`${MICRO} mt-5`}>Branches</p>
          <div className="mt-2 grid gap-3 sm:grid-cols-2">
            {PHONE_BRANCHES.map(([label, line]) => (
              <div key={label} className="rounded-lg border border-ember-200/15 bg-soot-800 p-4">
                <p className="text-[11px] uppercase tracking-wider text-ember-50/45">{label}</p>
                <p className="mt-2 text-sm leading-relaxed text-ember-50/80">{line}</p>
              </div>
            ))}
          </div>

          <p className={`${MICRO} mt-5`}>Voicemail &mdash; 15 to 25 seconds</p>
          <p className="mt-2 rounded-lg border border-ember-200/15 border-l-2 border-l-ember-300 bg-soot-800 p-5 text-sm leading-relaxed text-ember-50/85">
            {VOICEMAIL}
          </p>
        </section>

        {/* Verification */}
        <section>
          <h2 className="font-display text-2xl">Verify before sending</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-ember-50/80">
            {VERIFY_BEFORE_SENDING.map(([item, detail]) => (
              <li key={item}>
                <strong className="text-ember-100">{item}</strong>
                <span className="mt-1 block text-ember-50/60">{detail}</span>
              </li>
            ))}
          </ol>
        </section>

      </div>
    </main>
  );
}
