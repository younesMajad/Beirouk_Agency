'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Complete Digital Transformation',
      description: 'Our latest project involved creating a complete digital marketing strategy for a local Moroccan brand. We developed a high-converting landing page, managed targeted Facebook and Google Ads, and implemented SEO techniques.',
      results: ['60% Traffic Increase', 'High-Converting Landing Page', 'Targeted Ad Campaigns', 'SEO Implementation'],
      image: '/project-1.jpg',
    },
    {
      id: 2,
      title: 'SaaS Platform Growth',
      description: 'Comprehensive marketing campaign for an emerging SaaS platform. We designed and implemented a full digital strategy including content marketing, paid advertising, and customer retention programs.',
      results: ['150% User Growth', 'Optimized Conversion Funnel', 'Brand Awareness Campaign', 'Customer Engagement Boost'],
      image: '/project-2.jpg',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="projects" className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Latest Projects
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:grid-flow-dense' : ''
              }`}
            >
              {/* Project Image */}
              <motion.div
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  boxShadow: '0 20px 40px rgba(79, 172, 254, 0.25)',
                }}
                className={`relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg border border-primary/20 hover:border-primary/40 transition-all duration-300 ${
                  index % 2 === 1 ? 'md:order-last' : ''
                }`}
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>

              {/* Project Description */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 space-y-3">
                  <h4 className="font-semibold text-foreground">Key Results:</h4>
                  <ul className="space-y-2">
                    {project.results.map((result) => (
                      <motion.li
                        key={result}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true }}
                        className="flex items-center text-foreground/80"
                      >
                        <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                        {result}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 12px 24px rgba(79, 172, 254, 0.3)',
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-6 px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                >
                  View Case Study
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
