let nombre_user = "";
let saldo = 500;
let apostado = 0;
let fichas = document.querySelectorAll("#conjunto_fichas > div");
let casillas = document.querySelectorAll(".filas > div");
let casilla_select = 37;
let casillas_select = ["37"];
let dinero_casillas_select = ["0"];
let ficha_seleccionada = 0;
let casilla = "";
let columna_seleccionada = 0;
let par_impar_seleccionado = 0;
let colores_selecionado = 0;
let fila_seleccionada = 0;

let apostado_numero = 0;
let apostado_fila = 0;
let apostado_col = 0;
let apostado_parimpar = 0;
let apostado_color = 0;
let ultimos_10num = [];

let cantidad_apuestas = 0;
let cantidad_total_apuesta = 0;
let ganancia = 0;
let perdidas = 0;
let beneficios = 0;

// Coloca el nombre y esconde el formulario
function comenzar() {
	nombre_user = document.getElementById("nombre_usuario").value;
	
	if(nombre_user == ""){
		alert("necesito un nombre")
	}else{
		persona.innerHTML=nombre_user;
		formulario.style.display="none";
		mesa.style.pointerEvents="auto";
		boton_jugar = document.getElementById("jugar");
		boton_jugar.style.pointerEvents="auto";
	}
	
}
// seleccionar la cantidad de dinero
function select_cantidad(x) {
	ficha_seleccionada = x;
	let ruleta = document.getElementById("ruleta_juego");
	ruleta.style.transition="0s linear";
	ruleta.style.transform="rotate(0deg)";
}

// apostar al numero
function apostar (y) {
	casilla_select = y;
	casillas_select.push(y);
	console.log(casillas_select);

	dinero_casillas_select.push(ficha_seleccionada);
	console.log(dinero_casillas_select);

	return colocar_ficha()
}

// apostar a columna
function apostar_col(col) {
	columna_seleccionada = col;
	return colocar_ficha_col();
}

//apostas a filas 
function apostar_fila(fila) {
	fila_seleccionada = fila;
	return colocar_fila();
}

//apostar al par impar
function parinpar(par_impar) {
	par_impar_seleccionado = par_impar;
	return colocar_parimpar();
}

//apostar colores
function colores(color) {
	colores_selecionado = color;
	return colocar_colores();
} 

// crear la ficha dentro de la casilla
function colocar_ficha() {
	casilla = document.getElementById('d_' + casilla_select);
	if (ficha_seleccionada == 0) {
		alert("selecciona cantidad a apostar");
	}else {
		if(ficha_seleccionada > saldo) {
			alert("no tienes suficiente saldo");
		}
		else {
			apostado_numero = ficha_seleccionada + apostado_numero;
			console.log("a ficha " + apostado_numero);
			return crear_ficha();
		}
	}
}

function colocar_ficha_col() {
	casilla = document.getElementById('col-' + columna_seleccionada);
	if (ficha_seleccionada == 0) {
		alert("selecciona cantidad a apostar");
	}else {
		if(ficha_seleccionada > saldo) {
			alert("no tienes suficiente saldo");
		}
		else {
			apostado_col = ficha_seleccionada + apostado_col;
			console.log("a fila " + apostado_col);
			return crear_ficha();
		}
	}
}

function colocar_fila() {
	casilla = document.getElementById('fila-' + fila_seleccionada);
	if (ficha_seleccionada == 0) {
		alert("selecciona cantidad a apostar");
	}else {
		if(ficha_seleccionada > saldo) {
			alert("no tienes suficiente saldo");
		}
		else {
			apostado_fila = ficha_seleccionada + apostado_fila;
			console.log("a fila " + apostado_fila);
			return crear_ficha();
		}
	}
}

function colocar_parimpar() {
	casilla = document.getElementById('p_' + par_impar_seleccionado);
	if (ficha_seleccionada == 0) {
		alert("selecciona cantidad a apostar");
	}else {
		if(ficha_seleccionada > saldo) {
			alert("no tienes suficiente saldo");
		}
		else {
			apostado_parimpar = ficha_seleccionada + apostado_parimpar;
			console.log("a par impar " + apostado_parimpar);
			return crear_ficha();
		}
	}
}

