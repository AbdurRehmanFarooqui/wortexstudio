
// ========================== Gemini =========================== //
// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react";

// export default function Contact() {
//   return (
//     <section className="bg-white text-black py-24 px-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-5xl md:text-7xl font-black font-orbitron mb-4 tracking-tighter">
//             GET IN TOUCH
//           </h2>
//           <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
//             Ready to bring your vision to life? Whether it's a 3D environment or a full-scale web app, we're here to build it.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
//           {/* Left Side: Contact Info */}
//           <motion.div 
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="space-y-12"
//           >
//             <div>
//               <h3 className="text-2xl font-bold mb-6 font-quantico text-indigo-500">Contact Information</h3>
//               <div className="space-y-6">
//                 <a href="mailto:hello@wortex.studio" className="flex items-center gap-4 group">
//                   <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg group-hover:border-indigo-500 transition-colors">
//                     <Mail className="w-6 h-6 text-indigo-500" />
//                   </div>
//                   <div>
//                     <p className="text-sm text-zinc-500 uppercase tracking-widest font-bold">Email Us</p>
//                     <p className="text-xl">hello@wortex.studio</p>
//                   </div>
//                 </a>

//                 <div className="flex items-center gap-4 group">
//                   <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg group-hover:border-indigo-500 transition-colors">
//                     <Phone className="w-6 h-6 text-indigo-500" />
//                   </div>
//                   <div>
//                     <p className="text-sm text-zinc-500 uppercase tracking-widest font-bold">Call Us</p>
//                     <p className="text-xl">+1 (555) 000-WORTEX</p>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-4 group">
//                   <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg group-hover:border-indigo-500 transition-colors">
//                     <MapPin className="w-6 h-6 text-indigo-500" />
//                   </div>
//                   <div>
//                     <p className="text-sm text-zinc-500 uppercase tracking-widest font-bold">Studio Location</p>
//                     <p className="text-xl">Digital Nomad, Metaverse 101</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Socials */}
//             <div>
//               <h3 className="text-xl font-bold mb-6 font-quantico uppercase tracking-widest">Connect</h3>
//               <div className="flex gap-4">
//                 {[Github, Linkedin, Twitter].map((Icon, i) => (
//                   <a 
//                     key={i}
//                     href="#" 
//                     className="p-4 bg-zinc-900 border border-zinc-800 rounded-full text-white hover:bg-white hover:text-black hover:scale-110 transition-all duration-300"
//                   >
//                     <Icon className="w-6 h-6" />
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </motion.div>

//           {/* Right Side: Contact Form */}
//           <motion.div 
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="bg-zinc-900/80 border border-zinc-800 p-8 rounded-2xl backdrop-blur-sm"
//           >
//             <form className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="space-y-2">
//                   <label className="text-xs font-bold text-white uppercase">Full Name</label>
//                   <input 
//                     type="text" 
//                     placeholder="John Doe"
//                     className="w-full bg-white border border-zinc-800 p-4 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors"
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <label className="text-xs font-bold text-white uppercase">Email Address</label>
//                   <input 
//                     type="email" 
//                     placeholder="john@example.com"
//                     className="w-full bg-white border border-zinc-800 p-4 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors"
//                   />
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <label className="text-xs font-bold text-white uppercase">Subject</label>
//                 <select className="w-full bg-white border border-zinc-800 p-4 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors">
//                   <option>3D Development</option>
//                   <option>Web Design</option>
//                   <option>Brand Identity</option>
//                   <option>Other</option>
//                 </select>
//               </div>

//               <div className="space-y-2">
//                 <label className="text-xs font-bold text-white uppercase">Message</label>
//                 <textarea 
//                   rows={5}
//                   placeholder="Tell us about your project..."
//                   className="w-full bg-white border border-zinc-800 p-4 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors"
//                 />
//               </div>

//               <button className="w-full bg-indigo-600 hover:bg-indigo-500 py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all transform active:scale-95">
//                 Send Message <Send className="w-4 h-4" />
//               </button>
//             </form>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// }
// // ========================== Gemini =========================== //
// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react";

