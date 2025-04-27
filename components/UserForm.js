import { useState } from 'react';

export default function UserForm() {
    const [formData, setFormData] = useState({
        userEmail: '',
        userPassword: '',
        username: '',
        userLineId: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.userEmail) {
            newErrors.userEmail = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.userEmail)) {
            newErrors.userEmail = 'Email is invalid';
        }

        if (!formData.userPassword) {
            newErrors.userPassword = 'Password is required';
        } else if (formData.userPassword.length < 4) {
            newErrors.userPassword = 'Password must be at least 4 characters';
        }

        if (!formData.username) {
            newErrors.username = 'Username is required';
        }

        if (!formData.userLineId) {
            newErrors.userLineId = 'Line ID is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsSubmitted(true);
            console.log('Form submitted:', formData);
            // Here you can add your form submission logic
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">User Registration</h2>

            {isSubmitted ? (
                <div className="text-green-600 text-center">
                    Form submitted successfully!
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="userEmail"
                            value={formData.userEmail}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                        />
                        {errors.userEmail && <p className="text-red-500 text-sm">{errors.userEmail}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            name="userPassword"
                            value={formData.userPassword}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                        />
                        {errors.userPassword && <p className="text-red-500 text-sm">{errors.userPassword}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Username</label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                        />
                        {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Line ID</label>
                        <input
                            type="text"
                            name="userLineId"
                            value={formData.userLineId}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                        />
                        {errors.userLineId && <p className="text-red-500 text-sm">{errors.userLineId}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                    >
                        Submit
                    </button>
                </form>
            )}
        </div>
    );
} 