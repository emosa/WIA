/*
     Name: Elimarie Morales Santiago
     Date: September 1, 2015
     Class & Section:  Section 01 WDD333-O
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message
********************************************/



/** PROFESSOR LOGO IS ONLY WORKING IN FIREFOX**/

window.onload = function(){
	var canvas = document.getElementById("PART1");
		var ctx = canvas.getContext("2d");
		
		
		var image = new Image();
		image.src = "image/logo.png";
		
		
		if (!Modernizr.canvas){
				alert("Canvas not supported in your browser");
			}else{
				alert("Canvas supported in your browser");
		}


/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

	ctx.fillStyle = "#45d4ff";
	ctx.strokeStyle = "black";
	ctx.lineWidth = 1;
	ctx.fillRect(0,0,50,100);
	ctx.strokeRect(0,0,50,100);

/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/


	canvas = document.getElementById("PART2");
	ctx = canvas.getContext("2d");
	ctx.beginPath();
	ctx.arc(50, 50, 20, 0, Math.PI * 2, false);
	ctx.closePath();
	ctx.fillStyle = "rgba(139, 0, 0, .5)";
	ctx.fill();
	ctx.strokeStyle = "rgb(0,0,0)";
	ctx.beginPath();
	ctx.arc(50, 50, 30, 0, Math.PI * 2, false);
	ctx.closePath();
	ctx.stroke();

	
/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/

	canvas = document.getElementById("PART3");
	ctx = canvas.getContext("2d");
	ctx.fillStyle = "gold";
	ctx.lineWidth = 2;
	ctx.beginPath();
	ctx.moveTo(100,100);
	ctx.lineTo(300,100);
	ctx.lineTo(120,220);
	ctx.lineTo(200,50);
	ctx.lineTo(260,220);
	ctx.closePath();
	ctx.fill();

/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here
	canvas = document.getElementById("PART4");
	ctx = canvas.getContext("2d");
	ctx.strokeStyle = "rgb(0,20,0)";
	ctx.fillStyle = "rgb(255,150,13)";
	ctx.lineWidth = 8;
	ctx.beginPath();
	ctx.moveTo(50,350);
	ctx.bezierCurveTo(50,50,350,50,350,350);
	ctx.bezierCurveTo(350,320,300,320,300,350);
	ctx.bezierCurveTo(300,320,250,320,250,350);
	ctx.bezierCurveTo(250,320,200,320,200,350);
	ctx.bezierCurveTo(200,320,150,320,150,350);
	ctx.bezierCurveTo(150,320,100,320,100,350);
	ctx.bezierCurveTo(100,320,50,320,50,350);
	ctx.closePath();
	ctx.stroke();
	ctx.fill();

/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Draw text here
	canvas = document.getElementById("PART5");
	ctx = canvas.getContext("2d");
	ctx.font="50px Verdana";
	ctx.fillStyle="rgb(55,200,244)";
	ctx.fillText("Trust the timing of your life.",10,50);

/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

//Draw images here
	canvas = document.getElementById("PART6");
	ctx = canvas.getContext("2d");
	canvas.setAttribute('width', image.width);
	canvas.setAttribute('height', image.height * 1.5);
	ctx.drawImage(image,0,0);
	ctx.drawImage(image, 0, image.height, image.width / 2, image.height / 2);
	ctx.drawImage(image, 280, 280, 320, 300, image.width / 1.8, image.height + 45, 200, 200);

/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

	canvas = document.getElementById("PART7");
	ctx = canvas.getContext("2d");
	
	ctx.fillStyle = "rgb(0,0,0)";
	ctx.lineWidth = 1;
	ctx.fillRect(200, 200, 20, 500);
	
	ctx.beginPath();
	ctx.arc(50, 50, 200, 0, Math.PI * 2, false);
	ctx.closePath();
	ctx.fillStyle = "rgb(253,253,150)";
	ctx.fill();
	
	ctx.beginPath();
	ctx.moveTo(165,80);
	ctx.bezierCurveTo(130, 90, 130, 150, 230, 150);
	ctx.bezierCurveTo(250, 180, 320, 180, 340, 150);
	ctx.bezierCurveTo(420, 150, 420, 120, 390, 100);
	ctx.bezierCurveTo(430, 40, 370, 30, 340, 50);
	ctx.bezierCurveTo(320, 5, 250, 20, 250, 50);
	ctx.bezierCurveTo(200, 5, 150, 10, 170, 80);
	ctx.closePath();
	ctx.lineWidth = 5;
	ctx.fillStyle= "rgba(26, 178, 233, 0.9)";
	ctx.fill();
	ctx.strokeStyle = "fff";
	ctx.stroke();

	
	ctx.strokeStyle = "rgb(0,20,0)";
	ctx.fillStyle = "rgb(242,87,144)";
	ctx.lineWidth = 8;
	ctx.beginPath();
	ctx.moveTo(50, 350);
	ctx.bezierCurveTo(50, 50, 350, 50, 350, 350);
 	ctx.bezierCurveTo(350, 320, 300, 320, 300, 350);
 	ctx.bezierCurveTo(300, 320, 250, 320, 250, 350);
 	ctx.bezierCurveTo(250, 320, 200, 320, 200, 350);
 	ctx.bezierCurveTo(200, 320, 150, 320, 150, 350);
 	ctx.bezierCurveTo(150, 320, 100, 320, 100, 350);
 	ctx.bezierCurveTo(100, 320, 50, 320, 50, 350);
 	ctx.closePath();
 	ctx.stroke();
 	ctx.fill();
	
	ctx.beginPath();
	ctx.arc(255, 175, 20, 0, Math.PI * 2, false);
	ctx.closePath();
	ctx.fillStyle = "rgba(103, 12, 133, 0.4)";
	ctx.fill();
	
		ctx.beginPath();
	ctx.arc(128, 190, 20, 0, Math.PI * 2, false);
	ctx.closePath();
	ctx.fillStyle = "rgba(103, 12, 133, 0.4)";
	ctx.fill();
	
	ctx.beginPath();
	ctx.arc(190, 160, 20, 0, Math.PI * 2, false);
	ctx.closePath();
	ctx.fillStyle = "rgba(103, 12, 133, 0.4)";
	ctx.fill();
	
	ctx.beginPath();
	ctx.arc(170, 230, 20, 0, Math.PI * 2, false);
	ctx.closePath();
	ctx.fillStyle = "rgba(103, 12, 133, 0.4)";
	ctx.fill();
	
	ctx.beginPath();
	ctx.arc(160, 300, 20, 0, Math.PI * 2, false);
	ctx.closePath();
	ctx.fillStyle = "rgba(103, 12, 133, 0.4)";
	ctx.fill();
	
	ctx.beginPath();
	ctx.arc(240, 290, 20, 0, Math.PI * 2, false);
	ctx.closePath();
	ctx.fillStyle = "rgba(103, 12, 133, 0.4)";
	ctx.fill();
	
	ctx.beginPath();
	ctx.arc(295, 230, 20, 0, Math.PI * 2, false);
	ctx.closePath();
	ctx.fillStyle = "rgba(103, 12, 133, 0.4)";
	ctx.fill();
	
	ctx.beginPath();
	ctx.arc(100, 240, 20, 0, Math.PI * 2, false);
	ctx.closePath();
	ctx.fillStyle = "rgba(103, 12, 133, 0.4)";
	ctx.fill();
	
	ctx.beginPath();
	ctx.arc(230, 240, 20, 0, Math.PI * 2, false);
	ctx.closePath();
	ctx.fillStyle = "rgba(103, 12, 133, 0.4)";
	ctx.fill();
	
	ctx.beginPath();
	ctx.arc(315, 295, 20, 0, Math.PI * 2, false);
	ctx.closePath();
	ctx.fillStyle = "rgba(103, 12, 133, 0.4)";
	ctx.fill();
	
	ctx.beginPath();
	ctx.arc(85, 295, 20, 0, Math.PI * 2, false);
	ctx.closePath();
	ctx.fillStyle = "rgba(103, 12, 133, 0.4)";
	ctx.fill();
	


};