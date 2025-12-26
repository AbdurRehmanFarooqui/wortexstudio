
// function TestmonialCard() {
//   return (
//     <div className="bg-white rounded-sm p-4 m-4 h-full border-2 border-purple-500 aspect-[4/5] flex flex-col shadow-md transition-all duration-200 ease-in-out hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105 hover:cursor-pointer">
//       <div className='flex flex-col pt-2 justify-center items-center h-full'>
//         <p className='font-spectral text-lg'><span className="text-amber-500 text-7xl">"</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptatum velit fuga impedit vel omnis enim beatae quae aliquid, sunt dolor quo numquam perspiciatis aut labore dignissimos, facilis fugiat eaque. <span >"</span></p>
//         <p className='w-full text-center p-8 font-bold text-xl'>John doe</p>
//       </div>
//     </div>
//   )
// }

// export default function Testimonials() {
//   return (
//     <div className="h-dvh  flex flex-col items-center border max-w-7xl mx-auto pt-40">
//       <h2 className="text-7xl pb-20">Testimonials</h2>
//       <div className="h-[50%] flex items-center justify-center p-4">

//       <TestmonialCard/>
//       <TestmonialCard/>
//       <TestmonialCard/>
//       </div>
//     </div>
//   );
// }



// "use client"
// import { useState, useEffect } from 'react';
// import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// function TestimonialCard({
//   quote,
//   author,
//   role,
//   rating = 5,
// }: {
//   quote: string;
//   author: string;
//   role?: string;
//   rating?: number;
// }) {
//   return (
//     <div className="group relative bg-white rounded-2xl p-10 mx-4 h-full border border-gray-200 shadow-xl transition-all duration-700 ease-out hover:shadow-2xl hover:shadow-purple-500/25 hover:-translate-y-6 hover:border-purple-400 overflow-hidden flex-shrink-0 w-full max-w-lg">
//       {/* Gradient overlay */}
//       <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

//       <div className="relative z-10 flex flex-col h-full">
//         {/* Stars */}
//         <div className="flex mb-6">
//           {[...Array(5)].map((_, i) => (
//             <FaStar
//               key={i}
//               className={`w-6 h-6 transition-colors ${
//                 i < rating ? 'text-amber-500' : 'text-gray-300'
//               }`}
//             />
//           ))}
//         </div>

//         {/* Opening quote */}
//         <div className="text-7xl text-purple-200 font-serif leading-none mb-4 -ml-3">
//           “
//         </div>

//         {/* Quote */}
//         <p className="text-gray-700 text-lg leading-relaxed flex-1 font-light italic">
//           {quote}
//         </p>

//         {/* Closing quote */}
//         <div className="text-7xl text-purple-200 font-serif leading-none text-right -mr-3 mt-4">
//           ”
//         </div>

//         {/* Author */}
//         <div className="mt-10 pt-6 border-t border-gray-100">
//           <p className="font-bold text-gray-900 text-xl">{author}</p>
//           {role && <p className="text-gray-500 text-base mt-1">{role}</p>}
//         </div>
//       </div>

//       {/* Decorative corner */}
//       <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-400 to-amber-400 rounded-bl-full opacity-0 group-hover:opacity-10 transition-opacity duration-700" />
//     </div>
//   );
// }

// export default function Testimonials() {
//   const testimonials = [
//     {
//       quote:
//         "This product has completely transformed how we work. The attention to detail and customer support is unmatched.",
//       author: "Sarah Johnson",
//       role: "CEO at TechCorp",
//       rating: 5,
//     },
//     {
//       quote:
//         "I've tried many solutions, but this one stands out. It's intuitive, powerful, and beautifully designed.",
//       author: "Michael Chen",
//       role: "Product Designer",
//       rating: 5,
//     },
//     {
//       quote:
//         "Outstanding experience from start to finish. The team truly cares about their customers' success.",
//       author: "Emma Williams",
//       role: "Founder of StartupX",
//       rating: 5,
//     },
//     {
//       quote:
//         "A game-changer for our team. Productivity has skyrocketed since we started using this platform.",
//       author: "David Park",
//       role: "Engineering Lead at InnovateCo",
//       rating: 5,
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);

//   // Auto-advance carousel
//   useEffect(() => {
//     if (isPaused) return;
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//     }, 5000); // Change every 5 seconds

//     return () => clearInterval(interval);
//   }, [isPaused, testimonials.length]);

//   const goToPrevious = () => {
//     setCurrentIndex(
//       (prev) => (prev - 1 + testimonials.length) % testimonials.length
//     );
//   };

