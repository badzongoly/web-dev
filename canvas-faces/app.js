// 1) Find the canvas element from the HTML
const canvas = document.getElementById('canvas');

// 2) Get the 2D drawing context
//    This is the “pen” we use to draw shapes on the canvas
const ctx = canvas.getContext('2d');

// 3) Set a fixed canvas size for beginners
//    Later, students can learn how to resize it dynamically
canvas.width = 500;
canvas.height = 400;

// 4) Fill the whole canvas background so we can clearly see the drawing area
ctx.fillStyle = '#dff6ff';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// 5) Move the drawing origin to the middle of the canvas
//    This makes it easier to place face features around the center
ctx.translate(canvas.width / 2, canvas.height / 2);

// ------------------------------
// DRAW THE FACE OUTLINE
// ------------------------------

// Face color
ctx.fillStyle = '#ffd84d';

// Border color
ctx.strokeStyle = '#222';

// Border thickness
ctx.lineWidth = 4;

// Start a new path so the browser knows a new shape is beginning
ctx.beginPath();

// Draw a circle for the face
// arc(x, y, radius, startAngle, endAngle)
// Because we translated to the center, (0, 0) is now the middle of the canvas
//math.PI * 2 means we want to draw a full circle (360 degrees)
ctx.arc(0, 0, 100, 0, Math.PI * 2);

// Fill the inside of the circle with yellow
ctx.fill();

// Draw the border line around the circle
ctx.stroke();

// ------------------------------
// DRAW THE LEFT EYE
// ------------------------------

ctx.fillStyle = 'white';
ctx.beginPath();

// Left eye white part
ctx.arc(-35, -30, 18, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();

// Left eye pupil
ctx.fillStyle = 'black';
ctx.beginPath();
ctx.arc(-35, -30, 7, 0, Math.PI * 2);
ctx.fill();

// ------------------------------
// DRAW THE RIGHT EYE
// ------------------------------

ctx.fillStyle = 'white';
ctx.beginPath();

// Right eye white part
ctx.arc(35, -30, 18, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();

// Right eye pupil
ctx.fillStyle = 'black';
ctx.beginPath();
ctx.arc(35, -30, 7, 0, Math.PI * 2);
ctx.fill();

// ------------------------------
// DRAW THE MOUTH
// ------------------------------

ctx.strokeStyle = '#222';
ctx.lineWidth = 5;
ctx.beginPath();

// Draw a smile using half a circle
// Start at 0 and stop at PI to get the bottom half curve
ctx.arc(0, 20, 45, 0, Math.PI);
ctx.stroke();