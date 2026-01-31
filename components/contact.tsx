'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Phone, MapPin, Send, MessageSquare, User, Loader2, ArrowRight } from 'lucide-react';
import { toast } from 'react-hot-toast';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    // Simulate network delay for better UX
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Construct mailto link
    const subject = encodeURIComponent(`New Contact from ${data.name}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
    );

    // Trigger mailto
    window.location.href = `mailto:beiroukagency@gmail.com?subject=${subject}&body=${body}`;

    toast.success('Opening your email client to send the message!');
    reset();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-background">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold tracking-wide uppercase text-sm">Contact Us</span>
          <h2 className="mt-2 text-4xl sm:text-5xl font-bold text-foreground">
            Let's Start a Conversation
          </h2>
          <p className="mt-4 text-xl text-foreground/60 max-w-2xl mx-auto">
            Ready to start your next project with us? Give us a call or send us an email and we will get back to you as soon as possible!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20"
        >
          {/* Contact Info Side */}
          <div className="space-y-8 flex flex-col justify-between">
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Contact Information</h3>
              <p className="text-foreground/60">
                Data-driven digital marketing agency dedicated to helping businesses thrive in the digital landscape.
              </p>
            </motion.div>

            <div className="space-y-6">
              <motion.a
                variants={itemVariants}
                href="mailto:beiroukagency@gmail.com"
                className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-white/50 dark:hover:bg-white/5 border border-transparent hover:border-border transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Mail className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground/60 mb-1">Email Us</p>
                  <p className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">beiroukagency@gmail.com</p>
                </div>
              </motion.a>

              <motion.a
                variants={itemVariants}
                href="tel:+212656282060"
                className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-white/50 dark:hover:bg-white/5 border border-transparent hover:border-border transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Phone className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground/60 mb-1">Call Us</p>
                  <p className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">+212 656-282-060</p>
                </div>
              </motion.a>

              <motion.div
                variants={itemVariants}
                className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-white/50 dark:hover:bg-white/5 border border-transparent hover:border-border transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <MapPin className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground/60 mb-1">Visit Us</p>
                  <p className="text-lg font-semibold text-foreground">Morocco</p>
                </div>
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="pt-8">
              <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
                <p className="text-foreground/80 font-medium italic">"We bring your ideas to life with stunning designs and robust code."</p>
              </div>
            </motion.div>
          </div>

          {/* Form Side */}
          <motion.div
            variants={itemVariants}
            className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 shadow-2xl relative overflow-hidden"
          >
            {/* Form Decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -mr-16 -mt-16 pointer-events-none" />

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2 ml-1">
                    Your Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      {...register('name')}
                      className={`w-full pl-12 pr-4 py-4 bg-background/50 border ${errors.name ? 'border-red-500' : 'border-border'} rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-muted-foreground/50`}
                      placeholder="John Doe"
                    />
                  </div>
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1 ml-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2 ml-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      {...register('email')}
                      className={`w-full pl-12 pr-4 py-4 bg-background/50 border ${errors.email ? 'border-red-500' : 'border-border'} rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-muted-foreground/50`}
                      placeholder="john@example.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1 ml-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2 ml-1">
                    Your Message
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-6 w-5 h-5 text-muted-foreground" />
                    <textarea
                      {...register('message')}
                      rows={5}
                      className={`w-full pl-12 pr-4 py-4 bg-background/50 border ${errors.message ? 'border-red-500' : 'border-border'} rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-muted-foreground/50 resize-none`}
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1 ml-1">{errors.message.message}</p>
                  )}
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 bg-primary text-primary-foreground rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-primary/25 transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </motion.button>

              <p className="text-xs text-center text-muted-foreground mt-4">
                We'll never share your email with anyone else.
              </p>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
