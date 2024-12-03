import { useState } from 'react';
import PropTypes from 'prop-types';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import FallbackComponent from './FallbackComponent';

const ErrorBoundary = ({ children }) => {
  const [key, setKey] = useState(0);

  return (
    <ReactErrorBoundary
      FallbackComponent={FallbackComponent}
      onReset={() => {
        setKey(prevKey => prevKey + 1);
      }}>
      <div key={key}>{children}</div>
    </ReactErrorBoundary>
  );
};

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
