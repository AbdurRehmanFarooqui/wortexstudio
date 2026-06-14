"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, Instagram, Facebook } from "lucide-react";

export default function Contact() {
  // Form state tracking based on your API schema
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "Web Engineering", // matches your first option default
    budget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  // Handle inputs dynamically
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Form Submission Logic
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Transmission Successful!");
        setIsSent(true);
        // Clear form fields
        setFormData({
          name: "",
          email: "",
          category: "Web Engineering",
          budget: "",
          message: "",
        });
      } else {
        console.error("Transmission Failed:", await response.text());
      }
    } catch (error) {
      console.error("Network Error during transmission:", error);
    } finally {
      setIsSubmitting(false);
      // Hide the sent notification after 5 seconds
      setTimeout(() => setIsSent(false), 5000);
    }
  };

  return (
    <section className="relative bg-black text-white py-24 px-6 overflow-hidden pb-60">

      {/* Floating Notification */}
      {isSent && (
        <div className="fixed left-1/2 -translate-x-1/2 w-70 h-16 bg-white/12 border border-white/20 z-100 rounded-full backdrop-blur-sm text-white shadow-lg shadow-purple-500/30 animate-[slideDown_0.4s_ease-out_forwards]" >
          <div className="flex items-center justify-center h-full gap-4 font-quantico text-base uppercase tracking-widest ">
            <Mail className="w-5 h-5 text-indigo-500" />
            <span>Message Sent</span>
          </div>
        </div>
      )}

      {/* Decorative Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-20"
        >
          <h2 className="text-4xl md:text-8xl font-black font-orbitron mb-6 tracking-tighter italic">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-[#a600ff] to-pink-500">
              CONNECT
            </span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-lg max-w-xl mx-auto font-quantico uppercase tracking-widest">
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
                <a href="mailto:hello@wortex.studio" className="flex items-center gap-4 md:gap-6 group p-2 md:p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all">
                  <div className="p-4 bg-zinc-950 border border-indigo-500/30 rounded-lg group-hover:border-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.2)] group-hover:shadow-indigo-500/40 transition-all">
                    <Mail className="w-6 h-6 text-indigo-500" />
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-1">Send Data</p>
                    <p className="md:text-xl font-orbitron group-hover:text-indigo-400 transition-colors">wortexstudio.official@gmail.com</p>
                  </div>
                </a>

                {/* Phone Item */}
                <div className="flex items-center gap-4 md:gap-6 group p-2 md:p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all">
                  <div className="p-4 bg-zinc-950 border border-[#a600ff]/30 rounded-lg group-hover:border-[#a600ff] shadow-[0_0_15px_rgba(166,0,255,0.2)] group-hover:shadow-[#a600ff]/40 transition-all">
                    <Phone className="w-6 h-6 text-[#a600ff]" />
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-1">Direct Line</p>
                    <p className="md:text-xl font-orbitron group-hover:text-[#a600ff] transition-colors">+92 331 8966762</p>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-center gap-4 md:gap-6 group p-2 md:p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all">
                  <div className="p-4 bg-zinc-950 border border-pink-500/30 rounded-lg group-hover:border-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.2)] group-hover:shadow-pink-500/40 transition-all">
                    <MapPin className="w-6 h-6 text-pink-500" />
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-1">HQ Coordinates</p>
                    <p className="md:text-xl font-orbitron group-hover:text-pink-400 transition-colors">24.918626, 67.124186</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div>
              <h3 className="text-[10px] font-black mb-6 font-quantico uppercase tracking-[0.4em] text-zinc-500">Nodes</h3>
              <div className="flex gap-4">
                {[
                  { Icon: Facebook, color: 'hover:text-[#3b5998]', link: 'https://www.facebook.com/wortexstudio' },
                  { Icon: Instagram, color: 'hover:text-[#E1306C]', link: 'https://www.instagram.com/wortexstudio' },
                  { Icon: Twitter, color: 'hover:text-[#1DA1F2]', link: 'https://x.com/wortexstudio' }
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 bg-zinc-950 border border-zinc-800 rounded-full text-zinc-400 ${item.color} hover:border-current hover:scale-110 transition-all duration-300 shadow-xl`}
                  >
                    <item.Icon className="w-5 h-5 md:w-6 md:h-6" />
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

            <div className="relative bg-zinc-950 p-4 md:p-8 md:p-10 rounded-2xl backdrop-blur-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full text-sm md:text-md bg-zinc-900/50 border border-zinc-800 p-4 rounded-lg focus:outline-none focus:border-[#a600ff] focus:ring-1 focus:ring-[#a600ff]/20 transition-all"
                      placeholder="User Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full text-sm md:text-md bg-zinc-900/50 border border-zinc-800 p-4 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/20 transition-all"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Service Module</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full text-sm md:text-md bg-zinc-900 border border-zinc-800 p-4 rounded-lg focus:outline-none focus:border-pink-500 transition-all appearance-none text-zinc-400"
                  >
                    <option>Web Engineering</option>
                    <option>3D Development</option>
                    <option>AI Integration</option>
                    <option>Motion Design</option>
                    <option>Other / Custom</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Budget (in USD)</label>
                  <input
                    type="number"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-full text-sm md:text-md bg-zinc-900 border border-zinc-800 p-4 rounded-lg focus:outline-none focus:border-[#a600ff] transition-all resize-none"
                    placeholder="2000"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Message Packet</label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full text-sm md:text-md bg-zinc-900 border border-zinc-800 p-4 rounded-lg focus:outline-none focus:border-[#a600ff] transition-all resize-none"
                    placeholder="Describe the objective..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full relative group py-4 overflow-hidden rounded-lg disabled:opacity-50"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-[#a600ff] to-pink-600 transition-transform duration-500 group-hover:scale-105" />
                  <span className="relative flex items-center justify-center gap-2 font-black font-orbitron text-xs tracking-widest px-6 md:px-0">
                    {isSubmitting ? "TRANSMITTING..." : "INITIALIZE TRANSMISSION"} <Send className="w-6 h-6" />
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