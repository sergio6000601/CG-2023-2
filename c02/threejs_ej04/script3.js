 // Set up the scene
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );

      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);
	  
	  const curve = new THREE.CatmullRomCurve3( [
		new THREE.Vector3(-10,0,10),
		new THREE.Vector3(-5,5,5),
		new THREE.Vector3(0,0,0),
		new THREE.Vector3(5,-5,5),
		new THREE.Vector3(10,0,10)
		]);
		
	  const points = curve.getPoints(50);
		
	  const geometry = new THREE.BufferGeometry().setFromPoints( points);
	  
      // Create a material
      const material = new THREE.LineBasicMaterial({color: 0x00ff00
      });
	  
	  const line = new THREE.Line(geometry, material);
	  
	  class CustomSinCurve extends THREE.Curve {
		
		constructor (scale = 1) {
			super ();
			this.scale =scale;
		}
			
		getPoint(t, optionalTarget =new THREE.Vector3()){

			const tx = t * 3 - 1.5;
			const ty = Math.sin( 2 * Math.PI * t );
			const tz = 0;
			
			return optionalTarget.set( tx, ty, tz ).multiplyScalar( this.scale );
			}
		}
		
		const path = new CustomSinCurve(10);
		const tubo = new THREE.TubeGeometry( path, 20, 1, 8, false );
		const material2 = new THREE.MeshNormalMaterial({ color: 0xffff00});
		const mesh = new THREE.Mesh( tubo, material2 );
		scene.add( mesh );

      // Set camera position
      camera.position.z = 30;

      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);

        // Rotate the cone
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.01;

        renderer.render(scene, camera);
      };

      animate();