import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

gsap.registerPlugin(ScrollTrigger)

const newsItems = [
  {
    id: 1,
    category: 'EVENT',
    media: '/carousel1.png',
    type: 'image',
    title: 'Title',
    date: '19/05/2025',
    description: 'Lorem ipsum dolor sit amet consectetur. Neque justo laoreet massa nunc. Netus bibendum justo habitasse.',
  },
  {
    id: 2,
    category: 'CLUB',
    media: '/carousel2.mp4',
    type: 'video',
    title: 'Title',
    date: '19/05/2025',
    description: 'Lorem ipsum dolor sit amet consectetur. Neque justo laoreet massa nunc. Netus bibendum justo habitasse.',
  },
  {
    id: 3,
    category: 'EVENT',
    media: '/carousel3.png',
    type: 'image',
    title: 'Title',
    date: '19/05/2025',
    description: 'Lorem ipsum dolor sit amet consectetur. Neque justo laoreet massa nunc. Netus bibendum justo habitasse.',
  },
  {
    id: 4,
    category: 'EVENT',
    media: '/carousel4.mp4',
    type: 'video',
    title: 'Title',
    date: '19/05/2025',
    description: 'Lorem ipsum dolor sit amet consectetur. Neque justo laoreet massa nunc. Netus bibendum justo habitasse.',
  },
  {
    id: 5,
    category: 'CLUB',
    media: '/carousel5.png',
    type: 'image',
    title: 'Title',
    date: '19/05/2025',
    description: 'Lorem ipsum dolor sit amet consectetur. Neque justo laoreet massa nunc. Netus bibendum justo habitasse.',
  },
]

const News = () => {
  const newsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!newsRef.current) return;
    const newsSection = newsRef.current;

    // Animation du titre et texte
    const textElements = newsSection.querySelectorAll('.news-text');
    textElements.forEach((el: Element) => {
      gsap.fromTo(el,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: newsSection,
            start: "top center",
            end: "+=300",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const renderMedia = (item: typeof newsItems[0]) => {
    if (item.type === 'video') {
      return (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-[418px] h-[483px] object-cover"
        >
          <source src={item.media} type="video/mp4" />
        </video>
      );
    }
    return (
      <img 
        src={item.media} 
        alt={item.title} 
        className="w-[418px] h-[483px] object-cover" 
      />
    );
  };

  return (
    <section ref={newsRef} className="w-full min-h-screen bg-white text-black flex flex-col justify-between pl-[24px] pt-12 mt-40">
      <div className="flex h-full">
        {/* Colonne gauche (1/3) */}
        <div className="w-1/3 flex flex-col justify-between pl-[24px] pt-12">
          <div /> {/* Spacer */}
          
          <div className="flex flex-col gap-8 pt-80">
            <h2 className="text-[40px] leading-none font-ppBold tracking-wide uppercase news-text">
              Stay in the loop.
            </h2>
            <p className="text-black/60 max-w-[400px] text-[16px] font-inter leading-relaxed news-text">
            Our News section keeps you connected to the heartbeat of the club. Discover upcoming tournaments, recent victories, new masterclasses, and behind-the-scenes insights into our growing chess community. Whether you're a member or a curious enthusiast, this is where strategy meets story.
            </p>
          </div>

          <div className="news-text">
            <h3 className="text-[80px] pt-25 font-ginger tracking-wide leading-none">
              [B] <span className="font-ginger">NEWS</span>
            </h3>
          </div>
        </div>

        {/* Carousel (2/3) */}
        <div className="w-2/3 pl-8 pt-0">
          <Splide
            options={{
              type: 'slide',
              perPage: 2.5,
              gap: '1.5rem',
              pagination: false,
              arrows: false,
              drag: 'free',
              snap: false,
              width: '100%',
              focus: 'center',
             
            }}
            className="news-carousel"
          >
            {newsItems.map((item) => (
              <SplideSlide key={item.id} className="relative">
                <div className="bg-black">
                  <div className="relative flex px-3 pt-8">
                    <div className="absolute top-2 left-4 z-10 text-white ">
                      <span className="text-[16px] font-pp">{item.id}/</span>
                    </div>
                    <div className="absolute top-2 right-4 z-10 text-white pb-2">
                      <span className="text-[16px] font-pp">{item.category}</span>
                    </div>
                    {renderMedia(item)}
                  </div>
                  <div className="p-4 text-white">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-[24px] font-ginger">{item.title}</h3>
                      <span className="text-[16px] font-ppLight font-weight-[200] opacity-60">{item.date}</span>
                    </div>
                    <p className="text-[16px] font-ppLight opacity-80 mb-4 leading-relaxed pb-8">
                      {item.description}
                    </p>
                    <div className="flex justify-end">
                      <button className="text-[16px] font-ppLight flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                        ↘ Read More
                      </button>
                    </div>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </section>
  )
}

export default News 