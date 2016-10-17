window.tom = 2; // Cadastro do intervalo de 1 tom
window.semitom = 1; // Cadastro do intervalo de 1 semitom
window.items = ['C','C#','D','D#','E','F','F#','G','G#','A','Bb','B','C','C#','D','D#','E','F','F#','G','G#','A','Bb','B','C','C#','D','D#','E','F','F#','G','G#','A','Bb','B']; // Cadastrando as notas em um array, coloquei repetidas pra que depois possa subir ou descer os tons
window.classname = document.getElementsByClassName('action');
window.minornote = document.getElementsByClassName('notamenor');

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


	document.getElementById("tecladoNotas").innerHTML = '<li>' + primeira.join("</li><li>") + '</li><li class="deleteNote">◄</li>';

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
		document.querySelector(".escalas1").setAttribute('style','display:block');
		document.querySelector(".escalas2").setAttribute('style','display:block');
		document.querySelector(".escalas3").setAttribute('style','display:block');
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
		document.querySelector(".escalas1").setAttribute('style','display:block');
		document.querySelector(".escalas2").setAttribute('style','display:block');
		document.querySelector(".escalas3").setAttribute('style','display:block');
}

function Bb1() {
	window.notasNatural1 = document.getElementById("notasmusicas-resultados-primeira").value.split(/\s+/g);
	ResultadoPrimeira.innerHTML = '';
	for (var i = 0, len = notasmusica.length; i < len; i++) {
		if(notasNatural1[i]){
			window.notePosition1 = scaleFinal.indexOf(notasNatural1[i]);
				if (primeira[notePosition1] === 'C') {notafinal = items[14];};
				if (primeira[notePosition1] === 'C#' || primeira[notePosition1] === 'Db') {notafinal = items[15];};
				if (primeira[notePosition1] === 'D') {notafinal = items[16];};
				if (primeira[notePosition1] === 'D#' || primeira[notePosition1] === 'Eb') {notafinal = items[17];};
				if (primeira[notePosition1] === 'E') {notafinal = items[18];};
				if (primeira[notePosition1] === 'F') {notafinal = items[19];};
				if (primeira[notePosition1] === 'F#' || primeira[notePosition1] === 'Gb') {notafinal = items[20];};
				if (primeira[notePosition1] === 'G') {notafinal = items[21];};
				if (primeira[notePosition1] === 'G#' || primeira[notePosition1] === 'Ab') {notafinal = items[22];};
				if (primeira[notePosition1] === 'A') {notafinal = items[23];};
				if (primeira[notePosition1] === 'A#' || primeira[notePosition1] === 'Bb') {notafinal = items[24];};
				if (primeira[notePosition1] === 'B') {notafinal = items[25];};
			ResultadoPrimeira.insertAdjacentHTML('beforeend', notafinal + ' ');
		} else {
			ResultadoPrimeira.insertAdjacentHTML('beforeend', 'Volte, e tente novamente.');
		}
	}
	document.getElementById('qualvoz1Bb').setAttribute('style','display:none');
}
function Bb2() {
	window.notasNatural2 = document.getElementById("notasmusicas-resultados-terca").value.split(/\s+/g);
	ResultadoTerca.innerHTML = '';
	for (var i = 0, len = notasmusica.length; i < len; i++) {
		if(notasNatural2[i]){
			window.notePosition2 = scaleFinal.indexOf(notasNatural2[i]);
				if (primeira[notePosition2] === 'C') {notafinal = items[14];};
				if (primeira[notePosition2] === 'C#' || primeira[notePosition2] === 'Db') {notafinal = items[15];};
				if (primeira[notePosition2] === 'D') {notafinal = items[16];};
				if (primeira[notePosition2] === 'D#' || primeira[notePosition2] === 'Eb') {notafinal = items[17];};
				if (primeira[notePosition2] === 'E') {notafinal = items[18];};
				if (primeira[notePosition2] === 'F') {notafinal = items[19];};
				if (primeira[notePosition2] === 'F#' || primeira[notePosition2] === 'Gb') {notafinal = items[20];};
				if (primeira[notePosition2] === 'G') {notafinal = items[21];};
				if (primeira[notePosition2] === 'G#' || primeira[notePosition2] === 'Ab') {notafinal = items[22];};
				if (primeira[notePosition2] === 'A') {notafinal = items[23];};
				if (primeira[notePosition2] === 'A#' || primeira[notePosition2] === 'Bb') {notafinal = items[24];};
				if (primeira[notePosition2] === 'B') {notafinal = items[25];};
			ResultadoTerca.insertAdjacentHTML('beforeend', notafinal + ' ');
		} else {
			ResultadoTerca.insertAdjacentHTML('beforeend', 'Volte, e tente novamente.');
		}
	}
	document.getElementById('qualvoz2Bb').setAttribute('style','display:none');
}
function Bb3() {
	window.notasNatural3 = document.getElementById("notasmusicas-resultados-quinta").value.split(/\s+/g);
	ResultadoQuinta.innerHTML = '';
	for (var i = 0, len = notasmusica.length; i < len; i++) {
		if(notasNatural3[i]){
			window.notePosition3 = scaleFinal.indexOf(notasNatural3[i]);
				if (primeira[notePosition3] === 'C') {notafinal = items[14];};
				if (primeira[notePosition3] === 'C#' || primeira[notePosition3] === 'Db') {notafinal = items[15];};
				if (primeira[notePosition3] === 'D') {notafinal = items[16];};
				if (primeira[notePosition3] === 'D#' || primeira[notePosition3] === 'Eb') {notafinal = items[17];};
				if (primeira[notePosition3] === 'E') {notafinal = items[18];};
				if (primeira[notePosition3] === 'F') {notafinal = items[19];};
				if (primeira[notePosition3] === 'F#' || primeira[notePosition3] === 'Gb') {notafinal = items[20];};
				if (primeira[notePosition3] === 'G') {notafinal = items[21];};
				if (primeira[notePosition3] === 'G#' || primeira[notePosition3] === 'Ab') {notafinal = items[22];};
				if (primeira[notePosition3] === 'A') {notafinal = items[23];};
				if (primeira[notePosition3] === 'A#' || primeira[notePosition3] === 'Bb') {notafinal = items[24];};
				if (primeira[notePosition3] === 'B') {notafinal = items[25];};
			ResultadoQuinta.insertAdjacentHTML('beforeend', notafinal + ' ');
		} else {
			ResultadoQuinta.insertAdjacentHTML('beforeend', 'Volte, e tente novamente.');
		}
	}
	document.getElementById('qualvoz3Bb').setAttribute('style','display:none');
}