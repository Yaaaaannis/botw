import './App.css'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  const bgRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      bgRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
      }
    )
    // Animation du titre lettre par lettre
    gsap.fromTo(
      '.title-letter',
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.05,
        delay: 0.5,
      }
    )
    // Animation du sous-titre et nombre de membres
    gsap.fromTo(
      '.subtitle-anim',
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.15,
        delay: 1.1,
      }
    )
    // Animation des boutons
    gsap.fromTo(
      '.cta-btn',
      { scale: 0.95, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.15,
        delay: 1.5,
      }
    )
    // Animation des liens du footer
    gsap.fromTo(
      '.footer-link',
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.15,
        delay: 2.1,
      }
    )
    // Animation hover boutons
    const btns = document.querySelectorAll('.cta-btn')
    btns.forEach(btn => {
      btn.addEventListener('mouseenter', () => {
        gsap.to(btn, {
          scale: 1.05,
          boxShadow: '0 8px 32px 0 rgba(0,0,0,0.18)',
          duration: 0.25,
          ease: 'power2.out',
        })
      })
      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
          scale: 1,
          boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)',
          duration: 0.25,
          ease: 'power2.out',
        })
      })
    })
    return () => {
      btns.forEach(btn => {
        btn.removeEventListener('mouseenter', () => {})
        btn.removeEventListener('mouseleave', () => {})
      })
    }
  }, [])

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#808080]">
      {/* Image bg.png animée */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
        style={{ backgroundImage: 'url(/bg.png)' }}
      />
      {/* Dégradé par-dessus l'image */}
      <div
        className="absolute inset-0 w-full h-full z-10 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0) 68.85%, #000 100%)' }}
      />
      {/* Contenu principal */}
      <div className="relative z-20 flex flex-col min-h-screen">

        {/* Main content */}
        <main className="flex-1 flex flex-col items-center justify-start text-center p-28  ">
          <div className="subtitle-anim mb-2 text-white/60 text-[16px] font-ppLight italic">Mat Carlsen Chess Club</div>
          <h1 className="text-white font-ginger tracking-wide mb-2 font-weight-400 text-[140px] uppercase leading-[0.9] flex flex-col items-center">
            <span>{'CAVALIER'.split('').map((l, i) => (
              <span key={i} className="title-letter inline-block">{l === ' ' ? '\u00A0' : l}</span>
            ))}</span>
            <span>{'NOIR'.split('').map((l, i) => (
              <span key={i} className="title-letter inline-block">{l === ' ' ? '\u00A0' : l}</span>
            ))}</span>
          </h1>
          <div className="subtitle-anim text-white/60 mb-6 text-[16px] font-pp">
            <span className="font-semibold text-white ">5,680+</span> Members across the country
          </div>
          <div className="flex gap-4 justify-center">
            <Link to="/join" className="cta-btn bg-white text-black font-semibold pt-[10px] pr-[56px] pb-[10px] pl-[56px] rounded-[8px] shadow hover:bg-gray-200 flex items-center gap-2 font-pp">
              <span><svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M11.0569 4.00615L8.04559 0.493958C7.6097 1.32149 7.18711 2.78202 7.79467 3.83638C7.49978 3.86263 7.21797 3.91251 6.99998 3.99999C5.60927 4.55809 4.08332 5.99999 3.33332 8.99999C3.11615 9.86867 2.72528 10.2847 2.26072 10.7791C1.82251 11.2455 1.31873 11.7816 0.833318 12.8333C-0.16668 15 2.53209 17.1667 4.49999 15.1988C5.60636 14.0924 6.57344 13.6356 7.38538 13.2522C8.55399 12.7003 9.4012 12.3001 9.87977 10.3333C10.1075 11.2508 10.0164 13.4159 7.83059 14.737C5.6448 16.0581 5.18942 18.841 5.23496 19.6666H17.6667C17.6667 11.8277 16.6288 5.05492 11.0569 4.00615Z" fill="black"/>
</svg>
</span> Join us
            </Link>
            <button className="cta-btn bg-black/70 text-white px-[32px] text-[24px] py-[10px] rounded-[8px] hover:bg-black/90 font-pp">About the club</button>
          </div>
        </main>
        {/* Footer social links */}
        <footer className="w-full flex justify-center pb-4">
          <div className="text-white/70 flex gap-6 text-sm items-center">
            <a href="#" className="footer-link hover:text-white transition-colors duration-150 font-ppLight text-[16px]">↘ Youtube</a>
            <a href="#" className="footer-link hover:text-white transition-colors duration-150 font-ppLight text-[16px]">↘ Instagram</a>
            <a href="#" className="footer-link hover:text-white transition-colors duration-150 font-ppLight text-[16px]">↘ Facebook</a>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default HeroSection 