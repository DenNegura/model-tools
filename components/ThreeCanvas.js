import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

export default class ThreeCanvas {
    static create(arrayBuffer) {
        const canvas = document.getElementById("frame__canvas");

        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });

        const scene = new THREE.Scene();

        const ambientLight = new THREE.AmbientLight(0x404040, 1.5); // Мягкий свет
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 10, 7.5);
        scene.add(directionalLight);

        const camera = new THREE.PerspectiveCamera(
            75,
            canvas.clientWidth / canvas.clientHeight,
            0.1,
            1000
        );
        camera.position.z = 5;

        // Добавление OrbitControls для управления камерой
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true; // Включение демпфирования инерции (для плавности)
        controls.dampingFactor = 0.25; // Коэффициент демпфирования
        controls.screenSpacePanning = false; // Включение/отключение панорамирования в экранном пространстве
        controls.maxPolarAngle = Math.PI / 2; // Ограничение вертикального угла вращения камеры

        const loader = new GLTFLoader();

        loader.parse(
            arrayBuffer,
            "",
            (gltf) => {
                scene.add(gltf.scene);
                console.log(gltf);
                renderer.render(scene, camera);
            },
            (error) => {}
        );

        function animate() {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        }
        animate();
    }
}
