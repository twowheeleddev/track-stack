import { useTheme } from '../../context/ThemeProvider';

const DarkModeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className='p-2 rounded-full border border-gray-400 dark:border-gray-600 transition-all hover:bg-gray-200 dark:hover:bg-gray-700'>
      {darkMode ? '☀️' : '🌙'}
    </button>
  );
};

export default DarkModeToggle;
