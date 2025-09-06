"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface Product {
	id: string;
	name: string;
	description: string;
	price: string;
	image: string;
	isNew?: boolean;
}

interface ProductCardProps {
	product: Product;
	onPreorder: (productId: string) => void;
}

export default function ProductCard({ product, onPreorder }: ProductCardProps) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, ease: "easeOut" }}
			viewport={{ once: true }}
			onHoverStart={() => setIsHovered(true)}
			onHoverEnd={() => setIsHovered(false)}
			className="group"
		>
			<Card className="overflow-hidden bg-black border border-white/10 shadow-2xl hover:shadow-white/20 transition-all duration-500 hover:scale-105 relative">
				{/* Unique geometric accent */}
				<div
					className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent"
					style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
				/>

				<div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-900 to-black">
					{/* Product Image Placeholder with unique styling */}
					<div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black">
						<motion.div
							className="text-6xl filter drop-shadow-2xl"
							animate={
								isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }
							}
							transition={{ duration: 0.3 }}
						>
							{product.name === "Signature Hat" ? "🧢" : "🧣"}
						</motion.div>
					</div>

					{/* Unique overlay with geometric pattern */}
					<motion.div
						className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/10"
						initial={{ opacity: 0 }}
						animate={{ opacity: isHovered ? 1 : 0 }}
						transition={{ duration: 0.3 }}
					/>

					{/* New Badge with unique styling */}
					{product.isNew && (
						<Badge className="absolute top-4 left-4 bg-white text-black font-bold border-0">
							New
						</Badge>
					)}

					{/* Subtle border accent */}
					<div className="absolute inset-0 border border-white/20" />
				</div>

				<CardContent className="p-6 bg-black">
					<div className="space-y-4">
						<div>
							<h3 className="text-xl font-bold text-white mb-2">
								{product.name}
							</h3>
							<p className="text-gray-300 text-sm leading-relaxed">
								{product.description}
							</p>
						</div>

						<div className="flex items-center justify-between">
							<span className="text-2xl font-bold text-white">
								{product.price}
							</span>

							<Button
								onClick={() => onPreorder(product.id)}
								className="bg-white text-black hover:bg-gray-100 font-bold px-6 py-2 transition-all duration-300 hover:scale-105 hover:shadow-lg"
								size="sm"
							>
								Preorder
							</Button>
						</div>
					</div>
				</CardContent>
			</Card>
		</motion.div>
	);
}
