import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { Poppins, Lobster, Neonderthaw, Vibur } from "next/font/google";
import { Providers } from "./providers";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import Loading from "./loading";
import UseScrollToTop from "../hooks/useScrollToTop";
import Image from "next/image";
import ComingSoon from "../public/images/himom.jpg";

const vibur = Vibur({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-vibur",
  weight: "400",
});

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

const neonderthaw = Neonderthaw({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-neonderthaw",
  weight: "400",
});

export const metadata = {
  metadataBase: new URL("https://swaybae.net"),
  title: "SwayBae | Streaming, Gaming, and More!",
  description: "Here you will find everything there is to know about Sway!",
  robots: {
    index: true,
    follow: true,
    noarchive: true,
    nosnippet: false,
    noimageindex: true,
    nocache: true,
    notranslate: false,
    maxSnippet: -1,
    maxImagePreview: "standard",
    maxVideoPreview: "standard",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.swaybae.net",
    title: "SwayBae",
    description:
      "Here you will find everything there is to know about Swaybae!",
    keywords: [
      "swaybae, sway_bae, sway, bae, swaybae.net, swaybae.com, baesquad, bae_squad, swaybae twitch, swaybae twitter, swaybae youtube, swaybae discord, swaybae instagram, swaybae tiktok, swaybae merch, swaybae store, swaybae shop, swaybae gaming",
    ],
    viewport: "width=device-width, initial-scale=1.0",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="myDark"
      className={`${vibur.variable} ${lobster.variable} ${poppins.variable} ${neonderthaw.variable}`}
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

      {/* <body className="relative bg-gradient-to-r from-base-300 via-pink-400 to-black-300 bg-cover bg-fixed bg-no-repeat">

        <main className="backdrop-brightness-75 px-4"> */}

      <body className="relative bg-gradient-to-bl from-purple-900 via pink-800 to-black-300 bg-cover bg-fixed bg-no-repeat">
        <Image
          src={ComingSoon}
          alt="Coming Soon"
          quality={100}
          fill
          cover="true"
          className="absolute mix-blend-overlay"
          priority
        />

        <main className="backdrop-brightness-100">
          <Providers>
            <Suspense fallback={<Loading />}>{children}</Suspense>
            <UseScrollToTop />
            <ToastContainer />
          </Providers>
        </main>
      </body>
    </html>
  );
}
