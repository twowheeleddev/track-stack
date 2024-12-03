import PropTypes from 'prop-types';

const FallbackComponent = ({ error, resetErrorBoundary }) => (
  <div className='flex flex-col items-center justify-center min-h-screen bg-red-100 text-red-900'>
    <h1 className='text-3xl font-bold mb-4'>Something went wrong.</h1>
    <p className='mb-4'>{error.message}</p>
    <button
      onClick={resetErrorBoundary}
      className='bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300'>
      Try Again
    </button>
  </div>
);

FallbackComponent.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
  }).isRequired,
  resetErrorBoundary: PropTypes.func.isRequired,
};

export default FallbackComponent;
