'use client';

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Search, Megaphone, PenTool, BarChart, CheckCircle2 } from 'lucide-react';
import { MouseEvent } from 'react';

interface Service {
  category: string;
  items: string[];
  color: string;
  icon: React.ElementType;
}

const services: Service[] = [
  {
    category: 'SEO Services',
    color: 'from-blue-500 to-cyan-500',
    icon: Search,
    items: [
      'Keyword Research',
      'On-Page Optimization',
      'Local SEO Setup',
      'Google My Business Management',
      'Monthly SEO Reports',
    ],
  },
  {
    category: 'Advertising Services',
    color: 'from-purple-500 to-pink-500',
    icon: Megaphone,
    items: [
      'Facebook Ads (local & international)',
      'Google Ads Campaigns',
      'Retargeting Ads',
      'Landing Page Optimization',
    ],
  },
  {
    category: 'Content & Social Media',
    color: 'from-green-500 to-emerald-500',
    icon: PenTool,
    items: [
      'Social Media Management',
      'Content Creation (posts, reels)',
      'Brand Identity & Style Guide',
      'Engagement Analytics',
    ],
  },
  {
    category: 'Web & Analytics Solutions',
    color: 'from-orange-500 to-red-500',
    icon: BarChart,
    items: [
      'Landing Page Design',
      'Analytics Setup (Google Analytics)',
      'Performance Reports',
      'Conversion Tracking',
    ],
  },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      onMouseMove={handleMouseMove}
      className="group relative bg-card rounded-2xl p-8 border border-border overflow-hidden hover:shadow-2xl transition-all duration-300"
      whileHover={{ y: -5 }}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              color-mix(in srgb, var(--primary), transparent 85%),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative z-10">
        <div className="flex items-center mb-6">
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg`}>
            <service.icon size={28} />
          </div>
          <h3 className="text-2xl font-bold text-foreground ml-4 group-hover:text-primary transition-colors">
            {service.category}
          </h3>
        </div>

        <ul className="space-y-3">
          {service.items.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start text-foreground/80 group-hover:text-foreground transition-colors"
            >
              <CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-0.5" />
              <span className="text-base">{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="services" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">What We Offer</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mt-2 mb-6">
            Premium Services & Features
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full" />
          <p className="mt-6 text-xl text-foreground/60 max-w-2xl mx-auto">
            Elevate your business with our comprehensive suite of digital solutions designed for growth.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.category} service={service} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
