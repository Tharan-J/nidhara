'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeBackgroundProps {
  className?: string;
}

export const ThreeBackground: React.FC<ThreeBackgroundProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const container = containerRef.current;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
    camera.position.z = 240;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Create interconnected bridge particles:
    // Left side: warm orange/gold scattered nodes (informal records)
    // Center: transition flow
    // Right side: structured teal/green grid (formal credit readiness)
    const particleCount = 180;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);

    const colorOrange = new THREE.Color(0xFF693D); // Informal / warm
    const colorTeal = new THREE.Color(0x087F79);   // Nidhara intelligence
    const colorGreen = new THREE.Color(0x21A875);  // Formal credit readiness

    for (let i = 0; i < particleCount; i++) {
      // Spread across x from -220 to 220
      const x = (Math.random() - 0.5) * 440;
      const y = (Math.random() - 0.5) * 260;
      const z = (Math.random() - 0.5) * 120;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      originalPositions[i * 3] = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;

      // Color gradient based on X position: Left = warm orange, Right = teal/green
      const normalizedX = (x + 220) / 440; // 0 to 1
      const vertexColor = new THREE.Color();
      if (normalizedX < 0.4) {
        vertexColor.lerpColors(colorOrange, colorTeal, normalizedX / 0.4);
      } else {
        vertexColor.lerpColors(colorTeal, colorGreen, (normalizedX - 0.4) / 0.6);
      }

      colors[i * 3] = vertexColor.r;
      colors[i * 3 + 1] = vertexColor.g;
      colors[i * 3 + 2] = vertexColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle texture (soft circle)
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      grad.addColorStop(0.3, 'rgba(255, 255, 255, 0.8)');
      grad.addColorStop(0.8, 'rgba(255, 255, 255, 0.15)');
      grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 64, 64);
    }
    const texture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      size: 4.8,
      vertexColors: true,
      map: texture,
      transparent: true,
      opacity: 0.75,
      blending: THREE.NormalBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Connecting lines mesh (drawing subtle bridges between nearby nodes)
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x087F79,
      transparent: true,
      opacity: 0.12,
      blending: THREE.AdditiveBlending,
    });

    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = new Float32Array(particleCount * particleCount * 6);
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    // Mouse movement interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      targetMouseX = (event.clientX / window.innerWidth - 0.5) * 30;
      targetMouseY = (event.clientY / window.innerHeight - 0.5) * -30;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth || window.innerWidth;
      const newHeight = container.clientHeight || window.innerHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse damping
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      camera.position.x = mouseX * 0.8;
      camera.position.y = mouseY * 0.8;
      camera.lookAt(0, 0, 0);

      // Animate particles with gentle organic waves
      const posArray = geometry.attributes.position.array as Float32Array;
      let lineIndex = 0;
      const maxConnectDistance = 55;

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const origX = originalPositions[i3];
        const origY = originalPositions[i3 + 1];
        const origZ = originalPositions[i3 + 2];

        // Smooth sinusoidal undulation
        posArray[i3 + 1] = origY + Math.sin(elapsedTime * 0.8 + origX * 0.02) * 6;
        posArray[i3] = origX + Math.cos(elapsedTime * 0.6 + origY * 0.02) * 4;

        // Connect nearby nodes with subtle lines
        for (let j = i + 1; j < particleCount; j++) {
          const j3 = j * 3;
          const dx = posArray[i3] - posArray[j3];
          const dy = posArray[i3 + 1] - posArray[j3 + 1];
          const dz = posArray[i3 + 2] - posArray[j3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < maxConnectDistance) {
            linePositions[lineIndex++] = posArray[i3];
            linePositions[lineIndex++] = posArray[i3 + 1];
            linePositions[lineIndex++] = posArray[i3 + 2];
            linePositions[lineIndex++] = posArray[j3];
            linePositions[lineIndex++] = posArray[j3 + 1];
            linePositions[lineIndex++] = posArray[j3 + 2];
          }
        }
      }

      geometry.attributes.position.needsUpdate = true;
      lineGeometry.setDrawRange(0, lineIndex / 3);
      lineGeometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      texture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden z-0 ${className}`}
      aria-hidden="true"
    />
  );
};

export default ThreeBackground;
