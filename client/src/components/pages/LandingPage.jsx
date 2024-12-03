import { Link } from 'react-router-dom';

const LandingPage = () => (
  <main className='flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white overflow-hidden'>
    <h1 className='text-5xl font-bold text-electricBlue mb-6 animate-fadeSlide'>
      Welcome to TrackStack
    </h1>
    <p className='text-center text-lg text-gray-700 dark:text-gray-300 mb-8 animate-slideIn'>
      Organize your music library effortlessly.
    </p>
    <Link
      to='/organize-library'
      className='bg-softGreen text-white px-6 py-3 rounded-lg shadow-lg hover:bg-softGreen/90 hover:scale-105 transition-all duration-300'>
      Get Started
    </Link>
  </main>
);

export default LandingPage;
