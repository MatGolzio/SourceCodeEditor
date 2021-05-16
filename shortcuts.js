// Indent
var el = document.querySelector('#textcode');
var ctrl_pressed = false;

document.onkeydown=function(e){
	if (e.which == 17) {
		ctrl_pressed = true;
	} else if (e.which == 39 && ctrl_pressed == true) {
		if (el = document.activeElement) {
			document.getElementById("textcode").value += "    ";
		}
	}
}
