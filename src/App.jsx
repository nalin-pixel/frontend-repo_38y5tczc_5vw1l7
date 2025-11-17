import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
        <footer className="py-10 border-t mt-10">
          <div className="max-w-6xl mx-auto px-4 text-sm text-gray-600 flex items-center justify-between">
            <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
            <a href="/test" className="hover:underline">System check</a>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
