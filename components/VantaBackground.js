import { useEffect, useRef, useState } from 'react'

export default function VantaBackground() {
  const vantaRef = useRef(null)
  const [vantaEffect, setVantaEffect] = useState(null)

  useEffect(() => {
    if (!vantaEffect && typeof window !== 'undefined') {
      const loadVanta = () => {
        if (window.VANTA && window.THREE) {
          setVantaEffect(
            window.VANTA.NET({
              el: vantaRef.current,
              THREE: window.THREE,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.00,
              minWidth: 200.00,
              scale: 1.00,
              scaleMobile: 1.00,
              color: 0x0284c7,
              backgroundColor: 0x0a0e12,
              points: 10.00,
              maxDistance: 20.00,
              spacing: 16.00
            })
          )
        }
      }

      // Wait for scripts to load
      if (window.VANTA && window.THREE) {
        loadVanta()
      } else {
        setTimeout(loadVanta, 100)
      }
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <div
      ref={vantaRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none'
      }}
    />
  )
}
