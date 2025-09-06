"use client";

import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { useState } from "react";

interface Product {
	id: string;
	name: string;
	description: string;
	price: string;
	image: string;
	isNew?: boolean;
}

const products: Product[] = [
	{
		id: "hat-001",
		name: "Signature Hat",
		description:
			"Premium quality cap with minimalist design. Crafted for the modern individual who values both style and comfort.",
		price: "$89",
		image: "/images/hat.jpg",
		isNew: true,
	},
	{
		id: "scarf-001",
		name: "Essential Scarf",
		description:
			"Luxurious scarf made from the finest materials. A timeless piece that elevates any outfit with effortless elegance.",
		price: "$129",
		image: "/images/scarf.jpg",
		isNew: true,
	},
];

export default function ProductShowcase() {
	const [isPreorderModalOpen, setIsPreorderModalOpen] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

	const handlePreorder = (productId: string) => {
		const product = products.find((p) => p.id === productId);
		if (product) {
			setSelectedProduct(product);
			setIsPreorderModalOpen(true);
		}
	};

	return (
		<section id="products" className="py-20 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					viewport={{ once: true }}
				>
					<h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
						Preorder Collection
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						Limited edition pieces crafted with attention to detail and
						uncompromising quality.
					</p>
				</motion.div>

				{/* Products Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
					{products.map((product, index) => (
						<motion.div
							key={product.id}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.6,
								delay: index * 0.2,
								ease: "easeOut",
							}}
							viewport={{ once: true }}
						>
							<ProductCard product={product} onPreorder={handlePreorder} />
						</motion.div>
					))}
				</div>

				{/* Preorder Modal */}
				{isPreorderModalOpen && selectedProduct && (
					<motion.div
						className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setIsPreorderModalOpen(false)}
					>
						<motion.div
							className="bg-white rounded-lg p-8 max-w-md w-full"
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.8, opacity: 0 }}
							onClick={(e) => e.stopPropagation()}
						>
							<h3 className="text-2xl font-bold mb-4">
								Preorder {selectedProduct.name}
							</h3>
							<p className="text-gray-600 mb-6">
								{selectedProduct.description}
							</p>
							<div className="text-3xl font-bold mb-6">
								{selectedProduct.price}
							</div>

							<div className="space-y-4">
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-2">
										Email Address
									</label>
									<input
										type="email"
										className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
										placeholder="your@email.com"
									/>
								</div>

								<div>
									<label className="block text-sm font-medium text-gray-700 mb-2">
										Size
									</label>
									<select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black">
										<option>Select Size</option>
										<option>Small</option>
										<option>Medium</option>
										<option>Large</option>
										<option>X-Large</option>
									</select>
								</div>
							</div>

							<div className="flex space-x-4 mt-6">
								<button
									onClick={() => setIsPreorderModalOpen(false)}
									className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
								>
									Cancel
								</button>
								<button
									onClick={async () => {
										try {
											const email = (
												document.querySelector(
													'input[type="email"]'
												) as HTMLInputElement
											)?.value;
											const size = (
												document.querySelector("select") as HTMLSelectElement
											)?.value;

											if (!email || !size) {
												alert("Please fill in all fields");
												return;
											}

											const response = await fetch("/api/preorder", {
												method: "POST",
												headers: {
													"Content-Type": "application/json",
												},
												body: JSON.stringify({
													product_id: selectedProduct.id,
													email,
													size,
												}),
											});

											const result = await response.json();

											if (response.ok) {
												alert(
													"Preorder submitted successfully! We'll contact you soon."
												);
												setIsPreorderModalOpen(false);
											} else {
												alert(result.error || "Failed to submit preorder");
											}
										} catch (error) {
											console.error("Preorder error:", error);
											alert("Failed to submit preorder. Please try again.");
										}
									}}
									className="flex-1 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
								>
									Confirm Preorder
								</button>
							</div>
						</motion.div>
					</motion.div>
				)}
			</div>
		</section>
	);
}
