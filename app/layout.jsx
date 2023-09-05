import { Analytics } from "@vercel/analytics/react";
import { Poppins, Lobster, Neonderthaw, Vibur } from "next/font/google";
import Providers from "./providers";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UseScrollToTop from "../utils/useScrollToTop";
import ToastNotifications from "../utils/ToastNotifications";
import "../styles/globals.css";

const lobster = Lobster({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lobster",
  weight: "400",
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: "400",
});

export const metadata = {
  metadataBase: new URL("https://swaybae.net"),
  title: "Sway Bae | Streaming, Gaming, & So Much More!",
  description: "The Official Website for Sway Bae & The Bae Squad!",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.swaybae.net",
    title: "Sway Bae",
    description:
      "The Official Website for Sway Bae & The Bae Squad!",
    keywords: [
      "sway bae, swaybae, sway_bae, swaybaetv, sway, bae, swaybae.net, swaybae.com, thebaesquad, the bae squad, baesquad, bae_squad, sway bae twitch, sway bae twitter, sway bae youtube, sway bae discord, sway bae instagram, sway bae tiktok, sway bae merch, sway bae store, sway bae shop, sway bae gaming, hearthstone, blizzard, streamer, stream, twitch, twitch streamer, twitch.tv, twitch.tv/sway_bae",
    ],
    viewport: "width=device-width, initial-scale=1.0",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="myDark"
      className={` ${lobster.variable} ${poppins.variable} `}
      suppressHydrationWarning={true}
    >
      <head>
        <title>{metadata.title}</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
      </head>

      <body className="relative bg-gradient-to-b from-base-100 to-base-200 bg-cover bg-fixed bg-no-repeat">
        <Providers>
          <Navbar />
          <main className=" backdrop-brightness-100">
            <Analytics />
            {children}
            <UseScrollToTop />
            <ToastNotifications />
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
