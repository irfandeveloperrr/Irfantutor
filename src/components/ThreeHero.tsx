import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * A tasteful, lightweight 3D scene for the hero: a softly glowing
 * knowledge orb made of small floating spheres arranged on a sphere,
 * with slowly orbiting "book/atom" rings. Renders behind the hero copy.
 */
export default function ThreeHero() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 7);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // Lights
    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambient);
    const dir = new THREE.DirectionalLight(0x10b981, 1.2);
    dir.position.set(3, 4, 5);
    scene.add(dir);
    const dir2 = new THREE.DirectionalLight(0x34d399, 0.6);
    dir2.position.set(-4, -2, -3);
    scene.add(dir2);

    // Central glowing core
    const coreGeo = new THREE.IcosahedronGeometry(1.1, 1);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x047857,
      emissive: 0x10b981,
      emissiveIntensity: 0.35,
      flatShading: true,
      metalness: 0.3,
      roughness: 0.35,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    scene.add(core);

    // Wireframe overlay on core
    const wire = new THREE.Mesh(
      coreGeo,
      new THREE.MeshBasicMaterial({
        color: 0x6ee7b7,
        wireframe: true,
        transparent: true,
        opacity: 0.25,
      })
    );
    core.add(wire);

    // Orbiting particle sphere
    const particleGroup = new THREE.Group();
    const particleCount = 120;
    const radius = 2.4;
    const particleGeo = new THREE.SphereGeometry(0.04, 8, 8);
    const particleMat = new THREE.MeshStandardMaterial({
      color: 0x34d399,
      emissive: 0x10b981,
      emissiveIntensity: 0.8,
    });
    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      const p = new THREE.Mesh(particleGeo, particleMat);
      p.position.set(x, y, z);
      particleGroup.add(p);
    }
    scene.add(particleGroup);

    // Orbiting rings (tilted)
    const ringGeo = new THREE.TorusGeometry(1.8, 0.012, 12, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: 0.55,
    });
    const ring1 = new THREE.Mesh(ringGeo, ringMat);
    ring1.rotation.x = Math.PI / 2.4;
    scene.add(ring1);
    const ring2 = new THREE.Mesh(ringGeo, ringMat.clone() as THREE.MeshBasicMaterial);
    (ring2.material as THREE.MeshBasicMaterial).opacity = 0.35;
    ring2.rotation.x = Math.PI / 1.6;
    ring2.rotation.y = Math.PI / 4;
    scene.add(ring2);

    // Floating accent books (small rounded boxes)
    const bookGroup = new THREE.Group();
    const bookGeo = new THREE.BoxGeometry(0.5, 0.08, 0.34);
    const bookColors = [0x047857, 0x10b981, 0x34d399, 0x059669];
    for (let i = 0; i < 5; i++) {
      const mat = new THREE.MeshStandardMaterial({
        color: bookColors[i % bookColors.length],
        emissive: bookColors[i % bookColors.length],
        emissiveIntensity: 0.2,
        metalness: 0.4,
        roughness: 0.4,
      });
      const book = new THREE.Mesh(bookGeo, mat);
      const angle = (i / 5) * Math.PI * 2;
      const r = 3.1;
      book.position.set(Math.cos(angle) * r, Math.sin(angle * 1.3) * 0.8, Math.sin(angle) * r);
      book.rotation.set(angle, angle * 0.5, 0);
      bookGroup.add(book);
    }
    scene.add(bookGroup);

    // Mouse parallax
    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    const onPointer = (e: PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      mouse.tx = ((e.clientX - rect.left) / rect.width - 0.5) * 0.6;
      mouse.ty = ((e.clientY - rect.top) / rect.height - 0.5) * 0.6;
    };
    mount.addEventListener('pointermove', onPointer);

    // Resize
    const onResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener('resize', onResize);

    let raf = 0;
    const clock = new THREE.Clock();
    const animate = () => {
      const t = clock.getElapsedTime();
      if (!prefersReduced) {
        core.rotation.y = t * 0.25;
        core.rotation.x = t * 0.15;
        particleGroup.rotation.y = t * 0.12;
        particleGroup.rotation.x = t * 0.06;
        ring1.rotation.z = t * 0.3;
        ring2.rotation.z = -t * 0.22;
        bookGroup.rotation.y = t * 0.18;

        mouse.x += (mouse.tx - mouse.x) * 0.05;
        mouse.y += (mouse.ty - mouse.y) * 0.05;
        camera.position.x = mouse.x * 1.5;
        camera.position.y = mouse.y * 1.5;
        camera.lookAt(0, 0, 0);
      }
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      mount.removeEventListener('pointermove', onPointer);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      coreGeo.dispose();
      particleGeo.dispose();
      ringGeo.dispose();
      bookGeo.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />;
}
