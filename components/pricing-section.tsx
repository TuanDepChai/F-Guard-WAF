import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Gói dịch vụ phù hợp với mọi nhu cầu
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              Chọn gói dịch vụ phù hợp với nhu cầu bảo mật website của bạn
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 mt-12">
          <Card className="flex flex-col">
            <CardHeader className="flex flex-col space-y-1.5">
              <CardTitle className="text-2xl">Cơ bản</CardTitle>
              <CardDescription>Dành cho website cá nhân và doanh nghiệp nhỏ</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">199k</span>
                <span className="text-muted-foreground">/tháng</span>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Bảo vệ DDoS cơ bản</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Chống SQL Injection</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Chống XSS</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>1 website</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>100GB băng thông/tháng</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Hỗ trợ email</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Đăng ký ngay</Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col border-primary">
            <CardHeader className="flex flex-col space-y-1.5">
              <div className="mx-auto rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-2">
                Phổ biến nhất
              </div>
              <CardTitle className="text-2xl">Nâng cao</CardTitle>
              <CardDescription>Dành cho doanh nghiệp vừa và nhỏ</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">499k</span>
                <span className="text-muted-foreground">/tháng</span>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Bảo vệ DDoS nâng cao</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Chống SQL Injection</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Chống XSS</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Bảo vệ API</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>5 website</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>500GB băng thông/tháng</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Hỗ trợ 24/7 qua email và chat</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Báo cáo bảo mật hàng tuần</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Đăng ký ngay</Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col">
            <CardHeader className="flex flex-col space-y-1.5">
              <CardTitle className="text-2xl">Doanh nghiệp</CardTitle>
              <CardDescription>Dành cho doanh nghiệp lớn</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">999k</span>
                <span className="text-muted-foreground">/tháng</span>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Bảo vệ DDoS cao cấp</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Chống SQL Injection</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Chống XSS</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Bảo vệ API nâng cao</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>20 website</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>2TB băng thông/tháng</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Hỗ trợ 24/7 ưu tiên</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Báo cáo bảo mật hàng ngày</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Tư vấn bảo mật chuyên sâu</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Đăng ký ngay</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
