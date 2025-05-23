import { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom';


gsap.registerPlugin(ScrollTrigger)

const initialImages = [
  { src: '/pion.png', alt: 'Chess main' },
  { src: '/book.png', alt: 'Chess 2' },
  { src: '/carl.png', alt: 'Chess 3' },
  { src: '/bat.png', alt: 'Chess 1' },
];

const About = () => {
  const [images, setImages] = useState(initialImages);
  const aboutRef = useRef<HTMLElement>(null);
 
  useEffect(() => {
    // Configuration de base pour ScrollTrigger
    if (!aboutRef.current) return;
    const aboutSection = aboutRef.current;
    
    // Animation des statistiques
    const statsElements = aboutSection.querySelectorAll('.about-fade');
    statsElements.forEach((el: Element, index: number) => {
      gsap.fromTo(el,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: aboutSection,
            start: "top center",
            end: "+=300",
            toggleActions: "play none none none"
          },
          delay: index * 0.2
        }
      );
    });

    // Animation des miniatures
    const thumbs = aboutSection.querySelectorAll('.about-thumb');
    thumbs.forEach((thumb: Element) => {
      gsap.fromTo(thumb,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: aboutSection,
            start: "top center",
            end: "+=300",
            toggleActions: "play none none none"
          },
          delay: 0.3
        }
      );
    });

    // Animation de l'image principale
    gsap.fromTo('.about-main-img',
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutSection,
          start: "top center",
          end: "+=300",
          toggleActions: "play none none none"
        },
        delay: 0.1
      }
    );

    return () => {
      // Nettoyage des ScrollTriggers
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Fonction pour échanger la grande image avec une petite
  const handleImageClick = (idx: number) => {
    if (idx === 0) return; // Ne rien faire si on clique sur la grande image
    const newImages = [...images];
    // swap
    [newImages[0], newImages[idx]] = [newImages[idx], newImages[0]];
    setImages(newImages);
  };

  return (
    <section ref={aboutRef} className="w-full min-h-screen bg-black text-white flex flex-col items-stretch justify-start px-0 pt-0 pb-16">
      {/* Header */}

      {/* Contenu principal */}
      <div className="flex flex-1 items-start justify-end w-full px-8 pt-18 pb-0">
        {/* Colonne gauche : texte */}
        <div className="flex-1 flex flex-col justify-between pl-[24px] pt-2 pb-8 h-full">
          {/* Stats */}
          <div className="mb-8 about-fade">
            <div className="flex flex-col gap-2 mb-16 mt-2">
              <div>
                <span className="font-semibold font-pp text-[18px]">25</span>
                <span className="ml-2 font-pp text-[15px] text-white/60">Active Clubs</span>
              </div>
              <div>
                <span className="font-semibold font-pp text-[18px]">5,680+</span>
                <span className="ml-2 font-pp text-[15px] text-white/60">Members</span>
              </div>
              <div>
                <span className="font-semibold font-pp text-[18px]">60</span>
                <span className="ml-2 font-pp text-[15px] text-white/60">Tournament Wins</span>
              </div>
            </div>

            <div className="uppercase  tracking-widest mb-8 font-ppLight leading-relaxed max-w-[450px] font-pp text-[12px] about-fade">
            Founded by Mat Carlsen — the lesser-known, equally passionate (and allegedly fictional) brother of world champion Magnus Carlsen — our club was born from a desire to reimagine the chess experience.
            </div>
            <div className="text-[12px] font-weight-[400] text-white/80 font-ppLight mb-8 leading-relaxed max-w-[450px] about-fade">
            Whether you're a seasoned player or just discovering the 64 squares, you're invited to think deeper, move smarter — and play with style.
            </div>
          </div>
          {/* Bas : citation et titre */}
          <div className="mt-2 mb-0">
            <div className="flex flex-col gap-4 mb-12">
              <Link to="/join" className="text-white text-[24px] font-bold font-pp flex items-center gap-2 hover:underline transition-all">
                <span className="text-3xl">↘</span> Membership price
              </Link>
              <Link to="/activities" className="text-white text-[24px] font-bold font-pp flex items-center gap-2 hover:underline transition-all">
                <span className="text-3xl">↘</span> Club activities
              </Link>
            </div>
            <div className="italic uppercase  mb-8 mt-8 max-w-[450px] font-weight-[200] text-white/80 font-pplight text-[16px] about-fade">
              "Not all Carlsens aim for world titles. Some just want to make chess look good."<br/>
              <span className="not-italic font-pp">— Mat Carlsen</span>
            </div>
            <h2 className="text-[80px] font-ginger tracking-wide uppercase flex items-center gap-4 mb-2 text-white/80 about-fade">
              [A1] <span>About</span>
            </h2>

          </div>
        </div>
        {/* Colonne droite : images */}
        <div className="flex flex-row items-start pt-2 pr-8">
          {/* Petites images en colonne */}
          <div className="flex flex-col gap-1 w-[114px] pt-12 mr-[20px] z-10">
            {images.slice(1).map((img, i) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                className="object-cover w-[114px] h-[114px] cursor-pointer transition duration-200 hover:brightness-110 about-thumb"
                onClick={() => handleImageClick(i + 1)}
              />
            ))}
          </div>
          {/* Grande image à droite */}
          <div className="overflow-hidden ml-0">
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="object-cover w-[478px] h-[726px] transition duration-200 about-main-img"
            />
          </div>
        </div>
      </div>
      {/* Bordure basse */}
      <div className="w-full h-px bg-white/20 mt-8" />
    </section>
  )
}

export default About 