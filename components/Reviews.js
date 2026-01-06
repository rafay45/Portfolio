import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

const reviews = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO at TechStartup',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
    rating: 5,
    text: 'Absolutely outstanding work! Delivered a complex full-stack application ahead of schedule. The code quality was exceptional and the communication was perfect throughout the project.'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Product Manager',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    rating: 5,
    text: 'Best developer I have worked with on Upwork. Built our entire e-commerce platform with React and Node.js. Highly skilled and very professional.'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Founder at GrowthCo',
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
    rating: 5,
    text: 'Incredible expertise in Next.js and AWS! Transformed our MVP into a production-ready application. Will definitely hire again for future projects.'
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'CTO at DataFlow',
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
    rating: 5,
    text: 'Top-tier full-stack developer. Implemented real-time features with WebSockets flawlessly. Great problem solver and always available for communication.'
  },
  {
    id: 5,
    name: 'Jessica Taylor',
    role: 'Marketing Director',
    image: 'https://randomuser.me/api/portraits/women/5.jpg',
    rating: 5,
    text: 'Exceptional work on our company website. Beautiful animations, perfect responsiveness, and blazing fast performance. Exceeded all expectations!'
  },
  {
    id: 6,
    name: 'Robert Anderson',
    role: 'VP Engineering',
    image: 'https://randomuser.me/api/portraits/men/6.jpg',
    rating: 5,
    text: 'Outstanding technical skills and attention to detail. Built a complex dashboard with React and GraphQL. Code was clean, well-documented, and scalable.'
  },
  {
    id: 7,
    name: 'Amanda White',
    role: 'Business Owner',
    image: 'https://randomuser.me/api/portraits/women/7.jpg',
    rating: 5,
    text: 'Very impressed with the quality and speed of delivery. Created a beautiful SaaS platform that our customers love. Highly recommend!'
  },
  {
    id: 8,
    name: 'James Wilson',
    role: 'Tech Lead',
    image: 'https://randomuser.me/api/portraits/men/8.jpg',
    rating: 5,
    text: 'Fantastic developer with deep knowledge of modern web technologies. Solved complex problems with elegant solutions. A pleasure to work with!'
  }
]

const ReviewCard = ({ review, index, disableAnimation }) => {
  return (
    <motion.div
      className="review-card"
      initial={!disableAnimation ? { opacity: 0, y: 20 } : false}
      whileInView={!disableAnimation ? { opacity: 1, y: 0 } : false}
      viewport={!disableAnimation ? { once: true } : undefined}
      transition={!disableAnimation ? { duration: 0.5, delay: index * 0.1 } : undefined}
      whileHover={{ y: -8 }}
    >
      <div className="review-header">
        <img src={review.image} alt={review.name} className="review-avatar" />
        <div className="review-info">
          <h4>{review.name}</h4>
          <p className="review-role">{review.role}</p>
        </div>
      </div>
      <div className="review-rating">
        {[...Array(review.rating)].map((_, i) => (
          <span key={i} className="star">★</span>
        ))}
      </div>
      <p className="review-text">{review.text}</p>
    </motion.div>
  )
}

export default function Reviews() {
  const controls = useAnimation()

  const startAnim = () => {
    controls.start({
      x: ['0%', '-50%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 30,
          ease: 'linear'
        }
      }
    })
  }

  useEffect(() => {
    startAnim()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <motion.section
      id="reviews"
      className="reviews-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <h2>Client Reviews</h2>
      <p className="section-subtitle">What clients say about working with me</p>

      <div className="reviews-scroll-container">
        <motion.div
          className="reviews-scroll"
          animate={controls}
          onHoverStart={() => controls.stop()}
          onHoverEnd={() => startAnim()}
        >
          {[...reviews, ...reviews].map((review, index) => (
            <ReviewCard key={`${review.id}-${index}`} review={review} index={index % reviews.length} disableAnimation={true} />
          ))}
        </motion.div>
      </div>

      {/* Removed static reviews grid to show only the scrolling reviews */}
    </motion.section>
  )
}
