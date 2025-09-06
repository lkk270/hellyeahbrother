"use client";

import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

export default function Footer() {
	return (
		<motion.footer
			className="bg-black text-white py-12"
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
			viewport={{ once: true }}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col items-center space-y-6">
					{/* Brand name */}
					<motion.div
						className="text-center"
						initial={{ opacity: 0, scale: 0.8 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}
					>
						<h3 className="text-2xl font-black tracking-wider">
							HELL YEAH BROTHER
						</h3>
					</motion.div>

					{/* Instagram link */}
					<motion.a
						href="https://instagram.com/hellyeahbrothershop"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 group"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						viewport={{ once: true }}
					>
						<Instagram className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
					</motion.a>

					{/* Copyright */}
					<motion.div
						className="text-center text-gray-500 text-xs"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.6 }}
						viewport={{ once: true }}
					>
						<p>
							&copy; {new Date().getFullYear()} Hell Yeah Brother. All rights
							reserved.
						</p>
					</motion.div>
				</div>
			</div>
		</motion.footer>
	);
}
