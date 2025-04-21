import Link from "next/link"
import { Shield } from "lucide-react"
import { useTranslation } from "@/lib/i18n"

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">FGuard</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{t("footer.description")}</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">{t("footer.services.title")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
                  {t("footer.services.waf")}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
                  {t("footer.services.ddos")}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
                  {t("footer.services.api")}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
                  {t("footer.services.consulting")}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
                  {t("footer.services.assessment")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">{t("footer.company.title")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
                  {t("footer.company.about")}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
                  {t("footer.company.team")}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
                  {t("footer.company.customers")}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
                  {t("footer.company.blog")}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
                  {t("footer.company.careers")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">{t("footer.contact.title")}</h3>
            <address className="not-italic">
              <p className="text-gray-600 dark:text-gray-400 mb-2">{t("footer.contact.address")}</p>
              <p className="text-gray-600 dark:text-gray-400 mb-2">{t("footer.contact.phone")}</p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{t("footer.contact.email")}</p>
            </address>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90"
            >
              {t("footer.contact.contactNow")}
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  )
}
