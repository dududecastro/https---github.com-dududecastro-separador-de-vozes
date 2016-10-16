window.tom = 2; // Cadastro do intervalo de 1 tom
window.semitom = 1; // Cadastro do intervalo de 1 semitom
window.items = ['C','C#','D','D#','E','F','F#','G','G#','A','Bb','B','C','C#','D','D#','E','F','F#','G','G#','A','Bb','B','C','C#','D','D#','E','F','F#','G','G#','A','Bb','B']; // Cadastrando as notas em um array, coloquei repetidas pra que depois possa subir ou descer os tons
window.classname = document.getElementsByClassName('action');
window.minornote = document.getElementsByClassName('notamenor');

function initBody(){

}

function displayScale() {

	window.ResultadoPrimeira = document.getElementById("notasmusicas-resultados-primeira");
	window.ResultadoTerca = document.getElementById("notasmusicas-resultados-terca");
	window.ResultadoQuinta = document.getElementById("notasmusicas-resultados-quinta");

	window.ResultadoPrimeira.innerHTML = "";
	window.ResultadoTerca.innerHTML = "";
	window.ResultadoQuinta.innerHTML = "";

	window.minhanota = document.conversordenotas.tomdamusica;
		
	var i;
    for (var i = 0; i < minhanota.length; i++) {
        if (minhanota[i].checked) {
			// Conversor tosco de letras pra índice do array de notas
			if (minhanota.value === 'C') {minhanota = 12;}
			if (minhanota.value === 'Db') {minhanota = 13;}
			if (minhanota.value === 'D') {minhanota = 14;}
			if (minhanota.value === 'Eb') {minhanota = 15;}
			if (minhanota.value === 'E') {minhanota = 16;}
			if (minhanota.value === 'F') {minhanota = 17;}
			if (minhanota.value === 'Gb') {minhanota = 18;}
			if (minhanota.value === 'G') {minhanota = 19;}
			if (minhanota.value === 'Ab') {minhanota = 20;}
			if (minhanota.value === 'A') {minhanota = 21;}
			if (minhanota.value === 'Bb') {minhanota = 22;}
			if (minhanota.value === 'B') {minhanota = 23;}
		}
    }
			
	window.scale = [
	// Definição do intervalo da escala maior
		items[minhanota],
		items[minhanota + tom],
		items[minhanota + tom + tom],
		items[minhanota + tom + tom + semitom],
		items[minhanota + tom + tom + semitom + tom],
		items[minhanota + tom + tom + semitom + tom + tom],
		items[minhanota + tom + tom + semitom + tom + tom + tom]
	];
	window.scaleMenor = [
	// Definição do intervalo da escala menor
		items[minhanota],
		items[minhanota + tom],
		items[minhanota + tom + semitom],
		items[minhanota + tom + semitom + tom],
		items[minhanota + tom + semitom + tom + tom],
		items[minhanota + tom + semitom + tom + tom + semitom],
		items[minhanota + tom + semitom + tom + tom + semitom + tom]
	];	

	if(typeof scaleFinal === 'undefined') {
		window.scaleFinal = scale;
	}

	// Definição da Primeira voz, Terça e Quinta.
	window.primeira = scaleFinal;
	window.terca = scaleFinal.slice(2, 7).concat(scaleFinal.slice(0, 2));
	window.quinta = scaleFinal.slice(4, 7).concat(scaleFinal.slice(0, 4));


	document.getElementById("tecladoNotas").innerHTML = '<li>' + primeira.join("</li><li>") + '</li><li class="deleteNote">◁</li>';

}

function convertScale() {
	ResultadoPrimeira.innerHTML = '';
	ResultadoTerca.innerHTML = '';
	ResultadoQuinta.innerHTML = '';

	// Conversão de vozes notas por notas
	window.notasmusica = document.getElementById("notasmusica").value.split(/\s+/g);
	for (var i = 0, len = notasmusica.length; i < len; i++) {
		if(notasmusica[i]){
			window.notePosition = scaleFinal.indexOf(notasmusica[i]);
			ResultadoPrimeira.insertAdjacentHTML('beforeend', primeira[notePosition] + ' ');
			ResultadoTerca.insertAdjacentHTML('beforeend', terca[notePosition] + ' ');
			ResultadoQuinta.insertAdjacentHTML('beforeend', quinta[notePosition] + ' ');
		} else {
			ResultadoPrimeira.insertAdjacentHTML('beforeend', 'Volte, e tente novamente.');
			ResultadoTerca.insertAdjacentHTML('beforeend', 'Volte, e tente novamente.');
			ResultadoQuinta.insertAdjacentHTML('beforeend', 'Volte, e tente novamente.');
		}
	}


	document.getElementById("pergunta").setAttribute('style','display:none;');
	document.getElementById("colocanotas").setAttribute('style','display:none;');
	document.getElementById("resultados").setAttribute('style','display:block;');
}

function vaiPraColoca() {
	displayScale();
	document.getElementById("pergunta").setAttribute('style','display:none;');
	document.getElementById("colocanotas").setAttribute('style','display:block;');
	document.getElementById("resultados").setAttribute('style','display:none;');

}
function backToReality1() {

	document.getElementById("pergunta").setAttribute('style','display:block;');
	document.getElementById("colocanotas").setAttribute('style','display:none;');
	document.getElementById("resultados").setAttribute('style','display:none;');

}
function resetToReality() {

	document.getElementById("pergunta").setAttribute('style','display:block;');
	document.getElementById("colocanotas").setAttribute('style','display:none;');
	document.getElementById("resultados").setAttribute('style','display:none;');

}
function backToReality2() {

	document.getElementById("pergunta").setAttribute('style','display:none;');
	document.getElementById("colocanotas").setAttribute('style','display:block;');
	document.getElementById("resultados").setAttribute('style','display:none;');

}
function f3(ta) {
    ta.value = ta.value.toUpperCase();
}

function digitaNota() {
	alert('OPA');
}

function Maior() {
	console.log('executou Maior');
		for (var i=0; i < minornote.length; i++) {
		    minornote[i].setAttribute("style", "display:none");
		}
		scaleFinal = scale;
		document.getElementById("notas-resultado").innerHTML = primeira.join(" - ");
		document.getElementById("notas-resultado2").innerHTML = terca.join(" - ");
		document.getElementById("notas-resultado3").innerHTML = quinta.join(" - ");
}
function Menor() {
	displayScale();
		for (var i=0; i < minornote.length; i++) {
		    minornote[i].setAttribute("style", "display:inline-block");
		}
		scaleFinal = scaleMenor;
		document.getElementById("notas-resultado").innerHTML = primeira.join(" - ");
		document.getElementById("notas-resultado2").innerHTML = terca.join(" - ");
		document.getElementById("notas-resultado3").innerHTML = quinta.join(" - ");
}