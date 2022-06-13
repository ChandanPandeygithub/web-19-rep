// All the Code for All Students Page Goes Here

var studentdetailarr = JSON.parse(localStorage.getItem("admission"))||[];
 var admitedarray= JSON.parse(localStorage.getItem("admission-accepted"))||[];
 var rejactedarray = JSON.parse(localStorage.getItem("admission-rejected"))||[];
showstudentsdetail(studentdetailarr);
// document.querySelector("tbody").innerHTML="";
 function showstudentsdetail(studentdetailarr){
studentdetailarr.forEach(function(element,index){
var  tr =document.createElement("tr");
var  td1 =  document.createElement("td");
var td2= document.createElement("td");
var td3 = document.createElement("td");
var td4 = document.createElement("td");
var td5 = document.createElement("td");
var td6 = document.createElement("td");
var td7 = document.createElement("td");
 td1.innerText = element.studentname;
 td2.innerText= element.studentemail;
 td3.innerText= element.studentcourse;
 td4.innerText = element.studentgender;
 td5.innerText = element.studentphonenumber;
 td6.innerText = "admitted";
 td6.style.backgroundColor ="green";
  td6.style.fontSize ="20px"
 td7.innerText = "rejacted";
 td7.style.backgroundColor="red";
 td7.style.fontSize = "20px"
 td6.addEventListener("click",function(){
    showinadmitted(element,index);
 });
 td7.addEventListener("click",function(){
    showinrejacted(element,index);
 });
 tr.append(td1,td2,td3,td4,td5,td6,td7);
 document.querySelector("tbody").append(tr);
});
//showstudentsdetail(studentdetailarr);
//window.location.reload();

}

function showinadmitted(element,index){
   admitedarray.push(element);
   localStorage.setItem("admission-accepted", JSON.stringify(admitedarray));
   studentdetailarr.splice(index,1);
   localStorage.setItem("admission",JSON.stringify(studentdetailarr));
   window.location.reload();
}
function showinrejacted(element,index){
    rejactedarray.push(element);
    localStorage.setItem("admission-rejected", JSON.stringify(rejactedarray));
    studentdetailarr.splice(index,1);
    localStorage.setItem("admission",JSON.stringify(studentdetailarr));
    window.location.reload();
   // localStorage.setItem("admission-rejected", stringify)
}