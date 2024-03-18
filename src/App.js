// import "./App.css"
// import { useState, useEffect } from 'react'
// const App = () => {
//   const [val, setval] = useState(0)

   
//     useEffect(()=> {
//       if( val >= 1) {
//         document.title = `Chats (${val})`
//       }
//       else {
//         document.title = `Chats`
//       }
//    }, [val])
//   return (
//     <div className='App'>
//       <h1>Value = {val} 🔥</h1>
//       <button onClick={ () => setval(val + 1)}>Increase +</button>
//       <button onClick={ () => setval(val -1)}>Decrease -</button>
//     </div>
//   )


// }

// export default App


import React, { useState } from 'react';

function App() {
const [input, setInput] = useState('')
const [display, setDisplay] = useState('')
 

let inputHandler = (event) => {
    setInput(event.target.value)
}

let button = () => {
  setDisplay((pre)=> pre + input + "\n")
  
}

  return (
    <div>
     <input type='text' onChange={inputHandler}/>
     <br/>
     <br/>
     <button onClick={button}>click here</button>
     <pre>{display}</pre>
    </div>
  );
}

export default App;
