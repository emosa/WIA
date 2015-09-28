// JavaScript Document

		

// This is for auto scroll to position//
    $("a").click(function(){
        $("html, body").animate({
            scrollTop: $( $.attr(this, "href") ).offset().top
            }, 900);
            return false;
    });
//End 
$(document).ready(function(){
    $("btn").click(function(){
        $("aside").toggle();
    });
});

 window.onload = function () {
    var chart = new CanvasJS.Chart("chart",
    {
      title:{
        text: "Diamond Treasures Statistics"    
      },
      animationEnabled: true,
      axisY: {
        title: "Earnings"
      },
      legend: {
        verticalAlign: "bottom",
        horizontalAlign: "center"
      },
      theme: "theme1",
      data: [

      {        
        type: "column",  
        showInLegend: true, 
        legendMarkerColor: "Teal",
        legendText: "Monthly Period",
        dataPoints: [      
        {y: 1, label: "5%"},
        {y: 2,  label: "20%" },
        {y: 3,  label: "40%"},
        {y: 4,  label: "60%"},
        {y: 5,  label: "80%"},
        {y: 6, label: "100%"}
                   
        ]
      }   
      ]
    });

    chart.render();
  };
  
  var squareLength = 50;
  var canvas = document.getElementById('diamond');
	
	if (canvas.getContext) {
   
    var ctx = canvas.getContext('2d');

    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(Math.PI / 4);
    ctx.translate(-(squareLength / 2), -(squareLength / 2));
	ctx.fillStyle = "#45d4ff";
	ctx.strokeStyle = "black";
	ctx.lineWidth = 1;
    ctx.fillRect(0,0, squareLength, squareLength);
    ctx.restore();
	ctx.font="50px Verdana";
	ctx.fillStyle="rgb(55,200,244)";
	ctx.fillText("Diamond Treasures",10,50);
}
  