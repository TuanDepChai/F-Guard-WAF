import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { 
  Users,
  MessageSquare,
  Calendar,
  Globe,
  ArrowRight,
  Search,
  Star,
  ThumbsUp,
  MessageCircle
} from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Partner Community | FGuard WAF",
  description: "Join the FGuard WAF partner community for networking, support, and collaboration.",
}

const events = [
  {
    title: "Partner Summit 2024",
    date: "March 15-17, 2024",
    location: "San Francisco, CA",
    description: "Join us for our annual partner summit featuring keynotes, workshops, and networking opportunities.",
    icon: <Calendar className="h-8 w-8 text-primary" />
  },
  {
    title: "Technical Workshop",
    date: "April 5, 2024",
    location: "Virtual",
    description: "Deep dive into advanced FGuard WAF features and best practices.",
    icon: <MessageSquare className="h-8 w-8 text-primary" />
  },
  {
    title: "Regional Meetup",
    date: "May 10, 2024",
    location: "New York, NY",
    description: "Connect with other partners in your region and share success stories.",
    icon: <Users className="h-8 w-8 text-primary" />
  }
]

const discussions = [
  {
    title: "Best practices for WAF deployment",
    author: "John Smith",
    replies: 12,
    likes: 24,
    category: "Technical",
    icon: <MessageCircle className="h-5 w-5" />
  },
  {
    title: "Success story: Enterprise deployment",
    author: "Sarah Johnson",
    replies: 8,
    likes: 18,
    category: "Success Stories",
    icon: <Star className="h-5 w-5" />
  },
  {
    title: "New feature request discussion",
    author: "Mike Brown",
    replies: 15,
    likes: 32,
    category: "Product",
    icon: <MessageSquare className="h-5 w-5" />
  }
]

const resources = [
  {
    title: "Partner Directory",
    description: "Find and connect with other FGuard partners",
    icon: <Users className="h-5 w-5" />,
    href: "/community/directory"
  },
  {
    title: "Success Stories",
    description: "Read about partner success stories and case studies",
    icon: <Star className="h-5 w-5" />,
    href: "/community/success-stories"
  },
  {
    title: "Regional Groups",
    description: "Join regional partner communities",
    icon: <Globe className="h-5 w-5" />,
    href: "/community/regional"
  },
  {
    title: "Discussion Forum",
    description: "Participate in partner discussions",
    icon: <MessageSquare className="h-5 w-5" />,
    href: "/community/forum"
  }
]

export default function CommunityPage() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Partner Community</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Connect with other partners, share experiences, and grow your business together
          </p>
          
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="search"
              placeholder="Search community..."
              className="pl-10 py-6 text-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {events.map((event, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="mb-6">{event.icon}</div>
                <h2 className="text-xl font-semibold mb-3">{event.title}</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{event.description}</p>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Calendar className="h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Globe className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <Button className="w-full group">
                  Register Now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">Recent Discussions</h2>
          <div className="space-y-4">
            {discussions.map((discussion, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                        {discussion.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{discussion.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Posted by {discussion.author} in {discussion.category}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <MessageCircle className="h-4 w-4" />
                        <span>{discussion.replies}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <ThumbsUp className="h-4 w-4" />
                        <span>{discussion.likes}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8 text-center">Community Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <Link
                key={index}
                href={resource.href}
                className="flex items-start gap-4 p-6 rounded-lg bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                  {resource.icon}
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{resource.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{resource.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
} 