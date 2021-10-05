/* modo oscuro */
function modo_oscuro() {
	let input_modo_oscuro = document.getElementById('check_modo_oscuro');
	if(input_modo_oscuro.checked) {
	 	document.querySelector("html").style.setProperty('--color_negro', '#ffffff');
		document.querySelector("html").style.setProperty('--color_blanco', '#000000');
	}else {
	 	document.querySelector("html").style.setProperty('--color_negro', '#000000');
		document.querySelector("html").style.setProperty('--color_blanco', '#ffffff');
	}
}

/* Scroll Movil */
let lastScrollTop = 0;
if(window.matchMedia("(max-width: 480px)").matches) {
	window.addEventListener("scroll", function(){
	let navegador_movil = document.querySelector('header');
	let st = window.pageYOffset || document.documentElement.scrollTop;
		if (st > lastScrollTop){
			navegador_movil.style.transform="translateY(-124%)";
		} else {
			navegador_movil.style.transform="translateY(0%)";
		}
			lastScrollTop = st <= 0 ? 0 : st;
		}, false);
}else {
	console.log("scroll hacia abajo");
}

/* Desplegar especificaciones de proyectos */
function desplegar_especificaciones(x) {
	let proyecto_div = document.getElementById("proyectos");
	let especificaciones = document.querySelectorAll(".p_especificaciones");
	let checkbox_spec = document.querySelectorAll("p > input");
	let imagen_flechita = document.querySelectorAll("p > img.flecha_desplegable");
	if(checkbox_spec[x].checked) {
		for(let i=0; i<especificaciones.length; i++) {
			especificaciones[i].style.height="0px";
			especificaciones[i].style.padding="0px 8px";
			imagen_flechita[i].style.transform="rotate(0deg)";
			if(i == x) {
				checkbox_spec[i].checked = true;
			}else {
				checkbox_spec[i].checked = false;
			}
		}
		especificaciones[x].style.height="280px";
		especificaciones[x].style.padding="8px";
		imagen_flechita[x].style.transform="rotate(180deg)";
	}	
	else {
  		especificaciones[x].style.height="0px";
  		especificaciones[x].style.padding="0px 8px";
  		imagen_flechita[x].style.transform="rotate(0deg)";
	}	
}