//   const goToNext = () => {
//     setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//   };

//   const goToSlide = (index: number) => {
//     setCurrentIndex(index);
//   };

//   return (
//     <section className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-amber-50 py-24 px-6 overflow-hidden">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-20">
//           <h2 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 to-amber-600 bg-clip-text text-transparent mb-6">
//             What Our Customers Say
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Real stories from real people who love what we build.
//           </p>
//         </div>

//         {/* Carousel Container */}
//         <div
//           className="relative"
//           onMouseEnter={() => setIsPaused(true)}
//           onMouseLeave={() => setIsPaused(false)}
//         >
//           <div className="overflow-hidden rounded-3xl">
//             <div
//               className="flex transition-transform duration-700 ease-in-out"
//               style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//             >
//               {testimonials.map((testimonial, index) => (
//                 <div key={index} className="w-full flex-shrink-0">
//                   <TestimonialCard {...testimonial} />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Navigation Arrows */}
//           <button
//             onClick={goToPrevious}
//             className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-4 shadow-lg transition-all hover:shadow-xl hover:scale-110"
//             aria-label="Previous testimonial"
//           >
//             <FaChevronLeft className="w-6 h-6 text-purple-600" />
//           </button>

//           <button
//             onClick={goToNext}
//             className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-4 shadow-lg transition-all hover:shadow-xl hover:scale-110"
//             aria-label="Next testimonial"
//           >
//             <FaChevronRight className="w-6 h-6 text-purple-600" />
//           </button>

//           {/* Dots Indicator */}
//           <div className="flex justify-center gap-3 mt-10">
//             {testimonials.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => goToSlide(index)}
//                 className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                   index === currentIndex
//                     ? 'bg-purple-600 w-10'
//                     : 'bg-gray-300 hover:bg-gray-400'
//                 }`}
//                 aria-label={`Go to slide ${index + 1}`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Trust badge */}
//         <div className="text-center mt-16">
//           <p className="text-gray-600 text-lg">
//             Join <span className="font-bold text-purple-600">10,000+</span>{' '}
//             happy customers worldwide
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }


// "use client"
// import { useState, useEffect } from 'react';
// import { FaStar, FaQuoteLeft, FaQuoteRight, FaChevronLeft, FaChevronRight, FaUserCircle } from 'react-icons/fa';
// import { motion, AnimatePresence } from 'framer-motion';

// interface Testimonial {
//   id: number;
//   name: string;
//   role: string;
//   company: string;
//   content: string;
//   rating: number;
//   avatar?: string;
// }

// function TestimonialCard({ testimonial, isActive }: { testimonial: Testimonial; isActive: boolean }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20, scale: 0.95 }}
//       animate={{ 
//         opacity: isActive ? 1 : 0.7, 
//         y: 0, 
//         scale: isActive ? 1 : 0.92 
//       }}
//       transition={{ duration: 0.5 }}
//       className={`relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 h-full 
//                  border border-gray-200 shadow-xl transition-all duration-500
//                  ${isActive ? 'transform-gpu' : ''}`}
//       style={{
//         transform: isActive ? 'translateY(0)' : 'translateY(10px)',
//       }}
//     >
//       {/* Quote Icon */}
//       <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-r from-[#a600ff] to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg">
//         <FaQuoteLeft className="text-white text-2xl" />
//       </div>

//       {/* Decorative Elements */}
//       <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#a600ff]/30 to-indigo-500/20 rounded-bl-full"></div>
//       <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-[#a600ff]/5 to-indigo-500/1 rounded-tr-full"></div>

//       {/* Content */}
//       <div className="relative z-10 h-full flex flex-col justify-between">
//         {/* Rating */}
//         <div className="flex mb-6">
//           {[...Array(5)].map((_, i) => (
//             <FaStar
//               key={i}
//               className={`text-xl ${
//                 i < testimonial.rating
//                   ? 'text-yellow-400 fill-yellow-400'
//                   : 'text-gray-300'
//               }`}
//             />
//           ))}
//         </div>

//         {/* Quote */}
//         <div className="flex-1 mb-8">
//           <p className="text-gray-700 text-lg leading-relaxed font-medium italic">
//             "{testimonial.content}"
//           </p>
//         </div>

//         {/* Author Info */}
//         <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
//           <div className="relative">
//             <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#a600ff] to-indigo-500 p-0.5">
//               <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
//                 {testimonial.avatar ? (
//                   <img
//                     src={testimonial.avatar}
//                     alt={testimonial.name}
//                     className="w-full h-full rounded-full object-cover"
//                   />
//                 ) : (
//                   <FaUserCircle className="text-gray-400 text-4xl" />
//                 )}
//               </div>
//             </div>
//             <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
//           </div>

