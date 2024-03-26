import { createContext, useState,useEffect} from "react";


export const StateContext = createContext();


const ContextComponent = (props) => {  
  
    const [data, setData] = useState([]);
    
    const [index, setIndex] = useState(0);
    const [complete,setComplete]=useState(false)
    const [score,setScore]=useState(0)
    const [timer,setTimer]= useState(10);
    const getData = async () => {
      let url = "https://the-trivia-api.com/v2/questions";
      let data = await fetch(url);
      let parsedData = await data.json();
      setData(parsedData);
    };
  
    useEffect(() => {
        getData();
        
    }, []);
  
    
      return (
        <StateContext.Provider value={{data,index,setIndex,score,setScore,complete,setComplete,timer,setTimer}}>
          {props.children}
        </StateContext.Provider>
      );
    
    
  };
  
  export default ContextComponent;


