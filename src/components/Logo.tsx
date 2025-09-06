"use client";

import { motion } from "framer-motion";

interface LogoProps {
	className?: string;
	size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", size = "md" }: LogoProps) {
	const sizeClasses = {
		sm: "w-16 h-8",
		md: "w-24 h-12",
		lg: "w-32 h-16",
	};

	return (
		<motion.div
			className={`${sizeClasses[size]} ${className}`}
			initial={{ opacity: 0, scale: 0.8 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.6, ease: "easeOut" }}
			whileHover={{
				scale: 1.05,
				rotate: [0, -2, 2, 0],
				transition: { duration: 0.3 },
			}}
		>
			<div className="relative w-full h-full group">
				{/* Main container with unique geometric cut */}
				<div className="absolute inset-0 bg-white rounded-sm shadow-lg overflow-hidden">
					{/* Diagonal cut effect */}
					<div
						className="absolute inset-0 bg-gradient-to-br from-black via-gray-800 to-black"
						style={{ clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)" }}
					/>

					{/* Accent line */}
					<div className="absolute top-0 left-0 w-full h-0.5 bg-white" />
					<div className="absolute bottom-0 left-0 w-full h-0.5 bg-white" />

					{/* Text overlay with unique positioning */}
					<div className="absolute inset-0 flex items-center justify-start pl-2">
						<span className="text-white font-black text-xs tracking-widest">
							HYB
						</span>
					</div>

					{/* Subtle shine effect */}
					<motion.div
						className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
						animate={{ x: ["-100%", "100%"] }}
						transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
					/>
				</div>

				{/* Glow effect on hover */}
				<div className="absolute inset-0 bg-white rounded-sm opacity-0 group-hover:opacity-20 blur-sm -z-10 transition-opacity duration-300" />
			</div>
		</motion.div>
	);
}
