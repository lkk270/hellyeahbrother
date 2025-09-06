import { NextRequest, NextResponse } from "next/server";
import { createPreorder } from "@/lib/db";

export async function POST(request: NextRequest) {
	try {
		const body = await request.json();
		const { product_id, email, size } = body;

		// Validate required fields
		if (!product_id || !email || !size) {
			return NextResponse.json(
				{ error: "Missing required fields" },
				{ status: 400 }
			);
		}

		// Validate email format
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return NextResponse.json(
				{ error: "Invalid email format" },
				{ status: 400 }
			);
		}

		// Create preorder
		const preorder = await createPreorder({
			product_id,
			email,
			size,
		});

		return NextResponse.json(
			{
				success: true,
				preorder,
				message: "Preorder submitted successfully!",
			},
			{ status: 201 }
		);
	} catch (error) {
		console.error("Preorder API error:", error);
		return NextResponse.json(
			{ error: "Internal server error" },
			{ status: 500 }
		);
	}
}
