import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Products | FGuard WAF",
  description: "Explore FGuard's suite of web application security products",
}

export default function ProductsPage() {
  return (
    <main className="flex-1">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Products</h1>
        <p className="text-xl text-muted-foreground text-center mb-12">
          Comprehensive security solutions to protect your web applications from every angle.
        </p>

        {/* Product List or Overview will go here */}

      </div>
    </main>
  )
} 