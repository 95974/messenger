import React,{ useState,useEffect} from "react"
import './App.css';
import {FormControl,IconButton,Input} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import {db,timestamp} from "./firebase";
import Message from "./Message.js";
import FlipMove from "react-flip-move";




function App() {
  const[input,setInput] =useState(""); 
  const [username,setUsername]=useState("");
  const [messages,setMessages]=useState("");

  useEffect(() =>{
    db.collection("messages").orderBy("timestamp","desc").onSnapshot((snapshot) =>{
      setMessages(
        snapshot.docs.map((doc) => ({id: doc.id,message: doc.data()}))
      );
    });
  });


  useEffect( () =>{
    setUsername(prompt("please enter your name"));
  },[]);

  const sendMessage = (event) =>{
    event.preventDefault();
    db.collection("messages").add({
      username:username,
      message:input,
      timestamp:timestamp,
    })
  
    setInput("");
    
  };
  return (
    <div className="app">
      <img src='https://pnggrid.com/wp-content/uploads/2021/04/messenger-logo-1024x1024.png' alt='messenger logo' />
     
     <h1>Messenger Clone</h1>
     <p>
      the <strong>name</strong>productions
      </p>
     <h2>Welcome {username}</h2>

     <form className="app__form">
     <FormControl className="app__formControl">
     <Input 
     placeholder='type a message'
     className='app__input' 
     onChange={(event) =>setInput(event.target.value) }
        value={input} />
           <IconButton 
        variant="contained" 
        color="primary"
         type="submit"
          className="app__iconButton"
          disabled={!input} 
          onClick={sendMessage}  
          >
             <SendIcon />
          </IconButton>
     </FormControl>
     </form>
     <FlipMove>
     {messages.map(({message,id}) =>{
    return <Message key={id} message={message} username={username} />
})} 
</FlipMove>    
    </div>
  );
}

export default App;
