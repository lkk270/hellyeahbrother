"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "@/hooks/use-cart";

export function Navigation() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { state } = useCart();
	const { items } = state;
	const itemCount = items.reduce(
		(total: number, item: { quantity: number }) => total + item.quantity,
		0
	);

	return (
		<nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					{/* Logo */}
					<Link href="/" className="flex items-center space-x-2">
						<span className="text-2xl font-bold text-black">
							Hell Yeah Brother
						</span>
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-8">
						<Link
							href="/products"
							className="text-gray-600 hover:text-black transition-colors"
						>
							Products
						</Link>
						<Link
							href="/about"
							className="text-gray-600 hover:text-black transition-colors"
						>
							About
						</Link>
						<Link
							href="/support"
							className="text-gray-600 hover:text-black transition-colors"
						>
							Support
						</Link>
					</div>

					{/* Cart & Mobile Menu */}
					<div className="flex items-center space-x-4">
						<Link href="/cart" className="relative">
							<Button variant="ghost" size="sm" className="relative">
								<ShoppingCart className="h-5 w-5" />
								{itemCount > 0 && (
									<Badge
										variant="destructive"
										className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
									>
										{itemCount}
									</Badge>
								)}
							</Button>
						</Link>

						{/* Mobile menu button */}
						<Button
							variant="ghost"
							size="sm"
							className="md:hidden"
							onClick={() => setIsMenuOpen(!isMenuOpen)}
						>
							{isMenuOpen ? (
								<X className="h-5 w-5" />
							) : (
								<Menu className="h-5 w-5" />
							)}
						</Button>
					</div>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<div className="md:hidden border-t border-gray-100 py-4">
						<div className="flex flex-col space-y-4">
							<Link
								href="/products"
								className="text-gray-600 hover:text-black transition-colors"
								onClick={() => setIsMenuOpen(false)}
							>
								Products
							</Link>
							<Link
								href="/about"
								className="text-gray-600 hover:text-black transition-colors"
								onClick={() => setIsMenuOpen(false)}
							>
								About
							</Link>
							<Link
								href="/support"
								className="text-gray-600 hover:text-black transition-colors"
								onClick={() => setIsMenuOpen(false)}
							>
								Support
							</Link>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
}
