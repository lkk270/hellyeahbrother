import { neon } from "@neondatabase/serverless";

// Initialize Neon client
const sql = neon(process.env.DATABASE_URL!);

export interface PreorderData {
	id?: string;
	product_id: string;
	email: string;
	size: string;
	created_at?: Date;
}

export async function createPreorder(
	data: Omit<PreorderData, "id" | "created_at">
) {
	try {
		const result = await sql`
      INSERT INTO preorders (product_id, email, size)
      VALUES (${data.product_id}, ${data.email}, ${data.size})
      RETURNING id, created_at
    `;

		return result[0];
	} catch (error) {
		console.error("Error creating preorder:", error);
		throw new Error("Failed to create preorder");
	}
}

export async function getPreorders() {
	try {
		const result = await sql`
      SELECT * FROM preorders
      ORDER BY created_at DESC
    `;

		return result;
	} catch (error) {
		console.error("Error fetching preorders:", error);
		throw new Error("Failed to fetch preorders");
	}
}

// Initialize database schema
export async function initDatabase() {
	try {
		await sql`
      CREATE TABLE IF NOT EXISTS preorders (
        id SERIAL PRIMARY KEY,
        product_id VARCHAR(50) NOT NULL,
        email VARCHAR(255) NOT NULL,
        size VARCHAR(20) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

		console.log("Database initialized successfully");
	} catch (error) {
		console.error("Error initializing database:", error);
		throw new Error("Failed to initialize database");
	}
}
