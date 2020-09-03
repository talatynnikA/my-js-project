var data = [ 16, 68, 20, 30, 54 ];
      var canvas = document.getElementById('canvas');

      var c = canvas.getContext('2d');

      var colors = [ "yellow", "green", "red", "blue", "pink"];
      c.fillStyle = "#60016d";
      c.fillRect(0,0,500,500);
        for(var i=0; i<data.length; i++)
        {
          var dp = data[i];
          c.fillStyle = colors[i];
          c.fillRect(25 + i*100, 500-dp*5 - 30 , 50, dp*5);
        }
      c.fillStyle = "black";
      c.lineWidth = 2.0;
      c.beginPath();
      c.moveTo(25,10);
      c.lineTo(25,470);
      c.lineTo(490,470);
      c.stroke();
      c.fillStyle = "black";
      for(var i=0; i<6; i++)
      {
        c.fillText((5-i)*20 + "",4, i*80+60);
        c.beginPath();
        c.moveTo(25,i*80+60);
        c.lineTo(30,i*80+60);
        c.stroke();
      }
      var labels = ["ROCK","RAP","JAZZ","INDIE","POP"];
      for(var i=0; i<5; i++)
      {
        c.font='20px Fantasy';
        c.fillStyle='#FFDAB9';
        c.fillText(labels[i], 40+ i*100, 490);
      }

