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

    // Create AI representation (Brain-like structure)
    const brainGeometry = new THREE.IcosahedronGeometry(2, 2);
    const brainMaterial = new THREE.MeshPhongMaterial({ 
      color: '#8989DE',
      wireframe: true,
      transparent: true,
      opacity: 0.8
    });
    const brain = new THREE.Mesh(brainGeometry, brainMaterial);
    brain.position.set(-4, 2, 0);
    scene.add(brain);

    // Create Blockchain representation (Connected cubes)
    const blockchainGroup = new THREE.Group();
    const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
    const cubeMaterial = new THREE.MeshPhongMaterial({ 
      color: '#F2FF44',
      wireframe: true,
      transparent: true,
      opacity: 0.8
    });

    // Create chain of cubes
    for (let i = 0; i < 4; i++) {
      const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
      cube.position.set(i * 1.5, 0, 0);
      blockchainGroup.add(cube);
    }
    blockchainGroup.position.set(2, -2, 0);
    scene.add(blockchainGroup);

    // Create Crypto Payments representation (Coin-like torus)
    const coinGeometry = new THREE.TorusGeometry(1.5, 0.4, 16, 50);
    const coinMaterial = new THREE.MeshPhongMaterial({ 
      color: '#E6E4DD',
      wireframe: true,
      transparent: true,
      opacity: 0.8
    });
    const coin = new THREE.Mesh(coinGeometry, coinMaterial);
    coin.position.set(4, 3, 0);
    coin.rotation.x = Math.PI / 4;
    scene.add(coin);

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 3);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
    directionalLight.position.set(1, 1, 1);
    
    scene.add(ambientLight);
    scene.add(directionalLight);

    camera.position.z = 12;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate brain
      brain.rotation.x += 0.002;
      brain.rotation.y += 0.002;
      brain.position.y += Math.sin(Date.now() * 0.001) * 0.01;

      // Rotate blockchain cubes
      blockchainGroup.children.forEach((cube, index) => {
        cube.rotation.x += 0.003;
        cube.rotation.y += 0.003;
        cube.position.y = Math.sin(Date.now() * 0.001 + index) * 0.2;
      });

      // Rotate coin
      coin.rotation.y += 0.005;
      coin.position.y += Math.sin(Date.now() * 0.001) * 0.01;

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
      brainGeometry.dispose();
      brainMaterial.dispose();
      cubeGeometry.dispose();
      cubeMaterial.dispose();
      coinGeometry.dispose();
      coinMaterial.dispose();
    };
  }, []);

  return <div ref={mountRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />;
};

export default Scene3D;