// let count=1;

// function flower(){
//     for(i=1; i>0; i++ ){
        
//     }
//     document.getElementById("flower");
// }
// console.log("Clicked");



 function flower() {
   const svg = document.querySelector("svg");
   

  
  const petalCount=42;

 
  for (let i=1; i<petalCount ; i++){
   
     const angle = (i * 360)/petalCount; 
     const newFlower = document.createElementNS("http://www.w3.org/2000/svg", "path");
    newFlower.setAttribute(
    "d",
    "M 80 45 Q 75 50 75 55 Q 75 60 79 70 Q 80 70 84 60 Q 86 55 81 45 Z"
  );

  newFlower.setAttribute("fill", "pink");
  newFlower.setAttribute("stroke", "blue");
  newFlower.setAttribute("stroke-width", "2");

  newFlower.setAttribute(
    "transform",
    `rotate(${angle} 80 80)`)
   

  // newFlower.style.animation = "flower 4s linear infinite";
  // newFlower.style.transformOrigin = "5 5";
  // newFlower.style.transformBox = "circle 80 80";

  svg.appendChild(newFlower);
 
}
  
}