/* Validar Formulario de contacto */
function validar_form() {
	let boton_envio = document.querySelector('form > button');
	let icono_boton = document.getElementById('icono_envio');
	let nombre_user = document.getElementById('input_nombre').value;
	let correo_user = document.getElementById('input_correo').value;
	let mensaje_user = document.getElementById('mensaje').value;
	let span_nombre = document.querySelector('#input_nombre + span');
	let span_correo = document.querySelector('#input_correo + span');
	let span_mensaje = document.querySelector('#mensaje + span');
	let regex_nombre = new RegExp(/[^0-9\.\,\"\?\!\;\:\#\$\%\&\(\)\*\+\-\/\<\>\=\@\[\]\\\^\_\{\}\|\~]+/);
	let regex_correo = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g);
	let regex_mensaje = new RegExp(/[A-z]{10,500}/);
	prueba_nombre = regex_nombre.test(nombre_user);
	prueba_correo = regex_correo.test(correo_user);
	prueba_mensaje = regex_nombre.test(mensaje_user);
	// trigger a DOM reflow 
	boton_envio.classList.remove("botoncito_error"); 
	void boton_envio.offsetWidth; 
	boton_envio.classList.add("botoncito");
	if(prueba_nombre == true & prueba_correo == true & prueba_mensaje == true) {
		boton_envio.setAttribute("class", "botoncito");
		icono_boton.setAttribute("src", "img/enviar.svg");
		return envio_form();
	}
	else {
		void boton_envio.offsetWidth; 
		boton_envio.setAttribute("class", "botoncito_error");
		icono_boton.setAttribute("src", "img/error_email.svg");

		if(prueba_nombre == false) {
			input_nombre.style.borderBottom="2px solid #f21d1e";
			span_nombre.style.backgroundImage="url('img/exclamacion.svg')";
		}else if (prueba_nombre == true) {
			input_nombre.style.borderBottom="2px solid #0597f2";
			span_nombre.style.backgroundImage="url('img/verificacion.svg')";
		}

		if(prueba_correo == false) {
			input_correo.style.borderBottom="2px solid #f21d1e";
			span_correo.style.backgroundImage="url('img/exclamacion.svg')";
		}else if (prueba_correo == true) {
			input_correo.style.borderBottom="2px solid #0597f2";
			span_correo.style.backgroundImage="url('img/verificacion.svg')";
		}

		if(prueba_mensaje == false) {
			mensaje.style.borderBottom="2px solid #f21d1e";
			span_mensaje.style.backgroundImage="url('img/exclamacion.svg')";
		}else if (prueba_mensaje == true) {
			mensaje.style.borderBottom="2px solid #0597f2";
			span_mensaje.style.backgroundImage="url('img/verificacion.svg')";
		}
	}
}

/* Animacion del formulario y el envio */
function envio_form() {
	setTimeout(function(){ 
		let boton_envio = document.querySelector('button[type="button"]');
		boton_envio.setAttribute("type", "submit");
		boton_envio.click();
	}, 2000);
}

/* efecto scroll 1 */
let pagina = 1;
function alturita() {
	/* En que seccion se encuentra el usuario */
	let informacion = document.getElementById('informacion_personal');
	let tecnologias = document.getElementById('contenedor_tecnologias');
	let proyectos = document.getElementById('proyectos');
	let contacto = document.getElementById('rrss_pack');
	if(informacion.getBoundingClientRect().top > 0) {
		pagina = 0;
		return pintar_enlace(pagina + 1);
	}
	if(tecnologias.getBoundingClientRect().top < 200 && tecnologias.getBoundingClientRect().top > 0) {
		pagina = 1;
		return pintar_enlace(pagina + 1);
	}
	if(proyectos.getBoundingClientRect().top < 200 && proyectos.getBoundingClientRect().top > 0) {
		pagina = 2;
		return pintar_enlace(pagina + 1);
	}
	if(contacto.getBoundingClientRect().top < 300 && contacto.getBoundingClientRect().top > 0) {
		pagina = 3;
		return pintar_enlace(pagina + 1);
	}

	/* Tarjetgas giratorias */
	let tarjeta_tecnologia = document.querySelectorAll('.tarjeta_giratoria');
	let contenido_tarjeta = document.querySelectorAll('.tarjeta_giratoria > .inner');
	for(let i=0; i<5; i++) {
		if(tarjeta_tecnologia[i].getBoundingClientRect().top < 350) {
			contenido_tarjeta[i].style.transform="rotateY(180deg)";
			contenido_tarjeta[i].classList.add("tarjeta_tecnologias_progreso");
		}
		else {
			contenido_tarjeta[i].style.transform="rotateY(0deg)";
		}
	}

	/* habilidades informáticas */
	let secciones = document.querySelectorAll('.seccion_informatica');
	for(let i=0; i<6; i++) {
		if(secciones[i].getBoundingClientRect().top < 350) {
			secciones[i].classList.add("seccion_efecto");
		}
		else {
			secciones[i].classList.remove("seccion_efecto");
		}
	}

	/* Extra */
	let secciones_extra = document.querySelectorAll('.extra_tecnologia_c');
	for(let i=0; i<3; i++) {
		if(secciones_extra[i].getBoundingClientRect().top < 500) {
			secciones_extra[i].classList.add("extra_tecnologia_efecto", "extra_tecnologia_c_on");
		}
		else {
			secciones_extra[i].classList.remove("extra_tecnologia_efecto", "extra_tecnologia_c_on");
		}
	}

	/* idiomas */
	let idiomas = document.querySelectorAll('.tarjeta_idiomas');
	for(let i=0; i<4; i++) {
		if(idiomas[i].getBoundingClientRect().top < 500) {
			idiomas[i].classList.add("idiomas_capacidad_efecto");
		}
		else {
			idiomas[i].classList.remove("idiomas_capacidad_efecto");
		}
	}

	/* RRSS */
	let rrss = document.getElementById('rrss_pack');
	let div_telefono = document.getElementById('telefono');
	if(div_telefono.getBoundingClientRect().top < 500) {
		div_telefono.classList.add("telefono_vibracion");
	}else {
		div_telefono.classList.remove("telefono_vibracion");
	}

	/* firma */
	let mi_firma = document.getElementById('firma_dobro');
	let mq_movil = window.matchMedia('(max-height: 640px)');
	if(mq_movil.matches) {
		if(mi_firma.getBoundingClientRect().top < 550) {
		mi_firma.classList.add("firma_efecto");
		}
		else {
			mi_firma.classList.remove("firma_efecto");
		}
	}else {
		if(mi_firma.getBoundingClientRect().top < 1100) {
			mi_firma.classList.add("firma_efecto");
		}
		else {
			mi_firma.classList.remove("firma_efecto");
		}
	}

	if (window.matchMedia("(max-width: 480px)").matches) {
		return scroll_movil();
	}
}

function scroll_movil() {
	/* En que seccion se encuentra el usuario */
	let informacion = document.getElementById('informacion_personal');
	let tecnologias = document.getElementById('contenedor_tecnologias');
	let proyectos = document.getElementById('proyectos');
	let contacto = document.getElementById('rrss_pack');
	let navMovilEnlaces = document.querySelectorAll('nav#movil > a');
	
	for(let i=0; i< 4; i++) {
		navMovilEnlaces[i].style.background="#ffffff00";
		navMovilEnlaces[i].style.transition=".5s ease";
	}

	console.log(proyectos.getBoundingClientRect().bottom);

	if(informacion.getBoundingClientRect().top > -1200) {
		navMovilEnlaces[0].style.background="#ffffffDD";
	}
	if(tecnologias.getBoundingClientRect().top < 300 && tecnologias.getBoundingClientRect().top > -4000) {
		navMovilEnlaces[1].style.background="#ffffffDD";
	}
	if(proyectos.getBoundingClientRect().top < 200 && proyectos.getBoundingClientRect().bottom > 320) {
		navMovilEnlaces[2].style.background="#ffffffDD";
	}
	if(contacto.getBoundingClientRect().top < 380 && contacto.getBoundingClientRect().top > 0) {
		navMovilEnlaces[3].style.background="#ffffffDD";
	}
}

/* Velo del navegador */
function pintar_enlace(x) {
	let div_velo = document.querySelector("nav > div");
	let calculos = x;
	let pixeles = (calculos * 120) + 240;
	let pixeles_final = pixeles + "px";
	div_velo.style.left = pixeles_final;

	let enlace = document.querySelectorAll("nav > a");
	for(let i=0; i<4; i++) {
		enlace[i].style.color="var(--color_blanco)";
	}
	enlace[pagina].style.color="var(--color_negro)";
}
function velo() {
	let div_velo = document.querySelector("nav > div");
	if(pagina == 0) {
		div_velo.style.left = "360px";
	}
	if(pagina == 1) {
		div_velo.style.left = "480px";
	}
	if(pagina == 2) {
		div_velo.style.left = "600px";
	}
	if(pagina == 3) {
		div_velo.style.left = "720px";
	}
}
