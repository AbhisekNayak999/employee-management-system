import React, { useEffect } from 'react';

const Success = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="success-popup shadow">
      <span>✅ {message}</span>
    </div>
  );
};

export default Success;
