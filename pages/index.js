import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import Skills from '../components/Skills'
import Reviews from '../components/Reviews'
import React, { useEffect, useState } from 'react'

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
  // Counter that animates once when it becomes visible
  function LoopingNumber({ target = 0, duration = 1200, suffix = '' }) {
    const [value, setValue] = useState(0)
    const ref = React.useRef()
    const ranRef = React.useRef(false)

    React.useEffect(() => {
      if (!ref.current) return
      const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !ranRef.current) {
            ranRef.current = true
            const start = Date.now()
            const from = 0
            const to = target
            const raf = () => {
              const now = Date.now()
              const t = Math.min(1, (now - start) / duration)
              const current = Math.round(from + (to - from) * t)
              setValue(current)
              if (t < 1) requestAnimationFrame(raf)
            }
            requestAnimationFrame(raf)
          }
        })
      }, { threshold: 0.2 })
      obs.observe(ref.current)
      return () => obs.disconnect()
    }, [target, duration])

    return <span ref={ref}>{value}{suffix}</span>
  }
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
            <h3><LoopingNumber target={3} suffix="+" /></h3>
            <p>Years Experience</p>
          </motion.div>
          <motion.div
            className="stat"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3><LoopingNumber target={50} suffix="+" /></h3>
            <p>Projects Completed</p>
          </motion.div>
          <motion.div
            className="stat"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3><LoopingNumber target={100} suffix="%" /></h3>
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
        <h2>Contact</h2>

        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault()
            const form = e.currentTarget
            const subject = form.subject.value || 'Contact from portfolio'
            const body = form.message.value || ''
            const mailto = `mailto:rafayy579@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
            window.location.href = mailto
          }}
        >
          <input name="subject" type="text" placeholder="Subject" required />
          <textarea name="message" rows={6} placeholder="Your message" required />
          <div style={{ marginTop: 20 }}>
            <button type="submit" className="cta primary">Send</button>
          </div>
        </form>
      </motion.section>
    </div>
  )
}
