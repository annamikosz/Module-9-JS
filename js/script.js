var triangle1Area = getTriangleArea(10, 15),
    triangle2Area = getTriangleArea(15, -20),
    triangle3Area = getTriangleArea(0, 25);

function getTriangleArea(a, h) {
  if (a > 0 && h > 0) {
    return a*h/2;
  } else {
    return "incorrect data";
  }
}

console.log( triangle1Area, triangle2Area, triangle3Area);