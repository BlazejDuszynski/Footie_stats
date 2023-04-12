import "./App.css";
import Navbar from "./Components/Layout/HomepageNavbar";
import Bundesliga from "./Components/Pages/Bundesliga";
import Home from "./Components/Pages/Home";
import PremierLeague from "./Components/Pages/PremierLeague";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/PremierLeague", element: <PremierLeague /> },
  { path: "/Bundesliga", element: <Bundesliga /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
