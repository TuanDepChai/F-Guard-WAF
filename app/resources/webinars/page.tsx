import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webinars - FGuard WAF Resources",
  description: "Watch on-demand webinars and expert sessions from FGuard WAF.",
};

export default function WebinarsPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Webinars</h1>
      <p>List of webinars will be displayed here.</p>
    </div>
  );
} 