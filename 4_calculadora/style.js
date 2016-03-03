//FUNCIÓN  PARA  LIMITAR  EL  TEXTFILE  DE  ESTA  MANERA
function solonumeros(e){ 						//entrada teclado
	key=e.keyCode || e.which;					//captura teclado
	teclado=String.fromCharCode(key);
	numeros="0123456789";						//RECIBE  ESTOS  NUMEROS  ESPECIALES
	especiales="8-37-39-46";
	tecla_especial=false;
//HAGO   UN  RECORRIDO  MEDIANTE  UN   FOR
for (var i in especiales) {
	if (key==especiales[i]){
		tecla_especial=true;
			}
	}
	//VALIDO  LOS  NUMEROS
if (numeros.indexOf(teclado)==-1 && !tecla_especial) {
	return false;
	}
}

//funcion para asignar valores
function retornar(num) {
	var anterior=document.fo.valores.value;
	document.getElementById("valores").value=anterior+num;
}
//funcion para eliminar ultimo caracter
function eliminar(){
	var anterior=document.fo.valores.value;
	var nuevovalor=anterior.substring(0,anterior.length-1);
	document.getElementById("valores").value=nuevovalor;

}
//funcion que eliminar todo
function eliminar_todo(){
	document.fo.valores.value="";

}
//funcion para hacer las operaciones matematicas

function calcular(){
	var resultado=eval(document.fo.valores.value);
	document.fo.valores.value=resultado;
}

//funcion para validar signos
function comprobar(num){
	var anterior=document.fo.valores.value;
	if (anterior==""){
	document.fo.valores.value="";
	}

else {
	var anterior=document.fo.valores.value;
	document.getElementById("valores").value=anterior+num;
	esto=document.fo.valores.value;

	record=0;
	igual=1;
	var letrarecord
	var b=0
	var letra=""

	for (a=1;a<esto.length;a++){

if ( (esto.charAt(a)=="+") || (esto.charAt(a)=="-" )|| (esto.charAt(a)=="*") || (esto.charAt(a)=="/") ){
	igual=igual+1;
	letra=esto.charAt(a);
}
else{

	if (igual>record){record=igual;letrarecord=letra}

		igual=1
}

	b=a
}

	if (igual>record){
		record=igual;
		letrarecord=letra;
}

	if (record>2){
		var anterior=esto;
		var nuevovalor=anterior.substring(0,anterior.length-1);
		document.getElementById("valores").value=nuevovalor;
record=0;b=0;igual=1;letra="";letrarecord="";
	}
}
}
