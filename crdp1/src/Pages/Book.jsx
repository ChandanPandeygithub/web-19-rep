
import { BookList } from "../Components/BookList";

import { Navbar } from "../Components/Navbar";
import { SideBar } from "../Components/SideBar";

export function Book() {
  return (
    <div>
      <Navbar/>
      <div style={{display:"flex",gap:"20px",width:"90%",border:"2px solid gray"}}>
        <SideBar/>
        <BookList/>
      </div>
      
    </div>
  );
}
