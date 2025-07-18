import React from 'react';

interface ErrorDisplayProps {
  message: string;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ message }) => {
  return (
    <div className="bg-red-900 border-l-4 border-red-500 text-red-100 p-4 rounded-lg shadow-md max-w-2xl mx-auto" role="alert">
      <p className="font-bold">Oops! Something went wrong.</p>
      <p>{message}</p>
    </div>
  );
};

export default ErrorDisplay;