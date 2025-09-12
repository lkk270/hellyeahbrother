import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Truck as TruckIcon, RotateCcw, Lock } from "lucide-react";

export default function Home() {
	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="relative px-4 py-20 sm:px-6 lg:px-8">
				<div className="mx-auto text-center max-w-7xl">
					<h1 className="mb-6 text-5xl font-bold text-black sm:text-6xl lg:text-7xl">
						Hell Yeah Brother.
					</h1>
					<p className="max-w-3xl mx-auto mb-12 text-xl text-gray-600 sm:text-2xl">
						Premium trucker hats and the Hell-Yeah Button.
						<br className="hidden sm:block" />
						Minimal, modern, confident.
					</p>
					<div className="flex flex-col justify-center gap-4 sm:flex-row">
						<Link href="/products">
							<Button
								size="lg"
								className="px-8 py-3 text-white bg-black hover:bg-gray-800"
							>
								Shop Now
							</Button>
						</Link>
						<Link href="/about">
							<Button size="lg" variant="outline" className="px-8 py-3">
								Our Story
							</Button>
						</Link>
					</div>
				</div>
			</section>

			{/* Products Section */}
			<section className="px-4 py-20 sm:px-6 lg:px-8 bg-gray-50">
				<div className="mx-auto max-w-7xl">
					<div className="mb-16 text-center">
						<h2 className="mb-4 text-3xl font-bold text-black sm:text-4xl">
							Two Products. Zero Compromise.
						</h2>
						<p className="max-w-2xl mx-auto text-lg text-gray-600">
							We make two things, and we make them right.
						</p>
					</div>

					<div className="grid gap-8 md:grid-cols-2 lg:gap-12">
						{/* Trucker Hat */}
						<Card className="transition-all duration-300 bg-white border-0 group hover:shadow-xl">
							<CardContent className="p-0">
								<div className="relative overflow-hidden aspect-square">
									<Image
										src="/products/trucker-hat-1.jpg"
										alt="Trucker Hat"
										fill
										className="object-cover transition-transform duration-300 group-hover:scale-105"
									/>
									<Badge className="absolute text-white bg-black top-4 left-4">
										Classic Fit
									</Badge>
								</div>
								<div className="p-6">
									<h3 className="mb-2 text-2xl font-bold text-black">
										Trucker Hat
									</h3>
									<p className="mb-4 text-gray-600">
										Classic fit trucker hat. Because sometimes you need to look
										like you know what you&apos;re doing.
									</p>
									<div className="flex items-c enter justify-between">
										<span className="font-mono text-2xl font-bold text-black">
											$35
										</span>
										<Link href="/products/trucker-hat">
											<Button className="text-white bg-black hover:bg-gray-800">
												View Details
											</Button>
										</Link>
									</div>
								</div>
							</CardContent>
						</Card>

						{/* Hell-Yeah Button */}
						<Card className="transition-all duration-300 bg-white border-0 group hover:shadow-xl">
							<CardContent className="p-0">
								<div className="relative overflow-hidden aspect-square">
									<Image
										src="/products/hell-yeah-button-1.jpg"
										alt="Hell-Yeah Button"
										fill
										className="object-cover transition-transform duration-300 group-hover:scale-105"
									/>
									<Badge className="absolute text-white bg-black top-4 left-4">
										Interactive
									</Badge>
								</div>
								<div className="p-6">
									<h3 className="mb-2 text-2xl font-bold text-black">
										Hell-Yeah Button
									</h3>
									<p className="mb-4 text-gray-600">
										High-quality desk/fidget button that plays &quot;Hell Yeah,
										Brother&quot; when pressed.
									</p>
									<div className="flex items-center justify-between">
										<span className="font-mono text-2xl font-bold text-black">
											$45
										</span>
										<Link href="/products/hell-yeah-button">
											<Button className="text-white bg-black hover:bg-gray-800">
												View Details
											</Button>
										</Link>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Trust Strip */}
			<section className="px-4 py-16 bg-white border-t border-gray-100 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-7xl">
					<div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
						<div className="flex flex-col items-center">
							<div className="flex items-center justify-center w-12 h-12 mb-4 bg-gray-100 rounded-full">
								<TruckIcon className="w-6 h-6 text-gray-600" />
							</div>
							<h3 className="mb-2 text-lg font-semibold text-black">
								Free Shipping
							</h3>
							<p className="text-gray-600">On all orders over $50</p>
						</div>
						<div className="flex flex-col items-center">
							<div className="flex items-center justify-center w-12 h-12 mb-4 bg-gray-100 rounded-full">
								<RotateCcw className="w-6 h-6 text-gray-600" />
							</div>
							<h3 className="mb-2 text-lg font-semibold text-black">
								Easy Returns
							</h3>
							<p className="text-gray-600">30-day return policy</p>
						</div>
						<div className="flex flex-col items-center">
							<div className="flex items-center justify-center w-12 h-12 mb-4 bg-gray-100 rounded-full">
								<Lock className="w-6 h-6 text-gray-600" />
							</div>
							<h3 className="mb-2 text-lg font-semibold text-black">
								Secure Checkout
							</h3>
							<p className="text-gray-600">Powered by Stripe</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="px-4 py-20 text-white bg-black sm:px-6 lg:px-8">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="mb-6 text-3xl font-bold sm:text-4xl">
						Ready to Join the Brotherhood?
					</h2>
					<p className="mb-8 text-xl text-gray-300">
						Two products. Zero compromise. Maximum satisfaction.
					</p>
					<Link href="/products">
						<Button
							size="lg"
							variant="outline"
							className="px-8 py-3 text-white bg-transparent border-white hover:bg-white hover:text-black"
						>
							Shop All Products
						</Button>
					</Link>
				</div>
			</section>
		</div>
	);
}
