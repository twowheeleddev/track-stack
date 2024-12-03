import { useState } from 'react';
import axios from 'axios';
import { directorySelectorPropTypes } from './utils/propTypes';

const DirectorySelector = ({ onDirectorySelect }) => {
  const [selectedDirectory, setSelectedDirectory] = useState('');

  const handleSelectDirectory = async () => {
    try {
      const response = await axios.get(
        'http://localhost:8080/api/select-directory'
      );
      const directoryArray = response.data.directory; // Backend returns an array

      if (
        Array.isArray(directoryArray) &&
        directoryArray.length > 0
      ) {
        const directory = directoryArray[0]; // This was giving me loads of trouble for the longest time. the solution was so obvious once I found it. I wasn't using the first entry in the array that gets returned from the selected directory by the node-file-dialog method for selecting a directory. So i kept getting the error for for the function expecting a string but was getting an array.
        setSelectedDirectory(directory);
        console.log('Directory selected:', directory);
        if (onDirectorySelect) {
          onDirectorySelect(directory); // Pass the directory string to the parent
        }
      } else {
        console.error('Invalid directory format:', directoryArray);
        alert('No valid directory selected.');
      }
    } catch (error) {
      console.error('Error selecting directory:', error);
      alert(
        'Failed to select a directory. Ensure the backend is running.'
      );
    }
  };

  return (
    <div className='text-center'>
      <button
        onClick={handleSelectDirectory}
        className='bg-electricBlue text-white px-6 py-3 rounded-lg shadow-md hover:scale-105 transition-all duration-300'>
        Select Directory
      </button>
      {selectedDirectory && (
        <p className='mt-4 text-lg'>{selectedDirectory}</p>
      )}
    </div>
  );
};

DirectorySelector.propTypes = directorySelectorPropTypes;

export default DirectorySelector;
