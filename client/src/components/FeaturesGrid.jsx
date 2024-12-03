const FeaturesGrid = () => (
  <section
    id='features'
    className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-6'>
    <div className='p-4 bg-white dark:bg-gray-800 rounded shadow-lg'>
      <h2 className='text-2xl font-semibold'>Easy Organization</h2>
      <p className='mt-2'>
        Automatically sort and structure your music library.
      </p>
    </div>
    <div className='p-4 bg-white dark:bg-gray-800 rounded shadow-lg'>
      <h2 className='text-2xl font-semibold'>Custom Output</h2>
      <p className='mt-2'>
        Define where your organized library should go.
      </p>
    </div>
    <div className='p-4 bg-white dark:bg-gray-800 rounded shadow-lg'>
      <h2 className='text-2xl font-semibold'>Modern UI</h2>
      <p className='mt-2'>
        A sleek, responsive interface designed for ease of use.
      </p>
    </div>
  </section>
);

export default FeaturesGrid;
