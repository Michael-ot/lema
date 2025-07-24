import React from 'react';

interface ErrorStateProps {
    message?: string;
    onRetry?: () => void;
}
  

const ErrorState: React.FC<ErrorStateProps>  = ({ message = "Something went wrong.", onRetry }) => {
    return (
        <div className="text-center text-red-500 py-12">
            <p className="mb-4">{message}</p>
            {onRetry && (
                <button
                    onClick={onRetry}
                    className="text-sm bg-red-100 hover:bg-red-200 text-red-700 px-4 py-2 rounded"
                >
                    Retry
                </button>
            )}
        </div>
    );
}

export default ErrorState;

  
  