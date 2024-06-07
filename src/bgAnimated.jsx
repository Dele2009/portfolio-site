// Particles.js

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const particleVertex = `
  attribute float scale;
  uniform float uTime;

  void main() {
    vec3 p = position;
    float s = scale;

    p.y += (sin(p.x + uTime) * 0.5) + (cos(p.y + uTime) * 0.1) * 2.0;
    p.x += (sin(p.y + uTime) * 0.5);
    s += (sin(p.x + uTime) * 0.5) + (cos(p.y + uTime) * 0.1) * 2.0;

    vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
    gl_PointSize = s * 15.0 * (1.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const particleFragment = `
  void main() {
    gl_FragColor = vec4(1.0, 1.0, 1.0, 0.5);
  }
`;

const Particles = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const mount = mountRef.current;
        const config = {
            winWidth: window.innerWidth,
            winHeight: window.innerHeight,
            aspectRatio: window.innerWidth / window.innerHeight,
            mouse: new THREE.Vector2(-10, -10)
        };

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, config.aspectRatio, 0.01, 1000);
        camera.position.set(0, 6, 5);

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(config.winWidth, config.winHeight);
        mount.appendChild(renderer.domElement);
        // renderer.setClearColor(new THREE.Color('transparent'), 1);
// renderer.setClearColor(0x000000, 0);
// #0000ff
        const gap = 0.3;
        const amountX = 200;
        const amountY = 200;
        const particleNum = amountX * amountY;
        const particlePositions = new Float32Array(particleNum * 3);
        const particleScales = new Float32Array(particleNum);
        let i = 0;
        let j = 0;

        for (let ix = 0; ix < amountX; ix++) {
            for (let iy = 0; iy < amountY; iy++) {
                particlePositions[i] = ix * gap - ((amountX * gap) / 2);
                particlePositions[i + 1] = 0;
                particlePositions[i + 2] = iy * gap - ((amountX * gap) / 2);
                particleScales[j] = 1;
                i += 3;
                j++;
            }
        }

        const particleGeometry = new THREE.BufferGeometry();
        particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
        particleGeometry.setAttribute('scale', new THREE.BufferAttribute(particleScales, 1));

        const particleMaterial = new THREE.ShaderMaterial({
            transparent: true,
            vertexShader: particleVertex,
            fragmentShader: particleFragment,
            uniforms: {
                uTime: { type: 'f', value: 0 }
                //  uColor: { type: 'v3', value: new THREE.Color('rgb(105, 240, 255)') }
            }
        });

        const particles = new THREE.Points(particleGeometry, particleMaterial);
        scene.add(particles);

        const animate = () => {
            particleMaterial.uniforms.uTime.value += 0.05;
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };

        animate();

        const onResize = () => {
            config.winWidth = window.innerWidth;
            config.winHeight = window.innerHeight;
            camera.aspect = config.winWidth / config.winHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(config.winWidth, config.winHeight);
        };

        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('resize', onResize);
            mount.removeChild(renderer.domElement);
        };
    }, []);

    return <div className='top-0 left-0 bottom-0 right-0' ref={mountRef} style={{ width: '100vw', height: '100vh', zIndex: '-99', position: 'fixed' }} />;
};

export default Particles;
