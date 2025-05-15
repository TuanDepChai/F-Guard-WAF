export default function AboutTimeline() {
  const timelineEvents = [
    {
      year: "2018",
      title: "Company Founded",
      description: "FGuard was founded by cybersecurity experts Sarah Johnson and Michael Chen",
    },
    {
      year: "2019",
      title: "First Product Launch",
      description: "Released our first WAF product focused on small and medium businesses",
    },
    {
      year: "2020",
      title: "Series A Funding",
      description: "Secured $12M in Series A funding to accelerate product development",
    },
    {
      year: "2021",
      title: "Enterprise Solution",
      description: "Launched enterprise-grade WAF solution with advanced threat intelligence",
    },
    {
      year: "2022",
      title: "Global Expansion",
      description: "Expanded operations to Europe and Asia with new data centers",
    },
    {
      year: "2023",
      title: "Series B Funding",
      description: "Raised $45M in Series B to fuel innovation and market expansion",
    },
  ]

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            The key milestones in FGuard's growth and evolution
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l border-gray-300 dark:border-gray-700 ml-6 md:ml-0 md:mx-auto">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`mb-10 ml-6 md:ml-0 md:${index % 2 === 0 ? "mr-auto md:text-right md:pr-8" : "ml-auto md:text-left md:pl-8"} md:w-2/5`}
              >
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 md:left-1/2 md:-ml-2 mt-2"></div>
                <div className="font-bold text-primary mb-1">{event.year}</div>
                <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