// export default function Contact() {
//   return (
//     <section className="bg-black text-white py-24 px-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-5xl md:text-7xl font-black font-orbitron mb-4 tracking-tighter">
//             GET IN TOUCH
//           </h2>
//           <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
//             Ready to bring your vision to life? Whether it's a 3D environment or a full-scale web app, we're here to build it.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
//           {/* Left Side: Contact Info */}
//           <motion.div 
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="space-y-12"
//           >
//             <div>
//               <h3 className="text-2xl font-bold mb-6 font-quantico text-indigo-500">Contact Information</h3>
//               <div className="space-y-6">
//                 <a href="mailto:hello@wortex.studio" className="flex items-center gap-4 group">
//                   <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg group-hover:border-indigo-500 transition-colors">
//                     <Mail className="w-6 h-6 text-indigo-500" />
//                   </div>
//                   <div>
//                     <p className="text-sm text-zinc-500 uppercase tracking-widest font-bold">Email Us</p>
//                     <p className="text-xl">hello@wortex.studio</p>
//                   </div>
//                 </a>

//                 <div className="flex items-center gap-4 group">
//                   <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg group-hover:border-indigo-500 transition-colors">
//                     <Phone className="w-6 h-6 text-indigo-500" />
//                   </div>
//                   <div>
//                     <p className="text-sm text-zinc-500 uppercase tracking-widest font-bold">Call Us</p>
//                     <p className="text-xl">+1 (555) 000-WORTEX</p>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-4 group">
//                   <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg group-hover:border-indigo-500 transition-colors">
//                     <MapPin className="w-6 h-6 text-indigo-500" />
//                   </div>
//                   <div>
//                     <p className="text-sm text-zinc-500 uppercase tracking-widest font-bold">Studio Location</p>
//                     <p className="text-xl">Digital Nomad, Metaverse 101</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Socials */}
//             <div>
//               <h3 className="text-xl font-bold mb-6 font-quantico uppercase tracking-widest">Connect</h3>
//               <div className="flex gap-4">
//                 {[Github, Linkedin, Twitter].map((Icon, i) => (
//                   <a 
//                     key={i}
//                     href="#" 
//                     className="p-4 bg-zinc-900 border border-zinc-800 rounded-full hover:bg-white hover:text-black hover:scale-110 transition-all duration-300"
//                   >
//                     <Icon className="w-6 h-6" />
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </motion.div>

//           {/* Right Side: Contact Form */}
//           <motion.div 
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl backdrop-blur-sm"
//           >
//             <form className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="space-y-2">
//                   <label className="text-xs font-bold text-zinc-500 uppercase">Full Name</label>
//                   <input 
//                     type="text" 
//                     placeholder="John Doe"
//                     className="w-full bg-black border border-zinc-800 p-4 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors"
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <label className="text-xs font-bold text-zinc-500 uppercase">Email Address</label>
//                   <input 
//                     type="email" 
//                     placeholder="john@example.com"
//                     className="w-full bg-black border border-zinc-800 p-4 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors"
//                   />
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <label className="text-xs font-bold text-zinc-500 uppercase">Subject</label>
//                 <select className="w-full bg-black border border-zinc-800 p-4 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors">
//                   <option>3D Development</option>
//                   <option>Web Design</option>
//                   <option>Brand Identity</option>
//                   <option>Other</option>
//                 </select>
//               </div>

//               <div className="space-y-2">
//                 <label className="text-xs font-bold text-zinc-500 uppercase">Message</label>
//                 <textarea 
//                   rows={5}
//                   placeholder="Tell us about your project..."
//                   className="w-full bg-black border border-zinc-800 p-4 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors"
//                 />
//               </div>

//               <button className="w-full bg-indigo-600 hover:bg-indigo-500 py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all transform active:scale-95">
//                 Send Message <Send className="w-4 h-4" />
//               </button>
//             </form>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// }




// ========================== GPT =========================== //
// export default function Contact() {
//   return (
//     <section className="border max-w-7xl mx-auto px-6 py-24">
//       {/* Heading */}
//       <h2 className="text-7xl font-orbitron text-center mb-20">
//         Contact
//       </h2>

