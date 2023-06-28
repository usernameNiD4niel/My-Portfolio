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
      <body className={`${inter.className}`}>
        <Navbar />

        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
