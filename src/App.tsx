import './App.css'
import Header from './components/Header'

function App() {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex flex-col"
      style={{
        backgroundImage: `

          linear-gradient(180deg, rgba(0,0,0,0) 68.85%, #000 100%),
          url(/src/assets/bg.png)
        `
      }}
    >
      <Header />
      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-start text-center p-28  ">
        <div className="mb-2 text-white/60 text-[16px] font-ppLight italic">Mat Carlsen Chess Club</div>
        <h1 className="text-white  font-ginger tracking-wide  mb-2 font-weight-400 text-[140px] uppercase leading-[0.9]">
          CAVALIER<br />NOIR
        </h1>
        <div className="text-white/80 mb-6">
          <span className="font-semibold">5,680+</span> Members across the country
        </div>
        <div className="flex gap-4 justify-center">
          <button className="bg-white text-black font-semibold pt-[10px] pr-[56px] pb-[10px] pl-[56px] rounded-[8px] shadow hover:bg-gray-200 flex items-center gap-2">
            <span><svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.0569 4.00615L8.04559 0.493958C7.6097 1.32149 7.18711 2.78202 7.79467 3.83638C7.49978 3.86263 7.21797 3.91251 6.99998 3.99999C5.60927 4.55809 4.08332 5.99999 3.33332 8.99999C3.11615 9.86867 2.72528 10.2847 2.26072 10.7791C1.82251 11.2455 1.31873 11.7816 0.833318 12.8333C-0.16668 15 2.53209 17.1667 4.49999 15.1988C5.60636 14.0924 6.57344 13.6356 7.38538 13.2522C8.55399 12.7003 9.4012 12.3001 9.87977 10.3333C10.1075 11.2508 10.0164 13.4159 7.83059 14.737C5.6448 16.0581 5.18942 18.841 5.23496 19.6666H17.6667C17.6667 11.8277 16.6288 5.05492 11.0569 4.00615Z" fill="black"/>
</svg>
</span> Join us
          </button>
          <button className="bg-black/70 text-white px-[32px] text-[24px] py-[10px] rounded-[8px] hover:bg-black/90">About the club</button>
        </div>
      </main>
      {/* Footer social links */}
      <footer className="w-full flex justify-center pb-4">
        <div className="text-white/70 flex gap-6 text-sm items-center">
          <a href="#" className="hover:text-white transition-colors duration-150 font-ppLight text-[16px]">↘ Youtube</a>
          <a href="#" className="hover:text-white transition-colors duration-150 font-ppLight text-[16px]">↘ Instagram</a>
          <a href="#" className="hover:text-white transition-colors duration-150 font-ppLight text-[16px]">↘ Facebook</a>
        </div>
      </footer>
    </div>
  )
}

export default App
