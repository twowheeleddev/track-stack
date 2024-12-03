import { responsiveProviderPropTypes } from '../utils/propTypes';

const ResponsiveProvider = ({ children }) => {
  return (
    <div className='min-h-screen w-full overflow-hidden p-4 sm:p-6 md:p-10'>
      {children}
    </div>
  );
};

ResponsiveProvider.propTypes = responsiveProviderPropTypes;

export default ResponsiveProvider;
