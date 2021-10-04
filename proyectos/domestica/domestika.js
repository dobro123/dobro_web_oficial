function hamburguesa() {
	document.getElementById("menu").style.display="block";

	if (window.matchMedia("(max-width: 480px)").matches) {
		document.getElementById("menu").style.display="flex";
	}
}
function cerrar_publicidad() {
	document.getElementById("publicidad").style.display="none";
}

function abrirvideos() {
	document.getElementById("video1").style.display="block";
	document.getElementById("cerrar_video").style.display="block";
}
function cerrar_video() {
	document.getElementById("cerrar_video").style.display="none";
	document.getElementById("video1").style.display="none";
}
function depre() {
	document.getElementById("depresion").style.boxShadow="3px 3px 5px navy";
}
function esconder_menu() {
	document.getElementById("menu").style.display="none";
}
function contar() {
	var cantidad_cursos = document.querySelectorAll(" #contenedor_videos > .videos_cursos ");
	document.getElementById("contador_cursos").innerHTML = "Tenemos ahora mismo " + cantidad_cursos.length + " Cursos disponibles para ti";
}