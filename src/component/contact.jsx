import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    loading: false,
    error: null,
    success: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: null, success: false });

    const formDataToSend = {
      access_key: '21232d55-2a17-4fac-bdab-c8ac1915426e',
      subject: 'New Contact Form Submission',
      from_name: formData.name,
      name: formData.name,
      email: formData.email,
      message: formData.message,
      // Add honeypot field
      botcheck: '',
      // Add spam prevention
      'h-captcha-response': ''
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formDataToSend)
      });

      const data = await response.json();
      
      if (data.success) {
        setStatus({ loading: false, error: null, success: true });
        setFormData({ name: '', email: '', message: '' });
        
        setTimeout(() => {
          setStatus(prev => ({ ...prev, success: false }));
        }, 3000);
      } else {
        throw new Error(data.message || 'Something went wrong!');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus({
        loading: false,
        error: error.message || 'Failed to send message. Please try again.',
        success: false
      });
    }
  };

  return (
    <div>
      <section className="px-4 py-4 bg-gray-900" id="contact">
        <div className="max-w-6xl mx-auto border-white border-t-2 pt-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-white text-center mb-16"
          >
            Get In Touch
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Phone</h3>
                  <p className="text-gray-400">+91 7972866251</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Email</h3>
                  <p className="text-gray-400">pawansham578@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Location</h3>
                  <p className="text-gray-400">Patna, Bihar</p>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot field to prevent spam */}
              <input 
                type="checkbox" 
                name="botcheck" 
                className="hidden" 
                style={{ display: 'none' }}
              />
              
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 text-white rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 outline-none transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 text-white rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 outline-none transition-colors"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 text-white rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 outline-none transition-colors"
                />
              </div>
              
              {status.error && (
                <div className="text-red-500 text-sm">{status.error}</div>
              )}
              
              {status.success && (
                <div className="text-green-500 text-sm">Message sent successfully!</div>
              )}

              <button
                type="submit"
                disabled={status.loading}
                className={`w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 ${
                  status.loading ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                <Send className="w-5 h-5" />
                <span>{status.loading ? 'Sending...' : 'Send Message'}</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;