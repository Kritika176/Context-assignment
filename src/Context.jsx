import React from "react";
const initState = {
    name:"",
    age:"",
    date:"",
    state_of_residence:"",
    address:"",
    pincode:""
}

const reducer = (state,action) => {
    switch(action.type){
        case "CHANGE_NAME":
            return {...state,name:action.payload};
        case "CHANGE_AGE":
            return{...state,age:action.payload};
        case "CHANGE_DATE":
            return{...state,date:action.payload};
        case "CHANGE_STATE":
            return{...state,state_of_residence:action.payload};
        case "CHANGE_ADDRESS":
        return{...state,address:action.payload};
        case "CHANGE_PINCODE":
         return{...state,pincode:action.payload};
         default:
         throw new Error();
        
        
        

    }

  

}
export const RegisterationContext = React.createContext();
export function RegisterationContextProvider({children}) {
    const [state,dispatch] = React.useReducer(reducer,initState);

    const {name,age,date,state_of_residence,address,pincode} = state;
    return (
        <RegisterationContext.Provider value = {{name,age,date,state_of_residence,address,pincode,dispatch}}>
         {children}
        </RegisterationContext.Provider>
    )
} 