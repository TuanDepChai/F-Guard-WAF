import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies - FGuard WAF Resources",
  description: "Read case studies on how FGuard WAF has protected businesses from cyber threats.",
};

export default function CaseStudiesPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Case Studies</h1>
      <p>List of case studies will be displayed here.</p>
    </div>
  );
} 