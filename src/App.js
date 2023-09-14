import "./App.css";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";


function App() {

   const buttonSend = () => console.log("Send");
   const buttonDelete = () => console.log("Delete");
   const inputChange = () => console.log('Input change');

  return (
  <div> 
    <div className="App">HELLO REACT</div>
    <Input onChange={inputChange}/>
    <Button text='Send' onClick={buttonSend}></Button>
    <Button text='Delete' onClick={buttonDelete}></Button>
    
  </div>
  );
}

export default App;
