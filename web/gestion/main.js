let ma = null; //modulo actual

function cargarModuloAccesorios() {
	fetch('producto/accesorio/accesorio.html')
		.then(res => res.text())
		.then(data => {
			document.getElementById('contenedorPrincipal').innerHTML = data;
			import('./producto/accesorio/accesorio.js').then(obj => {
				ma = obj;
			});
		})
		.catch(() => {
			document.getElementById('contenedorPrincipal').innerHTML =
				'Ocurrio un error';
		});
}
