
const divElem = document.getElementById("myBtn");

divElem.addEventListener('click', buttonClicked);

function buttonClicked() {
	document.getElementById("myDiv").style.backgroundColor = "#" + 
	Math.floor(Math.random()*16777215).toString(16);
	
}