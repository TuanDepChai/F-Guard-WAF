import Image from "next/image"

export default function AboutMission() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                At FGuard, we believe that robust security should be accessible to every organization, regardless of
                size or technical expertise. Our mission is to democratize web application security by providing
                powerful, yet easy-to-use protection against evolving cyber threats.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                We're committed to staying at the forefront of security research, continuously improving our technology
                to defend against emerging attack vectors, and empowering our customers with the knowledge and tools
                they need to secure their digital assets.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/security-dashboard.jpg"
                alt="FGuard Security Dashboard"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
