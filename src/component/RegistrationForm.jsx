import { useState } from 'react';
import './RegistrationForm.css';

const useFormValidation = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        contact: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First Name is required';
        }
        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last Name is required';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'email must be required';
        }
        if (!formData.contact.trim()) {
            newErrors.contact = 'contact number is required';
        }
        if (!formData.password.trim()) {
            newErrors.password = 'please password is required';
        }
        if (!formData.confirmPassword.trim()) {
            newErrors.confirmPassword = 'please confirmPassword is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    return { formData, setFormData, errors, validateForm };
};

const RegistrationForm = () => {
    const { formData, setFormData, errors, validateForm } = useFormValidation();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted with data:', formData);
        } else {
            console.log('Form has validation errors. Please fix them.');
        }
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <div className="background-image-wrapper">
            <div className="container">
                <div className="registration-form">
                    <h2 className="form-title">Account Register</h2>
                    <div className="form">
                        <input
                            type="text"
                            placeholder="First Name"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="input"
                        />
                        {errors.firstName && <span className="error">{errors.firstName}</span>}

                        <input
                            type="text"
                            placeholder="Last Name"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="input"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="input"
                        />
                        <input
                            type="text"
                            placeholder="Contact"
                            name="contact"
                            value={formData.contact}
                            onChange={handleInputChange}
                            className="input"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            className="input"
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            className="input"
                        />

                        <input
                            className="btn"
                            type="button"
                            value={"REGISTER"}
                            onClick={handleSubmit}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationForm;
