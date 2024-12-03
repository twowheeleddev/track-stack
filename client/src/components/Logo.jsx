import { useTheme } from '../context/ThemeProvider';
import LightLogo from '../assets/logos/logoLight.webp';
import DarkLogo from '../assets/logos/logoDark.webp';

const Logo = () => {
  const { darkMode } = useTheme();

  return (
    <img
      src={darkMode ? DarkLogo : LightLogo}
      alt='TrackStack Logo'
      className='w-32 h-auto transition-transform duration-500 hover:scale-105'
    />
  );
};

export default Logo;