//       {/* Content */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        
//         {/* ================= LEFT: CONTACT INFO ================= */}
//         <div className="space-y-10">
//           <div>
//             <h3 className="text-3xl font-semibold mb-4">Let’s work together</h3>
//             <p className="text-gray-600 max-w-md">
//               Have a project in mind or just want to say hello?
//               Feel free to reach out — I’m always open to new ideas and collaborations.
//             </p>
//           </div>

//           <div className="space-y-6">
//             <div>
//               <p className="text-sm uppercase tracking-widest text-gray-500">
//                 Email
//               </p>
//               <p className="text-lg font-medium">
//                 hello@yourdomain.com
//               </p>
//             </div>

//             <div>
//               <p className="text-sm uppercase tracking-widest text-gray-500">
//                 Phone
//               </p>
//               <p className="text-lg font-medium">
//                 +92 300 1234567
//               </p>
//             </div>

//             <div>
//               <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">
//                 Socials
//               </p>
//               <div className="flex gap-6">
//                 <a href="#" className="hover:opacity-70 transition">
//                   LinkedIn
//                 </a>
//                 <a href="#" className="hover:opacity-70 transition">
//                   GitHub
//                 </a>
//                 <a href="#" className="hover:opacity-70 transition">
//                   Instagram
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ================= RIGHT: CONTACT FORM ================= */}
//         <div className="border p-10">
//           <form className="space-y-8">
            
//             <div>
//               <label className="block text-sm mb-2">Name</label>
//               <input
//                 type="text"
//                 placeholder="Your name"
//                 className="w-full border px-4 py-3 outline-none focus:border-black transition"
//               />
//             </div>

//             <div>
//               <label className="block text-sm mb-2">Email</label>
//               <input
//                 type="email"
//                 placeholder="your@email.com"
//                 className="w-full border px-4 py-3 outline-none focus:border-black transition"
//               />
//             </div>

//             <div>
//               <label className="block text-sm mb-2">Message</label>
//               <textarea
//                 rows={5}
//                 placeholder="Tell me about your project..."
//                 className="w-full border px-4 py-3 outline-none resize-none focus:border-black transition"
//               />
//             </div>

//             <button
//               type="submit"
//               className="border px-8 py-3 font-medium hover:bg-black hover:text-white transition"
//             >
//               Send Message
//             </button>

//           </form>
//         </div>

//       </div>
//     </section>
//   );
// }


