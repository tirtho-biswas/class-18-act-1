
function setup() {
  createCanvas(400,400);
  
  student =new Student("John",12,6)
}

function draw() 
{
  background(30);
  student.display()
}