//           <div>
//             <h4 className="text-xl font-bold text-gray-900">{testimonial.name}</h4>
//             <p className="text-gray-600">{testimonial.role}</p>
//             <p className="text-[#a600ff] font-semibold">{testimonial.company}</p>
//           </div>
//         </div>
//       </div>

//       {/* Active State Indicator */}
//       {isActive && (
//         <motion.div
//           layoutId="activeIndicator"
//           className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-[#a600ff] to-indigo-500 rounded-full"
//         />
//       )}
//     </motion.div>
//   );
// }

// export default function Testimonials() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [autoplay, setAutoplay] = useState(true);

//   const testimonials: Testimonial[] = [
//     {
//       id: 1,
//       name: "Sarah Johnson",
//       role: "Product Manager",
//       company: "TechCorp Inc.",
//       content: "Working with this team transformed our digital presence. The attention to detail and innovative solutions exceeded all our expectations. Our user engagement increased by 150% after the redesign.",
//       rating: 5,
//       avatar: "https://images.unsplash.com/photo-1494790108755-2616b786d4d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
//     },
//     {
//       id: 2,
//       name: "Michael Chen",
//       role: "CEO & Founder",
//       company: "StartUpXYZ",
//       content: "Exceptional work! They delivered not just what we asked for, but what we actually needed. The project was completed ahead of schedule and under budget.",
//       rating: 5,
//       avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
//     },
//     {
//       id: 3,
//       name: "Emma Rodriguez",
//       role: "Marketing Director",
//       company: "GlobalBrands",
//       content: "The team's creativity and technical expertise are outstanding. They turned our vague ideas into a stunning reality that perfectly represents our brand.",
//       rating: 4,
//       avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
//     },
//     {
//       id: 4,
//       name: "David Wilson",
//       role: "CTO",
//       company: "InnovateTech",
//       content: "Professional, responsive, and incredibly talented. The solution they built is scalable, maintainable, and exactly what we needed for our growth.",
//       rating: 5,
//       avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
//     },
//     {
//       id: 5,
//       name: "Lisa Wang",
//       role: "UX Lead",
//       company: "DesignFirst",
//       content: "A pleasure to work with! Their understanding of user experience and modern design trends helped us create something truly special.",
//       rating: 5,
//       avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
//     }
//   ];

//   const nextTestimonial = () => {
//     setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//   };

//   const prevTestimonial = () => {
//     setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   const goToTestimonial = (index: number) => {
//     setCurrentIndex(index);
//   };

//   // Auto-play functionality
//   useEffect(() => {
//     if (!autoplay) return;

//     const interval = setInterval(() => {
//       nextTestimonial();
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [autoplay]);

//   return (
//     <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-20"
//         >
//           <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold rounded-full mb-6">
//             TESTIMONIALS
//           </span>
//           <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
//             What Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Clients Say</span>
//           </h2>
//           <p className="text-gray-600 text-xl max-w-3xl mx-auto">
//             Don't just take our word for it. Hear from some of our amazing clients.
//           </p>
//         </motion.div>

//         {/* Testimonials Carousel */}
//         <div className="relative">
//           {/* Navigation Buttons */}
//           <button
//             onClick={prevTestimonial}
//             onMouseEnter={() => setAutoplay(false)}
//             className="absolute -left-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center text-purple-600 hover:bg-purple-50 hover:scale-110 transition-all duration-300"
//           >
//             <FaChevronLeft className="text-xl" />
//           </button>

//           <button
//             onClick={nextTestimonial}
//             onMouseEnter={() => setAutoplay(false)}
//             className="absolute -right-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center text-purple-600 hover:bg-purple-50 hover:scale-110 transition-all duration-300"
//           >
//             <FaChevronRight className="text-xl" />
//           </button>

//           {/* Carousel Container */}
//           <div className="relative h-[500px] overflow-hidden py-10 px-4">
//             <AnimatePresence mode="wait">
//               <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full">
//                 {/* Previous Card */}
//                 <div className="hidden lg:block">
//                   <TestimonialCard 
//                     testimonial={testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length]} 
//                     isActive={false}
//                   />
//                 </div>

//                 {/* Current Active Card */}
//                 <div className="col-span-1 lg:col-span-1">
//                   <TestimonialCard 
//                     testimonial={testimonials[currentIndex]} 
//                     isActive={true}
//                   />
//                 </div>

