// All the Code for the Admitted page goes here
 var updateadmitedarray = JSON.parse(localStorage.getItem("admission-accepted"))||[];
 updateadmitted(updateadmitedarray);
function updateadmitted (updateadmitedarray){
    updateadmitedarray.forEach(function(element){
        tr = document.createElement("tr");
        td1 = document.createElement("td");
        td2 = document.createElement("td");
        td3 = document.createElement("td");
        td4 = document.createElement("td");
        td5= document.createElement("td");
        // <th>Name</th>
        // <th>Email</th>
        // <th>Course</th>
        // <th>Gender</th>
        // <th>Phone</th>
        td1.innerText = element.studentname;
        td2.innerText = element.studentemail;
        td3.innerText = element.studentcourse;
        td4.innerText =element.studentgender;
        td5.innerText = element.studentphonenumber;
        tr.append(td1,td2,td3,td4,td5);
    document.querySelector("#adm").append(tr) ;   
    });
  
}