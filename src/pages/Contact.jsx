


import emailjs from '@emailjs/browser';
import { useState, useEffect } from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { Mail, Send, Github, Linkedin, MessageSquare } from 'lucide-react';

function Contact() {
  const [loading, setLoading] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      setMousePosition({ x: (clientX / innerWidth - 0.5) * 20, y: (clientY / innerHeight - 0.5) * 20 });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const currentTime = new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' });

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { ...formData, time: currentTime },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert('Message sent successfully 🚀');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        alert('Failed to send message ❌');
      })
      .finally(() => setLoading(false));
  };

  const handleMouseMoveCard = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 30;
    setMousePosition({ x, y });
  };

  return (
    <LazyMotion features={domAnimation}>
      <section id="contact" className="min-h-screen overflow-hidden" onMouseMove={handleMouseMoveCard}>
        {/* Only top & bottom padding adjusted for sm */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">

          {/* Header */}
          <m.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-12 sm:mb-16 lg:mb-24">
            <m.div className="flex justify-center items-center gap-3 sm:gap-4 mb-3 sm:mb-4 flex-col sm:flex-row">
              <Mail className="max-sm:hidden w-10 h-10 sm:w-12 sm:h-12 text-cyan-400 flex-shrink-0" />
              <m.div variants={itemVariants}>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-2 sm:mb-4">
                  Get In Touch
                </h1>
                <div className="h-1.5 w-20 mx-auto sm:mx-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
              </m.div>
            </m.div>
            <p className="text-lg sm:text-xl text-gray-400 max-w-xl sm:max-w-2xl mx-auto">
              Have a project in mind or just want to chat? Feel free to reach out.
            </p>
          </m.div>

          {/* Grid: Card + Form */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-20 items-start">

            {/* Animated Tilt Card */}
            <m.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="order-2 lg:order-1">
              <div
                className="relative perspective-1000 rounded-3xl p-4 sm:p-6 lg:p-12 border border-cyan-500/20 shadow-2xl backdrop-blur-xl bg-gradient-to-br from-gray-800/40 via-gray-900/40 to-gray-800/40"
                style={{
                  transform: `rotateX(${mousePosition.y * 0.3}deg) rotateY(${mousePosition.x * 0.3}deg)`,
                  transition: 'transform 0.3s ease-out',
                  boxShadow: '0 0 80px rgba(6, 182, 212, 0.15), inset 0 0 40px rgba(6, 182, 212, 0.05)',
                }}
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 blur-xl" />
                <div className="relative z-10 text-center space-y-4 sm:space-y-6">
                  <m.div
                    animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 shadow-lg"
                  >
                    <MessageSquare className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-400" />
                  </m.div>

                  <div className="space-y-1 sm:space-y-2">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Let's Build Something</h3>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Meaningful</h3>
                    <p className="text-gray-400 text-base sm:text-lg">Turn your ideas into reality with clean code and thoughtful design.</p>
                  </div>

                  <div className="flex justify-center gap-3 sm:gap-6 pt-4 sm:pt-6 flex-wrap">
                    {[ 
                      { icon: Github, href: 'https://github.com/premshankarrai2005', label: 'GitHub' },
                      { icon: Linkedin, href: 'https://www.linkedin.com/in/prem-shankar-rai-11910728a/', label: 'LinkedIn' },
                      { icon: Mail, href: 'mailto:premshankarrai2005@gmail.com', label: 'Email' }
                    ].map((social, index) => (
                      <m.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        className="group relative inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                      >
                        <social.icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-300" />
                      </m.a>
                    ))}
                  </div>
                </div>
              </div>
            </m.div>

            {/* Contact Form */}
            <m.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="order-1 lg:order-2">
              <div className="relative backdrop-blur-xl bg-gradient-to-br from-gray-800/40 via-gray-900/40 to-gray-800/40 rounded-3xl p-4 sm:p-6 lg:p-12 border border-gray-700/50 shadow-2xl">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/5 to-blue-500/5" />
                <form onSubmit={handleSubmit} className="relative z-10 space-y-4 sm:space-y-6">

                  {/* Name */}
                  <div className="space-y-1 sm:space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-gray-900/50 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all duration-300"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1 sm:space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-gray-900/50 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all duration-300"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1 sm:space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project..."
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-gray-900/50 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all duration-300 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <m.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`relative w-full px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold overflow-hidden group transition-all duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative flex items-center justify-center gap-2">
                      {loading ? 'Sending...' : 'Send Message'}
                      {!loading && <Send className="w-5 h-5" />}
                    </span>
                  </m.button>

                </form>
              </div>
            </m.div>

          </div>
        </div>
      </section>
    </LazyMotion>
  );
}

export default Contact;


