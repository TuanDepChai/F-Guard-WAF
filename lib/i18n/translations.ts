export type Locale = "en" | "vi" | "fr" | "de" | "es" | "ja" | "zh"

export type TranslationKey =
  | "common.home"
  | "common.features"
  | "common.pricing"
  | "common.solutions"
  | "common.resources"
  | "common.company"
  | "common.login"
  | "common.getStarted"
  | "common.documentation"
  | "common.apiDocs"
  | "common.securityAcademy"
  | "common.blog"
  | "common.aboutUs"
  | "common.partners"
  | "common.compliance"
  | "common.roadmap"
  | "common.contact"
  | "common.enterprise"
  | "common.caseStudies"
  | "common.comparison"
  | "common.technicalSpecs"
  | "common.search"
  | "common.searchPlaceholder"
  | "hero.title"
  | "hero.subtitle"
  | "hero.tryDemo"
  | "hero.documentation"
  | "features.title"
  | "features.subtitle"
  | "cta.title"
  | "cta.subtitle"
  | "cta.emailPlaceholder"
  | "cta.requestDemo"
  | "cta.disclaimer"
  | "footer.subscribe"
  | "footer.subscribeText"
  | "footer.emailPlaceholder"
  | "footer.submitButton"
  | "footer.copyright"
  | "footer.privacyPolicy"
  | "footer.termsOfService"
  | "footer.contactUs"

