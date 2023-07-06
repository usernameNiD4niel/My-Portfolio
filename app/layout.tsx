import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Daniel Rey",
  description:
    "Personal portfolio of Daniel Rey. \nHe's a Software Engineer that loves everyone.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/no_copyright_infrigement.svg" sizes="any" />
      </head>
      <body className={`${inter.className} scroll-smooth`}>
        <Navbar />

        {children}
        <footer className="flex flex-col items-center gap-y-6 bg-black py-5 md:flex-row md:justify-center md:gap-x-32 md:py-20">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
