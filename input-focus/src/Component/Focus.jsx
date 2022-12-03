
import React from "react";

function Focus(){
    const refone = React.useRef(null)
    const reftwo = React.useRef(null)
    const refthree = React.useRef(null)
    const reffour = React.useRef(null)
   // const reffive = React.useRef(null)
      
    //function handleClick(e){
      //  const {value}=e.target;
        
        // if(refone.current==null){
        //     refone.current=value;
        //     reftwo.current.focus();
        // }
        // else if(reftwo.current!=null){
        //     reftwo.current=value
        //     refthree.current.focus();
        // }else if(refthree.current!=null){
        //     refthree.current=value;
        //      reffour.current.focus();
        // }else if(reffour.current!=null){
        //     reffour.current=value
        //     reffive.current.focus();
        // }else if(reffive.current!=null){
        //     return;
        // }
   // }
   function handleFour(){
    refone.current.focus();
   }
   function handleOne(){
    reftwo.current.focus()
   }
   function handleTwo(){
    refthree.current.focus()
   }
   function handleThree(){
    reffour.current.focus()
   }
   

   // console.log(refone.current)
    return(<div>
             <input ref={refone}/>
            <input ref={reftwo }/>
            <input ref={refthree}/>
            <input ref={reffour}/>
            <button  onClick={handleFour}>one</button>
            <button onClick={handleOne}>two</button>
            <button onClick={handleTwo}>three</button>
            <button  onClick={handleThree}>four</button>
        </div>)
}

export default Focus;