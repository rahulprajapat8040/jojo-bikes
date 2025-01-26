"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const RentalModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        bikeType: "",
        startDate: "",
        endDate: "",
        name: "",
        email: "",
        phone: "",
    });

    const bikeTypes = [
        { value: "scooty", label: "Scooty" },
        { value: "bullet", label: "Bullet" },
        { value: "ktm", label: "KTM" },
        { value: "harley", label: "Harley Davidson" },
        { value: "sports", label: "Sports Bike" },
    ];

    // Get today's date in YYYY-MM-DD format
    const today = new Date().toISOString().split('T')[0];

    // Handle date change with validation
    const handleDateChange = (e) => {
        const { name, value } = e.target;

        if (name === 'startDate') {
            setFormData(prev => ({
                ...prev,
                startDate: value,
                // Reset end date if it's before new start date
                endDate: prev.endDate && prev.endDate < value ? value : prev.endDate
            }));
        } else if (name === 'endDate') {
            setFormData(prev => ({
                ...prev,
                endDate: value
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Format the message for WhatsApp
        const message = `
*New Bike Rental Request*
------------------
*Bike Type:* ${formData.bikeType}
*Start Date:* ${formData.startDate}
*End Date:* ${formData.endDate}
*Customer Details:*
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
        `.trim();
    
        // Encode the message for URL
        const encodedMessage = encodeURIComponent(message);
        
        // Create WhatsApp link with your number
        const whatsappUrl = `https://wa.me/918503027210?text=${encodedMessage}`;
        
        // Open WhatsApp in new window
        window.open(whatsappUrl, '_blank');
        
        // Close the modal
        onClose();
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        className="bg-white rounded-2xl p-8 w-full max-w-md shadow-xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-2xl font-bold mb-6 text-gray-800">Book Your Ride</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Bike Type
                                </label>
                                <select
                                    name="bikeType"
                                    value={formData.bikeType}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 border outline-none px-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                >
                                    <option value="">Select a bike type</option>
                                    {bikeTypes.map((type) => (
                                        <option key={type.value} value={type.value}>
                                            {type.label}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm  font-medium text-gray-700 mb-1">
                                        Start Date
                                    </label>
                                    <input
                                        type="date"
                                        name="startDate"
                                        value={formData.startDate}
                                        onChange={handleDateChange}
                                        min={today}
                                        required
                                        className="w-full outline-none p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        End Date
                                    </label>
                                    <input
                                        type="date"
                                        name="endDate"
                                        value={formData.endDate}
                                        onChange={handleDateChange}
                                        min={formData.startDate || today}
                                        required
                                        className="w-full p-3 border outline-none border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 outline-none border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 outline-none border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 outline-none border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            <div className="flex gap-4 pt-4">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                                >
                                    Submit
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="button"
                                    onClick={onClose}
                                    className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors"
                                >
                                    Cancel
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default RentalModal;
