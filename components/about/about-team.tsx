"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Twitter, Mail, Github, X } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { motion } from "framer-motion"
import { Dialog, DialogContent } from "@/components/ui/dialog"

const teamMembers = [
  {
    name: "Nguyễn Thành Danh",
    role: "CEO",
    image: "/images/team/ceo.jpg",
    description: "With over 15 years of experience in security and information technology, CEO Nguyen Thanh Danh leads FGuard with strategic vision and passion for innovation.",
    social: {
      linkedin: "https://linkedin.com/in/thanhdanh",
      twitter: "https://twitter.com/thanhdanh",
      email: "danh.nguyen@fguard.com"
    }
  },
  {
    name: "Phạm Minh Tuấn",
    role: "Technical Manager",
    image: "/images/team/technical-manager.jpg",
    description: "Pham Minh Tuan is a leading expert in web application security, with extensive knowledge of WAF and advanced security technologies.",
    social: {
      linkedin: "https://linkedin.com/in/minhtuan",
      github: "https://github.com/minhtuan",
      email: "tuan.pham@fguard.com"
    }
  },
  {
    name: "Trần Gia Hưng",
    role: "Sales Manager",
    image: "/images/team/sales-manager.jpg",
    description: "With rich experience in B2B sales, Tran Gia Hung has successfully built and developed numerous strategic partnerships.",
    social: {
      linkedin: "https://linkedin.com/in/giahung",
      email: "hung.tran@fguard.com"
    }
  },
  {
    name: "Nguyễn Minh Thành",
    role: "Marketing Manager",
    image: "/images/team/marketing-manager.jpg",
    description: "Nguyen Minh Thanh is a marketing expert with the ability to build brands and develop effective marketing strategies in the security field.",
    social: {
      linkedin: "https://linkedin.com/in/minhthanh",
      twitter: "https://twitter.com/minhthanh",
      email: "thanh.nguyen@fguard.com"
    }
  },
  {
    name: "Trần Huy Hùng",
    role: "Marketing Employee",
    image: "/images/team/marketing-employee.jpg",
    description: "Tran Huy Hung is a digital marketing specialist, focusing on content development and online marketing strategies.",
    social: {
      linkedin: "https://linkedin.com/in/huyhung",
      email: "hung.tran@fguard.com"
    }
  },
  {
    name: "Trần Nguyễn Phương Nam",
    role: "Technical Employee",
    image: "/images/team/technical-employee.jpg",
    description: "With deep expertise in security and development, Tran Nguyen Phuong Nam actively contributes to the development of FGuard's security solutions.",
    social: {
      linkedin: "https://linkedin.com/in/phuongnam",
      github: "https://github.com/phuongnam",
      email: "nam.tran@fguard.com"
    }
  }
]

// Skeleton component for loading state
const TeamMemberSkeleton = () => (
  <Card className="overflow-hidden">
    <div className="relative h-80 w-full bg-gray-200 dark:bg-gray-700 animate-pulse" />
    <CardContent className="p-6">
      <div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-2" />
      <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4" />
      <div className="space-y-2">
        <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
        <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
        <div className="h-4 w-4/6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
      </div>
    </CardContent>
  </Card>
)

export default function AboutTeam() {
  const [loading, setLoading] = useState(true)
  const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null)

  // Simulate loading
  useState(() => {
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the people behind FGuard's success - A dedicated team of experts committed to protecting cyberspace
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate={loading ? "hidden" : "show"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {loading ? (
            Array(6).fill(0).map((_, index) => (
              <TeamMemberSkeleton key={index} />
            ))
          ) : (
            teamMembers.map((member, index) => (
              <motion.div key={index} variants={item}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-80 w-full group cursor-pointer" onClick={() => setSelectedMember(member)}>
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading={index < 3 ? "eager" : "lazy"}
                      className="object-cover object-center transition-all duration-500 group-hover:scale-110 group-hover:brightness-90"
                      style={{
                        objectPosition: 'center 20%'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="absolute bottom-6 left-6 right-6 flex flex-col items-center space-y-4">
                        <div className="flex justify-center space-x-4">
                          {member.social.linkedin && (
                            <Link 
                              href={member.social.linkedin} 
                              target="_blank" 
                              className="text-white hover:text-primary transform hover:scale-110 transition-transform duration-300"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Linkedin className="h-6 w-6" />
                            </Link>
                          )}
                          {member.social.twitter && (
                            <Link 
                              href={member.social.twitter} 
                              target="_blank" 
                              className="text-white hover:text-primary transform hover:scale-110 transition-transform duration-300"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Twitter className="h-6 w-6" />
                            </Link>
                          )}
                          {member.social.github && (
                            <Link 
                              href={member.social.github} 
                              target="_blank" 
                              className="text-white hover:text-primary transform hover:scale-110 transition-transform duration-300"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Github className="h-6 w-6" />
                            </Link>
                          )}
                          {member.social.email && (
                            <Link 
                              href={`mailto:${member.social.email}`} 
                              className="text-white hover:text-primary transform hover:scale-110 transition-transform duration-300"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Mail className="h-6 w-6" />
                            </Link>
                          )}
                        </div>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:text-white"
                          onClick={(e) => {
                            e.stopPropagation()
                            setSelectedMember(member)
                          }}
                        >
                          View Profile
                        </Button>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6 bg-white dark:bg-gray-800">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-sm text-primary mb-4">{member.role}</p>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{member.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          )}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Are you passionate about security and want to contribute to our mission of protecting cyberspace? Join us!
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg">
              View Open Positions
            </Button>
            <Button size="lg" variant="outline">
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>

      <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          {selectedMember && (
            <div className="relative">
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="relative h-[60vh] w-full">
                <Image
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-6 bg-white dark:bg-gray-800">
                <h3 className="text-2xl font-bold mb-2">{selectedMember.name}</h3>
                <p className="text-lg text-primary mb-4">{selectedMember.role}</p>
                <p className="text-muted-foreground">{selectedMember.description}</p>
                <div className="mt-6 flex justify-center space-x-4">
                  {selectedMember.social.linkedin && (
                    <Link 
                      href={selectedMember.social.linkedin} 
                      target="_blank" 
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      <Linkedin className="h-6 w-6" />
                    </Link>
                  )}
                  {selectedMember.social.twitter && (
                    <Link 
                      href={selectedMember.social.twitter} 
                      target="_blank" 
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      <Twitter className="h-6 w-6" />
                    </Link>
                  )}
                  {selectedMember.social.github && (
                    <Link 
                      href={selectedMember.social.github} 
                      target="_blank" 
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      <Github className="h-6 w-6" />
                    </Link>
                  )}
                  {selectedMember.social.email && (
                    <Link 
                      href={`mailto:${selectedMember.social.email}`} 
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      <Mail className="h-6 w-6" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
