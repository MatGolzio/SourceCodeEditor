// Attributing values into id source (var state)

var bt_open = window.document.getElementById(`openbt`);
var bt_save = window.document.getElementById(`savebt`);
var bt_exit = window.document.getElementById(`exitbt`);
var textcode = window.document.getElementById("textcode")

// Config page

// Theme
function btNewThemeSelector() {
	// Current theme selected
	var current_config_theme = window.document.getElementById("theme").value;

	// Theme preview
	var themePreview = window.document.getElementById("test-theme");

	// The place that the user use to code
	var textedit = window.document.getElementById("textcode");

	// Conditions ~current theme~
	if (current_config_theme == "Blue") {
		themePreview.style.background = "Navy";
		window.location.href = "edit.html?Tema=Navy";
	} else if (current_config_theme == "Red") {
		themePreview.style.background = "Tomato";
		window.location.href = "edit.html?Tema=Tomato";
	} else if (current_config_theme == "Dark") {
		themePreview.style.background = "grey11";
		window.location.href = "edit.html?Tema=grey11";
	}
}

function btNewFontSelector() {
	var font_size = window.document.getElementById("fontsize").value;
	var font = window.document.getElementById("font").value;

	if (font == "Sans-serif") {
		window.location.href = "edit.html?Fonte=sans-serifTamanofonte=" + font_size;
	} else if (font == "Roboto") {
		window.location.href = "edit.html?Fonte=RobotoTamanofonte=" + font_size;
	} else if (font == "Verdana") {
		window.location.href = "edit.html?Fonte=VerdanaTamanofonte=" + font_size;
	} else {
		window.alert("Select a font please.")
	}
}

// -------------------------------------------- //

// NewFile
function newfile() { 
	//   ^^^^^^^^^ function to manipulate the name file entry and move
	// to the 'Editing File' span.
	var filename = window.document.getElementById("filename").value;
	var editfilename = window.document.getElementById("filenameedit");

	window.location.href = "edit.html?Nomedoarquivo=" + filename;
}

//       ......................  Function to read the querystring
function queryString(parameter) {  
	var loc = location.search.substring(1, location.search.length);   
	var param_value = false;   
	var params = loc.split("&");   
	for (i=0; i<params.length;i++) {   
			param_name = params[i].substring(0,params[i].indexOf('='));   
			if (param_name == parameter) {                
					param_value = params[i].substring(params[i].indexOf('=')+1)  
			}   
	}
	if (param_value) {   
			return param_value;   
	}   
	else {   
			return undefined;   
	}   
}

// Save file
function saveFile() {
	let textcode = document.getElementById("textcode").value;
	let filename = document.getElementById("filenameedit").innerHTML;
	let blob = new Blob([textcode], { type: "text/plain;charset=utf-8" });
	saveAs(blob, filename);
	document.getElementById("saved-message").style.display = "block";
}
