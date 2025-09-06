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
		>
			<div className="relative w-full h-full">
				{/* Main rectangle - inspired by Young LA's clean, geometric style */}
				<div className="absolute inset-0 bg-black rounded-sm shadow-lg" />

				{/* Inner accent rectangle */}
				<div className="absolute inset-1 bg-white rounded-sm" />

				{/* Text overlay */}
				<div className="absolute inset-0 flex items-center justify-center">
					<span className="text-black font-black text-xs tracking-wider">
						HYB
					</span>
				</div>

				{/* Subtle glow effect */}
				<div className="absolute inset-0 bg-black rounded-sm opacity-20 blur-sm -z-10" />
			</div>
		</motion.div>
	);
}
