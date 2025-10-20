import { createContext, useState } from "react";

export const storeContext=createContext<any>(null)

export const StorexContextProvider =(props:any)=>{

      const [isVisible, setIsVisible] = useState(false);

      const contextValue ={
        isVisible,setIsVisible
      }
      
    return (
    <storeContext.Provider value={contextValue}>
      {props.children}
    </storeContext.Provider>
    )
}