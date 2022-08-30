async function addproduct() {
    let id = document.getElementById("id").value;
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
     
    let d ={
        id:id,
        title:title,
        author:author
    }
  let res = await fetch(`http://localhost:3000/posts`,{
    method:"POST",
    body:JSON.stringify(d),
    headers:{
        'Content-Type':'application/json',
    },
  });
  let data =  await res.json();
  console.log(data);
}



 async function deletepost(){
    let id = document.getElementById("delete").value;
     
    let res = await fetch(`http://localhost:3000/posts/${id}`,{
    method:"DELETE",
   headers:{
    'Content-Type':'application/json',
   },
    }
    );
    let data =  await res.json();
}
  
  async function updateproduct() {
    let id = document.getElementById("nid").value;
    let title = document.getElementById("ntitle").value;
    // let author = document.getElementById("nauthor");

    let d = {
      title:title,
    };

    let res = await fetch(`http://localhost:3000/posts/${id}`, {
      method: "PATCH",
      body: JSON.stringify(d),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await res.json();
    console.log(data);
  }


   async function replacepost(){
    let id = document.getElementById("uid").value;
    let title= document.getElementById("utitle").value;

    let d ={
      
      title:title,
    };
    let res = await fetch(`http://localhost:3000/posts/${id}`,{
      method:"PUT",
      body:JSON.stringify(d),
      headers:{
        'Content-Type':"appliction/json",
      },
    });
    let data = await res.json();
    console.log(data);
   }


    async function register(){
    let name = document.getElementById("name").value;
    let uname = document.getElementById("uname").value;
    let pass = document.getElementById("pass").value;
    let number = document.getElementById("number").value;
    let email = document.getElementById("email").value;
    let desc = document.getElementById("desc").value;
    
    let data={
      name:name,
      username:uname,
      password:pass,
      email:email,
      mobile:number,
      description:desc,

    }
    let res = await fetch(`http://localhost:3000/products`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let d = await res.json();
    console.log(d);
   }

   function append_p(array,container){
  container.innerHTML=null;
    
      array.forEach( function(ele){
        let div = document.createElement("div");
        let name = document.createElement("p");
        let uname = document.createElement("p");
        let email = document.createElement("p");
        let mobile = document.createElement("p");

        name.innerText=ele.name;
        uname.innerText = ele.username;
        email.innerText = ele.email;
        mobile.innerText = ele.mobile;

        div.append(name,uname,email,mobile);
        container.append(div);

      });
   }

window.onload= getdata();

   async function getdata(){
    let container = document.getElementById("container");
    let res = await fetch(`http://localhost:3000/products`);
    let  data = await res.json();
    console.log(data)
    append_p(data,container)
   }