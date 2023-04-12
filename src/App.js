import "./App.css";
import Bundesliga from "./Components/Pages/Bundesliga/Bundesliga";
import Home from "./Components/Pages/Home";
import LaLiga from "./Components/Pages/LaLiga/LaLiga";
import SerieA from "./Components/Pages/SerieA/SerieA";
import Ligue1 from "./Components/Pages/Ligue1/Ligue1";
import PremierLeague from "./Components/Pages/PremierLeague/PremierLeague";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/PremierLeague", element: <PremierLeague /> },
  { path: "/Bundesliga", element: <Bundesliga /> },
  { path: "/SerieA", element: <SerieA /> },
  { path: "/Ligue1", element: <Ligue1 /> },
  { path: "/LaLiga", element: <LaLiga /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
