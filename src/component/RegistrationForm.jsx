import { useState } from 'react';
import './RegistrationForm.css';
import { PiEyeLight, PiEyeSlash } from 'react-icons/pi';

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
            newErrors.email = 'Email is required';
        }
        if (!formData.contact.trim()) {
            newErrors.contact = 'Contact number is required';
        }
        if (!formData.password.trim()) {
            newErrors.password = 'Password is required';
        }
        if (!formData.confirmPassword.trim()) {
            newErrors.confirmPassword = 'Confirm Password is required';
        }
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    return { formData, setFormData, errors, validateForm };
};

const RegistrationForm = () => {
    const [showPass, setShowPass] = useState(false)
    const [showConfirmPass, setShowConfirmPass] = useState(false)
    const { formData, setFormData, errors, validateForm } = useFormValidation();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted with data:', formData);
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                contact: '',
                password: '',
                confirmPassword: ''
            });
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
                        {errors.lastName && <span className="error">{errors.lastName}</span>}

                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="input"
                        />
                        {errors.email && <span className="error">{errors.email}</span>}

                        <input
                            type="text"
                            placeholder="Contact"
                            name="contact"
                            value={formData.contact}
                            onChange={handleInputChange}
                            className="input"
                        />
                        {errors.contact && <span className="error">{errors.contact}</span>}

                        <div className="main">
                            <input
                                type={showPass ? "text" : "password"}
                                name="password"
                                placeholder="password"
                                className="input input-bordered"
                                required
                                value={formData.password}
                                onChange={handleInputChange}
                            />
                            {errors.password && <span className="error">{errors.password}</span>}
                            <div className="password-toggle">
                                <p
                                    onClick={() => setShowPass(!showPass)}
                                    className="toggle-icon"
                                >
                                    {showPass ? (
                                        <PiEyeLight />
                                    ) : (
                                        <PiEyeSlash />
                                    )}
                                </p>
                            </div>
                        </div>

                        <div className="main">
                            <input
                                type={showConfirmPass ? "text" : "password"}
                                name="confirmPassword"
                                placeholder="confirm password"
                                className="input input-bordered"
                                required
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                            />
                            {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
                            <div className="password-toggle">
                                <p
                                    onClick={() => setShowConfirmPass(!showConfirmPass)}
                                    className="toggle-icon"
                                >
                                    {showConfirmPass ? (
                                        <PiEyeLight />
                                    ) : (
                                        <PiEyeSlash />
                                    )}
                                </p>
                            </div>
                        </div>

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
