import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  Calendar,
  Clock,
  MapPin,
  Users,
  ArrowLeft,
  Share2,
  Bookmark,
  Video,
  FileText,
  Download
} from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Event Details | FGuard WAF Partner Events",
  description: "Join our upcoming partner events and connect with the FGuard WAF community.",
}

const speakers = [
  {
    name: "John Smith",
    role: "Product Manager",
    company: "FGuard WAF",
    avatar: "/images/team/john.jpg",
    bio: "John has over 10 years of experience in web security and has led the development of FGuard WAF."
  },
  {
    name: "Sarah Johnson",
    role: "Security Architect",
    company: "TechSecure",
    avatar: "/images/team/sarah.jpg",
    bio: "Sarah specializes in implementing security solutions for enterprise clients."
  },
  {
    name: "Michael Chen",
    role: "Solutions Engineer",
    company: "FGuard WAF",
    avatar: "/images/team/michael.jpg",
    bio: "Michael helps partners implement and optimize FGuard WAF for their customers."
  }
]

const agenda = [
  {
    time: "09:00 AM",
    title: "Registration and Welcome Coffee",
    description: "Check-in and networking"
  },
  {
    time: "10:00 AM",
    title: "Keynote: Future of Web Security",
    description: "John Smith, Product Manager"
  },
  {
    time: "11:00 AM",
    title: "Technical Deep Dive: FGuard WAF 2.0",
    description: "Michael Chen, Solutions Engineer"
  },
  {
    time: "12:30 PM",
    title: "Lunch and Networking",
    description: "Connect with other partners"
  },
  {
    time: "02:00 PM",
    title: "Partner Success Stories",
    description: "Sarah Johnson, Security Architect"
  },
  {
    time: "03:30 PM",
    title: "Q&A and Discussion",
    description: "Open forum with all speakers"
  }
]

const resources = [
  {
    title: "Event Presentation",
    type: "PDF",
    size: "2.5 MB",
    icon: <FileText className="h-5 w-5" />
  },
  {
    title: "Technical Documentation",
    type: "PDF",
    size: "1.8 MB",
    icon: <FileText className="h-5 w-5" />
  },
  {
    title: "Product Demo Video",
    type: "MP4",
    size: "45 MB",
    icon: <Video className="h-5 w-5" />
  }
]

export default function EventPage({ params }: { params: { slug: string } }) {
  const event = {
    title: "FGuard WAF Partner Summit 2024",
    description: "Join us for our annual partner summit where we'll share our latest product updates, success stories, and future roadmap. Connect with other partners and learn how to grow your business with FGuard WAF.",
    date: "March 20, 2024",
    time: "09:00 AM - 04:00 PM",
    location: "Grand Hyatt Hotel, San Francisco",
    image: "/images/events/summit.jpg",
    registrationDeadline: "March 15, 2024",
    capacity: 200,
    registered: 150
  }

  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/partners/events">
            <Button variant="ghost" className="mb-8 group">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Events
            </Button>
          </Link>

          <div className="aspect-video relative overflow-hidden rounded-lg mb-8">
            <img
              src={event.image}
              alt={event.title}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>{event.location}</span>
            </div>
          </div>

          <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            {event.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Registration Deadline
                </div>
                <div className="font-semibold">{event.registrationDeadline}</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Capacity
                </div>
                <div className="font-semibold">{event.capacity} attendees</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Registered
                </div>
                <div className="font-semibold">{event.registered} attendees</div>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8">Agenda</h2>
            <div className="space-y-4">
              {agenda.map((item, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-24 flex-shrink-0">
                        <div className="font-semibold">{item.time}</div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8">Speakers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {speakers.map((speaker, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Avatar>
                        <AvatarImage src={speaker.avatar} />
                        <AvatarFallback>{speaker.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold">{speaker.name}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {speaker.role}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {speaker.company}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {speaker.bio}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8">Event Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {resources.map((resource, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg text-primary">
                        {resource.icon}
                      </div>
                      <div>
                        <div className="font-semibold">{resource.title}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {resource.type} • {resource.size}
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="w-full mt-4">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-b py-6 mb-8">
            <Button size="lg" className="group">
              Register Now
              <ArrowLeft className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                <Share2 className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Bookmark className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 