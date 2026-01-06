import { motion } from 'framer-motion'

export default function ProjectCard({ project }) {
  return (
    <motion.a
      href={project.link}
      className="card"
      whileHover={{ scale: 1.02, y: -8 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <h3>{project.title}</h3>
      <p>{project.desc}</p>
      {project.tech && (
        <div className="tech-stack">
          {project.tech.map((tech, index) => (
            <motion.span
              key={index}
              className="tech-tag"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      )}
      <span className="link">View Project →</span>
    </motion.a>
  )
}
