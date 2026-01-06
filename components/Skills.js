import { motion } from 'framer-motion'

const skillCategories = [
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Vue.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript']
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'Python', 'Django', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL']
  },
  {
    category: 'DevOps & Tools',
    skills: ['Docker', 'AWS', 'Git', 'CI/CD', 'Kubernetes', 'Linux', 'Nginx', 'Jenkins']
  },
  {
    category: 'Other',
    skills: ['REST APIs', 'WebSocket', 'JWT', 'OAuth', 'Agile', 'Testing', 'UI/UX', 'SEO']
  }
]

// Add CMS / e-commerce skills with brief detail tags
skillCategories.push({
  category: 'CMS & E-commerce',
  skills: [
    'WordPress (theme/plugin development, WooCommerce)',
    'Shopify (Liquid, theme customization, app integrations)'
  ]
})

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const categoryVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
}

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3 }
  }
}

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <h2>Technical Skills</h2>
      <p className="section-subtitle">Technologies and tools I work with regularly</p>
      <motion.div
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className="skill-category"
            variants={categoryVariants}
          >
            <h3>{category.category}</h3>
            <motion.div
              className="skill-tags"
              variants={containerVariants}
            >
              {category.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skillIndex}
                  className="skill-tag"
                  variants={skillVariants}
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}
