import { motion } from 'framer-motion';
import { pageTransitionWrapperPropTypes } from '../../utils/propTypes';

const PageTransitionWrapper = ({
  children,
  initial = { opacity: 0, y: 20 },
  animate = { opacity: 1, y: 0 },
  exit = { opacity: 0, y: -20 },
  transition = { duration: 0.5, ease: 'easeOut' },
}) => {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      exit={exit}
      transition={transition}
      className='h-full w-full'>
      {children}
    </motion.div>
  );
};

// Define PropTypes for validation
PageTransitionWrapper.propTypes = pageTransitionWrapperPropTypes;

export default PageTransitionWrapper;
