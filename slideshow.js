var j = 0;
var images = [];
var time = 2000;


images[0] = "slide1.jpg";
images[1] = "slide2.jpg";
images[2] = "slide3.jpg";
images[3] = "image4.jpg";
images[4] =  "image5.jpg";


function changeImg(){
	document.slide.src = images[j];


	if(j < images.length - 1){

	  j++;
	} else {

		j = 0;
	}


	setTimeout("changeImg()", time);
}


window.onload=changeImg;
