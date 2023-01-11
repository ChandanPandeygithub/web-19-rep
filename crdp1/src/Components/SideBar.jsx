import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";


export function SideBar(){
    const [searchparams,setSearchparams] = useSearchParams()
    const initialState =searchparams.getAll("category")||[]
    const [category,setCategory ]= useState(initialState);
    const [_order,set_Order] =useState(searchparams.getAll("_order")||"");

    // "category": "Novel"
    // "category": "Science_Fiction"
    // "category": "Thriller"
    // "category": "Motivational"
   // _sort=views&_order=asc
   function handleOrder(e){
    set_Order(e.target.value)
   }
   
    function handleFilter(e){
     const newcategory =[...category];

     if(newcategory.includes(e.target.value)){
        newcategory.splice(newcategory.indexOf(e.target.value),1);
     }else{
        newcategory.push(e.target.value)
     }
     //console.log(params)
     setCategory(newcategory)
    }
    useEffect(()=>{
       let params={
        category
       }
       _order&&(params._order=_order);
    
       setSearchparams(params)
    },[category,_order])
    console.log(category)
    console.log(searchparams.getAll("category"),"line 31")
    return(<div style={{display:"flex",flexDirection:"column",gap:"20px",width:"25%",border:"2px solid gray",margin:"10px"}}>
     <p>SideBar</p>
   
     <div>
     <input type={"checkbox"} value={"Novel"} onChange={handleFilter}checked={category.includes("Novel")}/>
     <label>Novel</label>
     </div>
    
     <div>
     <input type={"checkbox"}value={"Science_Fiction"} onChange={handleFilter}checked={category.includes("Science_Fiction")}/>
     <label>Science_Fiction</label>
     </div>

     <div>
     <input type={'checkbox'}value={"Thriller"} onChange={handleFilter}checked={category.includes("Thriller")}/>
     <label>Thriller</label>
     </div>

     <div>
     <input type={"checkbox"} value={"Motivational"} onChange={handleFilter}checked={category.includes("Motivational")}/>
     <label>Motivational</label>
     </div>
    
    
      
      <p>redio button</p>

      <div>
      <input  type={"radio"} name={"sort_by"} value={'asc'} onChange={handleOrder} checked={_order=="asc"} />
      <label>asccending</label>
      </div>
      <div>
      <input type={"radio"} name={"sort_by"} value={"desc"} onChange={handleOrder} checked={_order=="desc"}/>
      <label>descending</label>
      </div>

     </div>)}