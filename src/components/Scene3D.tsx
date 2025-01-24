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

    // Create Neural Network representation
    const neuralNetwork = new THREE.Group();
    const sphereGeometry = new THREE.SphereGeometry(0.3, 16, 16);
    const neuronMaterial = new THREE.MeshPhongMaterial({ 
      color: '#8989DE',
      wireframe: true,
      transparent: true,
      opacity: 0.8
    });

    // Create neurons and connections
    const neurons: THREE.Mesh[] = [];
    const positions = [
      [-2, 2, 0], [-1, 1, 0], [-1, -1, 0], [-2, -2, 0], // Input layer
      [0, 1.5, 0], [0, -1.5, 0], // Hidden layer
      [2, 0, 0], // Output layer
    ];

    positions.forEach(pos => {
      const neuron = new THREE.Mesh(sphereGeometry, neuronMaterial);
      neuron.position.set(pos[0], pos[1], pos[2]);
      neurons.push(neuron);
      neuralNetwork.add(neuron);
    });

    // Create connections between neurons
    const connectionMaterial = new THREE.LineBasicMaterial({ 
      color: '#8989DE',
      transparent: true,
      opacity: 0.4
    });

    // Connect input layer to hidden layer
    for (let i = 0; i < 4; i++) {
      for (let j = 4; j < 6; j++) {
        const points = [
          neurons[i].position,
          neurons[j].position
        ];
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(geometry, connectionMaterial);
        neuralNetwork.add(line);
      }
    }

    // Connect hidden layer to output layer
    for (let i = 4; i < 6; i++) {
      const points = [
        neurons[i].position,
        neurons[6].position
      ];
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(geometry, connectionMaterial);
      neuralNetwork.add(line);
    }

    scene.add(neuralNetwork);

    // Create Smart Interactions representation (floating particles)
    const particlesGroup = new THREE.Group();
    const particleGeometry = new THREE.SphereGeometry(0.1, 8, 8);
    const particleMaterial = new THREE.MeshPhongMaterial({
      color: '#F2FF44',
      wireframe: true,
      transparent: true,
      opacity: 0.6
    });

    // Create multiple particles
    const particles: THREE.Mesh[] = [];
    for (let i = 0; i < 15; i++) {
      const particle = new THREE.Mesh(particleGeometry, particleMaterial);
      particle.position.set(
        Math.random() * 6 - 3,
        Math.random() * 6 - 3,
        Math.random() * 2 - 1
      );
      particles.push(particle);
      particlesGroup.add(particle);
    }

    scene.add(particlesGroup);

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 3);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
    directionalLight.position.set(1, 1, 1);
    
    scene.add(ambientLight);
    scene.add(directionalLight);

    camera.position.z = 8;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Animate neural network
      neuralNetwork.rotation.y += 0.002;
      neurons.forEach((neuron, index) => {
        neuron.position.y += Math.sin(Date.now() * 0.001 + index) * 0.001;
      });

      // Animate particles
      particles.forEach((particle, index) => {
        particle.position.y += Math.sin(Date.now() * 0.001 + index) * 0.002;
        particle.position.x += Math.cos(Date.now() * 0.001 + index) * 0.002;
        particle.rotation.x += 0.01;
        particle.rotation.y += 0.01;
      });

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
      sphereGeometry.dispose();
      neuronMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      connectionMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100vw', 
        height: '100vh', 
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden'
      }} 
    />
  );
};

export default Scene3D;
