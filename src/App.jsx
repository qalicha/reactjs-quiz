import Timerandcurrentquestion from "./components/Timerandcurrentquestion"
import Question from "./components/Questions"
import Answers from "./components/Answers"
import Navigation from "./components/Navigation"
import Score from "./components/Score"
import ContextComponent from "./components/Context"

function App(){


  return (
    <div className="container">
      <ContextComponent>
      <Timerandcurrentquestion/>
      <Question/>
      <Answers/>
      <Navigation/>
       <Score/>
      </ContextComponent>
     
    </div>
  )
 

}
export default App
