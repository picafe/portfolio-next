import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import Footer from "./components/footer";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../../public/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

const argentPixelR = LocalFont({
  src: "../../public/ArgentPixelCF-Regular.woff",
  variable: "--font-pixel-r",
});

const argentPixelI = LocalFont({
  src: "../../public/ArgentPixelCF-Italic.woff",
  variable: "--font-pixel-i",
});

export const metadata: Metadata = {
  title: "picafe ",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={[
        inter.variable,
        calSans.variable,
        argentPixelR.variable,
        argentPixelI.variable,
      ].join(" ")}
    >
      <body className={`${inter.className} flex flex-col min-h-screen w-full alt-bg`}>
        <main className="flex overflow-y-auto my-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
