import React from "react";
import { RegisterationContext } from "./Context";
import { useNavigate } from "react-router-dom";
export const Form1 = () => {
    const {name,age,date,dispatch} = React.useContext(RegisterationContext);
    const navigate = useNavigate();
return(
  
    <form>
        <input type="text" placeholder="name" value={name} onChange={(e)=>dispatch({type:"CHANGE_NAME",payload:e.target.value})} />
        <br></br>
        <input type="number" placeholder="age" value={age} onChange={(e) => dispatch({type:"CHANGE_AGE",payload:e.target.value})}/>
        <br></br>
        <input type="date" placeholder="D.O.B" value={date} onChange={(e) => dispatch({type:"CHANGE_DATE",payload:e.target.value})}/>
        <br></br>
        <button disabled ={name==="" || age==="" || date===""} onClick={() =>navigate("/two") }>Next</button>
    </form>
)
}