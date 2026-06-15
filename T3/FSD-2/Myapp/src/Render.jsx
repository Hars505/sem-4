import { useReducer } from "react";

function Reducer(count,action){
    if(action.type==="increment"){
        return count+5;
    }
    return count;
}
function Render(){
    const [count,dispatch] = useReducer(Reducer,20)
    return(
        <>
        <button onClick={()=>dispatch({type:"increment"})}>Click {count}</button>
        </>
    )
}

export default Render;