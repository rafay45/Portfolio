import { motion } from 'framer-motion'

export default function Header() {
  return (
    <motion.header
      className="site-header"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="logo"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
      >
        <a href="/">
          <span className="logo-text">PORTFOLIO</span>
        </a>
      </motion.div>

      <nav>
        <motion.a
          href="/"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Home
        </motion.a>
        <motion.a
          href="#about"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          About Us
        </motion.a>
        <motion.a
          href="#skills"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Services
        </motion.a>
        <motion.a
          href="#projects"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Case Studies
        </motion.a>
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          Contact
        </motion.a>
        <motion.a
          href="#reviews"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Reviews
        </motion.a>
      </nav>
      
      <motion.a
        href="https://github.com/rafay45/"
        className="header-github"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.85 }}
        whileHover={{ scale: 1.05 }}
        aria-label="GitHub profile"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.92 3.19 9.09 7.62 10.56.56.1.76-.24.76-.53 0-.26-.01-.95-.01-1.87-3.1.67-3.75-1.49-3.75-1.49-.5-1.28-1.22-1.62-1.22-1.62-.99-.68.08-.66.08-.66 1.1.08 1.68 1.13 1.68 1.13.97 1.66 2.55 1.18 3.17.9.1-.7.38-1.18.69-1.45-2.47-.28-5.07-1.24-5.07-5.52 0-1.22.44-2.21 1.16-2.99-.12-.28-.5-1.4.11-2.92 0 0 .95-.3 3.12 1.14a10.88 10.88 0 012.84-.38c.96.01 1.92.13 2.83.38 2.16-1.44 3.11-1.14 3.11-1.14.62 1.52.24 2.64.12 2.92.72.78 1.16 1.77 1.16 2.99 0 4.29-2.61 5.24-5.09 5.51.39.33.74.98.74 1.98 0 1.43-.01 2.58-.01 2.93 0 .29.2.64.77.53C19.06 20.84 22.25 16.67 22.25 11.75 22.25 5.48 17.27.5 12 .5z" fill="currentColor"/>
        </svg>
      </motion.a>
    </motion.header>
  )
}
