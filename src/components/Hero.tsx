"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end start"],
	});

	// Parallax effects
	const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
	const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

	return (
		<section
			ref={containerRef}
			className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
		>
			{/* Dynamic gradient background */}
			<motion.div className="absolute inset-0" style={{ y }}>
				<div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
				<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent" />
			</motion.div>

			{/* Floating geometric shapes */}
			<div className="absolute inset-0 overflow-hidden">
				<motion.div
					className="absolute top-1/4 left-1/4 w-64 h-64 border border-white/10 rounded-full"
					animate={{
						rotate: [0, 360],
						scale: [1, 1.2, 1],
					}}
					transition={{
						duration: 20,
						repeat: Infinity,
						ease: "linear",
					}}
				/>
				<motion.div
					className="absolute bottom-1/3 right-1/3 w-32 h-32 border border-white/20 rounded-lg"
					animate={{
						rotate: [360, 0],
						y: [0, -20, 0],
					}}
					transition={{
						duration: 15,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>
				<motion.div
					className="absolute top-1/2 right-1/4 w-20 h-20 bg-white/5 rounded-full"
					animate={{
						scale: [1, 1.5, 1],
						opacity: [0.3, 0.8, 0.3],
					}}
					transition={{
						duration: 8,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>
			</div>

			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<motion.div
					style={{ opacity }}
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, ease: "easeOut" }}
				>
					{/* Main headline with magnetic effect */}
					<motion.h1
						className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight mb-6 cursor-default"
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
						whileHover={{
							scale: 1.05,
							transition: { duration: 0.3 },
						}}
					>
						<motion.span
							className="block text-white"
							whileHover={{
								color: "#ffffff",
								textShadow: "0 0 30px rgba(255,255,255,0.5)",
								transition: { duration: 0.2 },
							}}
						>
							HELL
						</motion.span>
						<motion.span
							className="block text-white"
							whileHover={{
								color: "#ffffff",
								textShadow: "0 0 30px rgba(255,255,255,0.5)",
								transition: { duration: 0.2 },
							}}
						>
							YEAH
						</motion.span>
						<motion.span
							className="block text-white"
							whileHover={{
								color: "#ffffff",
								textShadow: "0 0 30px rgba(255,255,255,0.5)",
								transition: { duration: 0.2 },
							}}
						>
							BROTHER
						</motion.span>
					</motion.h1>

					{/* Subtitle with typewriter effect */}
					<motion.p
						className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 font-light"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
					>
						Minimalist essentials for the modern individual.
						<br />
						<span className="text-white/60">
							Preorder collection now available.
						</span>
					</motion.p>

					{/* CTA Button with magnetic hover */}
					<motion.div
						className="flex flex-col items-center"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
					>
						<motion.a
							href="#products"
							className="group relative inline-flex items-center px-8 py-4 bg-white text-black font-medium text-sm tracking-widest uppercase hover:bg-gray-100 transition-all duration-300 overflow-hidden"
							whileHover={{
								scale: 1.05,
								boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
							}}
							whileTap={{ scale: 0.95 }}
						>
							{/* Button shine effect */}
							<motion.div
								className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
								initial={{ x: "-100%" }}
								whileHover={{ x: "100%" }}
								transition={{ duration: 0.6 }}
							/>
							<span className="relative z-10">stuff</span>
						</motion.a>

						{/* Scroll indicator with custom animation */}
						<motion.div
							className="mt-12"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
						>
							<motion.div
								className="flex flex-col items-center space-y-2"
								animate={{ y: [0, 10, 0] }}
								transition={{
									duration: 2,
									repeat: Infinity,
									ease: "easeInOut",
								}}
							>
								<ChevronDown className="w-6 h-6 text-white/60" />
								<motion.div
									className="w-px h-8 bg-gradient-to-b from-white/60 to-transparent"
									animate={{ height: [32, 48, 32] }}
									transition={{
										duration: 2,
										repeat: Infinity,
										ease: "easeInOut",
									}}
								/>
							</motion.div>
						</motion.div>
					</motion.div>
				</motion.div>
			</div>

			{/* Subtle noise texture overlay */}
			<div
				className="absolute inset-0 opacity-[0.02]"
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
				}}
			/>
		</section>
	);
}