//                 {/* Next Card */}
//                 <div className="hidden lg:block">
//                   <TestimonialCard 
//                     testimonial={testimonials[(currentIndex + 1) % testimonials.length]} 
//                     isActive={false}
//                   />
//                 </div>
//               </div>
//             </AnimatePresence>
//           </div>

//           {/* Progress Dots */}
//           <div className="flex justify-center gap-3 mt-12">
//             {testimonials.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => goToTestimonial(index)}
//                 onMouseEnter={() => setAutoplay(false)}
//                 className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                   index === currentIndex
//                     ? 'w-8 bg-gradient-to-r from-[#a600ff] to-indigo-500'
//                     : 'bg-gray-300 hover:bg-gray-400'
//                 }`}
//               />
//             ))}
//           </div>

//           {/* Auto-play Toggle */}
//           <div className="flex justify-center items-center gap-3 mt-6">
//             <div className={`w-12 h-6 rounded-full transition-colors duration-300 relative cursor-pointer ${autoplay ? 'bg-[#a600ff]' : 'bg-gray-300'}`}
//                  onClick={() => setAutoplay(!autoplay)}>
//               <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform duration-300 ${autoplay ? 'left-7' : 'left-1'}`}></div>
//             </div>
//             <span className="text-gray-600 text-sm">Auto-play</span>
//           </div>
//         </div>

//         {/* Stats */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           viewport={{ once: true }}
//           className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-12 border-t border-gray-200"
//         >
//           <div className="text-center">
//             <div className="text-4xl font-bold bg-gradient-to-r from-[#a600ff] to-pink-600 bg-clip-text text-transparent">
//               4.9/5
//             </div>
//             <div className="text-gray-600">Average Rating</div>
//           </div>
//           <div className="text-center">
//             <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
//               200+
//             </div>
//             <div className="text-gray-600">Happy Clients</div>
//           </div>
//           <div className="text-center">
//             <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
//               98%
//             </div>
//             <div className="text-gray-600">Satisfaction Rate</div>
//           </div>
//           <div className="text-center">
//             <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
//               24/7
//             </div>
//             <div className="text-gray-600">Support</div>
//           </div>
//         </motion.div>

//         {/* CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           viewport={{ once: true }}
//           className="text-center mt-16"
//         >
//           <p className="text-gray-600 text-lg mb-8">
//             Ready to join our satisfied clients?
//           </p>
//           <button className="group relative px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30">
//             <span className="relative z-10">Start Your Project</span>
//             <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//           </button>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState, useEffect } from 'react';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight, FaUserCircle } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}

