/*jshint esversion: 6*/


window.onload= function(){

  //spread operators
  var nums=[3,5,7];
  function add(a,b,c){
    console.warn(a+b+c);
  }
  add(...nums);

  var nums1=[1,2,3];
  var nums2=[...nums1,4,5,6];
  console.log(nums2);

  var meats=["ham", "salami", "bacon"];
  console.log(...meats);

/*
  //default parameters considered BAD PRACTICE!
  function logNinja(name="Dav",belt="blue",age=21){
    console.error("my name is "+name +", my belt is "+belt+", my age is "+age);
  }
  logNinja("Daniel", "red", 23);
  function log(num=10){
    console.log(num);
  }//
*/
/*
  //let variables
  var items= document.getElementsByTagName("li");
  for(let i=0; i<items.length;i++){
    items[i].onclick = function(){
      console.log(i);//is not finding the variable in global scope but block scope
    };
  }
  var x=10;
  if(x>5){
    let x=5;//create a letical scope
    console.log("inside "+x);
  }

  console.log("outside "+x);
  */

/*
  //constants
  console.info("Console Working");
  const pi=3.142;
  function calcArea(r){
    const pi=10;
    console.warn("The area is: "+pi*r*r);
  }
  console.log(pi);
  calcArea(5);
*/
};
