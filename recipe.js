var checkList  = document.getElementsByClassName("checkButton");

document.getElementById("chrono").style.display = 'none'; 

function checkTheBox(elmt){
	
	if(elmt.style.backgroundImage == ""){
		elmt.setAttribute("style", "background-image: url(\"picture/Check.png\"); background-size: cover;");
		elmt.style.border = "solid 1px green";
		elmt.innerHTML = "";
	}else{
		elmt.style.backgroundImage = "";
		elmt.innerHTML = "Done";
		elmt.style.border = "solid 1px black";
	}
}

var hours ; 
var min; 
var sec; 
function startTheChrono(time){
var output = document.getElementById("chronoNumber");

	if(output.innerHTML == 123456) {
		document.getElementById("chrono").style.display = "block"; 
		
		hours = parseInt(time/3600); 
		min = parseInt((time-hours*3600)/60);
		sec = parseInt(time - hours*3600 - min*60); 
	 }
	 else {
	 	hours = hours;
	 	min = min; 
	 	sec = sec -1;
	 }
	 output.innerHTML = hours + "h " + min + "min " + sec + "sec";
	if(hours == 0 && min == 0 && sec == 0){
		output.innerHTML = hours + "h " + min + "min " + sec + "sec";
		alert ("Time finsihed");
		document.getElementById("chrono").style.display = 'none'; 
		
	} 
	else{
		if (sec == 0){
			sec = 60; 
			min = min-1;  
		}
		else if(min == 0){
			if(hours != 0){
				min = 60; 
				hours = hours -1; 
			}

		}
		if (hours == -1){
			hours = 0;
		}
		setTimeout(startTheChrono, 1000); 
	}
}

for(var i =0 ; i < checkList.length; i++){
	checkList[i].addEventListener("touch", function (event){checkTheBox(event.target);
		startTheChrono(100); 
	}, false); 	
	checkList[i].addEventListener("click", function (event){checkTheBox(event.target);
		startTheChrono(100); 
	}, false);
}

function subscribe(){
	
	document.getElementById("menuButton").addEventListener("click", function (event) {goToMenu(event)}, false); 
	document.getElementById("menuButton").addEventListener("touch", function(event){goToMenu(event); event.preventDefault();}, false); 
}

subscribe();