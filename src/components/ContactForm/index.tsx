import React, { useState } from 'react';
import classes from './styles.module.scss';
import MainButton from '../MainButton';
import InputField from '../InputField';

interface FormData {
    name: string;
    email: string;
    message: string;
}

export const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState<Partial<FormData>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name as keyof FormData]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = (): boolean => {
        const newErrors: Partial<FormData> = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            // For now, just log the data. In a real app, you'd send to a backend
            console.log('Contact form submitted:', formData);

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Reset form
            setFormData({
                name: '',
                email: '',
                message: ''
            });

            alert('Thank you for your message! We\'ll get back to you soon.');
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('There was an error sending your message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={classes.ContactForm}>
            <h3 className={classes.formTitle}>Get in Touch</h3>
            <form onSubmit={handleSubmit} className={classes.form}>
                <InputField
                    label="Name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name}
                    placeholder="Your full name"
                    className={classes.fieldGroup}
                />

                <InputField
                    label="Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    placeholder="your.email@example.com"
                    className={classes.fieldGroup}
                />

                <div className={classes.fieldGroup}>
                    <label htmlFor="message" className={classes.label}>Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className={`${classes.textarea} ${errors.message ? classes.inputError : ''}`}
                        placeholder="Tell us about your project or inquiry..."
                        rows={5}
                    />
                    {errors.message && <span className={classes.error}>{errors.message}</span>}
                </div>

                <MainButton
                    type="submit"
                >
                    {isSubmitting ? 'Sending...' : 'Submit'}
                </MainButton>
            </form>
        </div>
    );
};

export default ContactForm;
