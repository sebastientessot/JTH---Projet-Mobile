
var menuIsVisible = false;

function goToMenu(event){
	if(menuIsVisible == false){
		document.getElementById("content").style.left = "88%";
		document.body.style.overflowY = "hidden";
		menuIsVisible = true;
	}
	event.preventDefault();
}

function backToContent(event){
	if(menuIsVisible){
		document.getElementById("content").style.left = "0";
		document.body.style.overflowY = "visible";
		menuIsVisible = false;	
	}
	event.preventDefault();
}



document.body.addEventListener("mousedown", backToContent ,false);