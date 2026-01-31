'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground text-center mb-4">
            About Company
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.p
              variants={itemVariants}
              className="text-lg text-foreground/80 leading-relaxed"
            >
              Beirouk Agency is a professional digital marketing and SEO agency based in
              Morocco, dedicated to helping small and medium businesses thrive in the
              online world. Our mission is to create smart and effective marketing
              strategies tailored to each client's goals.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-foreground/80 leading-relaxed"
            >
              We combine creativity, data analysis, and deep market knowledge to deliver
              high-impact solutions that drive real results. Whether you want to improve
              your search engine rankings, launch targeted advertising campaigns, or build
              a strong online presence, our team of passionate experts is here to support
              your growth every step of the way.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-foreground/80 leading-relaxed"
            >
              At Beirouk Agency, we believe that your success is our success.
            </motion.p>
          </motion.div>

          {/* Company Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ 
              y: -8,
              scale: 1.02,
              boxShadow: '0 20px 40px rgba(79, 172, 254, 0.25)',
            }}
            className="relative h-96 lg:h-96 rounded-2xl overflow-hidden shadow-lg border border-primary/20 hover:border-primary/40 transition-all duration-300"
          >
            <Image
              src="/company-about.jpg"
              alt="Beirouk Agency Team Meeting"
              fill
              className="object-cover"
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