function colocar_colores() {
	casilla = document.getElementById('c_' + colores_selecionado);
	if (ficha_seleccionada <= 0) {
		alert("selecciona cantidad a apostar");
	}
	else {
		if(ficha_seleccionada > saldo) {
			alert("no tienes suficiente saldo");
		}
		else {
			apostado_color = ficha_seleccionada + apostado_color;
			console.log("a color " + apostado_color);
			return crear_ficha();
		}
	}	
}

function crear_ficha() {
	// primero restamos lo apostado al saldo.
	if(ficha_seleccionada > saldo) {
		alert("no tienes suficiente saldo");
	}
	else{
		saldo = saldo - ficha_seleccionada;
		apostado = apostado + ficha_seleccionada;
		
		let dinero_apostado = document.getElementById("en_juego");
		dinero_apostado.innerHTML= apostado;
		let saldo__disponible = document.getElementById("saldo_disponible");
		saldo__disponible.innerHTML=saldo;

		console.log(saldo);
		console.log(apostado);
		let ficha_creada = document.createElement("div");
		ficha_creada.setAttribute("class", "fichas mi_ficha");

		if(ficha_seleccionada == 10) {
			ficha_creada.setAttribute("id", "f-10");
		}
		if(ficha_seleccionada == 20) {
			ficha_creada.setAttribute("id", "f-20");
		}
		if(ficha_seleccionada == 50) {
			ficha_creada.setAttribute("id", "f-50");
		}
		
		let contenido_ficha = document.createTextNode(ficha_seleccionada);
		ficha_creada.appendChild(contenido_ficha);
		casilla.appendChild(ficha_creada);
	}
}


