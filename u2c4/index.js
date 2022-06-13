// All the JS Code for the Add Students Page Goes Here

var submit =document.querySelector("#submitbtn");
submit.addEventListener("click",submitbtnfun);
var studebtarray = JSON.parse(localStorage.getItem("admission"))||[];
function submitbtnfun(){

    
    obj={}
    obj.studentname = document.querySelector("#name").value;
    obj.studentemail= document.querySelector("#email").value;
    obj.studentphonenumber= document.querySelector("#phone").value;
    obj.studentgender = document.querySelector("#gender").value;
    obj.studentcourse = document.querySelector("#course").value;
    studebtarray.push(obj);
    localStorage.setItem("admission",JSON.stringify( studebtarray));

}