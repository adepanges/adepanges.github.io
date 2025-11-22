import './App.css'
import Navbar from './components/Navbar'
import { useState, useEffect, useRef } from 'react'

function App() {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)
  const skillsRef = useRef<HTMLDivElement>(null)

  const texts = [
    'Hello, I\'m Ade Panges',
    'Welcome to My Portfolio',
    'Full Stack Developer',
    'Creative Problem Solver'
  ]

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[loopNum % texts.length]
      
      if (isDeleting) {
        setDisplayText(currentText.substring(0, currentIndex - 1))
        setCurrentIndex(currentIndex - 1)
        setTypingSpeed(100)
      } else {
        setDisplayText(currentText.substring(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
        setTypingSpeed(150)
      }

      if (!isDeleting && currentIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 1000)
      } else if (isDeleting && currentIndex === 0) {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [currentIndex, isDeleting, loopNum, texts, typingSpeed])

  const skills = [
    { name: 'TypeScript', level: 85, color: 'bg-blue-600' },
    { name: 'Node.js', level: 80, color: 'bg-green-500' },
    { name: 'Database', level: 80, color: 'bg-purple-500' }
  ]

  const handleEmailClick = () => {
    window.location.href = 'mailto:adepanges@gmail.com'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Typing Animation */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
            <span className="inline-block min-h-[1.2em]">
              {displayText}
              <span className="ml-1 animate-pulse">|</span>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Crafting digital experiences with modern technologies and creative solutions
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button 
              onClick={handleEmailClick}
              className="group relative px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-2xl transform"
            >
              <span className="relative z-10">Contact Me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <a 
              href="/resume"
              className="group px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-105 transform"
            >
              View Resume
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Technical Skills
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <div 
                key={skill.name}
                className="group p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {skill.name}
                  </h3>
                  <span className="text-sm font-medium text-gray-600">
                    {skill.level}%
                  </span>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className={`${skill.color} h-3 rounded-full transition-all duration-1000 ease-out group-hover:scale-105 transform origin-left`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            About Me
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Passionate developer with expertise in modern web technologies. 
            I love creating efficient, scalable solutions and bringing creative ideas to life through code.
          </p>
          <button 
            onClick={handleEmailClick}
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-lg transform"
          >
            <span>Let's Work Together</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </section>
    </div>
  )
}

export default App