"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
	return (
		<section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
			{/* Background elements */}
			<div className="absolute inset-0">
				<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-black/5 rounded-full blur-3xl" />
				<div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gray-900/5 rounded-full blur-3xl" />
			</div>

			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, ease: "easeOut" }}
				>
					{/* Main headline */}
					<motion.h1
						className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight mb-6"
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
					>
						<span className="block gradient-text">HELL</span>
						<span className="block gradient-text">YEAH</span>
						<span className="block gradient-text">BROTHER</span>
					</motion.h1>

					{/* CTA Button */}
					<motion.div
						className="flex flex-col items-center"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
					>
						{/* Scroll indicator - centered below button */}
						<motion.div
							className="mt-12"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
						>
							<motion.div
								animate={{ y: [0, 10, 0] }}
								transition={{
									duration: 2,
									repeat: Infinity,
									ease: "easeInOut",
								}}
							>
								<ChevronDown className="w-6 h-6 text-gray-400" />
							</motion.div>
						</motion.div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
