
import { useContext,useState,useEffect } from 'react'
import {StateContext} from './Context'

function Score(){
    const {score,index,setScore,setIndex,setComplete} = useContext(StateContext)
     const[submit,setSubmit]=useState(false)
     const[percentages,setPercentages]=useState(score)
    function calculateScore(){
       setPercentages(score*10)
       setComplete(true)
       setIndex(0)
       setSubmit(true)
    
    }
    function start(){
        setSubmit(false)
        setComplete(false)
        setScore(0)
     
    }
    return(
        <div className="score">
            Score:{submit?`${percentages}%`:''}
            <button className='submit-btn' onClick={calculateScore}>Submit</button>
            <button className='start-btn' onClick={start}>Start</button>
        </div>
    )
}

export default Score