// ========================== DeepSeek =========================== //
// "use client"
// import { useState } from 'react';
// import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaPaperPlane } from 'react-icons/fa';
// import { SiGmail } from 'react-icons/si';

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     // Handle form submission here
//     console.log('Form submitted:', formData);
//     // Reset form
//     setFormData({ name: '', email: '', subject: '', message: '' });
//     alert('Thank you for your message! I\'ll get back to you soon.');
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const contactInfo = [
//     {
//       icon: <FaEnvelope className="text-2xl" />,
//       title: "Email",
//       detail: "hello@example.com",
//       link: "mailto:hello@example.com",
//       color: "bg-red-50 border-red-100 text-red-600"
//     },
//     {
//       icon: <FaPhone className="text-2xl" />,
//       title: "Phone",
//       detail: "+1 (555) 123-4567",
//       link: "tel:+15551234567",
//       color: "bg-green-50 border-green-100 text-green-600"
//     },
//     {
//       icon: <FaMapMarkerAlt className="text-2xl" />,
//       title: "Location",
//       detail: "San Francisco, CA",
//       link: "#",
//       color: "bg-blue-50 border-blue-100 text-blue-600"
//     }
//   ];

//   const socialLinks = [
//     {
//       icon: <FaLinkedin />,
//       name: "LinkedIn",
//       link: "https://linkedin.com/in/yourprofile",
//       color: "hover:bg-blue-100 text-blue-600"
//     },
//     {
//       icon: <FaGithub />,
//       name: "GitHub",
//       link: "https://github.com/yourusername",
//       color: "hover:bg-gray-100 text-gray-800"
//     },
//     {
//       icon: <FaTwitter />,
//       name: "Twitter",
//       link: "https://twitter.com/yourhandle",
//       color: "hover:bg-sky-100 text-sky-500"
//     },
//     {
//       icon: <SiGmail />,
//       name: "Gmail",
//       link: "mailto:youremail@gmail.com",
//       color: "hover:bg-red-100 text-red-500"
//     }
//   ];

//   return (
//     <div id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
//       {/* Header */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
//           Get In <span className="text-blue-600">Touch</span>
//         </h2>
//         <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//           Have a project in mind or want to discuss potential opportunities?
//           Feel free to reach out!
//         </p>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//         {/* Left Column - Contact Info */}
//         <div className="space-y-8">
//           {/* Contact Cards */}
//           <div className="space-y-6">
//             <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
//             {contactInfo.map((item, index) => (
//               <a
//                 key={index}
//                 href={item.link}
//                 className="flex items-center p-5 rounded-xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
//               >
//                 <div className={`p-3 rounded-lg ${item.color} mr-4`}>
//                   {item.icon}
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">{item.title}</p>
//                   <p className="text-lg font-medium text-gray-800">{item.detail}</p>
//                 </div>
//               </a>
//             ))}
//           </div>

//           {/* Social Links */}
//           <div>
//             <h3 className="text-2xl font-semibold text-gray-800 mb-6">Connect With Me</h3>
//             <div className="flex flex-wrap gap-4">
//               {socialLinks.map((social, index) => (
//                 <a
//                   key={index}
//                   href={social.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className={`flex items-center gap-2 px-5 py-3 rounded-lg border transition-all duration-300 hover:shadow-md ${social.color}`}
//                 >
//                   <span className="text-xl">{social.icon}</span>
//                   <span className="font-medium">{social.name}</span>
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Additional Info */}
//           <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
//             <h4 className="text-xl font-semibold text-gray-800 mb-4">Response Time</h4>
//             <p className="text-gray-600 mb-2">
//               📧 I typically respond to emails within 24 hours
//             </p>
//             <p className="text-gray-600">
//               💼 Available for freelance projects and full-time opportunities
//             </p>
//           </div>
//         </div>

//         {/* Right Column - Contact Form */}
//         <div className="bg-white rounded-2xl shadow-xl p-8">
//           <h3 className="text-2xl font-semibold text-gray-800 mb-8">Send me a message</h3>
          
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {/* Name Input */}
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
//                   Your Name *
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
//                   placeholder="John Doe"
//                 />
//               </div>

//               {/* Email Input */}
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                   Email Address *
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
//                   placeholder="john@example.com"
//                 />
//               </div>
//             </div>

//             {/* Subject Input */}
//             <div>
//               <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
//                 Subject *
//               </label>
//               <input
//                 type="text"
//                 id="subject"
//                 name="subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
//                 placeholder="Project Inquiry"
//               />
//             </div>

//             {/* Message Input */}
//             <div>
//               <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
//                 Your Message *
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 rows={6}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
//                 placeholder="Tell me about your project..."
//               />
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center gap-3"
//             >
//               <FaPaperPlane />
//               Send Message
//             </button>

//             <p className="text-sm text-gray-500 text-center mt-4">
//               * Required fields. Your information is safe with me.
//             </p>
//           </form>
//         </div>
//       </div>

//       {/* Footer Note */}
//       <div className="text-center mt-16 pt-8 border-t border-gray-200">
//         <p className="text-gray-600">
//           💬 Looking forward to hearing from you! Let's create something amazing together.
//         </p>
//         <p className="text-gray-500 text-sm mt-2">
//           © {new Date().getFullYear()} All rights reserved.
//         </p>
//       </div>
//     </div>
//   );
// }





"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react";

