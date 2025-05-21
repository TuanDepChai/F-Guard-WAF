import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Whitepapers - FGuard WAF Resources",
  description: "Download whitepapers on WAF technology and cybersecurity trends from FGuard.",
};

export default function WhitepapersPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Whitepapers</h1>
      <p>List of whitepapers will be displayed here.</p>
    </div>
  );
} 