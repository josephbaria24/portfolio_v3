import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { Timeline } from "@/components/timeline"
import { ContactForm } from "@/components/contact-form"
import { CreativeHero } from "@/components/creative-hero"
import { FloatingNav } from "@/components/floating-nav"
import { MouseFollower } from "@/components/mouse-follower"
import { ScrollProgress } from "@/components/scroll-progress"
import { SectionHeading } from "@/components/section-heading"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import  HeroGeometric from "@/components/hero_geometric"
import GlobalBlurBackground from "@/components/global-blur-background";


export default function Portfolio() {
  return (
    
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-hidden">
      <MouseFollower />
      <ScrollProgress />
      <FloatingNav />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
  {/* Background Hero Geometric Effect */}
  <div className="absolute inset-0 z-0">
    <HeroGeometric />
  </div>

  {/* Optional blob overlays */}
  <div className="absolute inset-0 z-0">
    <div className="absolute top-20 left-10 w-72 h-72 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
    <div className="absolute top-40 right-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
    <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-orange-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
  </div>

  {/* Main content (centered and slightly lower) */}
  <div className="container relative z-10 flex flex-col items-center text-center mt-60 pt-60 px-4">
    <p className="text-xl text-zinc-400 max-w-[600px]">
      I'm still learning, but I can create websites and applications.
    </p>

    <div className="flex flex-wrap gap-4 pt-6 justify-center">
      <a href="#projects">
        <Button className="relative overflow-hidden group bg-gradient-to-r from-orange-600 to-orange-500 border-0">
          <span className="relative z-10 flex items-center">
            View Projects
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
        </Button>
      </a>
      <a href="#contact">
      <Button
        variant="outline"
        className="border-zinc-700 text-orange-500 hover:text-orange-700 hover:border-zinc-500 bg-transparent"
      >
        Contact Me
      </Button>
      </a>
      
    </div>

    <div className="flex gap-4 pt-6">
      <Link href="https://github.com/josephbaria24" target="_blank" rel="noopener noreferrer">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
        >
          <Github className="h-5 w-5" />
          <span className="sr-only">GitHub</span>
        </Button>
      </Link>
      <Link href="https://www.linkedin.com/in/josephlucasbaria89/" target="_blank" rel="noopener noreferrer">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
        >
          <Linkedin className="h-5 w-5" />
          <span className="sr-only">LinkedIn</span>
        </Button>
      </Link>
      <Link href="mailto:josephbaria89@gmail.com">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
        >
          <Mail className="h-5 w-5" />
          <span className="sr-only">Email</span>
        </Button>
      </Link>
    </div>
  </div>

  {/* Scroll Down Indicator */}
  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
    <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
      <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
    </div>
  </div>
</section>


      {/* About Section */}
      <section id="about" className="py-32 relative">
      <GlobalBlurBackground />
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="About Me" subtitle="My background and journey" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-orange-600/20 to-orange-500/20 blur-xl opacity-70"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden border border-zinc-800">
                <img
                  src="/mypic.png?height=600&width=600"
                  alt="Joseph L. Baria"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm font-medium">Available for work</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <GlassmorphicCard>
                <p className="text-lg text-zinc-300">
                I'm an IT graduate with a passion for building websites and applications. I’m highly adaptable and always eager to learn new technologies to improve my skills and deliver quality digital solutions.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                My journey in tech began with a solid interest in web and app development. Although I'm still learning and improving, I've had the opportunity to work on projects for clients, focusing on creating simple and user-friendly digital experiences.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  When I'm not coding, you can find me exploring new technologies, playing instruments,
                  and staying up-to-date with the latest industry trends.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Name</div>
                    <div className="font-medium">Joseph L. Baria</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">josephbaria89@gmail.com</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Location</div>
                    <div className="font-medium">Philippines</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Availability</div>
                    <div className="font-medium text-green-500">Open to opportunities</div>
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    href="https://drive.google.com/uc?export=download&id=1dqFuyzIB8cT_oW8_ENLinv_IuO_OpRI7"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-zinc-800 hover:bg-zinc-700 text-white">
                      Download Resume
                    </Button>
                  </a>
                </div>

              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      
      <section id="skills" className="py-32 relative">
      <GlobalBlurBackground />
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="My Skills" subtitle="Technologies I work with" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
            <SkillBadge name="JavaScript" level={60} />
            <SkillBadge name="TypeScript" level={65} />
            <SkillBadge name="React" level={78} />
            <SkillBadge name="Next.js" level={80} />
            <SkillBadge name="Node.js" level={88} />
            <SkillBadge name="HTML/CSS" level={95} />
            <SkillBadge name="Tailwind CSS" level={90} />
            <SkillBadge name="Flutter" level={97} />
            <SkillBadge name="MySQL" level={70} />
            <SkillBadge name="MongoDB" level={80} />
            <SkillBadge name="Python" level={70} />
            <SkillBadge name="Git" level={70} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
      <GlobalBlurBackground />
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-orange-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Featured Projects" subtitle="Some of my recent work" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <ProjectCard
              title="EcomStore"
              description="A self project, e-commerce website ready to modify, built with NextJS and Tailwind CSS."
              tags={["NextJS", "Shadcn UI", "Supabase", "Typescript"]}
              image="/ecomstore.png?height=400&width=600"
              demoUrl="https://drive.google.com/drive/folders/1r-XD-AMetMjHd5RDyCygn_1vFww_FOZJ?usp=sharing"
              repoUrl="https://github.com"
            />
          <ProjectCard
              title="CRM Web App - Petrosphere Inc. Company"
              description="A CRM web application for managing and tracking leads and sales processes."
              tags={["NextJS", "Shadcn UI", "Supabase", "Typescript"]}
              image="/acrm.png?height=400&width=600"
              demoUrl="https://drive.google.com/drive/folders/1A2NKAbD-EWqpdqe3hJ_ewpc3Z5Wgkjyf?usp=sharing"
              repoUrl="https://github.com"
            />
            <ProjectCard
              title="Safety Vitals Web app - Petrosphere Inc. Company"
              description="Safety Vitals is a digital platform that centralizes safety data, tracks key indicators in real time, and delivers insights to improve workplace safety, compliance, and incident prevention."
              tags={["React", "NextJS", "Shadcn UI", "Supabase", "Typescript"]}
              image="/safetyvitals.png?height=400&width=600"
              demoUrl="https://drive.google.com/drive/folders/15Y8wKjIUnRf8WJLKT0p3M5cFj4S_Ij99?usp=sharing"
              repoUrl="https://github.com"
            />
            <ProjectCard
              title="Payroll System - Petrosphere Inc. Company"
              description="A payroll system for managing employee salaries and deductions."
              tags={["Biometrics Integration", "React", "NextJS", "Shadcn UI", "Supabase", "Typescript"]}
              image="/payroll.png?height=400&width=600"
              demoUrl="https://drive.google.com/drive/folders/1dSRYFrndxzTutNNwAuvx9Ct25mxrgCHG?usp=sharing"
              repoUrl="https://github.com"
            />
            <ProjectCard
              title="RentConnect App"
              description="A full-stack mobile app built with Flutter, NodeJS and MongoDB."
              tags={["Flutter", "Dart", "NodeJS", "MongoDB"]}
              image="/rc.png?height=100&width=100"
              demoUrl="https://apkpure.com/rentconnect/com.example.rentcon#google_vignette"
              repoUrl="https://github.com/josephbaria24/rentconnect_flutter.git"
            />
            <ProjectCard
              title="Villa Costa App"
              description="A mobile app for booking rooms in Villa Costa"
              tags={["Flutter", "Dart"]}
              image="/VC-1.png?height=400&width=600"
              demoUrl="https://drive.google.com/drive/folders/1jFFai1X-YH5sPMZn8jz9dAZM6bJ92jkQ?usp=sharing"
              repoUrl="https://github.com/josephbaria24/villa-costa-app.git"
            />
            
            <ProjectCard
              title="OVPEC system"
              description="A first ever document tracking system of office of the vice president for external campuses of Palawan State Univerity."
              tags={["React Native", "JS", "Firebase"]}
              image="/vpec1.png?height=400&width=600"
              demoUrl="https://drive.google.com/drive/folders/1cnjAy80IYq0WSu_AwZqzHpvI_LZp_HsU?usp=sharing"
              repoUrl="https://github.com"
            />
            
            <ProjectCard
              title="Portfolio Website"
              description="This portfolio website built with HTML/CSS and JavaScript."
              tags={["HTML", "CSS", "JavaScript"]}
              image="/educare.png?height=400&width=600"
              demoUrl="https://educare-seven.vercel.app/"
              repoUrl="https://github.com/josephbaria24/EduCare.git"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 relative">
      <GlobalBlurBackground />
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Work Experience" subtitle="My professional journey" />

          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
      <GlobalBlurBackground />
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Get In Touch" subtitle="Let's work together" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <GlassmorphicCard>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-orange-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">josephbaria89@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-orange-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">LinkedIn</div>
                    <div className="font-medium">linkedin.com/in/josephlucasbaria89</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Github className="h-5 w-5 text-orange-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">GitHub</div>
                    <div className="font-medium">https://github.com/josephbaria24</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-zinc-800">
                <h4 className="text-lg font-medium mb-4">Current Status</h4>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span>Available for freelance work and full-time opportunities</span>
                </div>
              </div>
            </GlassmorphicCard>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link href="/" className="font-bold text-xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600">
                Joseph
              </span>
              <span className="text-white">LB</span>
            </Link>
            <p className="text-sm text-zinc-500 mt-2">
              © {new Date().getFullYear()} Joseph L. Baria. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com/josephbaria24" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/josephlucasbaria89/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:josephbaria89@gmail.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
