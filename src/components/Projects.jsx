const projects = [
  {
    title: 'Portfolio Site',
    desc: 'A blazing-fast site with modern animations and responsive design.',
    tags: ['React', 'Tailwind', 'Vite'],
    link: '#',
  },
  {
    title: 'Task Manager',
    desc: 'Full-stack CRUD app with user auth and realtime updates.',
    tags: ['FastAPI', 'MongoDB', 'React'],
    link: '#',
  },
  {
    title: 'UI Component Kit',
    desc: 'Reusable, accessible components for rapid prototyping.',
    tags: ['Radix', 'TypeScript', 'Design'],
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">Featured Projects</h2>
        <p className="mt-2 text-gray-600">A few things I've built recently.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group rounded-xl border border-gray-200 hover:border-gray-300 bg-white p-5 shadow-sm hover:shadow transition">
              <div className="aspect-video rounded-lg bg-gradient-to-br from-indigo-100 to-fuchsia-100 mb-4" />
              <h3 className="font-semibold text-gray-900 group-hover:underline">{p.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
