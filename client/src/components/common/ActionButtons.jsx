import { actionButtonsPropTypes } from '../../utils/propTypes';

const ActionButtons = ({ onClearDirectory, onViewStats }) => (
  <div className='flex justify-between mb-6'>
    <button
      onClick={onClearDirectory}
      className='bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition-all duration-300'>
      Clear Directory
    </button>
    <button
      onClick={onViewStats}
      className='bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300'>
      View Stats
    </button>
  </div>
);

ActionButtons.propTypes = actionButtonsPropTypes;

export default ActionButtons;
