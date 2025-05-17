import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function BlogNewsletter() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Subscribe to Newsletter</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          Get the latest security updates and articles delivered directly to your inbox.
        </p>
        <form className="space-y-4">
          <div>
            <Input type="email" placeholder="Your email address" className="w-full" required />
          </div>
          <Button type="submit" className="w-full">
            Subscribe
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
