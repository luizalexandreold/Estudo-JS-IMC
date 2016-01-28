window.onload = function request () {
	var btn = document.getElementById("check")
	btn.onclick = function(){		
			docAjax();
		}
}

function docAjax() {
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {      
    if (ajax.readyState == 4 && ajax.status == 200) {    		
    		document.getElementById("resposta").innerHTML = ajax.responseText;	
    	}
  	}
  	ajax.open("GET", "./file/note.xml", true);
  	ajax.send();
}