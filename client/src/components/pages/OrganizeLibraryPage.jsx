import { useState } from 'react';
import DirectorySelector from '../../DirectorySelector';
import OrganizeDirectory from '../OrganizeDirectory';

const OrganizeLibraryPage = () => {
  const [directory, setDirectory] = useState('');

  return (
    <main className='flex flex-col items-center justify-center p-6 min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white'>
      <h1 className='text-4xl font-bold text-vibrantOrange mb-6 animate-fadeSlide'>
        Organize Your Library
      </h1>
      <DirectorySelector onDirectorySelect={setDirectory} />
      {directory && (
        <div className='mt-6 w-full max-w-xl'>
          <OrganizeDirectory directory={directory} />
        </div>
      )}
    </main>
  );
};

export default OrganizeLibraryPage;
