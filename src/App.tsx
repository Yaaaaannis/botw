import HeroSection from './HeroSection'
import About from './About'
import News from './News'
import Header from './components/Header'
import Learn from './components/Learn'
function App() {
  return (
    <div className="bg-transparent">
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>
      <div className="">
        <div className="h-[100vh] sticky top-0 z-[1]">
          <HeroSection />
        </div>
        <div className="h-[100vh] sticky top-0 z-[2] ">
          <About />
        </div>
        <div className="h-[100vh] sticky top-0 z-[3] mt-16">
          <News />
        </div>
        <div className="h-[100vh] sticky top-0 z-[4] mt-16">
          <Learn />
        </div>
      </div>
    </div>
  )
}

export default App
