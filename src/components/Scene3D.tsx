import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Scene3D = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create floating shape
    const geometry = new THREE.IcosahedronGeometry(3, 1); // Increased size further
    const material = new THREE.MeshPhongMaterial({ 
      color: '#8989DE',
      wireframe: true,
      transparent: true,
      opacity: 0.95 // Increased opacity further
    });
    const shape = new THREE.Mesh(geometry, material);

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 3); // Increased intensity further
    const directionalLight = new THREE.DirectionalLight(0xffffff, 3); // Increased intensity further
    directionalLight.position.set(1, 1, 1);
    
    scene.add(ambientLight);
    scene.add(directionalLight);
    scene.add(shape);

    camera.position.z = 8; // Moved camera back further

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      shape.rotation.x += 0.002;
      shape.rotation.y += 0.002;
      shape.position.y = Math.sin(Date.now() * 0.001) * 0.5; // Increased floating range
      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current) return;
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return <div ref={mountRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />;
};

export default Scene3D;