import logo from '../assets/svg.svg';
import { useAudio } from '../context/AudioContext';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { label: '[A1] ABOUT', href: '/' },
  { label: '[B1] NEWS', href: '/' },
  { label: '[C1] LEARN', href: '/' },
  { label: '[D1] CONTACT', href: '/contact' },
  { label: '[E1] JOIN US', href: '/join' },
];

const Header = () => {
  const { isPlaying, togglePlay } = useAudio();
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const sectionElement = section as HTMLElement;
        const sectionTop = sectionElement.offsetTop;
        const sectionBottom = sectionTop + sectionElement.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isNewsSection = activeSection === 'news';
  const textColorClass = isNewsSection ? 'text-black' : 'text-white';

  return (
    <header className="w-full flex justify-center pt-3 pb-2">
      <div className="w-full max-w-screen flex items-center justify-between px-4" style={{height: 40}}>
        {/* Logo texte à gauche */}
        <div className="flex items-center justify-start" style={{width: 60}}>
          <span className={`font-semibold font-inter text-[12px] ${textColorClass}`} style={{width: 120}}>Logo</span>
        </div>
        {/* Navigation à droite avec SVG */}
        <nav className="flex-1 flex justify-end">
          <ul className={`flex gap-10 text-xs font-inter items-center ${textColorClass}`}>
            {navLinks.map(link => (
              <li key={link.href}>
                {link.href.startsWith('/') ? (
                  <Link 
                    to={link.href} 
                    className={`hover:opacity-80 transition-colors duration-150 font-inter text-[12px] ${textColorClass}`}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a 
                    href={link.href} 
                    className={`hover:opacity-80 transition-colors duration-150 font-inter text-[12px] ${textColorClass}`}
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
            <li className="flex items-center gap-4">
              <button
                onClick={togglePlay}
                className={`hover:opacity-80 transition-colors duration-150 ${textColorClass}`}
              >
                {isPlaying ? 'ON' : 'OFF'}
              </button>
              <img src={logo} alt="Logo SVG" className={`h-8 w-8 ml-4 ${isNewsSection ? 'invert' : ''}`} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 