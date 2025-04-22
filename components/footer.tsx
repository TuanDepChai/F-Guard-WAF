import Link from "next/link"
import { Shield } from "lucide-react"
import { getTranslation } from "@/lib/i18n"

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
                FGuard
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">{getTranslation("footer.description")}</p>
          </div>
          <div>
            <h3 className="font-medium text-lg mb-4">{getTranslation("footer.product")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#features" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {getTranslation("footer.features")}
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {getTranslation("footer.pricing")}
                </Link>
              </li>
              <li>
                <Link
                  href="/documentation"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {getTranslation("footer.documentation")}
                </Link>
              </li>
              <li>
                <Link href="/comparison" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {getTranslation("footer.comparison")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-lg mb-4">{getTranslation("footer.company")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {getTranslation("footer.about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {getTranslation("footer.caseStudies")}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {getTranslation("footer.blog")}
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {getTranslation("footer.careers")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-lg mb-4">{getTranslation("footer.legal")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {getTranslation("footer.privacy")}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {getTranslation("footer.terms")}
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {getTranslation("footer.security")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} FGuard. {getTranslation("footer.rights")}
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-muted-foreground hover:text-primary">
              Twitter
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              LinkedIn
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
