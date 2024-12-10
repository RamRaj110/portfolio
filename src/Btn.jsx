import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeJsButton = () => {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const materialRef = useRef(null);
  const frameRef = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Setup
    const container = containerRef.current;
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    cameraRef.current = camera;
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    rendererRef.current = renderer;
    renderer.setSize(200, 80);
    container.appendChild(renderer.domElement);

    // Create gradient material
    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      uniform float time;
      uniform vec2 mouse;
      varying vec2 vUv;
      
      void main() {
        vec2 uv = vUv;
        
        // Create animated gradient
        vec3 color1 = vec3(0.6, 0.2, 1.0); // Purple
        vec3 color2 = vec3(1.0, 0.2, 0.5); // Pink
        vec3 color3 = vec3(0.2, 0.4, 1.0); // Blue
        
        float noise = sin(uv.x * 10.0 + time) * 0.5 + 0.5;
        float gradient = sin(uv.x * 3.14159 + time * 0.5) * 0.5 + 0.5;
        
        // Mouse interaction
        float dist = length(uv - mouse);
        float glow = smoothstep(0.5, 0.0, dist);
        
        vec3 finalColor = mix(
          mix(color1, color2, gradient),
          color3,
          noise
        );
        
        finalColor += vec3(0.2, 0.2, 0.8) * glow;
        
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        time: { value: 0 },
        mouse: { value: new THREE.Vector2(0.5, 0.5) }
      }
    });
    materialRef.current = material;

    // Create mesh
    const geometry = new THREE.PlaneGeometry(4, 1.6);
    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    // Animation loop
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      material.uniforms.time.value += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    // Mouse interaction
    const handleMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = 1 - (event.clientY - rect.top) / rect.height;
      material.uniforms.mouse.value.set(x, y);
      mousePosition.current = { x, y };
    };

    container.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      cancelAnimationFrame(frameRef.current);
      container.removeEventListener('mousemove', handleMouseMove);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="relative">
      {/* Three.js container */}
      <div 
        ref={containerRef} 
        className="absolute inset-0 cursor-pointer"
      />
      
      {/* Button content */}
      <button className="relative w-[200px] h-[80px] flex items-center justify-center bg-transparent">
        <span className="font-bold text-white text-lg z-10 pointer-events-none">
          Hover Me
        </span>
      </button>
    </div>
  );
};

export default ThreeJsButton;