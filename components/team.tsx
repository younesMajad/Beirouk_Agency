'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function Team() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="team" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Our Team
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          <p className="text-foreground/70 mt-6 max-w-2xl mx-auto text-lg">
            Meet the talented professionals behind Beirouk Agency, dedicated to your success
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Team Image */}
          <motion.div
            variants={itemVariants}
            whileHover={{ 
              y: -8,
              scale: 1.02,
              boxShadow: '0 20px 40px rgba(79, 172, 254, 0.25)',
            }}
            className="relative h-96 md:h-full min-h-96 rounded-2xl overflow-hidden shadow-lg border border-primary/20 hover:border-primary/40 transition-all duration-300"
          >
            <Image
              src="/team.jpg"
              alt="Beirouk Agency Team"
              fill
              className="object-cover"
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/30"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>

          {/* Team Description */}
          <motion.div
            className="space-y-8"
          >
            <motion.div
              variants={itemVariants}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-foreground">
                Professional Team of Experts
              </h3>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Our team consists of experienced digital marketing professionals, SEO specialists, and creative developers. Each member brings unique expertise and a passion for delivering excellence.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-4"
            >
              <h4 className="text-xl font-semibold text-foreground">What We Offer:</h4>
              <ul className="space-y-3">
                {[
                  'Strategic Digital Marketing Planning',
                  'SEO and SEM Expertise',
                  'Creative Design & Development',
                  'Data-Driven Analytics',
                  'Customer-Centric Approach',
                  'Continuous Support & Growth',
                ].map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <motion.span
                      className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                    >
                      ✓
                    </motion.span>
                    <span className="text-foreground/80">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.button
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 12px 24px rgba(79, 172, 254, 0.3)',
              }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300"
            >
              Join Our Team
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
