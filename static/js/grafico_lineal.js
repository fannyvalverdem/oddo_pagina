

window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
  animationEnabled: true,
  theme: "light2",
  title:{
    text: "Simple Line Chart"
  },
  axisY:{
    includeZero: false
  },
  data: [{        
    type: "line", 
    lineColor: "#17ADF9",      
    dataPoints: [
      { y: 450 },
      { y: 414},
      { y: 520, indexLabel: "highest",markerColor: "red", markerType: "triangle" },
      { y: 460 },
      { y: 480 },
      { y: 510 }
    ]
  },
  {        
    type: "line",
    lineColor: "#2EA547",       
    dataPoints: [
      { y: 350 },
      { y: 314},
      { y: 520, indexLabel: "highest",markerColor: "red", markerType: "triangle" },
      { y: 460 },
      { y: 450 },
      { y: 310 }
    ]
  }
  ]
});
chart.render();

}