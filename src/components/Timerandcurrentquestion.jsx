
import { useContext,useEffect,useState } from 'react'
import {StateContext} from './Context'
function Timerandcurrentquestion(){

    const {index,setIndex,complete,timer,setTimer} = useContext(StateContext)
    
    const [seconds, setSeconds] = useState((new Date()).getSeconds());
    // const [timer,setTimer]= useState(10);

    function GetTime() {
        setSeconds((new Date()).getSeconds());

    }

    
        setTimeout(() => {
        
            GetTime();
            if(timer>=1){
                setTimer(timer-1)
            }
            
            
        }, 1000);
    
         useEffect(() => {
            
         const interval = setInterval(() => {
            if(index<9&&!complete){
                setIndex(index+1)
                setTimer(10)
            }
            
          
         }, 10000);
         return () => clearInterval(interval);
       },[index])

    
    
 return (
    <div className="timer-question"> 
        <div><h2>{timer}</h2></div>
        <div><h1>{index+1}/10</h1></div>
    </div>
 )

}
export default Timerandcurrentquestion