import axios from "axios";
import React, { useState } from "react";
import { RegisterationContext } from "./Context"
export const Form2 = () => {
    const {name,age,date,state_of_residence,address,pincode,dispatch} = React.useContext(RegisterationContext);
   const [data,setData] = useState();
    
     const handleSubmit = () => {axios.post("http://localhost:3001/registeration",{name,age,date,state_of_residence,pincode,address}).then((res)=>{
         console.log(res)
     })};

    return(
    
        <div>
            <input type="text" placeholder="State" value={state_of_residence} onChange={(e)=>dispatch({type:"CHANGE_STATE",payload:e.target.value})}  />
            <br></br>
            <input type="text" placeholder="Address" value={address} onChange={(e)=>dispatch({type:"CHANGE_ADDRESS",payload:e.target.value})} />
            <br></br>
            <input type="number" placeholder="Pincode" value={pincode} onChange={(e)=>dispatch({type:"CHANGE_PINCODE",payload:e.target.value})} />
            <br></br>
            <button disabled ={state_of_residence==="" || address==="" || pincode===""||name===""||age===""||date===""} onClick={handleSubmit}>Submit</button>
            </div>
    )
    }