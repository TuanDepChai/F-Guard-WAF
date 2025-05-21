import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { 
  BarChart,
  LineChart,
  PieChart,
  Users,
  Shield,
  Award,
  DollarSign,
  ArrowUp,
  ArrowDown,
  Bell,
  Settings,
  FileText,
  MessageSquare,
  Star,
  Calendar
} from "lucide-react"

export const metadata: Metadata = {
  title: "Partner Dashboard | FGuard WAF",
  description: "Monitor your partner performance and access key metrics.",
}

const stats = [
  {
    title: "Total Revenue",
    value: "$1.2M",
    change: "+18%",
    trend: "up",
    icon: <DollarSign className="h-5 w-5" />
  },
  {
    title: "Active Customers",
    value: "156",
    change: "+12%",
    trend: "up",
    icon: <Users className="h-5 w-5" />
  },
  {
    title: "Active Deals",
    value: "23",
    change: "+5%",
    trend: "up",
    icon: <Shield className="h-5 w-5" />
  },
  {
    title: "Certifications",
    value: "4",
    change: "+1",
    trend: "up",
    icon: <Award className="h-5 w-5" />
  }
]

const recentDeals = [
  {
    customer: "TechCorp Solutions",
    value: "$250,000",
    status: "In Progress",
    date: "March 15, 2024"
  },
  {
    customer: "SecureNet Inc",
    value: "$180,000",
    status: "Pending",
    date: "March 12, 2024"
  },
  {
    customer: "CloudGuard Systems",
    value: "$320,000",
    status: "Completed",
    date: "March 10, 2024"
  }
]

const upcomingEvents = [
  {
    title: "Partner Summit 2024",
    date: "March 20, 2024",
    type: "Conference"
  },
  {
    title: "Technical Training",
    date: "March 25, 2024",
    type: "Training"
  },
  {
    title: "Q1 Review Meeting",
    date: "April 1, 2024",
    type: "Meeting"
  }
]

const notifications = [
  {
    title: "New Certification Available",
    message: "FGuard WAF Advanced Security Certification is now available",
    time: "2 hours ago"
  },
  {
    title: "Deal Registration Approved",
    message: "Your deal registration for TechCorp Solutions has been approved",
    time: "5 hours ago"
  },
  {
    title: "Training Reminder",
    message: "Don't forget about the upcoming technical training session",
    time: "1 day ago"
  }
]

export default function DashboardPage() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Partner Dashboard</h1>
              <p className="text-gray-600 dark:text-gray-400">
                Welcome back, TechSecure Solutions
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Bell className="mr-2 h-4 w-4" />
                Notifications
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {stat.title}
                      </div>
                      <div className="font-semibold">{stat.value}</div>
                      <div className={`text-sm ${
                        stat.trend === "up" ? "text-green-600" : "text-red-600"
                      }`}>
                        {stat.change}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-6">Revenue Overview</h2>
                <div className="h-[300px] flex items-center justify-center">
                  <LineChart className="h-48 w-48 text-gray-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-6">Customer Distribution</h2>
                <div className="h-[300px] flex items-center justify-center">
                  <PieChart className="h-48 w-48 text-gray-400" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-6">Recent Deals</h2>
                <div className="space-y-4">
                  {recentDeals.map((deal, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold">{deal.customer}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {deal.date}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">{deal.value}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {deal.status}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-6">Upcoming Events</h2>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg text-primary">
                        <Calendar className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-semibold">{event.title}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {event.date} • {event.type}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-6">Recent Notifications</h2>
                <div className="space-y-4">
                  {notifications.map((notification, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg text-primary">
                        <Bell className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-semibold">{notification.title}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {notification.message}
                        </div>
                        <div className="text-sm text-gray-500">
                          {notification.time}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-6">Performance Metrics</h2>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Sales Target
                      </div>
                      <div className="text-sm font-semibold">75%</div>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Customer Satisfaction
                      </div>
                      <div className="text-sm font-semibold">92%</div>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Training Completion
                      </div>
                      <div className="text-sm font-semibold">85%</div>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-6">Quick Actions</h2>
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="h-auto py-4">
                    <FileText className="mr-2 h-5 w-5" />
                    <div className="text-left">
                      <div className="font-semibold">Register Deal</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Submit new deal
                      </div>
                    </div>
                  </Button>
                  <Button variant="outline" className="h-auto py-4">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    <div className="text-left">
                      <div className="font-semibold">Support</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Get help
                      </div>
                    </div>
                  </Button>
                  <Button variant="outline" className="h-auto py-4">
                    <Star className="mr-2 h-5 w-5" />
                    <div className="text-left">
                      <div className="font-semibold">Resources</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Access materials
                      </div>
                    </div>
                  </Button>
                  <Button variant="outline" className="h-auto py-4">
                    <Calendar className="mr-2 h-5 w-5" />
                    <div className="text-left">
                      <div className="font-semibold">Schedule</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        View calendar
                      </div>
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
} 