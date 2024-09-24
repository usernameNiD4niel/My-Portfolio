import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

const poppins = Poppins({
	weight: ["100", "200", "400", "400", "500", "600", "800", "900"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
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
			<body className={`${poppins.className} scroll-smooth`}>
				<header className="w-full ">
					<Navbar />
				</header>

				<main className="w-full flex flex-col items-center justify-center">
					{children}
				</main>
				<footer className="w-full">
					<Footer />
				</footer>
			</body>
		</html>
	);
}
