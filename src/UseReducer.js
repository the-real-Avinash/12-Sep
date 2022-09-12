import React, { useReducer } from 'react'

const intialState = 0;

const reducer = (state, action) =>{
    console.log(state, action);
    if(action.type === "INCREMENT"){
        return state+1;
    }else if(action.type === "DECREMENT"){
        return state - 1;
    }
    return state;

}

const UseReducer = () => {

   const [state, dispatch] =  useReducer(reducer, intialState);

  return (
    <>
        <p>{state}</p>
        <button onClick={() =>dispatch({type: "INCREMENT"})}>Inc</button>
        <button onClick={() =>dispatch({type:"DECREMENT"})}>Dec</button>
    </>
  )
}

export default UseReducer