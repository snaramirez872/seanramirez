import "./globals.css";
import { Footer } from "./components/Footer";
import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  title: "Hello, World! My Name is Sean A Ramirez",
  description: "I am a web developer who has made various projects. This is my portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
