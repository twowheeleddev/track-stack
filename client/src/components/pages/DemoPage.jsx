import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const steps = [
  {
    title: 'Step 1: Select Your Music Directory',
    description: 'Choose the folder containing your music files.',
    icon: '🎵',
  },
  {
    title: 'Step 2: Organize Your Library',
    description:
      'Click the organize button to clean up and structure your music library.',
    icon: '📁',
  },
  {
    title: 'Step 3: Enjoy Your Organized Library',
    description:
      'View the sorted files and enjoy a clutter-free music experience.',
    icon: '🎧',
  },
];

const DemoPage = () => (
  <main className='flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white overflow-hidden p-6'>
    <h1 className='text-4xl font-bold text-electricBlue mb-8 animate-fadeSlide'>
      How to Use TrackStack
    </h1>
    <div className='space-y-8'>
      {steps.map((step, index) => (
        <motion.div
          key={index}
          className='flex items-center space-x-4 bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg'
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.3, duration: 0.6 }}>
          <div className='text-4xl'>{step.icon}</div>
          <div>
            <h2 className='text-2xl font-semibold'>{step.title}</h2>
            <p className='text-lg text-gray-600 dark:text-gray-400'>
              {step.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
    <Link
      to='/organize-library'
      className='mt-8 bg-electricBlue text-white px-6 py-3 rounded-lg shadow-lg hover:bg-electricBlue/90 hover:scale-105 transition-all duration-300'>
      Get Started
    </Link>
  </main>
);

export default DemoPage;
