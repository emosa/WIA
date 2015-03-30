window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
		
		ctx.save();
		var origShadowColor = ctx.shadowColor;
		//Setup our shadow
		ctx.shadowColor = "#000000";
		ctx.shadowOffsetX = 10;
		ctx.shadowOffsetY = 10;
		ctx.shadowBlur = 10;
		
		
		//Draw a simple rectangle
		ctx.fillStyle = "blue";
		ctx.fillRect(20,20, 200, 100);
		
	
		//Draw text with a shadow
		
		ctx.fillStyle = "green";
		ctx.shadowColor = "rgba(0, 100, 100, .5)";
		ctx.shadowOffsetX = 5;
		ctx.shadowOffsetY = 5;
		ctx.shadowBlur = 5;
		
		ctx.font = "25pt Georgia";
		ctx.fillText("Drawing Text On A Canvas!", 250, 75);
		
		//Draw a red line with a purple shadow
		
		ctx.lineCap = "round";
		ctx.lineWidth = 25;
		ctx.shadowColor = "rgba(150,0, 150, .75)";
		ctx.shadowOffsetX = -15;
		ctx.shadowOffsetY = -15;
		ctx.shadowBlur = 15;
		
		ctx.strokeStyle = "red";
		ctx.beginPath();
		ctx.moveTo(50, 200);
		ctx.lineTo(450, 200);
		ctx.stroke();
		
		//Rectangle with no shadow
		//ctx.shadowColor = origShadowColor;
		
		ctx.restore();
		
		ctx.fillStyle = "blue";
		ctx.fillRect(20, 225, 200, 50);
		
						
		}
	}
}