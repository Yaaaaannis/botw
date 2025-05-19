import HeroSection from './HeroSection'
import About from './About'
import Header from './components/Header'

function App() {
  return (
    <div className="bg-transparent">
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>
      <div className="">
        <div className="h-[100vh] sticky top-0">
          <HeroSection />
        </div>
        <div className="h-[100vh] relative z-10">
          <About />
        </div>
      </div>
    </div>
  )
}

export default App
