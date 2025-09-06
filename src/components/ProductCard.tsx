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
			<Card className="overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
				<div className="relative aspect-square overflow-hidden bg-gray-100">
					{/* Product Image Placeholder */}
					<div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
						<motion.div
							className="text-6xl"
							animate={
								isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }
							}
							transition={{ duration: 0.3 }}
						>
							{product.name === "Signature Hat" ? "🧢" : "🧣"}
						</motion.div>
					</div>

					{/* Overlay */}
					<motion.div
						className="absolute inset-0 bg-black/20"
						initial={{ opacity: 0 }}
						animate={{ opacity: isHovered ? 1 : 0 }}
						transition={{ duration: 0.3 }}
					/>

					{/* New Badge */}
					{product.isNew && (
						<Badge className="absolute top-4 left-4 bg-black text-white">
							New
						</Badge>
					)}
				</div>

				<CardContent className="p-6">
					<div className="space-y-4">
						<div>
							<h3 className="text-xl font-bold text-gray-900 mb-2">
								{product.name}
							</h3>
							<p className="text-gray-600 text-sm leading-relaxed">
								{product.description}
							</p>
						</div>

						<div className="flex items-center justify-between">
							<span className="text-2xl font-bold text-gray-900">
								{product.price}
							</span>

							<Button
								onClick={() => onPreorder(product.id)}
								className="bg-black hover:bg-gray-800 text-white font-medium px-6 py-2 transition-all duration-300 hover:scale-105"
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
