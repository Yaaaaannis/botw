
import logo from '../assets/svg.svg';

const navLinks = [
  { label: '[A1] ABOUT', href: '#about' },
  { label: '[B1] LEARN', href: '#learn' },
  { label: '[C1] NEWS', href: '#news' },
  { label: '[D1] CONTACT', href: '#contact' },
  { label: '[E1] JOIN US', href: '#join' },
];

const Header = () => (
  <header className="w-full flex justify-center pt-3 pb-2 px-6">
    <div className="w-full max-w-screen-xl flex items-center justify-between" style={{height: 40}}>
      {/* Logo texte à gauche */}
      <div className="flex items-center" style={{width: 120}}>
        <span className="text-white text-lg font-semibold font-inter" style={{width: 120}}>Logo</span>
      </div>
      {/* Navigation à droite avec SVG */}
      <nav className="flex-1 flex justify-end">
        <ul className="flex gap-8 text-xs text-white/80 font-inter items-center">
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-white transition-colors duration-150">{link.label}</a>
            </li>
          ))}
          <li>
            <img src={logo} alt="Logo SVG" className="h-8 w-8 ml-6" />
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header; 