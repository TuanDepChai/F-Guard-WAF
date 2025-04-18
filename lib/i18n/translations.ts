export type Language = "vi" | "en" | "ja" | "zh"

export type TranslationKey =
  | "nav.features"
  | "nav.howItWorks"
  | "nav.pricing"
  | "nav.enterprise"
  | "nav.faq"
  | "nav.login"
  | "nav.tryForFree"
  | "hero.badge"
  | "hero.title.line1"
  | "hero.title.line2"
  | "hero.description"
  | "hero.startNow"
  | "hero.learnMore"
  | "hero.ddosProtection"
  | "hero.sqlInjection"
  | "hero.xssProtection"
  | "hero.apiProtection"
  | "stats.blockRate"
  | "stats.trafficProtected"
  | "stats.uptime"
  | "stats.customers"
  | "features.badge"
  | "features.title"
  | "features.description"
  | "features.ddos.title"
  | "features.ddos.description"
  | "features.sql.title"
  | "features.sql.description"
  | "features.xss.title"
  | "features.xss.description"
  | "features.analytics.title"
  | "features.analytics.description"
  | "features.performance.title"
  | "features.performance.description"
  | "features.monitoring.title"
  | "features.monitoring.description"
  | "features.api.title"
  | "features.api.description"
  | "features.updates.title"
  | "features.updates.description"
  | "features.compliance.title"
  | "features.compliance.description"
  | "howItWorks.badge"
  | "howItWorks.title"
  | "howItWorks.description"
  | "howItWorks.step1.title"
  | "howItWorks.step1.description"
  | "howItWorks.step2.title"
  | "howItWorks.step2.description"
  | "howItWorks.step3.title"
  | "howItWorks.step3.description"
  | "howItWorks.step4.title"
  | "howItWorks.step4.description"
  | "dashboard.badge"
  | "dashboard.title"
  | "dashboard.description"
  | "dashboard.tab.overview"
  | "dashboard.tab.threats"
  | "dashboard.tab.traffic"
  | "dashboard.tab.settings"
  | "dashboard.tab.reports"
  | "pricing.badge"
  | "pricing.title"
  | "pricing.description"
  | "pricing.basic.name"
  | "pricing.basic.description"
  | "pricing.basic.price"
  | "pricing.pro.name"
  | "pricing.pro.description"
  | "pricing.pro.price"
  | "pricing.pro.popular"
  | "pricing.enterprise.name"
  | "pricing.enterprise.description"
  | "pricing.enterprise.price"
  | "pricing.signUp"
  | "testimonials.badge"
  | "testimonials.title"
  | "testimonials.description"
  | "testimonials.trustedBy"
  | "enterprise.badge"
  | "enterprise.title"
  | "enterprise.description"
  | "enterprise.experts.title"
  | "enterprise.experts.description"
  | "enterprise.global.title"
  | "enterprise.global.description"
  | "enterprise.compliance.title"
  | "enterprise.compliance.description"
  | "enterprise.contact"
  | "enterprise.digitalAssets.title"
  | "enterprise.digitalAssets.description"
  | "enterprise.riskReduction.title"
  | "enterprise.riskReduction.description"
  | "enterprise.costOptimization.title"
  | "enterprise.costOptimization.description"
  | "enterprise.support.title"
  | "enterprise.support.description"
  | "faq.badge"
  | "faq.title"
  | "faq.description"
  | "cta.title"
  | "cta.description"
  | "cta.start"
  | "cta.terms"
  | "cta.privacy"
  | "cta.agreement"
  | "footer.description"
  | "footer.services"
  | "footer.company"
  | "footer.contact"
  | "footer.contactNow"
  | "footer.copyright"
  | "cookieConsent.title"
  | "cookieConsent.description"
  | "cookieConsent.accept"
  | "cookieConsent.decline"
  | "cookieConsent.preferences"

export type Translations = Record<TranslationKey, string>

