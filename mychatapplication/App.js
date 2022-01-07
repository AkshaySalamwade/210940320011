// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


import { useState } from "react";





export default function App()
{
  return(
  <>
   <MyComponent/> 
  </>
 
  );
}


function MyComponent() {
  
   const[message, setMessage] = useState("");
   const[messageList, setMessageList] = useState([]);

   const processMessage = (e) => {
    const newMessage = e.target.value;
    setMessage(newMessage);


   };

  const addTweet = () => {
   console.log(message);
   const newMessageList = [message, ...messageList];
   setMessageList(newMessageList);
   setMessage("");
  };

return(

 <div>
    <div className="row bg-dark text-white mb-5">
       <div className="col-2"><h1>MychatAPP</h1></div>
       <div className="col-4 mt-3"> by akshay salamwade 011_KH</div>
     </div>

       <div className="row">
          <div className="col-6"><input className="form form-control w-100 " type="text" placeholder="Lets chat Here....." value={message} onChange={processMessage} />
     </div>
          <div className="col-2"><input type="button"className="btn btn-primary w-100" value="send" onClick={addTweet}/></div>


       </div>


     {messageList.map((item,index) => (
       <div key={index} className="bg-light  my-3 p-3 mx-4"> {item}</div>
     ))}

 </div>

);

}

