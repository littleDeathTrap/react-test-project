import "./App.css";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import Card from "./components/Card/Card";
import { useState } from "react";
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

  const [count, setCount] = useState(0);
  const [isShowCount, setIsShowCount] = useState(false);
  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    setCount(count - 1);
  };
  const resetCount = () => {
    setCount(0);
  };
  const toggleVisibility = () => {
    setIsShowCount(!isShowCount);
  };

  return (
    <>
      <div className="App">HELLO REACT</div>
      <Input onChange={inputChange} />
      <Button text="Send" onClick={buttonSend}></Button>
      <Button text="Delete" onClick={buttonDelete}></Button>
      <div className="list">
        {cources.map((cource, i) => (
          <Card key={i} cource={cource} />
        ))}
      </div>
      <div>
        {isShowCount && <h1>Count: {count}</h1>}
        <button onClick={toggleVisibility}>Count visibility</button>
        <button onClick={incrementCount}>Increment</button>
        <button onClick={decrementCount}>Decrement</button>
        <button onClick={resetCount}>Reset</button>
      </div>
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
    </>
  );
}

export default App;