export const translations: Record<Locale, Record<TranslationKey, string>> = {
  en: {
    "common.home": "Home",
    "common.features": "Features",
    "common.pricing": "Pricing",
    "common.solutions": "Solutions",
    "common.resources": "Resources",
    "common.company": "Company",
    "common.login": "Log in",
    "common.getStarted": "Get Started",
    "common.documentation": "Documentation",
    "common.apiDocs": "API Docs",
    "common.securityAcademy": "Security Academy",
    "common.blog": "Blog",
    "common.aboutUs": "About Us",
    "common.partners": "Partners",
    "common.compliance": "Compliance",
    "common.roadmap": "Roadmap",
    "common.contact": "Contact",
    "common.enterprise": "Enterprise",
    "common.caseStudies": "Case Studies",
    "common.comparison": "Comparison",
    "common.technicalSpecs": "Technical Specs",
    "common.search": "Search",
    "common.searchPlaceholder": "Search for documentation, features, API...",
    "hero.title": "Protect Your Web Applications From Advanced Threats",
    "hero.subtitle":
      "FGuard provides comprehensive protection against OWASP Top 10, DDoS attacks, and zero-day vulnerabilities with our advanced WAF solution.",
    "hero.tryDemo": "Try Demo",
    "hero.documentation": "Documentation",
    "features.title": "Comprehensive Web Application Security",
    "features.subtitle":
      "Our WAF solution provides multi-layered protection to secure your applications against evolving threats.",
    "cta.title": "Secure Your Enterprise Applications",
    "cta.subtitle":
      "Schedule a personalized security assessment with our WAF experts and receive a customized protection strategy for your organization",
    "cta.emailPlaceholder": "Your business email",
    "cta.requestDemo": "Request Demo",
    "cta.disclaimer":
      "Enterprise-grade security solutions for organizations of all sizes. Our security experts will contact you within 24 hours.",
    "footer.subscribe": "Subscribe",
    "footer.subscribeText": "Get the latest security updates and news delivered to your inbox.",
    "footer.emailPlaceholder": "Your email",
    "footer.submitButton": "Subscribe",
    "footer.copyright": "All rights reserved.",
    "footer.privacyPolicy": "Privacy Policy",
    "footer.termsOfService": "Terms of Service",
    "footer.contactUs": "Contact Us",
  },
  vi: {
    "common.home": "Trang chủ",
    "common.features": "Tính năng",
    "common.pricing": "Bảng giá",
    "common.solutions": "Giải pháp",
    "common.resources": "Tài nguyên",
    "common.company": "Công ty",
    "common.login": "Đăng nhập",
    "common.getStarted": "Bắt đầu",
    "common.documentation": "Tài liệu",
    "common.apiDocs": "Tài liệu API",
    "common.securityAcademy": "Học viện Bảo mật",
    "common.blog": "Blog",
    "common.aboutUs": "Về chúng tôi",
    "common.partners": "Đối tác",
    "common.compliance": "Tuân thủ",
    "common.roadmap": "Lộ trình",
    "common.contact": "Liên hệ",
    "common.enterprise": "Doanh nghiệp",
    "common.caseStudies": "Nghiên cứu điển hình",
    "common.comparison": "So sánh",
    "common.technicalSpecs": "Thông số kỹ thuật",
    "common.search": "Tìm kiếm",
    "common.searchPlaceholder": "Tìm kiếm tài liệu, tính năng, API...",
    "hero.title": "Bảo vệ Ứng dụng Web của Bạn Khỏi Các Mối Đe dọa Nâng cao",
    "hero.subtitle":
      "FGuard cung cấp bảo vệ toàn diện chống lại OWASP Top 10, tấn công DDoS và lỗ hổng zero-day với giải pháp WAF tiên tiến của chúng tôi.",
    "hero.tryDemo": "Dùng thử",
    "hero.documentation": "Tài liệu",
    "features.title": "Bảo mật Ứng dụng Web Toàn diện",
    "features.subtitle":
      "Giải pháp WAF của chúng tôi cung cấp bảo vệ đa lớp để bảo vệ ứng dụng của bạn chống lại các mối đe dọa đang phát triển.",
    "cta.title": "Bảo mật Ứng dụng Doanh nghiệp của Bạn",
    "cta.subtitle":
      "Lên lịch đánh giá bảo mật cá nhân hóa với các chuyên gia WAF của chúng tôi và nhận chiến lược bảo vệ tùy chỉnh cho tổ chức của bạn",
    "cta.emailPlaceholder": "Email doanh nghiệp của bạn",
    "cta.requestDemo": "Yêu cầu Demo",
    "cta.disclaimer":
      "Giải pháp bảo mật cấp doanh nghiệp cho tổ chức mọi quy mô. Các chuyên gia bảo mật của chúng tôi sẽ liên hệ với bạn trong vòng 24 giờ.",
    "footer.subscribe": "Đăng ký",
    "footer.subscribeText": "Nhận các cập nhật và tin tức bảo mật mới nhất được gửi đến hộp thư của bạn.",
    "footer.emailPlaceholder": "Email của bạn",
    "footer.submitButton": "Đăng ký",
    "footer.copyright": "Đã đăng ký Bản quyền.",
    "footer.privacyPolicy": "Chính sách Bảo mật",
    "footer.termsOfService": "Điều khoản Dịch vụ",
    "footer.contactUs": "Liên hệ Chúng tôi",
  },
  fr: {
    "common.home": "Accueil",
    "common.features": "Fonctionnalités",
    "common.pricing": "Tarifs",
    "common.solutions": "Solutions",
    "common.resources": "Ressources",
    "common.company": "Entreprise",
    "common.login": "Connexion",
    "common.getStarted": "Commencer",
    "common.documentation": "Documentation",
    "common.apiDocs": "Docs API",
    "common.securityAcademy": "Académie de Sécurité",
    "common.blog": "Blog",
    "common.aboutUs": "À propos",
    "common.partners": "Partenaires",
    "common.compliance": "Conformité",
    "common.roadmap": "Feuille de route",
    "common.contact": "Contact",
    "common.enterprise": "Entreprise",
    "common.caseStudies": "Études de cas",
    "common.comparison": "Comparaison",
    "common.technicalSpecs": "Spécifications techniques",
    "common.search": "Rechercher",
    "common.searchPlaceholder": "Rechercher documentation, fonctionnalités, API...",
    "hero.title": "Protégez vos applications web contre les menaces avancées",
    "hero.subtitle":
      "FGuard offre une protection complète contre l'OWASP Top 10, les attaques DDoS et les vulnérabilités zero-day avec notre solution WAF avancée.",
    "hero.tryDemo": "Essayer la démo",
    "hero.documentation": "Documentation",
    "features.title": "Sécurité complète des applications web",
    "features.subtitle":
      "Notre solution WAF offre une protection multicouche pour sécuriser vos applications contre les menaces évolutives.",
    "cta.title": "Sécurisez vos applications d'entreprise",
    "cta.subtitle":
      "Planifiez une évaluation de sécurité personnalisée avec nos experts WAF et recevez une stratégie de protection sur mesure pour votre organisation",
    "cta.emailPlaceholder": "Votre email professionnel",
    "cta.requestDemo": "Demander une démo",
    "cta.disclaimer":
      "Solutions de sécurité de niveau entreprise pour les organisations de toutes tailles. Nos experts en sécurité vous contacteront sous 24 heures.",
    "footer.subscribe": "S'abonner",
    "footer.subscribeText":
      "Recevez les dernières mises à jour de sécurité et actualités dans votre boîte de réception.",
    "footer.emailPlaceholder": "Votre email",
    "footer.submitButton": "S'abonner",
    "footer.copyright": "Tous droits réservés.",
    "footer.privacyPolicy": "Politique de confidentialité",
    "footer.termsOfService": "Conditions d'utilisation",
    "footer.contactUs": "Contactez-nous",
  },
  de: {
    "common.home": "Startseite",
    "common.features": "Funktionen",
    "common.pricing": "Preise",
    "common.solutions": "Lösungen",
    "common.resources": "Ressourcen",
    "common.company": "Unternehmen",
    "common.login": "Anmelden",
    "common.getStarted": "Loslegen",
    "common.documentation": "Dokumentation",
    "common.apiDocs": "API-Dokumentation",
    "common.securityAcademy": "Sicherheitsakademie",
    "common.blog": "Blog",
    "common.aboutUs": "Über uns",
    "common.partners": "Partner",
    "common.compliance": "Compliance",
    "common.roadmap": "Roadmap",
    "common.contact": "Kontakt",
    "common.enterprise": "Unternehmen",
    "common.caseStudies": "Fallstudien",
    "common.comparison": "Vergleich",
    "common.technicalSpecs": "Technische Daten",
    "common.search": "Suchen",
    "common.searchPlaceholder": "Suche nach Dokumentation, Funktionen, API...",
    "hero.title": "Schützen Sie Ihre Webanwendungen vor fortschrittlichen Bedrohungen",
    "hero.subtitle":
      "FGuard bietet umfassenden Schutz gegen OWASP Top 10, DDoS-Angriffe und Zero-Day-Schwachstellen mit unserer fortschrittlichen WAF-Lösung.",
    "hero.tryDemo": "Demo testen",
    "hero.documentation": "Dokumentation",
    "features.title": "Umfassende Webanwendungssicherheit",
    "features.subtitle":
      "Unsere WAF-Lösung bietet mehrschichtigen Schutz, um Ihre Anwendungen vor sich entwickelnden Bedrohungen zu schützen.",
    "cta.title": "Sichern Sie Ihre Unternehmensanwendungen",
    "cta.subtitle":
      "Planen Sie eine personalisierte Sicherheitsbewertung mit unseren WAF-Experten und erhalten Sie eine maßgeschneiderte Schutzstrategie für Ihr Unternehmen",
    "cta.emailPlaceholder": "Ihre Geschäfts-E-Mail",
    "cta.requestDemo": "Demo anfordern",
    "cta.disclaimer":
      "Sicherheitslösungen auf Unternehmensebene für Organisationen aller Größen. Unsere Sicherheitsexperten werden Sie innerhalb von 24 Stunden kontaktieren.",
    "footer.subscribe": "Abonnieren",
    "footer.subscribeText": "Erhalten Sie die neuesten Sicherheitsupdates und Nachrichten in Ihrem Posteingang.",
    "footer.emailPlaceholder": "Ihre E-Mail",
    "footer.submitButton": "Abonnieren",
    "footer.copyright": "Alle Rechte vorbehalten.",
    "footer.privacyPolicy": "Datenschutzrichtlinie",
    "footer.termsOfService": "Nutzungsbedingungen",
    "footer.contactUs": "Kontaktieren Sie uns",
  },
  es: {
    "common.home": "Inicio",
    "common.features": "Características",
    "common.pricing": "Precios",
    "common.solutions": "Soluciones",
    "common.resources": "Recursos",
    "common.company": "Empresa",
    "common.login": "Iniciar sesión",
    "common.getStarted": "Comenzar",
    "common.documentation": "Documentación",
    "common.apiDocs": "Documentación API",
    "common.securityAcademy": "Academia de Seguridad",
    "common.blog": "Blog",
    "common.aboutUs": "Sobre nosotros",
    "common.partners": "Socios",
    "common.compliance": "Cumplimiento",
    "common.roadmap": "Hoja de ruta",
    "common.contact": "Contacto",
    "common.enterprise": "Empresa",
    "common.caseStudies": "Casos de estudio",
    "common.comparison": "Comparación",
    "common.technicalSpecs": "Especificaciones técnicas",
    "common.search": "Buscar",
    "common.searchPlaceholder": "Buscar documentación, características, API...",
    "hero.title": "Proteja sus aplicaciones web de amenazas avanzadas",
    "hero.subtitle":
      "FGuard proporciona protección integral contra OWASP Top 10, ataques DDoS y vulnerabilidades de día cero con nuestra solución WAF avanzada.",
    "hero.tryDemo": "Probar demo",
    "hero.documentation": "Documentación",
    "features.title": "Seguridad integral de aplicaciones web",
    "features.subtitle":
      "Nuestra solución WAF proporciona protección multicapa para asegurar sus aplicaciones contra amenazas en evolución.",
    "cta.title": "Asegure sus aplicaciones empresariales",
    "cta.subtitle":
      "Programe una evaluación de seguridad personalizada con nuestros expertos en WAF y reciba una estrategia de protección personalizada para su organización",
    "cta.emailPlaceholder": "Su correo electrónico empresarial",
    "cta.requestDemo": "Solicitar demo",
    "cta.disclaimer":
      "Soluciones de seguridad de nivel empresarial para organizaciones de todos los tamaños. Nuestros expertos en seguridad se pondrán en contacto con usted en 24 horas.",
    "footer.subscribe": "Suscribirse",
    "footer.subscribeText": "Reciba las últimas actualizaciones de seguridad y noticias en su bandeja de entrada.",
    "footer.emailPlaceholder": "Su correo electrónico",
    "footer.submitButton": "Suscribirse",
    "footer.copyright": "Todos los derechos reservados.",
    "footer.privacyPolicy": "Política de privacidad",
    "footer.termsOfService": "Términos de servicio",
    "footer.contactUs": "Contáctenos",
  },
  ja: {
    "common.home": "ホーム",
    "common.features": "機能",
    "common.pricing": "料金",
    "common.solutions": "ソリューション",
    "common.resources": "リソース",
    "common.company": "会社",
    "common.login": "ログイン",
    "common.getStarted": "始める",
    "common.documentation": "ドキュメント",
    "common.apiDocs": "API ドキュメント",
    "common.securityAcademy": "セキュリティアカデミー",
    "common.blog": "ブログ",
    "common.aboutUs": "会社概要",
    "common.partners": "パートナー",
    "common.compliance": "コンプライアンス",
    "common.roadmap": "ロードマップ",
    "common.contact": "お問い合わせ",
    "common.enterprise": "エンタープライズ",
    "common.caseStudies": "事例",
    "common.comparison": "比較",
    "common.technicalSpecs": "技術仕様",
    "common.search": "検索",
    "common.searchPlaceholder": "ドキュメント、機能、APIなどを検索...",
    "hero.title": "高度な脅威からウェブアプリケーションを保護",
    "hero.subtitle":
      "FGuardは、当社の高度なWAFソリューションにより、OWASP Top 10、DDoS攻撃、ゼロデイ脆弱性に対する包括的な保護を提供します。",
    "hero.tryDemo": "デモを試す",
    "hero.documentation": "ドキュメント",
    "features.title": "包括的なウェブアプリケーションセキュリティ",
    "features.subtitle":
      "当社のWAFソリューションは、進化する脅威からアプリケーションを保護するための多層防御を提供します。",
    "cta.title": "エンタープライズアプリケーションを保護",
    "cta.subtitle":
      "当社のWAFエキスパートによるパーソナライズされたセキュリティ評価をスケジュールし、組織に合わせたカスタマイズされた保護戦略を受け取りましょう",
    "cta.emailPlaceholder": "ビジネスメールアドレス",
    "cta.requestDemo": "デモをリクエスト",
    "cta.disclaimer":
      "あらゆる規模の組織向けのエンタープライズグレードのセキュリティソリューション。当社のセキュリティエキスパートが24時間以内にご連絡いたします。",
    "footer.subscribe": "購読",
    "footer.subscribeText": "最新のセキュリティアップデートとニュースを受信トレイに配信します。",
    "footer.emailPlaceholder": "メールアドレス",
    "footer.submitButton": "購読",
    "footer.copyright": "All rights reserved.",
    "footer.privacyPolicy": "プライバシーポリシー",
    "footer.termsOfService": "利用規約",
    "footer.contactUs": "お問い合わせ",
  },
  zh: {
    "common.home": "首页",
    "common.features": "功能",
    "common.pricing": "价格",
    "common.solutions": "解决方案",
    "common.resources": "资源",
    "common.company": "公司",
    "common.login": "登录",
    "common.getStarted": "开始使用",
    "common.documentation": "文档",
    "common.apiDocs": "API 文档",
    "common.securityAcademy": "安全学院",
    "common.blog": "博客",
    "common.aboutUs": "关于我们",
    "common.partners": "合作伙伴",
    "common.compliance": "合规",
    "common.roadmap": "路线图",
    "common.contact": "联系我们",
    "common.enterprise": "企业",
    "common.caseStudies": "案例研究",
    "common.comparison": "对比",
    "common.technicalSpecs": "技术规格",
    "common.search": "搜索",
    "common.searchPlaceholder": "搜索文档、功能、API...",
    "hero.title": "保护您的 Web 应用程序免受高级威胁",
    "hero.subtitle": "FGuard 通过我们的高级 WAF 解决方案提供全面保护，抵御 OWASP Top 10、DDoS 攻击和零日漏洞。",
    "hero.tryDemo": "试用演示",
    "hero.documentation": "文档",
    "features.title": "全面的 Web 应用程序安全",
    "features.subtitle": "我们的 WAF 解决方案提供多层保护，以保护您的应用程序免受不断演变的威胁。",
    "cta.title": "保护您的企业应用程序",
    "cta.subtitle": "与我们的 WAF 专家安排个性化安全评估，并获得为您的组织量身定制的保护策略",
    "cta.emailPlaceholder": "您的企业电子邮件",
    "cta.requestDemo": "请求演示",
    "cta.disclaimer": "适用于各种规模组织的企业级安全解决方案。我们的安全专家将在 24 小时内与您联系。",
    "footer.subscribe": "订阅",
    "footer.subscribeText": "获取最新的安全更新和新闻，直接发送到您的收件箱。",
    "footer.emailPlaceholder": "您的电子邮件",
    "footer.submitButton": "订阅",
    "footer.copyright": "保留所有权利。",
    "footer.privacyPolicy": "隐私政策",
    "footer.termsOfService": "服务条款",
    "footer.contactUs": "联系我们",
  },
}
