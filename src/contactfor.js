// useContactForm.js
import { useState } from 'react';

const useContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    if (!formData.name || !formData.email || !formData.message) {
      setSubmitMessage('Please fill in all fields.');
      setIsSubmitting(false);
      return;
    }

    try {
      // *** This is the crucial change: Target your Netlify Function endpoint ***
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to send message from server.');
      }

      setSubmitMessage('Message sent successfully! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' }); // Clear form

    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitMessage(`Failed to send message: ${error.message || 'Please try again.'}`);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(null), 5000);
    }
  };

  return {
    formData,
    isSubmitting,
    submitMessage,
    handleInputChange,
    handleFormSubmit
  };
};

export default useContactForm;