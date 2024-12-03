import { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify'; // For notifications

const OrganizeDirectory = ({ directory }) => {
  const [organizedData, setOrganizedData] = useState(null);

  const handleOrganize = async () => {
    if (!directory) {
      alert('Please select a directory first.');
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:8080/api/organize-directory',
        {
          inputDirectory: directory,
          outputDirectory: `${directory}/Organized`,
        }
      );

      setOrganizedData(response.data);
      toast.success('Directory organized successfully!');
    } catch (error) {
      console.error('Error organizing directory:', error);
      toast.error('Failed to organize the directory.');
    }
  };

  return (
    <div className='text-center'>
      <button
        onClick={handleOrganize}
        className='bg-softGreen text-white px-6 py-3 rounded-lg shadow-md hover:scale-105 transition-all duration-300'>
        Organize Directory
      </button>
      {organizedData && (
        <pre className='mt-4 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm'>
          {JSON.stringify(organizedData, null, 2)}
        </pre>
      )}
    </div>
  );
};
OrganizeDirectory.propTypes = {
  directory: PropTypes.string.isRequired,
};

export default OrganizeDirectory;
