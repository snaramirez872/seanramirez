import "./globals.css";
import { Footer } from "./components/Footer";
import { Analytics } from '@vercel/analytics/next';
import type { ReactNode } from "react";
import { NavBar } from "./components/NavBar";

export const metadata = {
  title: "Sean A Ramirez | Web Developer & Software Engineer | JavaScript, HTML, CSS, React.js, Next.js, Python, WordPress",
  description: "Portfolio of Sean A Ramirez, a web developer specialzing in JavaScript, HTML, CSS, React.js, Next.js, and WordPress, showcasing modern and responsive websites and front-end projects.",
  metadataBase: new URL("https://seanramirez.vercel.app"), // temp url while waiting for domain
  openGraph: {
    title: "Sean A Ramirez | Web Developer & Software Engineer | JavaScript, HTML, CSS, React.js, Next.js, Python, WordPress",
    description: "Portfolio of Sean A Ramirez, a web developer specialzing in JavaScript, HTML, CSS, React.js, Next.js, and WordPress, showcasing modern and responsive websites and front-end projects.",
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
    title: "Sean A Ramirez | Web Developer & Software Engineer | JavaScript, HTML, CSS, React.js, Next.js, Python, WordPress",
    description: "Portfolio of Sean A Ramirez, a web developer specialzing in JavaScript, HTML, CSS, React.js, Next.js, and WordPress, showcasing modern and responsive websites and front-end projects.",
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
      </body>
    </html>
  );
}