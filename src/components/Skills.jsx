const skills = [
  { name: 'JavaScript', level: 'Advanced' },
  { name: 'React', level: 'Advanced' },
  { name: 'Tailwind CSS', level: 'Advanced' },
  { name: 'FastAPI', level: 'Intermediate' },
  { name: 'MongoDB', level: 'Intermediate' },
  { name: 'Git & GitHub', level: 'Intermediate' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">Skills</h2>
        <p className="mt-2 text-gray-600">Technologies I use to build great products.</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map(s => (
            <div key={s.name} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-900">{s.name}</h3>
                <span className="text-xs px-2 py-1 rounded-full bg-indigo-100 text-indigo-700">{s.level}</span>
              </div>
              <div className="mt-4 h-2 w-full rounded-full bg-gray-100">
                <div className="h-2 rounded-full bg-gradient-to-r from-indigo-600 to-fuchsia-500" style={{ width: `${s.level === 'Advanced' ? 90 : 70}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
