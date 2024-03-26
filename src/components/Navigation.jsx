
import { useContext,useState,useEffect } from 'react'
import {StateContext} from './Context'
function Navigation(){

    const {index,setIndex} = useContext(StateContext)
    function incrementIndex(){
            if(index<9){
                setIndex(index+1)    
            } 
    }
    function decrementIndex(){
        
            setIndex(index-1)
  
    }
    return(
        
         <div className="nav-btn">
            
            <button onClick={decrementIndex}>Prev</button>
            <button onClick={incrementIndex}>Next</button>
           </div>
         )
}

export default Navigation