import React from "react";
import Login from "./Login";

var isLoggedIn = true;

// function checkLogging(){
//   if(isLoggedIn){
//     return(
//       <Login/>
//     );
//   }
//   else{
//     return(<h1>Hello</h1>);
//   }
// }

const currentTime =new Date().getHours();

function App() {
  return (
    <div className="container">
     {/* {isLoggedIn ? <Login/>: <h1>Hello</h1>} */}
     {/* tarnery operator...render if condition is met/ */}
     {/* null means render nothing */}
     {/* {currentTime > 12 ?  <h1>Why are you still working</h1> : null} */}
     {/* use of and operator */}
    { currentTime > 12 &&  <h1>Why are you still working</h1>}
    </div>
  );
}

export default App;
