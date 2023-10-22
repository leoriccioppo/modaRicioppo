import React from 'react';
import { useLoading } from '../../contexts/loadingContext.jsx';


const Loading = () => {
  const { isVisible } = useLoading();

  return isVisible ? (
    <div className="loading-overlay">
      <div className="loading-spinner"></div>
    </div>
  ) : null;
};

export { Loading };