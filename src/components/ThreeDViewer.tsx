import React, { useEffect, useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

const Viewer = () => {
  const viewerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frameId: number;
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    const camera = new THREE.PerspectiveCamera(75, viewerRef.current!.clientWidth / viewerRef.current!.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    const loader = new GLTFLoader();
    let mesh: THREE.Mesh;

    loader.load('/cookstove.glb', (gltf) => {
      mesh = gltf.scene.children[0] as THREE.Mesh;
      scene.add(mesh);

      if (viewerRef.current) {
        renderer.setSize(viewerRef.current.clientWidth, viewerRef.current.clientHeight);
        camera.aspect = viewerRef.current.clientWidth / viewerRef.current.clientHeight;
        camera.updateProjectionMatrix();

        viewerRef.current.appendChild(renderer.domElement);
        animate();
      }
    }, undefined, (error) => {
      console.error('Error loading 3D model', error);
    });

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    const onWindowResize = () => {
      if (viewerRef.current) {
        renderer.setSize(viewerRef.current.clientWidth, viewerRef.current.clientHeight);
        camera.aspect = viewerRef.current.clientWidth / viewerRef.current.clientHeight;
        camera.updateProjectionMatrix();
      }
    }

    window.addEventListener('resize', onWindowResize, false);

    return () => {
      window.removeEventListener('resize', onWindowResize);
    
      if (viewerRef.current && viewerRef.current.contains(renderer.domElement)) {
        viewerRef.current.removeChild(renderer.domElement);
      }
      
      renderer.dispose();
    
      if (frameId !== undefined) {
        cancelAnimationFrame(frameId);
      }
    
      if (mesh) {
        if (mesh.geometry) {
          mesh.geometry.dispose();
        }
        if (Array.isArray(mesh.material)) {
          mesh.material.forEach(m => m.dispose());
        } else if (mesh.material) {
          mesh.material.dispose();
        }
        scene.remove(mesh);
      }
    };    
  }, []);

  return <div ref={viewerRef} style={{ width: '100%', height: '100%' }} />;
};

export default Viewer;
