const element =document.querySelector("h1");
//console.log(element);
//const element1=document.querySelector("button");
//console.log(element1);
const arr=["red","green","yellow","black","blue","white"];

//alert("Hello World")
//randomColorGenerate
function generateColor(){
    const randomColorLength=arr.length;
    const random=Math.floor(Math.random() * randomColorLength);
    const finalColors = arr[random];
    document.body.style.backgroundColor= finalColors;
    let textContent = arr[randomColorLength];
}    
