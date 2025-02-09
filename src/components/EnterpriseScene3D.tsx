
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const EnterpriseScene3D = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create Enterprise Network representation
    const networkGroup = new THREE.Group();
    
    // Create server racks (represented as tall rectangles)
    const createServerRack = (x: number, z: number) => {
      const geometry = new THREE.BoxGeometry(1, 2, 1);
      const material = new THREE.MeshPhongMaterial({ 
        color: '#8989DE',
        wireframe: true,
        transparent: true,
        opacity: 0.6
      });
      const rack = new THREE.Mesh(geometry, material);
      rack.position.set(x, 0, z);
      return rack;
    };

    // Add multiple server racks
    const racks: THREE.Mesh[] = [];
    const rackPositions = [
      [-4, -2], [-4, 2], [4, -2], [4, 2]
    ];

    rackPositions.forEach(pos => {
      const rack = createServerRack(pos[0], pos[1]);
      racks.push(rack);
      networkGroup.add(rack);
    });

    // Create data flow particles
    const particlesGroup = new THREE.Group();
    const particleGeometry = new THREE.SphereGeometry(0.1, 8, 8);
    const particleMaterial = new THREE.MeshPhongMaterial({
      color: '#F2FF44',
      wireframe: true,
      transparent: true,
      opacity: 0.8
    });

    // Create multiple data particles
    const particles: THREE.Mesh[] = [];
    for (let i = 0; i < 50; i++) {
      const particle = new THREE.Mesh(particleGeometry, particleMaterial);
      particle.position.set(
        Math.random() * 10 - 5,
        Math.random() * 4 - 2,
        Math.random() * 6 - 3
      );
      particles.push(particle);
      particlesGroup.add(particle);
    }

    // Create connection lines between racks
    const connectionMaterial = new THREE.LineBasicMaterial({ 
      color: '#8989DE',
      transparent: true,
      opacity: 0.3
    });

    // Connect racks with lines
    for (let i = 0; i < racks.length; i++) {
      for (let j = i + 1; j < racks.length; j++) {
        const points = [
          racks[i].position,
          racks[j].position
        ];
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(geometry, connectionMaterial);
        networkGroup.add(line);
      }
    }

    scene.add(networkGroup);
    scene.add(particlesGroup);

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 2);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(1, 1, 1);
    
    scene.add(ambientLight);
    scene.add(directionalLight);

    camera.position.z = 10;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate network
      networkGroup.rotation.y += 0.002;
      
      // Animate server racks
      racks.forEach((rack, index) => {
        rack.position.y += Math.sin(Date.now() * 0.001 + index) * 0.002;
      });

      // Animate data particles
      particles.forEach((particle, index) => {
        particle.position.y += Math.sin(Date.now() * 0.001 + index) * 0.01;
        particle.position.x += Math.cos(Date.now() * 0.001 + index) * 0.01;
        
        // Reset particle position if it goes too far
        if (Math.abs(particle.position.x) > 6) {
          particle.position.x = Math.random() * 10 - 5;
        }
        if (Math.abs(particle.position.y) > 3) {
          particle.position.y = Math.random() * 4 - 2;
        }
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

export default EnterpriseScene3D;
