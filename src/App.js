import "./App.css";
import Bundesliga from "./Components/Pages/Bundesliga";
import Home from "./Components/Pages/Home";
import PremierLeague from "./Components/Pages/PremierLeague";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    part: "/",
    children: [
      { path: "/", element: <Home /> },
      { path: "/PremierLeague", element: <PremierLeague /> },
      { path: "/Bundesliga", element: <Bundesliga /> },
    ],
  },
]);

function App() {
  return <div className="App">aaa</div>;
}

export default App;
