import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Scene3D = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create floating shape
    const geometry = new THREE.IcosahedronGeometry(2, 1); // Increased size and detail
    const material = new THREE.MeshPhongMaterial({ 
      color: '#8989DE',
      wireframe: true,
      transparent: true,
      opacity: 0.9 // Increased opacity
    });
    const shape = new THREE.Mesh(geometry, material);

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 2); // Increased intensity
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2); // Increased intensity
    directionalLight.position.set(1, 1, 1);
    
    scene.add(ambientLight);
    scene.add(directionalLight);
    scene.add(shape);

    camera.position.z = 6; // Adjusted camera position

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      shape.rotation.x += 0.003;
      shape.rotation.y += 0.003;
      shape.position.y = Math.sin(Date.now() * 0.001) * 0.3; // Add floating effect
      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current) return;
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
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

  return <div ref={mountRef} className="absolute inset-0 -z-10 min-h-screen" />;
};

export default Scene3D;