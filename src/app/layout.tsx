import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { CookieBanner } from "@/components/cookie-banner";
import { Toaster } from "@/components/ui/sonner";
import { CartProvider } from "@/hooks/use-cart";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
	subsets: ["latin"],
	variable: "--font-ibm-plex-mono",
	weight: ["400", "500"],
	display: "swap",
});

export const metadata: Metadata = {
	title: {
		default: "Hell Yeah Brother",
		template: "%s | Hell Yeah Brother",
	},
	description:
		"Premium trucker hats and the Hell-Yeah Button. Minimal, modern, confident.",
	keywords: ["trucker hat", "button", "fidget", "premium", "minimal"],
	authors: [{ name: "Hell Yeah Brother" }],
	creator: "Hell Yeah Brother",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://hellyeahbrother.com",
		siteName: "Hell Yeah Brother",
		title: "Hell Yeah Brother",
		description:
			"Premium trucker hats and the Hell-Yeah Button. Minimal, modern, confident.",
	},
	twitter: {
		card: "summary_large_image",
		title: "Hell Yeah Brother",
		description:
			"Premium trucker hats and the Hell-Yeah Button. Minimal, modern, confident.",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	verification: {
		google: "your-google-verification-code",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="scroll-smooth">
			<head>
				<link rel="canonical" href="https://hellyeahbrother.com" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#000000" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
				<link rel="manifest" href="/manifest.json" />
			</head>
			<body
				className={`${inter.variable} ${ibmPlexMono.variable} font-sans antialiased`}
			>
				<CartProvider>
					<div className="min-h-screen bg-white">
						<Navigation />
						<main className="flex-1">{children}</main>
						<CookieBanner />
						<Toaster />
					</div>
				</CartProvider>
			</body>
		</html>
	);
}
