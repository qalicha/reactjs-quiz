import { useContext,useState,useEffect } from 'react'
import {StateContext} from './Context'

function Question(){
       
    
 const {data,index} = useContext(StateContext)
    
 const [question, setQuestion] = useState([]);


 useEffect(() => {

  if(data.length>0){
    
    setQuestion(data.map(q=> q.question.text))
    
  }
  
  }, [data]);
  return(
    <div className="question">{question[index]}
    </div>
        )
 }
 
export default Question