import p5 from 'p5';

const s = (p) => {
  let myNumber = 10;

  p.setup = function() {
    p.createCanvas(750,750);
  };
  
   p.draw = function()  {
    p.background("#00000033");
    
    p.textSize(150);
    p.textAlign(p.CENTER,p.CENTER);
     myNumber = p.random(0,255)
     p.fill(myNumber, myNumber, myNumber);
    
    
    p.translate(750/2,750/2)
    p.rotate(p.frameCount * 0.15);
    p.text("head",0,0);
    
    }
  };

  const sketch = new p5(s);

  export default sketch;