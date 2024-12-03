import { useState } from 'react';
import DirectorySelector from '../../DirectorySelector';
import OrganizeDirectory from '../OrganizeDirectory';
import Message from '../logs/Message'; // Ensure this path matches your project structure
import ActionButtons from '../common/ActionButtons'; // Ensure this path matches your project structure

const OrganizeLibraryPage = () => {
  const [directory, setDirectory] = useState('');
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleDirectorySelect = selectedDirectory => {
    if (selectedDirectory) {
      setDirectory(selectedDirectory);
      setMessage({
        type: 'success',
        text: 'Directory selected successfully!',
      });

      // Automatically hide the success message after 5 seconds
      setTimeout(() => setMessage({ type: '', text: '' }), 5000);
    } else {
      setMessage({
        type: 'error',
        text: 'No directory selected. Please try again.',
      });

      // Automatically hide the error message after 5 seconds
      setTimeout(() => setMessage({ type: '', text: '' }), 5000);
    }
  };

  const handleClearDirectory = () => {
    setDirectory('');
    setMessage({ type: '', text: '' });
  };

  return (
    <main className='flex flex-col items-center justify-start min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white overflow-hidden p-6'>
      {/* Heading */}
      <h1
        className='text-4xl font-bold text-vibrantOrange mb-4 mt-10 animate-fadeSlide'
        style={{
          textShadow: '2px 2px 5px magenta',
          animationDuration: '2s',
        }}>
        Organize Your Library
      </h1>
      <p
        className='text-center text-lg text-gray-700 dark:text-gray-300 max-w-2xl mb-6'
        style={{ animationDuration: '2s' }}>
        {`Select a directory containing your music files and let
        TrackStack organize them effortlessly. We'll clean up
        duplicates, structure albums, and make your library neat.`}
      </p>

      {/* Directory Selector */}
      <DirectorySelector onDirectorySelect={handleDirectorySelect} />

      {/* Success or Error Message */}
      {message.type && (
        <Message
          type={message.type}
          text={message.text}
        />
      )}

      {/* Selected Directory and Actions */}
      {directory && (
        <div
          className='mt-8 w-full max-w-xl animate-slideIn'
          style={{ animationDuration: '2s' }}>
          <h2 className='text-2xl font-semibold text-center text-electricBlue mb-4'>
            Selected Directory:
          </h2>
          <p className='bg-gray-200 dark:bg-slate-800 text-gray-800 dark:text-gray-300 px-4 py-2 rounded-md shadow-md mb-4 text-center'>
            {directory}
          </p>

          {/* Action Buttons */}
          <ActionButtons
            onClearDirectory={handleClearDirectory}
            onViewStats={() =>
              alert(
                'Viewing directory stats (functionality to be added)'
              )
            }
          />

          {/* Organize Directory */}
          <OrganizeDirectory directory={directory} />
        </div>
      )}
    </main>
  );
};

export default OrganizeLibraryPage;
