import "./App.css";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import Card from "./components/Card/Card";
import { useState, createContext } from "react";
import Todo from "./widget/Todo";
import Example from "./Example";
import Users from "./components/Users";
// import Posts from "./components/Posts";
import Albums from "./components/Albums";
import { Route, Routes } from "react-router-dom";
import PostList from "./pages/PostList";
import Post from "./pages/Post";
import Home from "./pages/Home";
import Header from "./pages/Header";
import PageNotFound from "./pages/PageNotFound";
import FormikForm from "./components/forms/FormikForm";
import CustomeForm from "./components/forms/CustomeForm";
import ReactHookForm from "./components/forms/ReactHookForm";
import Tasks from "./components/UseContext/Tasks";
import Form from "./components/UseContext/Form";
import CounterUseState from "./components/useState/CounterUseState";
import CountUseReducer from "./components/UseReducer/CountUseReducer";
import CartPage from "./components/pages/CartPage";
import HomePage from "./components/pages/HomePage";

export const Context = createContext(null);
export const ThemeContext = createContext(null);

function App() {
  // const buttonSend = () => console.log("Send");
  // const buttonDelete = () => console.log("Delete");
  // const inputChange = () => console.log("Input change");

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

  const [tasks, setTasks] = useState(["React"]);
  const [mode, setMode] = useState("light");

  const handleAddNewTask = (name) => {
    const items = [...tasks, name];
    setTasks(items);
  };
  const value = {
    tasks: tasks,
    onAddTask: handleAddNewTask,
  };

  const themeValue = {
    mode: mode,
    setMode: setMode,
  };

  return (
    <>
      <div className="App">HELLO REACT</div>

      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <div>
        <Button variant="text" disabled>
          Text
        </Button>
        <Button variant="contained" disabled>
          Text
        </Button>
        <Button variant="outlined" disabled>
          Text
        </Button>
        <h3>Disabledcomponents</h3>
        <Button variant="text" href="/">
          Text
        </Button>
      </div>

      {/* <Input onChange={inputChange} />
      <Button text="Send" onClick={buttonSend}></Button>
      <Button text="Delete" onClick={buttonDelete}></Button> */}
      <div className="list">
        {cources.map((cource, i) => (
          <Card key={i} cource={cource} />
        ))}
      </div>
      <CounterUseState />
      <Todo />
      {/*<Example />*/}
      <Users />
      {/* <Posts /> */}
      <Albums />

      <Header />
      <Routes>
        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <CustomeForm />
      <FormikForm />
      <ReactHookForm />

      <div className={mode}>
        <ThemeContext.Provider value={themeValue}>
          <Context.Provider value={value}>
            <Form />
            <Tasks />
          </Context.Provider>
        </ThemeContext.Provider>
      </div>

      <div>
        <h2>Reducer counter</h2>
        <CountUseReducer />
      </div>

      <div className="pages">
        <HomePage />
        <CartPage />
      </div>
    </>
  );
}

export default App;
