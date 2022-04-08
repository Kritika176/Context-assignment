import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "./Table";

export const Users = () => {
  const [data,setData] = useState([]);
    
     useEffect(() =>{
         axios.get("http://localhost:3001/registeration").then((res) => {
             setData([...res.data])
            // console.log(res.data)
         })
     },[])
     
   return(
   
       <div>
       {data.map((e) =><Table showData={e} key={e.id}></Table>)}
       </div>
   )
}