//Jugar
function jugar() {

	let ruleta = document.getElementById("ruleta_juego");
	ruleta.style.transition="1s ease-in";
	ruleta.style.transform="rotate(1440deg)";


	//Generar un numero aleatorio entre 0 y 36
	let numero_cpu = Math.floor(Math.random()* 37) + 0;
	ultimos_10num.push(numero_cpu);
	num_10.innerHTML = ultimos_10num;

	let casilla_cpu = document.getElementById("d_" + numero_cpu);
	let clase_color = casilla_cpu.className;


	//generar un span de color
	let colorcito = document.createElement("span");

	//generar un span impar o par
	let parimpar_span = document.createElement("span");
	let numero_par = numero_cpu % 2;
	if(numero_par == 0) {
		parimpar_span.setAttribute("class", "span_par");
	}
	if(numero_par == 1) {
		parimpar_span.setAttribute("class", "span_impar");
	}
	par_10.appendChild(parimpar_span);
	

	if (clase_color.includes("rojo")) {
		numero_ruleta.style.background="#e40522";

		colorcito.setAttribute("class", "span_rojo");
		colores_10.appendChild(colorcito);
	}
	if (clase_color.includes("negro")) {
		numero_ruleta.style.background="#1b161c";

		colorcito.setAttribute("class", "span_negro");
		colores_10.appendChild(colorcito);
	}
	numero_ruleta.innerHTML=numero_cpu;

	if(apostado == 0) {
		alert("haz una apuesta");
	}
	else{
		// Apuestas de color
		if (apostado_color > 0) {
			console.log(casilla_cpu);
			let clase_color= casilla_cpu.className;
			if (clase_color.includes("rojo")) {
				if(colores_selecionado == 1) {
					saldo =	saldo + (apostado_color * 2);
					console.log("vitoria " + saldo);
					ganancia = (apostado_color * 2);
				}else{
					console.log("no acertaste");
					return adeu();
				}
			}
			else if(clase_color.includes("negro")){
				if(colores_selecionado == 2) {
					saldo =	saldo + (apostado_color * 2);
					console.log("vitoria " + saldo);
					ganancia = (apostado_color * 2);
				}else{
					console.log("no acertaste");
				}
			}
			else if(numero_cpu == 0) {
				console.log("no 0000");
			}
		}

		//Apuesta par impar
		if(apostado_parimpar > 0) {
			let es_par = numero_cpu % 2;
			if(par_impar_seleccionado == 2) {
				if(es_par == 0) {
					saldo =	saldo + (apostado_parimpar * 2);
					ganancia = ganancia + (apostado_parimpar * 2);
				}
			}
			if(par_impar_seleccionado ==1) {
				if(es_par != 0) {
					saldo =	saldo + (apostado_parimpar * 2);
				}
			}
		}

		//Apuesta columnas
		if(apostado_col > 0) {
			if(columna_seleccionada == 1) {
				if(numero_cpu <= 12 && numero_cpu !=0) {
					saldo =	saldo + (apostado_col * 3);
					ganancia = ganancia + (apostado_col * 3);
				}else {
				}
			}
			if(columna_seleccionada == 2) {
				if(numero_cpu <= 24 && numero_cpu >= 13) {
					saldo =	saldo + (apostado_col * 3);
					ganancia = ganancia + (apostado_col * 3);
				}else {
					perdidas = perdidas + apostado_col;
				}
			}
			if(columna_seleccionada == 3) {
				if(numero_cpu <= 36 && numero_cpu >= 25) {
					saldo =	saldo + (apostado_col * 3);
					ganancia = ganancia + (apostado_col * 3);
				}else {
					perdidas = perdidas + apostado_col;
				}
			}
		}

		//Apuesta Filas
		if(apostado_fila > 0) {
			let clase_fila= casilla_cpu.className;
			if(fila_seleccionada == 1 && clase_fila.includes("n_f_3")) {
				saldo =	saldo + (apostado_fila * 3);
				ganancia = ganancia + (apostado_fila * 3);
			}
			if(fila_seleccionada == 2 && clase_fila.includes("n_f_2")) {
				saldo =	saldo + (apostado_fila * 3);
				ganancia = ganancia + (apostado_fila * 3);	
			}
			if(fila_seleccionada == 3 && clase_fila.includes("n_f_1")) {
				saldo =	saldo + (apostado_fila * 3);
				ganancia = ganancia + (apostado_fila * 3);	
			}
		}

		//Apuesta a numeros
		if(apostado_numero > 0) {
			if(casillas_select.includes(numero_cpu)) {
				let posicion_numero = casillas_select.indexOf(numero_cpu);
				console.log(posicion_numero);
				let dinero_por_numero = dinero_casillas_select[posicion_numero] * 36;
				console.log("beneficios "+ dinero_por_numero);
				saldo = saldo + dinero_por_numero;
				ganancia = ganancia + dinero_por_numero;
			}else {
			}
		}

		/* Generar informe de la apuesta */
		cantidad_apuestas = cantidad_apuestas + 1;
		cantidad_total_apuesta = apostado_color + apostado_parimpar + apostado_col + apostado_fila + apostado_numero;
		perdidas = ganancia - cantidad_total_apuesta;
		beneficios = ganancia - cantidad_total_apuesta;
		let span_n_apuesta = document.getElementById('id_apuesta');
		let span_c_apuesta = document.getElementById('id_cantidad');
		let span_ganacia = document.getElementById('id_ganancia');
		let span_beneficios = document.getElementById('id_beneficios');
		span_n_apuesta.innerHTML=cantidad_apuestas;
		span_c_apuesta.innerHTML=cantidad_total_apuesta;
		span_ganacia.innerHTML=ganancia;
		span_beneficios.innerHTML=beneficios;
		

	}
	return adeu();
}

// Reset 
function adeu() {
	let casillas2 = document.querySelectorAll(".mi_ficha");
	let saldo__disponible = document.getElementById("saldo_disponible");

		for(let i=0; i < casillas2.length; i++) {
			let casilla_actual = casillas2[i]
			 casilla_actual.parentNode.removeChild(casilla_actual);
		}
	let dinero_apostado = document.getElementById("en_juego");
	apostado = 0;
	apostado_color = 0;
	apostado_parimpar = 0;
	apostado_col = 0;
	apostado_fila = 0;
	apostado_numero = 0;
	casillas_select = ["37"];
	dinero_casillas_select = ["0"];
	dinero_apostado.innerHTML = apostado;
	saldo__disponible.innerHTML = saldo;

	cantidad_total_apuesta = 0;
	ganancia = 0;
	perdidas = 0;
	beneficios = 0;
}