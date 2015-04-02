/*
     Name: Elimarie Morales Santiago
     Date: April 2, 2015
     Class & Section:  WIA-333O
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
// Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message
********************************************/

	window.onload = function(){
		var canvas = document.getElementById("PART1");
		var ctx = canvas.getContext("2d");
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

	ctx.fillStyle = "rgb(20,20,135)";
	ctx.strokeStyle = "rgb(0,0,0)";
	ctx.lineWidth = 1;
	ctx.fillRect(0, 0, 50, 100);
	ctx.strokeRect(0, 0, 50, 100);


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
	ctx.fillStyle = "rgba(171,14,14,0.5)";
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


//Draw Star here


/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here

/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Draw text here

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



/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here


}