'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Rocket, Globe, Zap, ArrowRight, TrendingUp, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';





const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];


export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants  = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, type: 'spring', bounce: 0.4 },
    },
  };

  const floatAnimation = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 5,
        repeat: Number.POSITIVE_INFINITY,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen pt-20 flex items-center justify-center bg-background relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Top Rated Digital Agency in Morocco
            </div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight"
            >
              Scale Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                Digital Impact
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-foreground/70 max-w-lg leading-relaxed"
            >
              We craft award-winning digital experiences that help modern brands grow, convert, and stand out in the digital landscape.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-2"
            >
              <motion.a href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg shadow-lg shadow-primary/25 flex items-center gap-2 group"
              >
                Start Your Growth
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a >

              <motion.a href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-card text-foreground border border-border rounded-full font-semibold text-lg hover:bg-secondary/50 transition-colors"
              >
                Contact Us
              </motion.a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex justify-between items-center mt-5 gap-8 pt-4">
              <div>
                <p className="text-3xl font-bold">200+</p>
                <p className="text-sm text-foreground/60">Projects Done</p>
              </div>
              <div>
                <p className="text-3xl font-bold">98%</p>
                <p className="text-sm text-foreground/60">Client Satisfaction</p>
              </div>
            
            </motion.div>



          {/* social media icons */}
            <motion.div
              initial={{ opacity: 0, y: -90 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex justify-center gap-6"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-sky-200 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          
          </motion.div>

          {/* Hero Image & Floating Elements */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, type: "spring" }}
              className="relative h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-background"
            >
              <Image
                src="/company-hero.jpg"
                alt="Digital Agency Team"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </motion.div>

            {/* Floating Icons */}
            <motion.div
              variants={floatAnimation}
              animate="animate"
              className="absolute -top-12 -right-8 w-20 h-20 bg-background rounded-2xl shadow-xl flex items-center justify-center border border-border/50 z-20"
            >
              <Rocket className="w-10 h-10 text-purple-500" />
            </motion.div>

            <motion.div
              variants={floatAnimation}
              animate="animate"
              transition={{ delay: 1 }}
              className="absolute top-1/2 -left-12 w-16 h-16 bg-background rounded-2xl shadow-xl flex items-center justify-center border border-border/50 z-20"
            >
              <Globe className="w-8 h-8 text-blue-500" />
            </motion.div>

            <motion.div
              variants={floatAnimation}
              animate="animate"
              transition={{ delay: 2 }}
              className="absolute -bottom-8 -right-4 w-24 h-24 bg-card rounded-2xl shadow-xl flex flex-col items-center justify-center border border-border/50 z-20 gap-2"
            >
              <TrendingUp className="w-8 h-8 text-green-500" />
              <span className="text-xs font-bold">+150%</span>
            </motion.div>

            {/* Decorative Dots */}
            <div className="absolute -z-10 top-[-20px] left-[-20px]">
              <div className="w-24 h-24 text-primary/20">
                <svg width="100%" height="100%" viewBox="0 0 100 100" fill="currentColor">
                  <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="2" />
                  </pattern>
                  <rect width="100" height="100" fill="url(#dots)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
