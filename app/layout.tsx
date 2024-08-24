import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
	weight: ["100", "200", "400", "400"],
	subsets: ["latin"],
});

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
			<body className={`${poppins.className} scroll-smooth`}>
				<header className="w-full">
					<Navbar />
				</header>

				{children}
				<footer className="flex flex-col items-center gap-y-6 bg-black py-5 md:flex-row md:justify-center md:gap-x-32 md:py-20">
					<Footer />
				</footer>
			</body>
		</html>
	);
}
