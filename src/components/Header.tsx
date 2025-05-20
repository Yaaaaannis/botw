
import logo from '../assets/svg.svg';

const navLinks = [
  { label: '[A1] ABOUT', href: '#about' },
  { label: '[B1] NEWS', href: '#news' },
  { label: '[C1] LEARN', href: '#learn' },
  { label: '[D1] CONTACT', href: '#contact' },
  { label: '[E1] JOIN US', href: '#join' },
];

const Header = () => (
  <header className="w-full flex justify-center pt-3 pb-2">
    <div className="w-full max-w-screen flex items-center justify-between px-4 " style={{height: 40}}>
      {/* Logo texte à gauche */}
      <div className="flex items-center justify-start" style={{width: 60}}>
        <span className="text-white font-semibold font-inter text-[12px]" style={{width: 120}}>Logo</span>
      </div>
      {/* Navigation à droite avec SVG */}
      <nav className="flex-1 flex justify-end">
        <ul className="flex gap-10 text-xs text-white/80 font-inter items-center ">
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-white transition-colors duration-150 font-inter text-[12px] ">{link.label}</a>
            </li>
          ))}
          <li>
            <img src={logo} alt="Logo SVG" className="h-8 w-8  ml-24" />
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header; 