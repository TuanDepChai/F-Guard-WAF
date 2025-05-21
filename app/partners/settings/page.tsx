import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { 
  Settings,
  Bell,
  Lock,
  User,
  CreditCard,
  Globe2,
  Palette,
  BellRing,
  ShieldCheck,
  Key,
  LogOut,
  Save,
  Eye,
  EyeOff,
  Mail,
  Phone,
  MapPin,
  Building,
  Globe,
  Link,
  Twitter,
  Linkedin,
  Github,
  Facebook,
  Instagram,
  Youtube
} from "lucide-react"

export const metadata: Metadata = {
  title: "Settings | FGuard WAF Partner Portal",
  description: "Manage your account settings and preferences.",
}

const settings = {
  account: {
    email: "john@techcorp.com",
    phone: "+1 (555) 123-4567",
    company: "TechCorp Solutions",
    website: "https://techcorp.com",
    location: "San Francisco, CA"
  },
  notifications: {
    email: true,
    sms: false,
    marketing: true,
    security: true,
    updates: true
  },
  security: {
    twoFactor: true,
    sessionTimeout: 30,
    passwordLastChanged: "January 15, 2024"
  },
  appearance: {
    theme: "light",
    language: "en",
    timezone: "America/Los_Angeles"
  }
}

export default function SettingsPage() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Settings</h1>
              <p className="text-gray-600 dark:text-gray-400">
                Manage your account settings and preferences
              </p>
            </div>
            <Button>
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <Button variant="ghost" className="w-full justify-start">
                      <User className="mr-2 h-4 w-4" />
                      Account
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <Bell className="mr-2 h-4 w-4" />
                      Notifications
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <Lock className="mr-2 h-4 w-4" />
                      Security
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <Palette className="mr-2 h-4 w-4" />
                      Appearance
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <CreditCard className="mr-2 h-4 w-4" />
                      Billing
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <Globe2 className="mr-2 h-4 w-4" />
                      Language
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="md:col-span-2">
              <div className="space-y-8">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="font-semibold text-lg mb-4">Account Settings</div>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium mb-1 block">
                          Email Address
                        </label>
                        <div className="flex gap-2">
                          <Input
                            type="email"
                            value={settings.account.email}
                            className="flex-1"
                          />
                          <Button variant="outline">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1 block">
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          value={settings.account.phone}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1 block">
                          Company Name
                        </label>
                        <Input
                          type="text"
                          value={settings.account.company}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1 block">
                          Website
                        </label>
                        <Input
                          type="url"
                          value={settings.account.website}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1 block">
                          Location
                        </label>
                        <Input
                          type="text"
                          value={settings.account.location}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="font-semibold text-lg mb-4">Notification Preferences</div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Email Notifications</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            Receive notifications via email
                          </div>
                        </div>
                        <Button
                          variant={settings.notifications.email ? "default" : "outline"}
                        >
                          {settings.notifications.email ? "Enabled" : "Disabled"}
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">SMS Notifications</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            Receive notifications via SMS
                          </div>
                        </div>
                        <Button
                          variant={settings.notifications.sms ? "default" : "outline"}
                        >
                          {settings.notifications.sms ? "Enabled" : "Disabled"}
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Marketing Updates</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            Receive marketing and promotional updates
                          </div>
                        </div>
                        <Button
                          variant={settings.notifications.marketing ? "default" : "outline"}
                        >
                          {settings.notifications.marketing ? "Enabled" : "Disabled"}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="font-semibold text-lg mb-4">Security Settings</div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Two-Factor Authentication</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            Add an extra layer of security to your account
                          </div>
                        </div>
                        <Button
                          variant={settings.security.twoFactor ? "default" : "outline"}
                        >
                          {settings.security.twoFactor ? "Enabled" : "Disabled"}
                        </Button>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1 block">
                          Session Timeout (minutes)
                        </label>
                        <Input
                          type="number"
                          value={settings.security.sessionTimeout}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1 block">
                          Password Last Changed
                        </label>
                        <Input
                          type="text"
                          value={settings.security.passwordLastChanged}
                          disabled
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="font-semibold text-lg mb-4">Appearance Settings</div>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium mb-1 block">
                          Theme
                        </label>
                        <div className="flex gap-2">
                          <Button
                            variant={settings.appearance.theme === "light" ? "default" : "outline"}
                            className="flex-1"
                          >
                            Light
                          </Button>
                          <Button
                            variant={settings.appearance.theme === "dark" ? "default" : "outline"}
                            className="flex-1"
                          >
                            Dark
                          </Button>
                          <Button
                            variant={settings.appearance.theme === "system" ? "default" : "outline"}
                            className="flex-1"
                          >
                            System
                          </Button>
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1 block">
                          Language
                        </label>
                        <Input
                          type="text"
                          value={settings.appearance.language}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1 block">
                          Timezone
                        </label>
                        <Input
                          type="text"
                          value={settings.appearance.timezone}
                        />
                      </div>
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