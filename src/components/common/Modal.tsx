import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({isOpen, onClose, children }) => {
    if (!isOpen) return null;
    
    return (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center px-2 z-50">
            <div className="bg-white p-6 rounded-lg w-full max-w-2xl shadow-lg relative">
                {children}
            </div>
        </div>
    );
}

export default Modal;
