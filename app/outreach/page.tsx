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
  "DEMO USES PLACEHOLDER PHOTOS",
];

const SNAPSHOT: [string, string, string?][] = [
  ["Business", "Nosta Sauna Lounge", "Private traditional Finnish sauna — opened June 2024"],
  ["Market", "Mission Viejo, CA", "26012 Marguerite Pkwy, Ste C, Mission Viejo, CA 92692"],
  ["Equipment", "Helo heaters, 210 lbs vulcanite stones", "The proof it is a traditional sauna, not an infrared booth"],
  ["Phone", PHONE, "Mon–Fri 8 AM–8 PM · Sat–Sun 9 AM–7 PM"],
  ["Email", EMAIL, "From this repo's research — confirm it is monitored"],
  ["Booking & gift cards", "Mangomint", "Both run through the same account — do not pitch her software"],
  ["Deployed concept", "nosta-sauna-lounge-demo.vercel.app", "Verified live before this dossier was written"],
  ["Recipient", "Unknown", "No owner or manager name appears anywhere in this repo"],
  ["Current site", "Mature", "This repo's own research says so — see guardrail 2"],
  ["Not verified since 2026-09-08", "All pricing and membership terms", "Six prices plus oils and crystals — re-verify before she clicks"],
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
  },
  {
    title: "Nothing sits between a single session and a membership",
    body: "Session packages are not on the official pricing page, so the ladder goes $45 single straight to a $119/month commitment with no rung in between.",
  },
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
    rule: "Say in the first email that the images are placeholders.",
    detail: "The concept uses public timber, sauna and stone photography — not Nosta's own interiors, which could not be sourced. If she opens the link expecting her space and sees someone else's, the credibility is gone in two seconds. Disclose it before she clicks, and point her at the structure instead.",
  },
  {
    rule: "Never claim the current site is bad, dated, or broken.",
    detail: "This repo's own research says the site is mature. This is a structure and hierarchy argument, not a rescue. Open on that footing or do not open at all — she will know immediately if you are pretending otherwise.",
  },
  {
    rule: "Never make a health claim about sauna use.",
    detail: "No detox, cardiovascular, immune, recovery, sleep, longevity, calorie-burn, inflammation or skin claims. Sauna benefit marketing is heavily overclaimed across the industry and none of it is ours to assert on her behalf.",
  },
  {
    rule: "Never advise on heat, session length, hydration, or who should or should not use a sauna.",
    detail: "That is safety guidance, not design. It is also the fastest way to create liability for a business you do not work for.",
  },
  {
    rule: "Never state, change, or negotiate prices or membership terms.",
    detail: "The figures on the concept were verified on one date and not since. See verification item 2.",
  },
  {
    rule: "Never restate the auto-renew, minimum term, or rollover as if confirming them on her behalf.",
    detail: "Point to her own page. The concept surfaces those terms; the outreach does not repeat them as fact.",
  },
  {
    rule: "Never invent perks, staff, awards, reviews, or a founder story.",
    detail: "This repo's research file says so explicitly, and it stands. Nothing about who runs Nosta has been verified.",
  },
  {
    rule: "Never claim improved SEO, bookings, traffic, or revenue.",
    detail: "Nothing was measured.",
  },
  {
    rule: "Never pitch her booking or gift-card software.",
    detail: "Both already run through Mangomint. Suggesting a replacement says you did not look.",
  },
  {
    rule: "Never describe Nosta as competing with, or better than, infrared studios or other local spas.",
    detail: "The traditional-sauna distinction is a fact about the equipment, not a ranking. State the fact; do not draw the comparison for her.",
  },
  {
    rule: "Never imply Novenworks was hired or commissioned, or present this as client work.",
    detail: "Say plainly in the first email that nobody asked for it.",
  },
  {
    rule: "Never claim ownership of her brand, or imply the placeholder photography is hers.",
    detail: "The concept is a private, non-indexed demo built with stock imagery.",
  },
];

const SUBJECT_LINES = [
  "A website concept for Nosta — placeholder photos, real structure",
  "Where the $30 first visit sits on nostasauna.com",
  "Speculative redesign concept for Nosta Sauna Lounge",
];

const COLD_EMAIL = `Hi there,

Two things before you click anything. Your current site is in good shape — this isn't a rescue. And the photos in what I built are placeholders; I couldn't source your own interiors, so they're stock timber and stone. What's worth looking at is the structure, not the images.

The $30 first visit is your whole acquisition offer, and on the pricing page it sits alongside five other numbers. I rebuilt the site with it leading, with per-person pricing said out loud, and the membership terms on the cards instead of underneath them.

Here it is: ${DEMO_URL}

Nobody asked me to build this. If it's useful, reply and I'll walk you through the reasoning.

Vince
Novenworks`;

