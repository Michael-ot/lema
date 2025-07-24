import React from 'react';

interface EmptyStateProps {
    message?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({message}) => {
    return (
        <div className="text-center text-gray-400 py-12">
            <p>{message}</p>
        </div>
    );
}

export default EmptyState;
