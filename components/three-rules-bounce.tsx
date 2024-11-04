'use client'

import { useEffect, useRef, useState } from 'react'

export function ThreeRulesBounce() {
    const preRef = useRef<HTMLPreElement>(null)

    useEffect(() => {
        const pre = preRef.current
        if (!pre) return

        const updateSize = () => {
            const containerWidth = pre.parentElement?.offsetWidth || window.innerWidth
            const containerHeight = pre.parentElement?.offsetHeight || window.innerHeight
            return {
                width: Math.floor((containerWidth - 20) / 10), // Subtract padding, each char ~10px
                height: Math.floor((containerHeight - 10) / 10) // Subtract padding, each line ~20px
            }
        }

        let { width, height } = updateSize()

        // Initialize positions in the middle with different directions
        const positions = [
            { x: Math.floor(width * 0.25), y: Math.floor(height / 2), dx: 1, dy: 1 },
            { x: Math.floor(width * 0.50), y: Math.floor(height / 2), dx: -1, dy: 1 },
            { x: Math.floor(width * 0.75), y: Math.floor(height / 2), dx: 1, dy: -1 }
        ]

        function updatePositions() {
            positions.forEach(pos => {
                // Update position
                pos.x += pos.dx
                pos.y += pos.dy

                // Bounce off walls
                if (pos.x < 0) { pos.x = 0; pos.dx = 1 }
                if (pos.x >= width) { pos.x = width - 1; pos.dx = -1 }
                if (pos.y < 0) { pos.y = 0; pos.dy = 1 }
                if (pos.y >= height) { pos.y = height - 1; pos.dy = -1 }
            })
        }

        function draw() {
            // Create empty frame
            const frame = Array(height).fill(0).map(() => Array(width).fill(' '))

            // Draw numbers
            positions.forEach((pos, index) => {
                const x = Math.floor(pos.x)
                const y = Math.floor(pos.y)
                frame[y][x] = (index + 1).toString()
            })

            // Render frame
            pre.textContent = frame.map(row => row.join('')).join('\n')
        }

        // Handle window resize
        const handleResize = () => {
            const newSize = updateSize()
            width = newSize.width
            height = newSize.height
        }
        window.addEventListener('resize', handleResize)

        // Animation loop
        const interval = setInterval(() => {
            updatePositions()
            draw()
        }, 125)

        // Cleanup
        return () => {
            clearInterval(interval)
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div className="w-full h-full overflow-hidden">
            <pre
                ref={preRef}
                className="text-base-content bg-base-300"
            />
        </div>
    )
}

export default function ToggleBounce() {
    const [show, setShow] = useState(false)

    return (
        <div>
            <button className="btn" onClick={() => setShow(!show)}>
                {show ? 'Hide' : 'Show'} Bouncing Numbers
            </button>
            {show && <ThreeRulesBounce />}
        </div>
    )
}