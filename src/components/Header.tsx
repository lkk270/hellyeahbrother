"use client";

import { motion } from "framer-motion";
import Logo from "./Logo";

export default function Header() {
	return (
		<motion.header
			className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10"
			initial={{ y: -100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<motion.div
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="cursor-pointer"
					>
						<Logo size="md" />
					</motion.div>

					{/* Navigation - minimal, clean */}
					<nav className="hidden md:flex items-center space-x-8">
						<motion.a
							href="#products"
							className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-200 relative group"
							whileHover={{ y: -2 }}
						>
							Products
							<motion.div
								className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"
								initial={{ width: 0 }}
								whileHover={{ width: "100%" }}
							/>
						</motion.a>
					</nav>

					{/* Mobile menu button */}
					<motion.button
						className="md:hidden p-2 rounded-md text-white/80 hover:text-white transition-colors"
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
					>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</motion.button>
				</div>
			</div>
		</motion.header>
	);
}
