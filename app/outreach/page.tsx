import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosta Sauna Lounge — Novenworks Outreach",
  robots: { index: false, follow: false },
};

export default function OutreachPage() {
  return (
    <main style={{ maxWidth: 920, margin: "0 auto", padding: "64px 24px", fontFamily: "system-ui, sans-serif", lineHeight: 1.6 }}>
      <p style={{ fontSize: 12, letterSpacing: ".16em", textTransform: "uppercase", opacity: .6 }}>Novenworks · Operator only</p>
      <h1 style={{ fontSize: 40, margin: "12px 0 8px" }}>Nosta Sauna Lounge</h1>
      <p style={{ opacity: .75 }}>Internal outreach brief for the speculative website demonstration. This route is intentionally unlinked and noindex.</p>

      <section style={{ marginTop: 40 }}>
        <h2>Canonical links</h2>
        <ul>
          <li>Demo: <a href="https://nosta-sauna-lounge-demo.vercel.app">nosta-sauna-lounge-demo.vercel.app</a></li>
          <li>GitHub: <a href="https://github.com/Novenworks/Nosta-Sauna-Lounge">Novenworks/Nosta-Sauna-Lounge</a></li>
          <li>Original: <a href="https://nostasauna.com">nostasauna.com</a></li>
          <li>Booking: <a href="https://booking.mangomint.com/321625?hp=1">Mangomint</a></li>
        </ul>
      </section>

      <section style={{ marginTop: 36 }}>
        <h2>Positioning used in the demo</h2>
        <p>Lead with Nosta as a private traditional sauna ritual in Mission Viejo, then make the first-visit offer, memberships, personalized heat, löyly, aromatherapy, hospitality, and booking path easy to understand.</p>
      </section>

      <section style={{ marginTop: 36 }}>
        <h2>Outreach angle</h2>
        <p>The redesign is meant to make the experience feel as premium and intentional online as the in-studio ritual, with clearer offer hierarchy and stronger conversion paths around the $30 intro session and recurring memberships.</p>
      </section>
    </main>
  );
}
