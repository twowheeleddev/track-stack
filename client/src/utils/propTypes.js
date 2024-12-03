import PropTypes from 'prop-types';

// PropTypes for the DirectorySelector component
export const directorySelectorPropTypes = {
  onDirectorySelect: PropTypes.func.isRequired,
};

// PropTypes for the OrganizeDirectory component
export const organizeDirectoryPropTypes = {
  directory: PropTypes.string.isRequired,
};

export const themeProviderPropTypes = {
  children: PropTypes.node.isRequired,
};

export const responsiveProviderPropTypes = {
  children: PropTypes.node.isRequired,
};

export const pageTransitionWrapperPropTypes = {
  children: PropTypes.node.isRequired, // Children should be a React node
  initial: PropTypes.object, // Animation initial state
  animate: PropTypes.object, // Animation animate state
  exit: PropTypes.object, // Animation exit state
  transition: PropTypes.object, // Animation transition properties
};

export const messagePropTypes = {
  type: PropTypes.oneOf(['success', 'error']).isRequired,
  text: PropTypes.string.isRequired,
};

export const actionButtonsPropTypes = {
  onClearDirectory: PropTypes.func.isRequired,
  onViewStats: PropTypes.func.isRequired,
};
