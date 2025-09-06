import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Hell Yeah Brother - Minimalist Essentials",
	description:
		"Premium minimalist essentials for the modern individual. Preorder collection now available.",
	keywords: "minimalist fashion, premium essentials, hats, scarves, preorder",
	authors: [{ name: "Hell Yeah Brother" }],
	openGraph: {
		title: "Hell Yeah Brother - Minimalist Essentials",
		description:
			"Premium minimalist essentials for the modern individual. Preorder collection now available.",
		type: "website",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="scroll-smooth">
			<body className={`${inter.className} antialiased`}>{children}</body>
		</html>
	);
}
