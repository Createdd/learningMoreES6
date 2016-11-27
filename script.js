/*jshint esversion: 6*/

window.onload= function(){
  console.info("Console Working");
  const pi=3.142;
  function calcArea(r){
    const pi=10;
    console.warn("The area is: "+pi*r*r);
  }
  console.log(pi);
  calcArea(5);
};
