
import { useContext,useState,useEffect } from 'react'
import {StateContext} from './Context'
function Answers(){
   
 const {data,index,score,setScore} = useContext(StateContext)
    
 const [loading, setLoading] = useState(true);

 const [answer, setAnswer] = useState([]);
 const [correctAnswers,setCorrectanswers]=useState([])

 
 function checkCorrectanswer(e){
    
    let ans=e.target.innerText
    if(correctAnswers.includes(ans)){
        
        setScore(score+1)
    }

 }

 useEffect(() => {

    if(data.length>0){
      setAnswer(data.map(q=> q.incorrectAnswers.concat(q.correctAnswer)))
      setCorrectanswers(data.map(q=> q.correctAnswer))
      setLoading(false)
    }
    
    }, [data]);
    return(
    
        <div className="answers-container">
            {
            loading?<h1>loading</h1>: <div><button onClick={checkCorrectanswer}>{answer[index][0]}</button> 
            <button  onClick={checkCorrectanswer}>{answer[index][1]}</button> 
            <button onClick={checkCorrectanswer}>{answer[index][2]}</button> 
            <button onClick={checkCorrectanswer}>{answer[index][3]}</button> </div>

            }
            
           
        </div>
    )

}
export default Answers