export default function Contact() {
  return (
    <section className="relative bg-black text-white py-24 px-6 overflow-hidden">
      {/* Decorative Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-8xl font-black font-orbitron mb-6 tracking-tighter italic">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-[#a600ff] to-pink-500">
              CONNECT
            </span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto font-quantico uppercase tracking-widest">
            Ready to breach the digital frontier? Let&apos;s build the future.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-xs font-black mb-8 font-quantico uppercase tracking-[0.4em] text-[#a600ff]">
                System Information
              </h3>
              
              <div className="space-y-4">
                {/* Email Item */}
                <a href="mailto:hello@wortex.studio" className="flex items-center gap-6 group p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all">
                  <div className="p-4 bg-zinc-950 border border-indigo-500/30 rounded-lg group-hover:border-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.2)] group-hover:shadow-indigo-500/40 transition-all">
                    <Mail className="w-6 h-6 text-indigo-500" />
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-1">Send Data</p>
                    <p className="text-xl font-orbitron group-hover:text-indigo-400 transition-colors">hello@wortex.studio</p>
                  </div>
                </a>

                {/* Phone Item */}
                <div className="flex items-center gap-6 group p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all">
                  <div className="p-4 bg-zinc-950 border border-[#a600ff]/30 rounded-lg group-hover:border-[#a600ff] shadow-[0_0_15px_rgba(166,0,255,0.2)] group-hover:shadow-[#a600ff]/40 transition-all">
                    <Phone className="w-6 h-6 text-[#a600ff]" />
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-1">Direct Line</p>
                    <p className="text-xl font-orbitron group-hover:text-[#a600ff] transition-colors">+1 (555) WORTEX</p>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-center gap-6 group p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all">
                  <div className="p-4 bg-zinc-950 border border-pink-500/30 rounded-lg group-hover:border-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.2)] group-hover:shadow-pink-500/40 transition-all">
                    <MapPin className="w-6 h-6 text-pink-500" />
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-1">HQ Coordinates</p>
                    <p className="text-xl font-orbitron group-hover:text-pink-400 transition-colors">Digital Nomad, Metaverse 101</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div>
              <h3 className="text-[10px] font-black mb-6 font-quantico uppercase tracking-[0.4em] text-zinc-500">Nodes</h3>
              <div className="flex gap-4">
                {[
                    { Icon: Github, color: 'hover:text-indigo-500' },
                    { Icon: Linkedin, color: 'hover:text-[#a600ff]' },
                    { Icon: Twitter, color: 'hover:text-pink-500' }
                ].map((item, i) => (
                  <a 
                    key={i}
                    href="#" 
                    className={`p-4 bg-zinc-950 border border-zinc-800 rounded-full text-zinc-400 ${item.color} hover:border-current hover:scale-110 transition-all duration-300 shadow-xl`}
                  >
                    <item.Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative p-[1px] rounded-2xl overflow-hidden group"
          >
            {/* Animated Gradient Border */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-[#a600ff] to-pink-500 opacity-30 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative bg-zinc-950 p-8 md:p-10 rounded-2xl backdrop-blur-xl">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-zinc-900/50 border border-zinc-800 p-4 rounded-lg focus:outline-none focus:border-[#a600ff] focus:ring-1 focus:ring-[#a600ff]/20 transition-all"
                      placeholder="USER_ID"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full bg-zinc-900/50 border border-zinc-800 p-4 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/20 transition-all"
                      placeholder="MAIL_ADR"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Service Module</label>
                  <select className="w-full bg-zinc-900/50 border border-zinc-800 p-4 rounded-lg focus:outline-none focus:border-pink-500 transition-all appearance-none text-zinc-400">
                    <option>3D Development</option>
                    <option>Web Design</option>
                    <option>Brand Identity</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Message Packet</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-zinc-900/50 border border-zinc-800 p-4 rounded-lg focus:outline-none focus:border-[#a600ff] transition-all resize-none"
                    placeholder="Describe the objective..."
                  />
                </div>

                <button className="w-full relative group py-4 overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-[#a600ff] to-pink-600 transition-transform duration-500 group-hover:scale-105" />
                  <span className="relative flex items-center justify-center gap-2 font-black font-orbitron text-sm tracking-widest">
                    INITIALIZE TRANSMISSION <Send className="w-4 h-4" />
                  </span>
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}