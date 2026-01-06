import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import Skills from '../components/Skills'
import Reviews from '../components/Reviews'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    desc: 'Full-stack marketplace with payment integration, real-time inventory, and admin dashboard',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    link: '#'
  },
  {
    id: 2,
    title: 'Real-Time Collaboration Tool',
    desc: 'Live document editing with WebSocket communication and role-based permissions',
    tech: ['React', 'Socket.io', 'MongoDB', 'Redis'],
    link: '#'
  },
  {
    id: 3,
    title: 'AI-Powered Analytics Dashboard',
    desc: 'Data visualization platform with ML predictions and automated reporting',
    tech: ['React', 'Python', 'TensorFlow', 'AWS'],
    link: '#'
  },
  {
    id: 4,
    title: 'Mobile-First Banking App',
    desc: 'Secure financial application with biometric auth and transaction tracking',
    tech: ['React Native', 'Node.js', 'PostgreSQL', 'JWT'],
    link: '#'
  },
  {
    id: 5,
    title: 'SaaS Project Management Tool',
    desc: 'Enterprise solution with team collaboration, time tracking, and API integrations',
    tech: ['Next.js', 'GraphQL', 'MongoDB', 'Docker'],
    link: '#'
  },
  {
    id: 6,
    title: 'Social Media Platform',
    desc: 'Scalable app with user feeds, messaging, notifications, and content moderation',
    tech: ['React', 'Node.js', 'MySQL', 'Kafka'],
    link: '#'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
}

export default function Home() {
  return (
    <div className="container">
      <motion.section
        className="hero"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="hero-badge"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Available for hire
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Full-Stack Developer
          <span className="gradient-text"> Crafting Digital Excellence</span>
        </motion.h1>
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Transforming ideas into scalable, high-performance web applications.
          Specialized in React, Next.js, Node.js, and cloud architecture.
        </motion.p>
        <motion.div
          className="cta-group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <a className="cta primary" href="#projects">View Projects</a>
          <a className="cta secondary" href="#contact">Get In Touch</a>
        </motion.div>
      </motion.section>

      <motion.section
        id="about"
        className="about"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2>About Me</h2>
        <div className="about-content">
          <p>
            I&apos;m a passionate full-stack developer with expertise in building modern web applications
            from concept to deployment. With a strong foundation in both frontend and backend technologies,
            I create seamless, user-centric solutions that drive business growth.
          </p>
          <p>
            My experience spans across developing RESTful APIs, implementing real-time features,
            optimizing database performance, and deploying scalable cloud infrastructure. I prioritize
            clean code, security best practices, and responsive design in every project.
          </p>
        </div>
        <div className="stats">
          <motion.div
            className="stat"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3>5+</h3>
            <p>Years Experience</p>
          </motion.div>
          <motion.div
            className="stat"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3>50+</h3>
            <p>Projects Completed</p>
          </motion.div>
          <motion.div
            className="stat"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3>100%</h3>
            <p>Client Satisfaction</p>
          </motion.div>
        </div>
      </motion.section>

      <Skills />

      <motion.section
        id="projects"
        className="projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2>Featured Projects</h2>
        <p className="section-subtitle">A selection of my recent work showcasing diverse technical capabilities</p>
        <motion.div
          className="grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map(p => (
            <motion.div key={p.id} variants={itemVariants}>
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <Reviews />

      <motion.section
        id="contact"
        className="contact"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>Let&apos;s Work Together</h2>
        <p className="contact-text">
          I&apos;m currently available for freelance projects and full-time opportunities.
          Whether you need a complete application built from scratch, API development,
          or help scaling your existing platform, I&apos;d love to hear from you.
        </p>
        <div className="contact-methods">
          <motion.a
            className="contact-card"
            href="https://www.upwork.com/freelancers/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="icon">💼</span>
            <h3>Upwork</h3>
            <p>Hire me on Upwork</p>
          </motion.a>
          <motion.a
            className="contact-card"
            href="mailto:your.email@example.com"
            whileHover={{ scale: 1.03, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="icon">✉️</span>
            <h3>Email</h3>
            <p>your.email@example.com</p>
          </motion.a>
          <motion.a
            className="contact-card"
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="icon">🔗</span>
            <h3>LinkedIn</h3>
            <p>Connect with me</p>
          </motion.a>
        </div>
      </motion.section>
    </div>
  )
}
