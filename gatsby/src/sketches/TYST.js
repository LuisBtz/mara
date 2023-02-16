import p5 from 'p5';

const s = (p) => {
    let dashOffset = 0

    let TS = 100;
    
    let myFont;
    p.preload = function () {
      myFont = loadFont('BCBaseliner-CondensedHigh.otf');
    }
    
    p.setup = function() {
      createCanvas(height=750, width=750);
    }
    
    p.draw = function()  {
      p.background("#04110B33");
      
      for (let y = 100; y<= 604; y = y + mouseY + 30)
    
      {p.drawEnter(y)}
    }
      
    p.drawEnter(y) = function() {
      p.textFont(myFont)
      p.textSize (TS)
      p.fill("#37f79b")
      p.textAlign(CENTER, CENTER);
    
    //DRAW THE SHADOW
      p.noStroke()
      p.text("Thank You Space Type",width / 2,y)
    
    //DRAW MAIN THEME
      p.fill("#04110B")
      p.stroke("#FFFFFF")
      p.strokeWeight(4)
    
      drawingContext .setLineDash([5,15])
      drawingContext .lineDashOffset = dashOffset 
      dashOffset = dashOffset + .15
      
      p.text("Thank You Space Type",width/ 2 - 5,y-5)
    
    }
  };

  const sketch = new p5(s);

  export default sketch;