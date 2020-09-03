    var data = [ 100, 68, 20, 30, 100 ];

    var canvas = document.getElementById('canvas');
    var c = canvas.getContext('2d');
    c.fillStyle = "#FFDAB9";
    c.fillRect(0,0,500,500);
    var colors = [ "pink", "yellow", "red", "blue", "orange"];

    var total = 0;
    for(var i=0; i<data.length; i++)
    {
      total += data[i];
    }

    var prevAngle = 0;
    for(var i=0; i<data.length; i++)
    {
    var fraction = data[i]/total;
    var angle = prevAngle + fraction*Math.PI*2;

    c.fillStyle = colors[i];

    c.beginPath();
    c.moveTo(250,250);
    c.arc(250,250, 100, prevAngle, angle, false);
    c.lineTo(250,250);

    c.fill();

    c.strokeStyle = "black";
    c.stroke();

    prevAngle = angle;
    }

    c.fillStyle = "brown";
    c.font = "30pt fantasy";
    c.shadowOffsetX=5;
    c.shadowOffsetY=5;
    c.shadowBlur=7;
    c.shadowColor='black';
    var text = "это диаграмма";
    var metrics = c.measureText(text);
    c.fillText(text, 250-metrics.width/2, 400);