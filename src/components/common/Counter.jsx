'use client'
import { useState, useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

const Counter = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0)
    const counterRef = useRef(null)
    const isInView = useInView(counterRef)
    const [hasAnimated, setHasAnimated] = useState(false)

    useEffect(() => {
        if (isInView && !hasAnimated) {
            let startTime
            let animationFrame

            const animate = (currentTime) => {
                if (!startTime) startTime = currentTime
                const progress = (currentTime - startTime) / duration

                if (progress < 1) {
                    setCount(Math.floor(end * progress))
                    animationFrame = requestAnimationFrame(animate)
                } else {
                    setCount(end)
                    setHasAnimated(true)
                }
            }

            animationFrame = requestAnimationFrame(animate)
            return () => cancelAnimationFrame(animationFrame)
        }
    }, [isInView, end, duration, hasAnimated])

    return (
        <div ref={counterRef} className="text-4xl font-bold text-yellow-400">
            {count}+
        </div>
    )
}

export default Counter
