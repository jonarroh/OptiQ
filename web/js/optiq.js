function login() {
	//Leemos Usuario y Contraseña
	let usuario = document.getElementById('txtUsuario').value;
	let password = document.getElementById('txtPassword').value;

	//Validamos que los datos sean correctos;
	if (usuario === 'Admin' && password === '123456') {
		window.location.replace('gestion/');
	} else {
		//Si el usuario o contraseña no son correctos, mandamos un mensaje
		Swal.fire('', 'Datos de usuario incorrectos,', 'warning');
	}
}
