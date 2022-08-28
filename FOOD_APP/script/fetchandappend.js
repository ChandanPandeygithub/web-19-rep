   async function gatedata(url){
  try {
    let res = await fetch(url);
    let {meals} = await res.json();
    console.log(meals, "this is what")
    return meals;
  
  } catch (err) {
    console.log(err);
  }
}


  function append_data(array,container){
   container.innerHTML = null;
    array.forEach(function({strMeal,strCategory,strArea,strInstructions,strMealThumb,strTags}){
        let div = document.createElement("div");
        let area = document.createElement("p")
        let ttl = document.createElement("p")
        let img = document.createElement("img");
        let tg = document.createElement("p");
        let cat = document.createElement("p");
        let inst = document.createElement("p");
        img.src = strMealThumb;
        ttl.innerText = strMeal;
        area.innerText = strArea;
        tg.innerText =strTags;
        cat.innerText = strCategory;
        inst.innerText = strInstructions;
        div.append(img,area,ttl,tg,cat,inst);
        container.append(div);
    });
  }
  export{gatedata,append_data};
