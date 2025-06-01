
var slider_img = document.querySelector('.slider-img');
var images = ['logo.png', '1.png', '2.png', '3.png', '4.png', '5.png','6.png'];
var i = 0;

function Pokaz() {
	var x = document.getElementById("tak");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}

function prev(){
	if(i <= 0) i = images.length;	
	i--;
	return setImg();			 
}

function next(){
	if(i >= images.length-1) i = -1;
	i++;
	return setImg();			 
}

function first() {
	i = 0
	return setImg();
}

function last() {
	i = 6
	return setImg();
}
function setImg(){
	return slider_img.setAttribute('src', "images/"+images[i]);
	
}