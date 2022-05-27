import React from "react";
import Login from "./Login";

var isLoggedIn = true;

function checkLogging(){
  if(isLoggedIn){
    return(
      <Login/>
    );
  }
  else{
    return(<h1>Hello</h1>);
  }
}
function App() {
  return (
    <div className="container">
     {checkLogging()}
      
    </div>
  );
}

export default App;