export const translations: Record<Language, Translations> = {
  vi: {
    "nav.features": "Tính năng",
    "nav.howItWorks": "Cách thức hoạt động",
    "nav.pricing": "Bảng giá",
    "nav.enterprise": "Doanh nghiệp",
    "nav.faq": "FAQ",
    "nav.login": "Đăng nhập",
    "nav.tryForFree": "Dùng thử miễn phí",

    "hero.badge": "Bảo vệ website của bạn 24/7",
    "hero.title.line1": "Bảo vệ website",
    "hero.title.line2": "khỏi mọi mối đe dọa",
    "hero.description":
      "FGuard cung cấp giải pháp Web Application Firewall (WAF) toàn diện, bảo vệ website của bạn khỏi các cuộc tấn công mạng và các mối đe dọa trực tuyến.",
    "hero.startNow": "Bắt đầu ngay",
    "hero.learnMore": "Xem demo",
    "hero.ddosProtection": "Bảo vệ DDoS",
    "hero.sqlInjection": "Chống SQL Injection",
    "hero.xssProtection": "Chống XSS",
    "hero.apiProtection": "Bảo vệ API",

    "stats.blockRate": "Tỷ lệ chặn tấn công",
    "stats.trafficProtected": "Lưu lượng được bảo vệ",
    "stats.uptime": "Thời gian hoạt động",
    "stats.customers": "Khách hàng tin dùng",

    "features.badge": "Tính năng bảo mật hàng đầu",
    "features.title": "Bảo vệ toàn diện với FGuard WAF",
    "features.description":
      "FGuard cung cấp giải pháp Web Application Firewall (WAF) toàn diện để bảo vệ website của bạn khỏi các mối đe dọa trực tuyến.",
    "features.ddos.title": "Bảo vệ DDoS",
    "features.ddos.description":
      "Ngăn chặn các cuộc tấn công từ chối dịch vụ phân tán (DDoS) bằng cách lọc lưu lượng độc hại và phân phối lưu lượng truy cập đến máy chủ của bạn.",
    "features.sql.title": "Chống SQL Injection",
    "features.sql.description":
      "Bảo vệ cơ sở dữ liệu của bạn khỏi các cuộc tấn công SQL Injection nhằm đánh cắp hoặc phá hoại dữ liệu với hệ thống phát hiện và ngăn chặn thông minh.",
    "features.xss.title": "Chống XSS",
    "features.xss.description":
      "Ngăn chặn các cuộc tấn công Cross-Site Scripting (XSS) nhằm đánh cắp thông tin người dùng và bảo vệ khách hàng của bạn khỏi mã độc.",
    "features.analytics.title": "Phân tích thời gian thực",
    "features.analytics.description":
      "Theo dõi và phân tích lưu lượng truy cập website của bạn theo thời gian thực để phát hiện các mối đe dọa và hành vi bất thường.",
    "features.performance.title": "Tối ưu hiệu suất",
    "features.performance.description":
      "Tăng tốc website của bạn với CDN tích hợp và các tính năng tối ưu hóa hiệu suất, giúp trang web của bạn luôn nhanh chóng và ổn định.",
    "features.monitoring.title": "Giám sát 24/7",
    "features.monitoring.description":
      "Đội ngũ chuyên gia bảo mật giám sát hệ thống 24/7 để đảm bảo website của bạn luôn được bảo vệ khỏi các mối đe dọa mới nhất.",
    "features.api.title": "Bảo vệ API",
    "features.api.description":
      "Bảo vệ các API của bạn khỏi các cuộc tấn công và lạm dụng với các quy tắc bảo mật tùy chỉnh và hệ thống phát hiện bất thường.",
    "features.updates.title": "Cập nhật liên tục",
    "features.updates.description":
      "Hệ thống tự động cập nhật các quy tắc bảo mật để đối phó với các mối đe dọa mới nhất, đảm bảo bạn luôn được bảo vệ tối đa.",
    "features.compliance.title": "Tuân thủ quy định",
    "features.compliance.description":
      "Đáp ứng các tiêu chuẩn bảo mật và tuân thủ quy định như GDPR, PCI DSS, và ISO 27001.",

    "howItWorks.badge": "Cách thức hoạt động",
    "howItWorks.title": "FGuard WAF bảo vệ website của bạn như thế nào?",
    "howItWorks.description": "Hiểu rõ quy trình bảo vệ website của bạn với Web Application Firewall của FGuard",
    "howItWorks.step1.title": "Lọc lưu lượng",
    "howItWorks.step1.description":
      "Tất cả lưu lượng truy cập đến website của bạn đều được chuyển qua hệ thống WAF của FGuard để kiểm tra và lọc.",
    "howItWorks.step2.title": "Phát hiện mối đe dọa",
    "howItWorks.step2.description":
      "Hệ thống phân tích lưu lượng truy cập theo thời gian thực để phát hiện các mẫu tấn công và hành vi bất thường.",
    "howItWorks.step3.title": "Chặn tấn công",
    "howItWorks.step3.description":
      "Các cuộc tấn công và lưu lượng độc hại được chặn tự động, trong khi người dùng hợp pháp vẫn có thể truy cập bình thường.",
    "howItWorks.step4.title": "Bảo vệ liên tục",
    "howItWorks.step4.description":
      "Hệ thống liên tục cập nhật các quy tắc bảo mật để đối phó với các mối đe dọa mới nhất và bảo vệ website của bạn 24/7.",

    "dashboard.badge": "Dashboard trực quan",
    "dashboard.title": "Quản lý bảo mật dễ dàng",
    "dashboard.description": "Dashboard trực quan giúp bạn theo dõi và quản lý bảo mật website một cách dễ dàng",
    "dashboard.tab.overview": "Tổng quan",
    "dashboard.tab.threats": "Mối đe dọa",
    "dashboard.tab.traffic": "Lưu lượng",
    "dashboard.tab.settings": "Cài đặt",
    "dashboard.tab.reports": "Báo cáo",

    "pricing.badge": "Bảng giá linh hoạt",
    "pricing.title": "Gói dịch vụ phù hợp với mọi nhu cầu",
    "pricing.description": "Chọn gói dịch vụ phù hợp với nhu cầu bảo mật website của bạn",
    "pricing.basic.name": "Cơ bản",
    "pricing.basic.description": "Dành cho website cá nhân và doanh nghiệp nhỏ",
    "pricing.basic.price": "199k",
    "pricing.pro.name": "Nâng cao",
    "pricing.pro.description": "Dành cho doanh nghiệp vừa và nhỏ",
    "pricing.pro.price": "499k",
    "pricing.pro.popular": "Phổ biến nhất",
    "pricing.enterprise.name": "Doanh nghiệp",
    "pricing.enterprise.description": "Dành cho doanh nghiệp lớn",
    "pricing.enterprise.price": "999k",
    "pricing.signUp": "Đăng ký ngay",

    "testimonials.badge": "Khách hàng tin dùng",
    "testimonials.title": "Khách hàng nói gì về FGuard?",
    "testimonials.description": "Hàng nghìn khách hàng đã tin tưởng FGuard để bảo vệ website của họ",
    "testimonials.trustedBy": "Được tin dùng bởi hơn 5,000+ khách hàng",

    "enterprise.badge": "Giải pháp doanh nghiệp",
    "enterprise.title": "Giải pháp bảo mật tùy chỉnh cho doanh nghiệp",
    "enterprise.description":
      "FGuard cung cấp giải pháp bảo mật tùy chỉnh đáp ứng nhu cầu cụ thể của doanh nghiệp bạn, bất kể quy mô hay ngành nghề.",
    "enterprise.experts.title": "Đội ngũ chuyên gia",
    "enterprise.experts.description":
      "Đội ngũ chuyên gia bảo mật với nhiều năm kinh nghiệm sẽ tư vấn và triển khai giải pháp phù hợp nhất.",
    "enterprise.global.title": "Bảo vệ toàn cầu",
    "enterprise.global.description":
      "Hệ thống máy chủ toàn cầu giúp bảo vệ website của bạn khỏi các cuộc tấn công từ mọi nơi trên thế giới.",
    "enterprise.compliance.title": "Tuân thủ quy định",
    "enterprise.compliance.description":
      "Đảm bảo website của bạn tuân thủ các quy định bảo mật và quyền riêng tư như GDPR, PCI DSS, và ISO 27001.",
    "enterprise.contact": "Liên hệ tư vấn",
    "enterprise.digitalAssets.title": "Bảo vệ tài sản số",
    "enterprise.digitalAssets.description": "Bảo vệ dữ liệu và tài sản số của doanh nghiệp khỏi các mối đe dọa mạng.",
    "enterprise.riskReduction.title": "Giảm thiểu rủi ro",
    "enterprise.riskReduction.description": "Giảm thiểu rủi ro bảo mật và ngăn chặn các cuộc tấn công trước khi xảy ra.",
    "enterprise.costOptimization.title": "Tối ưu chi phí",
    "enterprise.costOptimization.description": "Giải pháp bảo mật hiệu quả với chi phí hợp lý cho doanh nghiệp.",
    "enterprise.support.title": "Hỗ trợ 24/7",
    "enterprise.support.description": "Đội ngũ hỗ trợ kỹ thuật 24/7 sẵn sàng giải quyết mọi vấn đề.",

    "faq.badge": "Câu hỏi thường gặp",
    "faq.title": "Giải đáp thắc mắc của bạn",
    "faq.description": "Tìm hiểu thêm về FGuard WAF và cách chúng tôi có thể bảo vệ website của bạn",

    "cta.title": "Bảo vệ website của bạn ngay hôm nay",
    "cta.description": "Đăng ký dùng thử miễn phí 14 ngày và trải nghiệm sự khác biệt với FGuard WAF",
    "cta.start": "Bắt đầu",
    "cta.terms": "Điều khoản dịch vụ",
    "cta.privacy": "Chính sách bảo mật",
    "cta.agreement": "Bằng cách đăng ký, bạn đồng ý với",

    "footer.description":
      "Giải pháp Web Application Firewall hàng đầu bảo vệ website của bạn khỏi các mối đe dọa trực tuyến.",
    "footer.services": "Dịch vụ",
    "footer.company": "Công ty",
    "footer.contact": "Liên hệ",
    "footer.contactNow": "Liên hệ ngay",
    "footer.copyright": "© 2025 FGuard. Tất cả các quyền được bảo lưu.",

    "cookieConsent.title": "Chúng tôi sử dụng cookie",
    "cookieConsent.description":
      "Website này sử dụng cookie để cải thiện trải nghiệm của bạn. Bằng cách tiếp tục sử dụng trang web này, bạn đồng ý với việc sử dụng cookie của chúng tôi.",
    "cookieConsent.accept": "Chấp nhận tất cả",
    "cookieConsent.decline": "Chỉ cần thiết",
    "cookieConsent.preferences": "Tùy chỉnh",
  },
  en: {
    "nav.features": "Features",
    "nav.howItWorks": "How It Works",
    "nav.pricing": "Pricing",
    "nav.enterprise": "Enterprise",
    "nav.faq": "FAQ",
    "nav.login": "Login",
    "nav.tryForFree": "Try for Free",

    "hero.badge": "Protect your website 24/7",
    "hero.title.line1": "Protect your website",
    "hero.title.line2": "from all threats",
    "hero.description":
      "FGuard provides a comprehensive Web Application Firewall (WAF) solution to protect your website from cyber attacks and online threats.",
    "hero.startNow": "Start Now",
    "hero.learnMore": "View Demo",
    "hero.ddosProtection": "DDoS Protection",
    "hero.sqlInjection": "SQL Injection Protection",
    "hero.xssProtection": "XSS Protection",
    "hero.apiProtection": "API Protection",

    "stats.blockRate": "Attack Block Rate",
    "stats.trafficProtected": "Traffic Protected",
    "stats.uptime": "Uptime",
    "stats.customers": "Trusted Customers",

    "features.badge": "Top Security Features",
    "features.title": "Comprehensive Protection with FGuard WAF",
    "features.description":
      "FGuard provides a comprehensive Web Application Firewall (WAF) solution to protect your website from online threats.",
    "features.ddos.title": "DDoS Protection",
    "features.ddos.description":
      "Prevent distributed denial-of-service (DDoS) attacks by filtering malicious traffic and distributing traffic to your servers.",
    "features.sql.title": "SQL Injection Protection",
    "features.sql.description":
      "Protect your database from SQL Injection attacks aimed at stealing or corrupting data with intelligent detection and prevention systems.",
    "features.xss.title": "XSS Protection",
    "features.xss.description":
      "Prevent Cross-Site Scripting (XSS) attacks aimed at stealing user information and protect your customers from malicious code.",
    "features.analytics.title": "Real-time Analytics",
    "features.analytics.description":
      "Monitor and analyze your website traffic in real-time to detect threats and abnormal behavior.",
    "features.performance.title": "Performance Optimization",
    "features.performance.description":
      "Speed up your website with integrated CDN and performance optimization features, keeping your site fast and stable.",
    "features.monitoring.title": "24/7 Monitoring",
    "features.monitoring.description":
      "Our security expert team monitors the system 24/7 to ensure your website is always protected from the latest threats.",
    "features.api.title": "API Protection",
    "features.api.description":
      "Protect your APIs from attacks and abuse with custom security rules and anomaly detection systems.",
    "features.updates.title": "Continuous Updates",
    "features.updates.description":
      "The system automatically updates security rules to combat the latest threats, ensuring you are always maximally protected.",
    "features.compliance.title": "Regulatory Compliance",
    "features.compliance.description": "Meet security standards and comply with regulations like GDPR, PCI DSS, and ISO 27001.",

    "howItWorks.badge": "How It Works",
    "howItWorks.title": "How does FGuard WAF protect your website?",
    "howItWorks.description": "Understand the process of protecting your website with FGuard's Web Application Firewall",
    "howItWorks.step1.title": "Traffic Filtering",
    "howItWorks.step1.description":
      "All traffic to your website is routed through FGuard's WAF system for inspection and filtering.",
    "howItWorks.step2.title": "Threat Detection",
    "howItWorks.step2.description":
      "The system analyzes traffic in real-time to detect attack patterns and abnormal behavior.",
    "howItWorks.step3.title": "Attack Blocking",
    "howItWorks.step3.description":
      "Attacks and malicious traffic are automatically blocked, while legitimate users can still access normally.",
    "howItWorks.step4.title": "Continuous Protection",
    "howItWorks.step4.description":
      "The system continuously updates security rules to combat the latest threats and protect your website 24/7.",

    "dashboard.badge": "Intuitive Dashboard",
    "dashboard.title": "Easy Security Management",
    "dashboard.description": "An intuitive dashboard helps you monitor and manage website security easily",
    "dashboard.tab.overview": "Overview",
    "dashboard.tab.threats": "Threats",
    "dashboard.tab.traffic": "Traffic",
    "dashboard.tab.settings": "Settings",
    "dashboard.tab.reports": "Reports",

    "pricing.badge": "Flexible Pricing",
    "pricing.title": "Plans for Every Need",
    "pricing.description": "Choose a service plan that suits your website security needs",
    "pricing.basic.name": "Basic",
    "pricing.basic.description": "For personal websites and small businesses",
    "pricing.basic.price": "$199",
    "pricing.pro.name": "Professional",
    "pricing.pro.description": "For small and medium businesses",
    "pricing.pro.price": "$499",
    "pricing.pro.popular": "Most Popular",
    "pricing.enterprise.name": "Enterprise",
    "pricing.enterprise.description": "For large businesses",
    "pricing.enterprise.price": "$999",
    "pricing.signUp": "Sign Up Now",

    "testimonials.badge": "Trusted Customers",
    "testimonials.title": "What do customers say about FGuard?",
    "testimonials.description": "Thousands of customers have trusted FGuard to protect their websites",
    "testimonials.trustedBy": "Trusted by over 5,000+ customers",

    "enterprise.badge": "Enterprise Solutions",
    "enterprise.title": "Custom Security Solutions for Enterprises",
    "enterprise.description":
      "FGuard provides customized security solutions that meet the specific needs of your business, regardless of size or industry.",
    "enterprise.experts.title": "Expert Team",
    "enterprise.experts.description":
      "Our security expert team with years of experience will advise and implement the most suitable solution.",
    "enterprise.global.title": "Global Protection",
    "enterprise.global.description":
      "Global server system helps protect your website from attacks from anywhere in the world.",
    "enterprise.compliance.title": "Regulatory Compliance",
    "enterprise.compliance.description":
      "Ensure your website complies with security regulations and privacy laws such as GDPR, PCI DSS, and ISO 27001.",
    "enterprise.contact": "Contact for Consultation",
    "enterprise.digitalAssets.title": "Digital Asset Protection",
    "enterprise.digitalAssets.description": "Protect your business's data and digital assets from cyber threats.",
    "enterprise.riskReduction.title": "Risk Reduction",
    "enterprise.riskReduction.description": "Minimize security risks and prevent attacks before they happen.",
    "enterprise.costOptimization.title": "Cost Optimization",
    "enterprise.costOptimization.description": "Effective security solutions at reasonable costs for businesses.",
    "enterprise.support.title": "24/7 Support",
    "enterprise.support.description": "Technical support team available 24/7 to resolve any issues.",

    "faq.badge": "Frequently Asked Questions",
    "faq.title": "Answering Your Questions",
    "faq.description": "Learn more about FGuard WAF and how we can protect your website",

    "cta.title": "Protect Your Website Today",
    "cta.description": "Sign up for a 14-day free trial and experience the difference with FGuard WAF",
    "cta.start": "Get Started",
    "cta.terms": "Terms of Service",
    "cta.privacy": "Privacy Policy",
    "cta.agreement": "By signing up, you agree to our",

    "footer.description":
      "Leading Web Application Firewall solution protecting your website from online threats.",
    "footer.services": "Services",
    "footer.company": "Company",
    "footer.contact": "Contact",
    "footer.contactNow": "Contact Now",
    "footer.copyright": "© 2025 FGuard. All rights reserved.",

    "cookieConsent.title": "We use cookies",
    "cookieConsent.description":
      "This website uses cookies to improve your experience. By continuing to use this site, you agree to our use of cookies.",
    "cookieConsent.accept": "Accept All",
    "cookieConsent.decline": "Essential Only",
    "cookieConsent.preferences": "Preferences",
  },
  ja: {
    "nav.features": "機能",
    "nav.howItWorks": "仕組み",
    "nav.pricing": "料金",
    "nav.enterprise": "エンタープライズ",
    "nav.faq": "よくある質問",
    "nav.login": "ログイン",
    "nav.tryForFree": "無料トライアル",

    "hero.badge": "ウェブサイトを24時間365日保護",
    "hero.title.line1": "ウェブサイトを",
    "hero.title.line2": "あらゆる脅威から保護",
    "hero.description":
      "FGuardは、サイバー攻撃やオンラインの脅威からウェブサイトを保護する包括的なWeb Application Firewall（WAF）ソリューションを提供します。",
    "hero.startNow": "今すぐ始める",
    "hero.learnMore": "デモを見る",
    "hero.ddosProtection": "DDoS保護",
    "hero.sqlInjection": "SQLインジェクション対策",
    "hero.xssProtection": "XSS対策",
    "hero.apiProtection": "API保護",

    "stats.blockRate": "攻撃ブロック率",
    "stats.trafficProtected": "保護されたトラフィック",
    "stats.uptime": "稼働時間",
    "stats.customers": "信頼されるお客様",

    "features.badge": "トップセキュリティ機能",
    "features.title": "FGuard WAFによる包括的な保護",
    "features.description":
      "FGuardは、オンラインの脅威からウェブサイトを保護する包括的なWeb Application Firewall（WAF）ソリューションを提供します。",
    "features.ddos.title": "DDoS保護",
    "features.ddos.description":
      "悪意のあるトラフィックをフィルタリングし、サーバーへのトラフィックを分散させることで、分散型サービス拒否（DDoS）攻撃を防止します。",
    "features.sql.title": "SQLインジェクション対策",
    "features.sql.description":
      "インテリジェントな検出および防止システムにより、データの盗難や破壊を目的としたSQLインジェクション攻撃からデータベースを保護します。",
    "features.xss.title": "XSS対策",
    "features.xss.description":
      "ユーザー情報の盗難を目的としたクロスサイトスクリプティング（XSS）攻撃を防止し、お客様を悪意のあるコードから保護します。",
    "features.analytics.title": "リアルタイム分析",
    "features.analytics.description":
      "ウェブサイトのトラフィックをリアルタイムで監視および分析し、脅威や異常な行動を検出します。",
    "features.performance.title": "パフォーマンス最適化",
    "features.performance.description":
      "統合されたCDNとパフォーマンス最適化機能により、ウェブサイトの速度を向上させ、サイトを高速かつ安定した状態に保ちます。",
    "features.monitoring.title": "24時間監視",
    "features.monitoring.description":
      "セキュリティ専門家チームがシステムを24時間監視し、ウェブサイトが常に最新の脅威から保護されていることを確認します。",
    "features.api.title": "API保護",
    "features.api.description":
      "カスタムセキュリティルールと異常検出システムにより、APIを攻撃や悪用から保護します。",
    "features.updates.title": "継続的な更新",
    "features.updates.description":
      "システムは自動的にセキュリティルールを更新して最新の脅威に対抗し、常に最大限の保護を確保します。",
    "features.compliance.title": "規制遵守",
    "features.compliance.description": "GDPR、PCI DSS、ISO 27001などのセキュリティ基準と規制を満たします。",

    "howItWorks.badge": "仕組み",
    "howItWorks.title": "FGuard WAFはどのようにウェブサイトを保護するのか？",
    "howItWorks.description": "FGuardのWeb Application Firewallによるウェブサイト保護プロセスを理解する",
    "howItWorks.step1.title": "トラフィックフィルタリング",
    "howItWorks.step1.description":
      "ウェブサイトへのすべてのトラフィックは、検査とフィルタリングのためにFGuardのWAFシステムを通過します。",
    "howItWorks.step2.title": "脅威検出",
    "howItWorks.step2.description":
    "stats.trafficProtected": "保護されたトラフィック",
    "stats.uptime": "稼働時間",
    "stats.customers": "信頼されるお客様",

    "features.badge": "トップセキュリティ機能",
    "features.title": "FGuard WAFによる包括的な保護",
    "features.description":
      "FGuardは、オンラインの脅威からウェブサイトを保護する包括的なWeb Application Firewall（WAF）ソリューションを提供します。",
    "features.ddos.title": "DDoS保護",
    "features.ddos.description":
      "悪意のあるトラフィックをフィルタリングし、サーバーへのトラフィックを分散させることで、分散型サービス拒否（DDoS）攻撃を防止します。",
    "features.sql.title": "SQLインジェクション対策",
    "features.sql.description":
      "インテリジェントな検出および防止システムにより、データの盗難や破壊を目的としたSQLインジェクション攻撃からデータベースを保護します。",
    "features.xss.title": "XSS対策",
    "features.xss.description":
      "ユーザー情報の盗難を目的としたクロスサイトスクリプティング（XSS）攻撃を防止し、お客様を悪意のあるコードから保護します。",
    "features.analytics.title": "リアルタイム分析",
    "features.analytics.description":
      "ウェブサイトのトラフィックをリアルタイムで監視および分析し、脅威や異常な行動を検出します。",
    "features.performance.title": "パフォーマンス最適化",
    "features.performance.description":
      "統合されたCDNとパフォーマンス最適化機能により、ウェブサイトの速度を向上させ、サイトを高速かつ安定した状態に保ちます。",
    "features.monitoring.title": "24時間監視",
    "features.monitoring.description":
      "セキュリティ専門家チームがシステムを24時間監視し、ウェブサイトが常に最新の脅威から保護されていることを確認します。",
    "features.api.title": "API保護",
    "features.api.description":
      "カスタムセキュリティルールと異常検出システムにより、APIを攻撃や悪用から保護します。",
    "features.updates.title": "継続的な更新",
    "features.updates.description":
      "システムは自動的にセキュリティルールを更新して最新の脅威に対抗し、常に最大限の保護を確保します。",
    "features.compliance.title": "規制遵守",
    "features.compliance.description": "GDPR、PCI DSS、ISO 27001などのセキュリティ基準と規制を満たします。",

    "howItWorks.badge": "仕組み",
    "howItWorks.title": "FGuard WAFはどのようにウェブサイトを保護するのか？",
    "howItWorks.description": "FGuardのWeb Application Firewallによるウェブサイト保護プロセスを理解する",
    "howItWorks.step1.title": "トラフィックフィルタリング",
    "howItWorks.step1.description":
      "ウェブサイトへのすべてのトラフィックは、検査とフィルタリングのためにFGuardのWAFシステムを通過します。",
    "howItWorks.step2.title": "脅威検出",
    "howItWorks.step2.description":
      "システムはリアルタイムでトラフィックを分析し、攻撃パターンや異常な行動を検出します。",
    "howItWorks.step3.title": "攻撃ブロック",
    "howItWorks.step3.description":
      "攻撃や悪意のあるトラフィックは自動的にブロックされ、正当なユーザーは通常どおりアクセスできます。",
    "howItWorks.step4.title": "継続的な保護",
    "howItWorks.step4.description":
      "システムは継続的にセキュリティルールを更新して最新の脅威に対抗し、ウェブサイトを24時間365日保護します。",

    "dashboard.badge": "直感的なダッシュボード",
    "dashboard.title": "簡単なセキュリティ管理",
    "dashboard.description": "直感的なダッシュボードで、ウェブサイトのセキュリティを簡単に監視および管理できます",
    "dashboard.tab.overview": "概要",
    "dashboard.tab.threats": "脅威",
    "dashboard.tab.traffic": "トラフィック",
    "dashboard.tab.settings": "設定",
    "dashboard.tab.reports": "レポート",

    "pricing.badge": "柔軟な料金",
    "pricing.title": "あらゆるニーズに対応するプラン",
    "pricing.description": "ウェブサイトのセキュリティニーズに合ったサービスプランを選択してください",
    "pricing.basic.name": "ベーシック",
    "pricing.basic.description": "個人ウェブサイトと小規模ビジネス向け",
    "pricing.basic.price": "¥19,900",
    "pricing.pro.name": "プロフェッショナル",
    "pricing.pro.description": "中小企業向け",
    "pricing.pro.price": "¥49,900",
    "pricing.pro.popular": "最も人気",
    "pricing.enterprise.name": "エンタープライズ",
    "pricing.enterprise.description": "大企業向け",
    "pricing.enterprise.price": "¥99,900",
    "pricing.signUp": "今すぐ登録",

    "testimonials.badge": \"信頼されるお客様",
    "testimonials.title": "お客様はFGuardについて何と言っていますか？",
    "testimonials.description": "何千ものお客様がウェブサイトの保護にFGuardを信頼しています",
    "testimonials.trustedBy": "5,000社以上のお客様に信頼されています",

    "enterprise.badge": "エンタープライズソリューション",
    "enterprise.title": "企業向けカスタムセキュリティソリューション",
    "enterprise.description":
      "FGuardは、規模や業界に関係なく、ビジネスの特定のニーズに合わせたカスタマイズされたセキュリティソリューションを提供します。",
    "enterprise.experts.title": "専門家チーム",
    "enterprise.experts.description":
      "長年の経験を持つセキュリティ専門家チームが、最適なソリューションを提案し実装します。",
    "enterprise.global.title": "グローバル保護",
    "enterprise.global.description":
      "グローバルサーバーシステムにより、世界中のどこからの攻撃からもウェブサイトを保護します。",
    "enterprise.compliance.title": "規制遵守",
    "enterprise.compliance.description":
      "ウェブサイトがGDPR、PCI DSS、ISO 27001などのセキュリティ規制とプライバシー法を遵守していることを確認します。",
    "enterprise.contact": "相談のお問い合わせ",
    "enterprise.digitalAssets.title": "デジタル資産保護",
    "enterprise.digitalAssets.description": "ビジネスのデータとデジタル資産をサイバー脅威から保護します。",
    "enterprise.riskReduction.title": "リスク軽減",
    "enterprise.riskReduction.description": "セキュリティリスクを最小限に抑え、攻撃が発生する前に防止します。",
    "enterprise.costOptimization.title": "コスト最適化",
    "enterprise.costOptimization.description": "ビジネスに合理的なコストで効果的なセキュリティソリューションを提供します。",
    "enterprise.support.title": "24時間サポート",
    "enterprise.support.description": "技術サポートチームが24時間体制で問題解決に対応します。",

    "faq.badge": "よくある質問",
    "faq.title": "質問にお答えします",
    "faq.description": "FGuard WAFとウェブサイトの保護方法についてさらに詳しく知る",

    "cta.title": "今日からウェブサイトを保護",
    "cta.description": "14日間の無料トライアルに登録して、FGuard WAFの違いを体験してください",
    "cta.start": "始める",
    "cta.terms": "利用規約",
    "cta.privacy": "プライバシーポリシー",
    "cta.agreement": "登録することで、当社の",

    "footer.description":
      "オンラインの脅威からウェブサイトを保護する最先端のWeb Application Firewallソリューション。",
    "footer.services": "サービス",
    "footer.company": "会社情報",
    "footer.contact": "お問い合わせ",
    "footer.contactNow": "今すぐお問い合わせ",
    "footer.copyright": "© 2025 FGuard. All rights reserved.",

    "cookieConsent.title": "Cookieを使用しています",
    "cookieConsent.description":
      "このウェブサイトでは、エクスペリエンスを向上させるためにCookieを使用しています。このサイトを引き続き使用することにより、当社のCookieの使用に同意したことになります。",
    "cookieConsent.accept": "すべて受け入れる",
    "cookieConsent.decline": "必須のみ",
    "cookieConsent.preferences": "設定",
  },
  zh: {
    "nav.features": "功能",
    "nav.howItWorks": "工作原理",
    "nav.pricing": "价格",
    "nav.enterprise": "企业解决方案",
    "nav.faq": "常见问题",
    "nav.login": "登录",
    "nav.tryForFree": "免费试用",

    "hero.badge": "全天候保护您的网站",
    "hero.title.line1": "保护您的网站",
    "hero.title.line2": "免受所有威胁",
    "hero.description":
      "FGuard提供全面的Web应用防火墙(WAF)解决方案，保护您的网站免受网络攻击和在线威胁。",
    "hero.startNow": "立即开始",
    "hero.learnMore": "查看演示",
    "hero.ddosProtection": "DDoS防护",
    "hero.sqlInjection": "SQL注入防护",
    "hero.xssProtection": "XSS防护",
    "hero.apiProtection": "API保护",

    "stats.blockRate": "攻击拦截率",
    "stats.trafficProtected": "受保护流量",
    "stats.uptime": "运行时间",
    "stats.customers": "信任客户",

    "features.badge": "顶级安全功能",
    "features.title": "FGuard WAF全面保护",
    "features.description":
      "FGuard提供全面的Web应用防火墙(WAF)解决方案，保护您的网站免受在线威胁。",
    "features.ddos.title": "DDoS防护",
    "features.ddos.description":
      "通过过滤恶意流量并分配流量到您的服务器，防止分布式拒绝服务(DDoS)攻击。",
    "features.sql.title": "SQL注入防护",
    "features.sql.description":
      "使用智能检测和预防系统，保护您的数据库免受旨在窃取或破坏数据的SQL注入攻击。",
    "features.xss.title": "XSS防护",
    "features.xss.description":
      "防止旨在窃取用户信息的跨站脚本(XSS)攻击，保护您的客户免受恶意代码的侵害。",
    "features.analytics.title": "实时分析",
    "features.analytics.description":
      "实时监控和分析您的网站流量，以检测威胁和异常行为。",
    "features.performance.title": "性能优化",
    "features.performance.description":
      "通过集成的CDN和性能优化功能加速您的网站，保持您的网站快速稳定。",
    "features.monitoring.title": "24/7监控",
    "features.monitoring.description":
      "我们的安全专家团队全天候监控系统，确保您的网站始终受到最新威胁的保护。",
    "features.api.title": "API保护",
    "features.api.description":
      "使用自定义安全规则和异常检测系统，保护您的API免受攻击和滥用。",
    "features.updates.title": "持续更新",
    "features.updates.description":
      "系统自动更新安全规则以对抗最新威胁，确保您始终得到最大程度的保护。",
    "features.compliance.title": "法规遵从",
    "features.compliance.description": "满足GDPR、PCI DSS和ISO 27001等安全标准和法规要求。",

    "howItWorks.badge": "工作原理",
    "howItWorks.title": "FGuard WAF如何保护您的网站？",
    "howItWorks.description": "了解FGuard Web应用防火墙保护您网站的过程",
    "howItWorks.step1.title": "流量过滤",
    "howItWorks.step1.description":
      "所有到您网站的流量都通过FGuard的WAF系统进行检查和过滤。",
    "howItWorks.step2.title": "威胁检测",
    "howItWorks.step2.description":
      "系统实时分析流量以检测攻击模式和异常行为。",
    "howItWorks.step3.title": "攻击拦截",
    "howItWorks.step3.description":
      "自动拦截攻击和恶意流量，同时合法用户仍然可以正常访问。",
    "howItWorks.step4.title": "持续保护",
    "howItWorks.step4.description":
      "系统持续更新安全规则以对抗最新威胁，全天候保护您的网站。",

    "dashboard.badge": "直观仪表板",
    "dashboard.title": "轻松安全管理",
    "dashboard.description": "直观的仪表板帮助您轻松监控和管理网站安全",
    "dashboard.tab.overview": "概览",
    "dashboard.tab.threats": "威胁",
    "dashboard.tab.traffic": "流量",
    "dashboard.tab.settings": "设置",
    "dashboard.tab.reports": "报告",

    "pricing.badge": "灵活定价",
    "pricing.title": "满足各种需求的计划",
    "pricing.description": "选择适合您网站安全需求的服务计划",
    "pricing.basic.name": "基础版",
    "pricing.basic.description": "适合个人网站和小型企业",
    "pricing.basic.price": "¥1,299",
    "pricing.pro.name": "专业版",
    "pricing.pro.description": "适合中小型企业",
    "pricing.pro.price": "¥3,299",
    "pricing.pro.popular": "最受欢迎",
    "pricing.enterprise.name": "企业版",
    "pricing.enterprise.description": "适合大型企业",
    "pricing.enterprise.price": "¥6,999",
    "pricing.signUp": "立即注册",

    "testimonials.badge": "信任客户",
    "testimonials.title": "客户对FGuard的评价",
    "testimonials.description": "数千客户信任FGuard保护他们的网站",
    "testimonials.trustedBy": "超过5,000+客户信任",

    "enterprise.badge": "企业解决方案",
    "enterprise.title": "企业定制安全解决方案",
    "enterprise.description":
      "FGuard提供满足您企业特定需求的定制安全解决方案，无论规模或行业。",
    "enterprise.experts.title": "专家团队",
    "enterprise.experts.description":
      "我们拥有多年经验的安全专家团队将为您提供建议并实施最合适的解决方案。",
    "enterprise.global.title": "全球保护",
    "enterprise.global.description":
      "全球服务器系统帮助保护您的网站免受来自世界各地的攻击。",
    "enterprise.compliance.title": "法规遵从",
    "enterprise.compliance.description":
      "确保您的网站符合GDPR、PCI DSS和ISO 27001等安全法规和隐私法。",
    "enterprise.contact": "咨询联系",
    "enterprise.digitalAssets.title": "数字资产保护",
    "enterprise.digitalAssets.description": "保护您企业的数据和数字资产免受网络威胁。",
    "enterprise.riskReduction.title": "风险降低",
    "enterprise.riskReduction.description": "最小化安全风险并在攻击发生前预防。",
    "enterprise.costOptimization.title": "成本优化",
    "enterprise.costOptimization.description": "为企业提供合理成本的有效安全解决方案。",
    "enterprise.support.title": "24/7支持",
    "enterprise.support.description": "技术支持团队全天候可用，解决任何问题。",

    "faq.badge": "常见问题",
    "faq.title": "解答您的问题",
    "faq.description": "了解更多关于FGuard WAF以及我们如何保护您的网站",

    "cta.title": "立即保护您的网站",
    "cta.description": "注册14天免费试用，体验FGuard WAF的不同",
    "cta.start": "开始使用",
    "cta.terms": "服务条款",
    "cta.privacy": "隐私政策",
    "cta.agreement": "注册即表示您同意我们的",

    "footer.description":
      "领先的Web应用防火墙解决方案，保护您的网站免受在线威胁。",
    "footer.services": "服务",
    "footer.company": "公司",
    "footer.contact": "联系我们",
    "footer.contactNow": "立即联系",
    "footer.copyright": "© 2025 FGuard. 保留所有权利。",

    "cookieConsent.title": "我们使用cookies",
    "cookieConsent.description":
      "本网站使用cookies来改善您的体验。继续使用本网站即表示您同意我们使用cookies。",
    "cookieConsent.accept": "接受全部",
    "cookieConsent.decline": "仅必要",
    "cookieConsent.preferences": "偏好设置",
  },
}
