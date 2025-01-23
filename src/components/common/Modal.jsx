'use client'
import { motion } from 'motion/react'
const Modal = ({ isOpen, onClose, title, description }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-modal-enter">
                <div className="sticky top-0 bg-gradient-to-r from-red-500 to-yellow-600  p-6 rounded-t-xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{title}</h2>
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-white hover:text-blue-100 transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="p-6">
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                        {description}
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default Modal;
