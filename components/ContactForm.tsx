import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import PhoneIcon from './icons/PhoneIcon';
import FacebookIcon from './icons/FacebookIcon';
import InstagramIcon from './icons/InstagramIcon';
import YoutubeIcon from './icons/YoutubeIcon';
// import quoteBackground from './images/quoteback.jpg';

const ContactForm: React.FC = () => {
const [formData, setFormData] = useState({
  name: '',
  business: '',
  email: '',
  phone: '',
  message: '',
});


  const [status, setStatus] = useState('');

  const socialLinks = [
    { Icon: FacebookIcon, name: 'Vilerapakistan', href: 'https://www.facebook.com/vilerapakistan', target: '_blank' },
    { Icon: InstagramIcon, name: 'Vilerapakistan', href: 'https://www.instagram.com/vilerapakistan', target: '_blank' },
    { Icon: YoutubeIcon, name: 'Vilerapakistan', href: 'https://www.youtube.com/@vilerapakistan', target: '_blank' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setStatus('Sending...');

  const dataToSend = {
    ...formData,
    time: new Date().toLocaleString(), // ✅ adds readable date/time
  };

  emailjs
      .send(
        'service_21zcnty', // 🔹 replace with your EmailJS service ID
        'template_s8mz2il', // 🔹 replace with your EmailJS template ID
        dataToSend,
        '8gEdBrbcPmTxKmioD'   // 🔹 replace with your EmailJS public key
      )
    .then(
      () => {
        setStatus('✅ Email sent successfully!');
        setFormData({ name: '', business: '', email: '', phone: '', message: '' });
      },
      (error) => {
        console.error('EmailJS Error:', error);
        setStatus('❌ Failed to send email.');
      }
    );
};


  const inputClass =
    "w-full bg-white/10 backdrop-blur-md rounded-md p-4 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-vilera-green-light transition duration-300";

  return (
    <div
      className="relative z-10 bg-[#131313] rounded-3xl lg:rounded-[68px] shadow-2xl p-8 md:p-16 lg:p-24 overflow-hidden w-full min-h-[80vh]"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      <div id="contact" className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Side */}
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-white leading-tight">
            Secure Your Custom Wholesale Quotation.
          </h2>
          <p className="mt-6 text-lg text-gray-300">
            For bulk or high-volume orders, simply share your details, and our representative will reach out to you within 24 hours with customized solutions and exclusive offers.
          </p>

          <div className="mt-12">
            <h3 className="text-lg font-roboto font-bold text-white">Direct Contact:</h3>
            <a
              href="tel:0324-1143720"
              className="mt-3 inline-flex items-center bg-white/10 backdrop-blur-md rounded-md py-2 px-4 shadow-inner hover:bg-white/20 transition-colors"
            >
              <PhoneIcon className="w-5 h-5 text-white" />
              <span className="ml-3 text-white font-poppins">0324-1143720</span>
            </a>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-roboto font-bold text-white">Our Social Media:</h3>
            <div className="mt-3 flex flex-wrap gap-4">
              {socialLinks.map(({ Icon, name, href }) => (
                <a
                  key={name}
                  href={href}
                  className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-md py-2 px-4 shadow-inner hover:bg-white/20 transition-colors"
                >
                  <Icon className="w-5 h-5 text-white" />
                  <span className="ml-3 text-white font-poppins">{name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side (Form) */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="Enter Your Name"
              className={inputClass}
              required
            />
            <input
              name="business"
              value={formData.business}
              onChange={handleChange}
              type="text"
              placeholder="Enter Business Name"
              className={inputClass}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Email"
              className={inputClass}
              required
            />
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="tel"
              placeholder="Contact Number"
              className={inputClass}
              required
            />
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write Message....."
            rows={5}
            className={inputClass}
            required
          ></textarea>

          <button
            type="submit"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-vilera-green-light to-vilera-green-dark text-white font-poppins font-bold text-lg rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Get Quotation
          </button>

          {status && <p className="text-white mt-4">{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
