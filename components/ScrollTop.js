import { useState, useEffect } from 'react'

export default function ScrollTop() {
  const [visible, setVisible] = useState(false)
  const [border, setBorder] = useState(2)

  useEffect(() => {
    const onScroll = () => {
      const y = window.pageYOffset || document.documentElement.scrollTop
      setVisible(y > 200)

      // calculate progress (0..1)
      const docH = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
      const winH = window.innerHeight
      const maxScroll = Math.max(1, docH - winH)
      const progress = Math.min(1, y / maxScroll)
      const min = 2
      const max = 12
      const bw = Math.round(min + (max - min) * progress)
      setBorder(bw)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      className={`scroll-top ${visible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      style={{ borderWidth: `${border}px` }}
    >
      <span className="arrow">↑</span>
    </button>
  )
}
