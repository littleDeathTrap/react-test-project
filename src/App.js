import "./App.css";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import Card from "./components/Card/Card";

function App() {
  const buttonSend = () => console.log("Send");
  const buttonDelete = () => console.log("Delete");
  const inputChange = () => console.log("Input change");

  const cources = [
    {
      id: 1,
      image:
        "https://ultimatecourses.com/assets/share/courses/react-f02200115da09fd485a296e351972d7ea75701ed8d3d023d9f18c4b38e6b18b0.png",
      level: "Intermediate",
      title: "Introduction Basic Programming HTML & CSS",
      user: {
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png",
        name: "John Doe",
      },
      rating: 4.5,
      students: 1234,
      modules: 5,
      duration: 5400,
    },
    {
      id: 2,
      image:
        "https://ultimatecourses.com/assets/share/courses/react-f02200115da09fd485a296e351972d7ea75701ed8d3d023d9f18c4b38e6b18b0.png",
      level: "Intermediate",
      title: "Introduction Basic Programming HTML & CSS",
      user: {
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png",
        name: "John Doe",
      },
      rating: 4.5,
      students: 1234,
      modules: 5,
      finishedModules: 3,
      duration: 5400,
      isMyCource: true,
    },
  ];

  return (
    <div>
      <div className="App">HELLO REACT</div>
      <Input onChange={inputChange} />
      <Button text="Send" onClick={buttonSend}></Button>
      <Button text="Delete" onClick={buttonDelete}></Button>
      <div className="list">
        {cources.map((cource, i) => (
          <Card key={i} cource={cource} />
        ))}
      </div>
    </div>
  );
}

export default App;
