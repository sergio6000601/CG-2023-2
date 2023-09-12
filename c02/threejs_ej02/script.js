const scene = new THREE.Scene();
//añado la camar de perspectiva 
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//le añado la camara ortogonal (con un nombre "diferente" para evitar errores)
const camera1 = new THREE.OrthographicCamera( window.innerWidth / - 1, window.innerWidth / 1, window.innerHeight / 1, window.innerHeight / - 1, 2, 1000 );
//scene.add( camera1 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//genero el cubo con boxgeometry
const geometry = new THREE.BoxGeometry( 1.5, 1.5, 1.5 );
const material1 = new THREE.MeshBasicMaterial( { color: 0x550055 } );
const cube = new THREE.Mesh( geometry, material1 );
const posicion = cube.position.set(2,0,4,1)
scene.add( cube );

//genero la esfera con spheregeometry
const geometry1 = new THREE.SphereGeometry( 1, 32, 32 );
const material2 = new THREE.MeshBasicMaterial( { color: 0x555500 } );
const sphere = new THREE.Mesh( geometry1, material2 );
const posicion2 = sphere.position.set(8,0,4,1)

scene.add(sphere);

camera.position.z = 10;
camera.position.x = 5;

//function animate() {
	//requestAnimationFrame( animate );
	//cube.rotation.x += 0.01;
	//cube.rotation.y += 0.01;
	
	//sphere.rotation.x += 0.01;
	//sphere.rotation.y += 0.01;
	
	//alterno entre las camaras y tengo una crisi porque no funciona la ortogonal :c
	renderer.render( scene, camera );
//}

//animate();