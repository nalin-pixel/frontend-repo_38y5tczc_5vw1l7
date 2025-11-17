import { Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10 opacity-60">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-fuchsia-400/30 rounded-full blur-3xl" />
        <div className="absolute top-40 -left-24 w-[32rem] h-[32rem] bg-indigo-400/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-sm uppercase tracking-widest text-indigo-600 font-semibold">Young Developer</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Building clean, fast, and fun web apps
          </h1>
          <p className="mt-4 text-gray-600 leading-relaxed">
            I'm a 16-year-old developer who loves crafting delightful user experiences
            and shipping real projects. I focus on modern web stacks, performance,
            and thoughtful design.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#projects" className="px-4 py-2.5 rounded-md text-white bg-gradient-to-r from-indigo-600 to-fuchsia-500 shadow hover:opacity-90">
              View projects
            </a>
            <a href="#contact" className="px-4 py-2.5 rounded-md border border-gray-300 hover:bg-gray-50">
              Contact me
            </a>
          </div>

          <div className="mt-6 flex items-center gap-4 text-gray-700">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-gray-900">
              <Github className="w-5 h-5" /> GitHub
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-gray-900">
              <Linkedin className="w-5 h-5" /> LinkedIn
            </a>
            <a href="#contact" className="flex items-center gap-2 hover:text-gray-900">
              <Mail className="w-5 h-5" /> Email
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-gray-900 via-indigo-800 to-fuchsia-700 p-1 shadow-2xl">
            <div className="w-full h-full rounded-2xl bg-white/5 backdrop-blur flex items-center justify-center">
              <div className="text-white/90 p-8 text-center">
                <p className="text-sm uppercase tracking-widest text-white/70">Focus</p>
                <h3 className="mt-1 text-2xl font-bold">Frontend • React • UI</h3>
                <p className="mt-3 text-white/80">
                  Obsessed with smooth UX, clean code, and shipping quickly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
