import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HeroSection from './HeroSection'
import About from './About'
import News from './News'
import Header from './components/Header'
import Learn from './components/Learn'
import Loader from './components/Loader'
import { AudioProvider } from './context/AudioContext'
import AboutUs from './components/AboutUs'
import Form from './components/Form'
import Contact from './components/Contact'
import Activities from './components/Activities'

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoaderComplete = () => {
    setLoading(false);
  };

  return (
    <AudioProvider>
      {loading ? (
        <Loader onComplete={handleLoaderComplete} />
      ) : (
        <Router>
          <div className="bg-transparent">
            <div className="fixed top-0 left-0 w-full z-50">
              <Header />
            </div>
            <Routes>
              <Route path="/join" element={<AboutUs />} />
              <Route path="/contact" element={<Form />} />
              <Route path="/activities" element={<Activities />} />
              <Route path="/" element={
                <div className="">
                  <div className="h-[100vh] sticky top-0 z-[1]">
                    <HeroSection />
                  </div>
                  <section id="about" className="h-[100vh] sticky top-0 z-[2]">
                    <About />
                  </section>
                  <section id="news" className="h-[100vh] sticky top-0 z-[3] mt-16">
                    <News />
                  </section>
                  <section id="learn" className=" h-[100vh] sticky top-0 z-[4] mt-16">
                    <Learn />
                  </section>
                  <section id="contact" className="h-[100vh] sticky top-0 z-[5] mt-16">
                    <Contact />
                  </section>
                </div>
              } />
            </Routes>
          </div>
        </Router>
      )}
    </AudioProvider>
  );
}

export default App
