import "./globals.css";
import { Footer } from "./components/Footer";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { ReactNode } from "react";
import { NavBar } from "./components/NavBar";

const title = "Sean A Ramirez | Web Developer & Software Engineer | JavaScript, HTML, CSS, React.js, Next.js, Python, WordPress";
const description = "Portfolio of Sean A Ramirez, a web developer specialzing in JavaScript, HTML, CSS, React.js, Next.js, and WordPress, showcasing modern and responsive websites and front-end projects.";

export const metadata = {
  title,
  description,
  metadataBase: new URL("https://seanaramirez.dev/"),
  openGraph: {
    title,
    description,
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "Featured image for the portfolio of Sean A. Ramirez",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/profile.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}