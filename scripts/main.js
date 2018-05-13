$(document).ready( function(){ 

	var useLockedControls = true,
		controls = useLockedControls ? ERNO.Locked : ERNO.Freeform;

	var ua = navigator.userAgent,
		isIe = ua.indexOf('MSIE') > -1 || ua.indexOf('Trident/') > -1;

	window.cube = new ERNO.Cube({
		hideInvisibleFaces: true,
		controls: controls,
		renderer: isIe ? ERNO.renderers.IeCSS3D : null,
		cubeJsCube: Cube.random()
	});

	var container = document.getElementById( 'container' );
	container.appendChild( cube.domElement );

	if( controls === ERNO.Locked ){
		var fixedOrientation = new THREE.Euler(  Math.PI * 0.1, Math.PI * -0.25, 0 );
		cube.object3D.lookAt( cube.camera.position );
		cube.rotation.x += fixedOrientation.x;
		cube.rotation.y += fixedOrientation.y;
		cube.rotation.z += fixedOrientation.z;
	}

	// initSolver() is the bottleneck. This should ideally be run externally to avoid long load times.
	Cube.initSolver();
	solve(window.cube);

	$("#scramble-btn").click(function() {
		$("#scramble-btn").toggleClass("collapse");
		$("#solve-btn").toggleClass("collapse");
	
		container.removeChild(container.childNodes[0]);

		cube = new ERNO.Cube({
		hideInvisibleFaces: true,
		controls: controls,
		renderer: isIe ? ERNO.renderers.IeCSS3D : null,
		cubeJsCube: Cube.random()
		});

		container.appendChild( cube.domElement );

		if( controls === ERNO.Locked ) {
			var fixedOrientation = new THREE.Euler(  Math.PI * 0.1, Math.PI * -0.25, 0 );
			cube.object3D.lookAt( cube.camera.position );
			cube.rotation.x += fixedOrientation.x;
			cube.rotation.y += fixedOrientation.y;
			cube.rotation.z += fixedOrientation.z;
		}
	})
	
	$("#solve-btn").click(function() {
		$("#scramble-btn").toggleClass("collapse");
		$("#solve-btn").toggleClass("collapse");

		solve(window.cube);
	})
})