function TestimonialCard({ testimonial, isActive }: { testimonial: Testimonial; isActive: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ 
        opacity: isActive ? 1 : 0.4, 
        scale: isActive ? 1 : 0.9,
        filter: isActive ? 'blur(0px)' : 'blur(2px)'
      }}
      className={`relative h-full transition-all duration-500 group`}
    >
      {/* The Glow Frame */}
      <div className={`absolute inset-0 bg-gradient-to-br from-[#a600ff] via-indigo-500 to-pink-500 rounded-3xl opacity-0 ${isActive ? 'opacity-20' : 'group-hover:opacity-10'} blur-xl transition-opacity`} />
      
      <div className={`relative h-full bg-zinc-950 border ${isActive ? 'border-[#a600ff]/50 shadow-[0_0_30px_rgba(166,0,255,0.1)]' : 'border-zinc-800'} rounded-3xl p-8 backdrop-blur-xl flex flex-col`}>
        
        {/* Quote Icon */}
        <div className="absolute -top-4 -left-4 w-12 h-12 bg-zinc-900 border border-zinc-700 rounded-xl flex items-center justify-center text-[#a600ff] shadow-2xl">
          <FaQuoteLeft size={20} />
        </div>

        {/* Rating Stars */}
        <div className="flex gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`text-sm ${i < testimonial.rating ? 'text-pink-500 drop-shadow-[0_0_5px_rgba(236,72,153,0.5)]' : 'text-zinc-800'}`}
            />
          ))}
        </div>

        {/* Content */}
        <p className="text-zinc-300 text-lg leading-relaxed font-medium italic mb-8 flex-grow">
          &quot;{testimonial.content}&quot;
        </p>

        {/* Author Footer */}
        <div className="flex items-center gap-4 pt-6 border-t border-zinc-800/50">
          <div className="relative shrink-0">
            <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#a600ff] to-pink-500 p-[2px]">
              <div className="w-full h-full rounded-full bg-zinc-900 overflow-hidden flex items-center justify-center">
                {testimonial.avatar ? (
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                ) : (
                  <FaUserCircle className="text-zinc-700 text-3xl" />
                )}
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-4 border-zinc-950"></div>
          </div>

          <div className="overflow-hidden">
            <h4 className="text-lg font-bold text-white font-orbitron truncate">{testimonial.name}</h4>
            <div className="flex flex-col text-xs uppercase tracking-widest font-quantico">
              <span className="text-zinc-500">{testimonial.role}</span>
              <span className="text-indigo-400 font-bold">{testimonial.company}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const testimonials: Testimonial[] = [
    { id: 1, name: "Sarah Johnson", role: "Product Manager", company: "TechCorp Inc.", content: "Working with WORTEX transformed our digital presence. Their attention to detail and innovative 3D solutions exceeded all expectations.", rating: 5, avatar: "https://i.pravatar.cc/150?u=sarah" },
    { id: 2, name: "Michael Chen", role: "CEO & Founder", company: "StartUpXYZ", content: "Exceptional code quality and design. They delivered a scalable solution ahead of schedule. Truly a partner in our growth.", rating: 5, avatar: "https://i.pravatar.cc/150?u=mike" },
    { id: 3, name: "Emma Rodriguez", role: "Art Director", company: "GlobalBrands", content: "Their technical expertise in WebGL and React is unmatched. They turned a vague concept into a stunning interactive reality.", rating: 5, avatar: "https://i.pravatar.cc/150?u=emma" },
  ];

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  return (
    <section className="relative py-24 px-6 bg-black overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#a600ff]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{amount: 1}}>
            <span className="font-quantico text-[#a600ff] text-sm font-bold tracking-[0.4em] uppercase mb-4 block">
              System Validation
            </span>
            <h2 className="text-5xl md:text-7xl font-black font-orbitron text-white mb-6 tracking-tighter italic">
              CLIENT <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">FEEDBACK</span>
            </h2>
          </motion.div>
        </div>

        {/* Carousel */}
        <div className="relative px-4 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[450px]">
            <AnimatePresence mode="wait">
              {/* Desktop View: Show 3, center one is active */}
              {[-1, 0, 1].map((offset) => {
                const index = (currentIndex + offset + testimonials.length) % testimonials.length;
                return (
                  <div key={`${index}-${offset}`} className={`${offset !== 0 ? 'hidden lg:block' : 'block'}`}>
                    <TestimonialCard 
                      testimonial={testimonials[index]} 
                      isActive={offset === 0} 
                    />
                  </div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Nav Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none">
            <button 
              onClick={() => { setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length); setAutoplay(false); }}
              className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all pointer-events-auto shadow-2xl"
            >
              <FaChevronLeft />
            </button>
            <button 
              onClick={() => { setCurrentIndex((prev) => (prev + 1) % testimonials.length); setAutoplay(false); }}
              className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all pointer-events-auto shadow-2xl"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Progress & Controls */}
        <div className="mt-16 flex flex-col items-center gap-8">
          <div className="flex gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setCurrentIndex(i); setAutoplay(false); }}
                className={`h-1 transition-all duration-500 rounded-full ${i === currentIndex ? 'w-12 bg-[#a600ff]' : 'w-4 bg-zinc-800'}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-4 bg-zinc-900/50 p-2 px-4 rounded-full border border-zinc-800 backdrop-blur-md">
             <span className="text-[10px] font-bold font-quantico text-zinc-500 uppercase tracking-widest">Auto-Cycle</span>
             <button 
              onClick={() => setAutoplay(!autoplay)}
              className={`w-10 h-5 rounded-full relative transition-colors ${autoplay ? 'bg-[#a600ff]' : 'bg-zinc-700'}`}
             >
               <motion.div 
                animate={{ x: autoplay ? 20 : 2 }}
                className="absolute top-1 w-3 h-3 bg-white rounded-full"
               />
             </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-24 pt-16 border-t border-zinc-900">
          {[
            { label: "Avg Rating", val: "4.9/5", color: "text-[#a600ff]" },
            { label: "Total Nodes", val: "250+", color: "text-indigo-400" },
            { label: "Uptime Support", val: "24/7", color: "text-pink-500" },
            { label: "Success Rate", val: "99%", color: "text-emerald-400" }
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <div className={`text-3xl md:text-4xl font-black font-orbitron ${stat.color} mb-2`}>{stat.val}</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}