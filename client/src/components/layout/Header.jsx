import Logo from '../Logo';
import DarkModeToggle from './DarkModeToggle';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className='flex items-center justify-between px-6 py-4 bg-white dark:bg-slate-950 shadow-md'>
    {/* Logo on the left */}
    <div className='flex items-center'>
      <Link to='/'>
        <Logo />
      </Link>
    </div>

    {/* Navigation links in the center */}
    <nav className='flex-1 flex justify-center space-x-8 text-lg font-medium'>
      <Link
        to='/demo'
        className='hover:text-electricBlue dark:hover:text-golden transition-colors duration-300'>
        Demo
      </Link>
      <Link
        to='/organize-library'
        className='hover:text-electricBlue dark:hover:text-golden transition-colors duration-300'>
        Get Stacking
      </Link>
    </nav>

    {/* Dark mode toggle on the right */}
    <div className='flex items-center'>
      <DarkModeToggle />
    </div>
  </header>
);

export default Header;
