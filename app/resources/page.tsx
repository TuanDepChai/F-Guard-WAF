import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { BookOpen, FileText, PlayCircle, Edit } from "lucide-react";

export const metadata: Metadata = {
  title: "Resources - FGuard WAF",
  description: "Explore resources like whitepapers, case studies, and webinars from FGuard WAF.",
  keywords: ["security resources", "whitepapers", "case studies", "webinars", "blog", "FGuard resources"],
};

export default function ResourcesPage() {
  const resourceTypes = [
    {
      title: "Whitepapers",
      description: "In-depth technical papers on WAF technology and cybersecurity trends.",
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      link: "/resources/whitepapers",
    },
    {
      title: "Case Studies",
      description: "Real-world examples of how FGuard WAF has protected businesses.",
      icon: <FileText className="h-8 w-8 text-primary" />,
      link: "/resources/case-studies",
    },
    {
      title: "Webinars",
      description: "On-demand recordings of expert discussions and product demos.",
      icon: <PlayCircle className="h-8 w-8 text-primary" />,
      link: "/resources/webinars",
    },
    {
      title: "Blog",
      description: "Latest news, insights, and security analysis from the FGuard team.",
      icon: <Edit className="h-8 w-8 text-primary" />,
      link: "/blog", // Assuming blog has its own root path
    },
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Resource Hub</h1>
        <p className="text-xl text-muted-foreground">
          Find valuable insights, data, and expert analysis on web application security.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {resourceTypes.map((type, index) => (
          <Link href={type.link} key={index}>
            <Card className="flex flex-col items-center text-center p-6 h-full transition-shadow hover:shadow-lg">
              <CardContent className="flex flex-col items-center p-0">
                <div className="mb-4">{type.icon}</div>
                <CardTitle className="text-xl font-semibold mb-2">{type.title}</CardTitle>
                <p className="text-muted-foreground text-sm">{type.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Placeholder for future content like featured resources or search */}
      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
        <h2 className="text-2xl font-bold mb-4">Looking for something specific?</h2>
        <p className="text-muted-foreground mb-6">Use the search bar below or contact our team for assistance.</p>
        {/* Search bar placeholder */}
        <div className="w-full max-w-md mx-auto bg-gray-100 dark:bg-gray-700 rounded-md p-4">
          <p className="text-muted-foreground">Search bar coming soon...</p>
        </div>
      </div>
    </div>
  );
} 