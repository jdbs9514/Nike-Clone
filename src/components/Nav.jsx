// import { headerLogo } from '../assets/images';
import nike from '../assets/icons/nike.png';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';
import Glove from '../assets/icons/Glove';


const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={nike} alt="Logo" width={80} height={29} />
        </a>
        <ul className="flex-1  flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div>
          <ul className="flex gap-1 max-lg:hidden">
            <li className="text-semibold font-black font-montserrat"><a href="#">Sign in/</a></li>
            <li className="text-semibold font-black font-montserrat"><a href="#">Explore now</a></li>
            <li className="text-semibold font-black font-montserrat"><Glove /></li>
          </ul>
        </div>
        <div className="hidden max max-lg:block">
          <img 
            src={hamburger} 
            alt="hamburguer" 
            width={25} 
            height={25}
          />
        </div>
      </nav>
    </header>
  )
}

export default Nav