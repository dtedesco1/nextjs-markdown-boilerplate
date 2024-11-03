'use client'

import { useEffect, useRef } from 'react'

export default function ConwayGame() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        // Set canvas size
        const updateCanvasSize = () => {
            canvas.width = window.innerWidth
            canvas.height = 100
        }
        updateCanvasSize()
        window.addEventListener('resize', updateCanvasSize)

        // Game logic
        const cellSize = 5
        const width = Math.ceil(canvas.width / cellSize)
        const height = Math.ceil(canvas.height / cellSize)

        // Initialize grid
        let grid = Array(height).fill(null).map(() =>
            Array(width).fill(null).map(() => Math.round(Math.random()))
        )

        function countAliveNeighbors(grid: number[][], x: number, y: number) {
            let count = 0
            for (let i = -1; i <= 1; i++) {
                for (let j = -1; j <= 1; j++) {
                    if (i === 0 && j === 0) continue
                    if (x + i >= 0 && x + i < height && y + j >= 0 && y + j < width) {
                        count += grid[x + i][y + j]
                    }
                }
            }
            return count
        }

        function update(grid: number[][]) {
            const newGrid = Array(height).fill(null).map(() => Array(width).fill(0))

            for (let i = 0; i < height; i++) {
                for (let j = 0; j < width; j++) {
                    const neighbors = countAliveNeighbors(grid, i, j)
                    if (grid[i][j] === 0 && neighbors === 3) {
                        newGrid[i][j] = 1
                    } else if (grid[i][j] === 1 && (neighbors < 2 || neighbors > 3)) {
                        newGrid[i][j] = 0
                    } else {
                        newGrid[i][j] = grid[i][j]
                    }
                }
            }
            return newGrid
        }

        function draw() {
            if (!ctx || !canvas) return
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            for (let i = 0; i < height; i++) {
                for (let j = 0; j < width; j++) {
                    if (grid[i][j] === 1) {
                        ctx.fillStyle = '#E5E4E2'
                        const x = j * cellSize
                        const y = i * cellSize
                        ctx.fillRect(x, y, cellSize, cellSize)
                    }
                }
            }
            grid = update(grid)
        }

        // Animation loop
        const interval = setInterval(draw, 500)

        return () => {
            clearInterval(interval)
            window.removeEventListener('resize', updateCanvasSize)
        }
    }, [])

    return (
        <div className="bottom-0 left-0 w-full pointer-events-none">
            <canvas
                ref={canvasRef}
                className="w-full"
                style={{ height: '100px' }}
            />
            {/* Add a gradient overlay to blend with the page */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-background" />
        </div>
    )
}