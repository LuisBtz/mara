import p5 from 'p5';

const s = (p) => {
    let dashOffset = 0

    let TS = 100;
    
    
    p.setup = function() {
      p.createCanvas(750, 750);
    }
    
    p.draw = function()  {
      p.background("#04110B33");
      
      for (let y = 100; y<= 604; y = y + p.mouseY + 30)
    
      {drawEnter(y)}
    }
      
    function drawEnter(y) {
      p.textSize (TS)
      p.fill("#37f79b")
      p.textAlign(p.CENTER, p.CENTER);
    
    //DRAW THE SHADOW
      p.noStroke()
      p.text("Thank You Space Type",p.width / 2,p.y)
    
    //DRAW MAIN THEME
      p.fill("#04110B")
      p.stroke("#FFFFFF")
      p.strokeWeight(4)
    
      p.drawingContex (setLineDash([5,15]))
      p.drawingContext (lineDashOffset = dashOffset)
      dashOffset = dashOffset + .15;
      
      p.text("Thank You Space Type",p.width/ 2 - 5,y-5)
    
    }
  };

  const sketch = new p5(s);

  export default sketch;