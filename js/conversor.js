var $tom = 2; // Cadastro do intervalo de 1 tom
var $semitom = 1; // Cadastro do intervalo de 1 semitom
var items = ['C','C#','D','D#','E','F','F#','G','G#','A','Bb','B','C','C#','D','D#','E','F','F#','G','G#','A','Bb','B','C','C#','D','D#','E','F','F#','G','G#','A','Bb','B'];
// Cadastrando as notas em um array, coloquei repetidas pra que depois possa subir ou descer os tons


function displayScale() {
	
	var $ResultadoPrimeira = document.getElementById("notasmusicas-resultados-primeira");
	var $ResultadoTerca = document.getElementById("notasmusicas-resultados-terca");
	var $ResultadoQuinta = document.getElementById("notasmusicas-resultados-quinta");

	$ResultadoPrimeira.innerHTML = "";
	$ResultadoTerca.innerHTML = "";
	$ResultadoQuinta.innerHTML = "";

	var $minhanota = document.getElementById("tomdamusica").value;
		// Conversor tosco de letras pra índice do array de notas
		if ($minhanota == 'C') {$minhanota = 12;}
		if ($minhanota == 'C#' || $minhanota == 'Db') {$minhanota = 13;}
		if ($minhanota == 'D') {$minhanota = 14;}
		if ($minhanota == 'D#' || $minhanota == 'Eb') {$minhanota = 15;}
		if ($minhanota == 'E') {$minhanota = 16;}
		if ($minhanota == 'F') {$minhanota = 17;}
		if ($minhanota == 'F#' || $minhanota == 'Gb') {$minhanota = 18;}
		if ($minhanota == 'G') {$minhanota = 19;}
		if ($minhanota == 'G#' || $minhanota == 'Ab') {$minhanota = 20;}
		if ($minhanota == 'A') {$minhanota = 21;}
		if ($minhanota == 'A#' || $minhanota == 'Bb') {$minhanota = 22;}
		if ($minhanota == 'B') {$minhanota = 23;}
			
	var $scale = [
	// Definição do intervalo da escala maior
		items[$minhanota],
		items[$minhanota + $tom],
		items[$minhanota + $tom + $tom],
		items[$minhanota + $tom + $tom + $semitom],
		items[$minhanota + $tom + $tom + $semitom + $tom],
		items[$minhanota + $tom + $tom + $semitom + $tom + $tom],
		items[$minhanota + $tom + $tom + $semitom + $tom + $tom + $tom]
	];
	var $scaleMenor = [
	// Definição do intervalo da escala menor
		items[$minhanota],
		items[$minhanota + $tom],
		items[$minhanota + $tom + $semitom],
		items[$minhanota + $tom + $semitom + $tom],
		items[$minhanota + $tom + $semitom + $tom + $tom],
		items[$minhanota + $tom + $semitom + $tom + $tom + $semitom],
		items[$minhanota + $tom + $semitom + $tom + $tom + $semitom + $tom]
	];	

	// Definição da Primeira voz, Terça e Quinta.
	var $primeira = $scale;
	var $terca = $scale.slice(2, 7).concat($scale.slice(0, 2));
	var $quinta = $scale.slice(4, 7).concat($scale.slice(0, 4));

	document.getElementById("displayescala").innerHTML = $primeira.join(" - ");
	document.getElementById("notas-resultado").innerHTML = $primeira.join(" - ");
	document.getElementById("notas-resultado2").innerHTML = $terca.join(" - ");
	document.getElementById("notas-resultado3").innerHTML = $quinta.join(" - ");



	document.getElementById("tecladoNotas").innerHTML = '<li>' + $primeira.join("</li><li>") + '</li><li class="deleteNote">◁</li>';

}

function convertScale() {
	// Conversão de vozes notas por notas
	var $notasmusica = document.getElementById("notasmusica").value.split(/\s+/g);

	for (var i = 0, len = $notasmusica.length; i < len; i++) {
		if($notasmusica[i]){
			var $notePosition = $scale.indexOf($notasmusica[i]);
			$ResultadoPrimeira.insertAdjacentHTML('beforeend', $primeira[$notePosition] + ' ');
			$ResultadoTerca.insertAdjacentHTML('beforeend', $terca[$notePosition] + ' ');
			$ResultadoQuinta.insertAdjacentHTML('beforeend', $quinta[$notePosition] + ' ');
		} else {
			$ResultadoPrimeira.insertAdjacentHTML('beforeend', 'Volte, e tente novamente.');
			$ResultadoTerca.insertAdjacentHTML('beforeend', 'Volte, e tente novamente.');
			$ResultadoQuinta.insertAdjacentHTML('beforeend', 'Volte, e tente novamente.');
		}
	}

	document.getElementById("resultados").setAttribute('style','display:block;');
	document.getElementById("pergunta").setAttribute('style','display:none;');
}

function backToReality() {

	document.getElementById("resultados").setAttribute('style','display:none;');
	document.getElementById("pergunta").setAttribute('style','display:block;');
}
function f3(ta) {
    ta.value = ta.value.toUpperCase();
}

function digitaNota() {

}