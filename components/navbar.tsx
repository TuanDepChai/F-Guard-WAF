import Link from "next/link"
import { Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold">FGuard</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#features" className="text-sm font-medium hover:text-primary">
            Tính năng
          </Link>
          <Link href="#pricing" className="text-sm font-medium hover:text-primary">
            Bảng giá
          </Link>
          <Link href="#enterprise" className="text-sm font-medium hover:text-primary">
            Doanh nghiệp
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-primary">
            Liên hệ
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="hidden md:flex">
            Đăng nhập
          </Button>
          <Button size="sm">Dùng thử miễn phí</Button>
        </div>
      </div>
    </header>
  )
}
