import Link from "next/link"
import { Shield, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-200">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">FGuard</span>
            </div>
            <p className="text-slate-400">
              Giải pháp Web Application Firewall hàng đầu bảo vệ website của bạn khỏi các mối đe dọa trực tuyến.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-slate-400 hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-slate-400 hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-slate-400 hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-slate-400 hover:text-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Dịch vụ</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-slate-400 hover:text-primary">
                  Web Application Firewall
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-primary">
                  Bảo vệ DDoS
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-primary">
                  Bảo vệ API
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-primary">
                  Tư vấn bảo mật
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-primary">
                  Đánh giá bảo mật
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Công ty</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-slate-400 hover:text-primary">
                  Về chúng tôi
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-primary">
                  Đội ngũ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-primary">
                  Khách hàng
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-primary">
                  Tuyển dụng
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Liên hệ</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-slate-400">123 Đường Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-slate-400">+84 123 456 789</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-slate-400">info@fguard.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>© 2025 FGuard. Tất cả các quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  )
}