const FOLLOW_UP_ONE = `Hi there,

One detail I should add: the Helo heaters and the 210 pounds of vulcanite stones are the thing that separates you from an infrared booth, and in the concept they sit near the top rather than deep in the page. That was the other change worth making.

Concept again: ${DEMO_URL}

If it isn't for you, tell me and I'll close the file.

Vince`;

const FOLLOW_UP_TWO = `Hi there,

Last one from me on this. The concept stays up at ${DEMO_URL} either way, and you're welcome to take the pricing layout to whoever handles your site.

If the timing changes later, I'm easy to find.

Vince`;

const PHONE_OPENING = `"Hi — Vince calling, Novenworks. This isn't a sales call. I rebuilt the Nosta site as a concept on my own time and emailed the link over. Your site's in good shape — this was really about where the $30 first visit sits on the page. I wanted to check the email reached you. Did you see it?"`;

const PHONE_BRANCHES: [string, string][] = [
  [
    "If she hasn't seen it",
    '"No problem — it’s one link, nothing to sign up for. One thing to know before you open it: the photos are placeholders, not your rooms. I couldn’t source your interiors. It’s the layout that’s worth a look."',
  ],
  [
    "If she says the photos aren't hers",
    '"They’re not, and that’s on me for not making it louder — I couldn’t get your interiors, so they’re stock. If you send me a few of your own I’ll swap them in today. The structure is the part I’d actually defend."',
  ],
  [
    'If she says "the site is fine"',
    '"It genuinely is — I said so in the email and I meant it. The only thing I’d argue is that the $30 first visit is doing all the work of getting someone in the door, and right now it sits level with five other prices. If that’s not a problem worth solving, that’s a fair answer."',
  ],
  [
    "If she asks what you changed",
    '"Order, not content. The $30 intro leads. Per-person pricing said next to the prices instead of once at the bottom. Membership terms on the cards. Your Helo heaters and the stones near the top. Booking still goes to your Mangomint link."',
  ],
  [
    "If she likes it",
    '"Good — then the useful next step is going through it together so you can tell me what’s wrong with it. What works around your hours?"',
  ],
  [
    "If she isn't interested",
    '"Understood — I’ll leave it there. The link stays up if you ever want it. Thanks for taking the call."',
  ],
];

const VOICEMAIL = `"Hi — Vince with Novenworks. I rebuilt the Nosta Sauna Lounge site as a concept on my own time and emailed you the link. Your site's in good shape; this was mostly about giving the $30 first visit the top of the page. The photos in it are placeholders, not yours. Nothing to buy — reach me back on this number. Thanks."`;

const VERIFY_BEFORE_SENDING: [string, string][] = [
  [
    "Disclose the placeholder imagery before she clicks",
    "The concept uses public timber, sauna and stone photography rather than Nosta's interiors. The cold email, the voicemail and two phone branches all say so up front. Do not remove that disclosure to make the email shorter — it is the difference between a concept and a bait-and-switch.",
  ],
  [
    "Pricing on the concept",
    "Intro, week pass, single session, and the three membership tiers, plus oils and crystals, were verified from the official pricing page on 2026-09-08 and not since. Re-verify every figure before she opens the link.",
  ],
  [
    "Membership terms",
    "Two-month minimum, monthly auto-renew, 90-day rollover on Flow and Pure — same source, same date, same caveat. The concept surfaces these prominently, so being wrong about them is worse here than it would be in fine print.",
  ],
  [
    "The recipient",
    "No owner or manager name appears anywhere in this repo. The copy opens without one deliberately. Find a name, or open by asking who handles the website.",
  ],
  [
    "Email address",
    `Confirm ${EMAIL} is monitored before relying on it.`,
  ],
  [
    "Phone and hours",
    `Confirm ${PHONE} reaches the lounge. Published hours are Mon–Fri 8 AM–8 PM and Sat–Sun 9 AM–7 PM; call inside them and expect whoever answers to be with a guest.`,
  ],
  [
    "Mangomint booking and gift-card links",
    "Confirm both destinations still resolve. The “nothing about your booking changes” argument depends on it.",
  ],
  [
    "Session packages",
    "This repo's research notes that 5, 10 and 20-session packages are NOT on the official pricing page. Confirm whether they exist at all before mentioning them — observation 5 assumes they do not.",
  ],
  [
    "Repo note, not outreach",
    "This repository had no robots.ts and no sitemap.ts. /outreach was protected by page-level noindex alone; a robots.ts disallowing /outreach was added alongside this dossier.",
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
                  flag.includes("PLACEHOLDER")
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
              <strong>The current site is mature.</strong> This repo&apos;s own research says so. This is a structure
              and hierarchy argument, not a rescue — and the outreach opens by saying that out loud.
            </li>
            <li>
              <strong>The concept uses placeholder photography.</strong> Public timber, sauna and stone imagery, not
              Nosta&apos;s interiors, which could not be sourced. Every piece of outreach copy discloses this before
              she clicks. Do not remove that disclosure.
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
