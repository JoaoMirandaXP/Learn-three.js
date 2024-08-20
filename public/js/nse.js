// Simulação de Mecânica dos Fluidos

import * as THREE from 'three';

const scene = new THREE.Scene();
// THREE.PerspectiveCamera(FOV, aspect ratio, close, far)
// Rendering distance (d)
// d<close - display none
// close<d<far - display 
// d>far - display none
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );

// Define the camera position
camera.position.set(0,0,15);
camera.lookAt(0,0,0);

// Add the canvas to the DOM
document.body.appendChild( renderer.domElement );


// Make the objects
const points = [];
points.push(new THREE.Vector3(-10,0,0));
points.push(new THREE.Vector3(0,10,1));
points.push(new THREE.Vector3(10,0,0));
// To close the polygon, it's I found this way of doing it
points.push(new THREE.Vector3(-10,0,0));
const lineGeo = new THREE.BufferGeometry().setFromPoints(points);

// Make the materials
const lineMat = new THREE.LineBasicMaterial({color: 0x0000ff});

// Mesh the geometry with the material
const line = new THREE.Line(lineGeo, lineMat);


// Add the mesh to the scene
scene.add(line);

// Locate the camera
//camera.position.z = 5;

function animate() {
	line.rotation.x += 0.02;
	line.rotation.y += 0.02;
	// On the animation, it's needed to render it various times
	renderer.render( scene, camera );
}
