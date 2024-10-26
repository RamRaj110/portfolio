'use client'

import React, { useRef, useEffect } from 'react'

export default function Animation() {
  const canvasRef = useRef(null)
  

  useEffect(() => {
    <canvas
  ref={canvasRef}
  className="absolute inset-0 w-full h-full bg-gray-900"
  style={{ zIndex: -1, pointerEvents: 'none' }}
/>

    const canvas = canvasRef.current
    if (!canvas) {
      console.error("Canvas not found");
      return;
    }
  
    const ctx = canvas.getContext('2d')
    if (!ctx) {
      console.error("2D context not available");
      return;
    }
    // Set canvas dimensions
    canvas.width = window.innerWidth || 800;
canvas.height = window.innerHeight || 600;


    const stars = []
    const starCount = 200
    let mouse = { x: 0, y: 0 }

    // Initialize stars
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speed: Math.random() * 0.5 + 0.1
      })
    }

    function drawStar(star) {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'
      ctx.beginPath()
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
      ctx.fill()
    }

    function drawConstellation() {
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)'
      ctx.lineWidth = 0.5
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x
          const dy = stars[i].y - stars[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(stars[i].x, stars[i].y)
            ctx.lineTo(stars[j].x, stars[j].y)
            ctx.stroke()
          }
        }
      }
    }

    function connectMouseToStars() {
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)'
      ctx.lineWidth = 0.5
      for (let i = 0; i < stars.length; i++) {
        const dx = mouse.x - stars[i].x
        const dy = mouse.y - stars[i].y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 150) {
          ctx.beginPath()
          ctx.moveTo(mouse.x, mouse.y)
          ctx.lineTo(stars[i].x, stars[i].y)
          ctx.stroke()
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      stars.forEach(star => {
        star.y += star.speed
        if (star.y > canvas.height) {
          star.y = 0
          star.x = Math.random() * canvas.width
        }
        drawStar(star)
      })

      drawConstellation()
      connectMouseToStars()

      requestAnimationFrame(animate)
    }

    animate()

    // Handle resizing
    function handleResize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    // Handle mouse movement
    function handleMouseMove(e) {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)

    // Clean up event listeners
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full bg-gray-900"
      style={{ zIndex: -1 }}
    />
  )
}
