//Part 1: Append a <canvas> element under <div id='plot1'> with the same width and height as the container element
var w = d3.select('.plot').node().clientWidth,
    h = d3.select('.plot').node().clientHeight;

var canvas = d3.select('#plot1').append('canvas')
    .attr('width',w)
    .attr('height',h)
    .node();

//Store drawing context as a variable
//Hint: use canvas.getContext('2d');
var ctx = canvas.getContext('2d');

//Part 2: Draw a gray background, with fillStyle = 'rgb(250,250,250)'
ctx.fillStyle = 'rgb(250,250,250)';
ctx.fillRect(0,0,w,h);

//Part 3: Draw a x and y grid, spaced 50px apart, with strokeStyle = 'rgb(180,180,180)'
//Hint: use context2D.beginPath and context2D path commands within two for... loops
var newX = 0,
    newY = 0;

//X grid
for (i=0; i<=50; i++) {
  ctx.beginPath();
  ctx.moveTo(newX,0);
  ctx.lineTo(newX,h);
  ctx.stroke();
  newX = newX + 50;
}

//Y grid
for (i=0; i<=50; i++) {

  ctx.beginPath();
  ctx.moveTo(0,newY);
  ctx.lineTo(w,newY);
  ctx.stroke();

  newY = newY + 50;
}

//Part 4: Draw a filled red rectangle at (50,50), with width = 50 and height = 50
//Draw a rectangle with red border at (150,50), with width = 50 and height = 50
ctx.fillStyle = 'rgb(255,0,0)';
ctx.fillRect(50,50,50,50);

ctx.strokeStyle = 'rgb(255,0,0)';
ctx.fillRect(150,50,50,50);

//Hint: use context2D.fillRect and context2D.strokeRect


// Part 5: Draw a series of circles and lines using the context2D path commands, as shown
ctx.beginPath();
ctx.arc(100,200,50,0,Math.PI*2);
ctx.save();
ctx.globalAlpha = .5;
ctx.fill();
ctx.restore();

ctx.beginPath();
ctx.arc(400,200,50,0,Math.PI*2);
ctx.moveTo(700,200);
ctx.arc(700,200,50,0,Math.PI*2);
ctx.strokeStyle = 'rgb(255,0,0)';
ctx.stroke();

// Part 6: Label each circle with coordinates
// Hint: context2D.fillText
ctx.fillStyle = 'rgb(0,0,0)';
ctx.fillText('(100,200)',100,200)


ctx.beginPath();
ctx.moveTo(100,200);
ctx.quadraticCurveTo(250,100,400,200);

// Part 7: append a new <canvas> element under <div id='plot2'>, and copy the content of the first canvas onto it
var canvas = d3.select('#plot2').append('canvas').attr('width',w).attr('height',h).node();

var ctx2 = canvas2.getContext('2d');

ctx.drawImage(canvas,0,0);
