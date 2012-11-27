
var menuIsVisible = false;

function goToMenu(event){
	if(menuIsVisible == false){
		document.getElementById("content").style.left = "88%";
		menuIsVisible = true;
	}
	event.preventDefault();
}

function backToContent(event){
	if(menuIsVisible){
		document.getElementById("content").style.left = "0";
		menuIsVisible = false;	
	}
	event.preventDefault();
}



document.body.addEventListener("mousedown", backToContent ,false);