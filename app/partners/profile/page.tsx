import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { 
  User,
  Search,
  Filter,
  Plus,
  Mail,
  Phone,
  Globe,
  Building,
  Star,
  MoreVertical,
  MessageSquare,
  FileText,
  Shield,
  Award,
  Clock,
  Calendar,
  HelpCircle,
  LifeBuoy,
  BookOpen,
  Video,
  Bell,
  Lock,
  CreditCard,
  Globe2,
  Palette,
  BellRing,
  ShieldCheck,
  Key,
  LogOut,
  Download,
  Share2,
  Folder,
  File,
  FileType,
  FileImage,
  FileVideo,
  FileAudio,
  FileArchive,
  FileCode,
  FileSpreadsheet,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Settings,
  Edit,
  Camera,
  MapPin,
  Link,
  Twitter,
  Linkedin,
  Github,
  Facebook,
  Instagram,
  Youtube,
  Globe as GlobeIcon
} from "lucide-react"

export const metadata: Metadata = {
  title: "Profile | FGuard WAF Partner Portal",
  description: "Manage your partner profile and settings.",
}

const profile = {
  name: "John Smith",
  role: "Partner Manager",
  company: "TechCorp Solutions",
  email: "john@techcorp.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  website: "https://techcorp.com",
  bio: "Experienced cybersecurity professional with over 10 years of experience in WAF deployment and management. Passionate about helping organizations secure their web applications.",
  social: {
    twitter: "https://twitter.com/johnsmith",
    linkedin: "https://linkedin.com/in/johnsmith",
    github: "https://github.com/johnsmith",
    facebook: "https://facebook.com/johnsmith",
    instagram: "https://instagram.com/johnsmith",
    youtube: "https://youtube.com/johnsmith"
  },
  stats: {
    customers: 25,
    deployments: 85,
    revenue: "$90K",
    satisfaction: "98%"
  },
  certifications: [
    {
      name: "AWS Certified Security",
      issuer: "Amazon Web Services",
      date: "January 2024",
      expiry: "January 2027"
    },
    {
      name: "Certified Information Systems Security Professional (CISSP)",
      issuer: "ISC2",
      date: "December 2023",
      expiry: "December 2026"
    },
    {
      name: "Certified Ethical Hacker (CEH)",
      issuer: "EC-Council",
      date: "November 2023",
      expiry: "November 2026"
    }
  ],
  skills: [
    "Web Application Firewall",
    "Cloud Security",
    "Network Security",
    "Security Architecture",
    "Incident Response",
    "Risk Management",
    "Compliance",
    "Penetration Testing"
  ]
}

export default function ProfilePage() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Profile</h1>
              <p className="text-gray-600 dark:text-gray-400">
                Manage your partner profile and settings
              </p>
            </div>
            <Button>
              <Edit className="mr-2 h-4 w-4" />
              Edit Profile
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center">
                    <div className="relative mb-4">
                      <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center">
                        <User className="h-16 w-16 text-primary" />
                      </div>
                      <Button
                        size="sm"
                        className="absolute bottom-0 right-0 rounded-full"
                      >
                        <Camera className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-xl mb-1">
                        {profile.name}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        {profile.role} at {profile.company}
                      </div>
                      <div className="flex items-center justify-center gap-2 mb-4">
                        <Button variant="outline" size="sm">
                          <Mail className="mr-2 h-4 w-4" />
                          Message
                        </Button>
                        <Button variant="outline" size="sm">
                          <Share2 className="mr-2 h-4 w-4" />
                          Share
                        </Button>
                      </div>
                    </div>

                    <div className="w-full space-y-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="h-4 w-4" />
                        <span>{profile.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="h-4 w-4" />
                        <span>{profile.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4" />
                        <span>{profile.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <GlobeIcon className="h-4 w-4" />
                        <a href={profile.website} className="text-primary hover:underline">
                          {profile.website}
                        </a>
                      </div>
                    </div>

                    <div className="w-full mt-6">
                      <div className="font-semibold mb-2">Social Links</div>
                      <div className="flex items-center justify-center gap-2">
                        <Button variant="ghost" size="sm" asChild>
                          <a href={profile.social.twitter}>
                            <Twitter className="h-4 w-4" />
                          </a>
                        </Button>
                        <Button variant="ghost" size="sm" asChild>
                          <a href={profile.social.linkedin}>
                            <Linkedin className="h-4 w-4" />
                          </a>
                        </Button>
                        <Button variant="ghost" size="sm" asChild>
                          <a href={profile.social.github}>
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                        <Button variant="ghost" size="sm" asChild>
                          <a href={profile.social.facebook}>
                            <Facebook className="h-4 w-4" />
                          </a>
                        </Button>
                        <Button variant="ghost" size="sm" asChild>
                          <a href={profile.social.instagram}>
                            <Instagram className="h-4 w-4" />
                          </a>
                        </Button>
                        <Button variant="ghost" size="sm" asChild>
                          <a href={profile.social.youtube}>
                            <Youtube className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="md:col-span-2">
              <div className="space-y-8">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="font-semibold text-lg mb-4">About</div>
                    <p className="text-gray-600 dark:text-gray-400">
                      {profile.bio}
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="font-semibold text-lg mb-4">Statistics</div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                          Customers
                        </div>
                        <div className="font-semibold">{profile.stats.customers}</div>
                      </div>
                      <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                          Deployments
                        </div>
                        <div className="font-semibold">{profile.stats.deployments}</div>
                      </div>
                      <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                          Revenue
                        </div>
                        <div className="font-semibold">{profile.stats.revenue}</div>
                      </div>
                      <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                          Satisfaction
                        </div>
                        <div className="font-semibold">{profile.stats.satisfaction}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="font-semibold text-lg mb-4">Certifications</div>
                    <div className="space-y-4">
                      {profile.certifications.map((cert, index) => (
                        <div
                          key={index}
                          className="flex items-start justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg"
                        >
                          <div>
                            <div className="font-semibold mb-1">{cert.name}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              {cert.issuer} • Issued {cert.date}
                            </div>
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            Expires {cert.expiry}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="font-semibold text-lg mb-4">Skills</div>
                    <div className="flex flex-wrap gap-2">
                      {profile.skills.map((skill, index) => (
                        <div
                          key={index}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 