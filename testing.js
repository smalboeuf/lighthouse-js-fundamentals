
function calculateRectangleArea(length, width){
  if(length <  0 || width < 0){

  }else{
    return length * width;
  }
  
}

function calculateTriangleArea(base, height){
  if(base < 0 || height < 0){

  }else{
    return base*height/2
  }
}

function calculateCircleArea(radius){
  if(radius < 0){

  }else{
    return Math.PI*radius**2;
  }
  
}
