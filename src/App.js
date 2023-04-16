import "./App.css";
import Bundesliga from "./Components/Pages/Bundesliga/Bundesliga";
import Home from "./Components/Pages/Home";
import LaLiga from "./Components/Pages/LaLiga/LaLiga";
import SerieA from "./Components/Pages/SerieA/SerieA";
import Ligue1 from "./Components/Pages/Ligue1/Ligue1";
import PremierLeague from "./Components/Pages/PremierLeague/PremierLeague";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Components/Pages/Root";
import LeaguesRoot from "./Components/Pages/LeaguesRootLayout";
import Matches from "./Components/Pages/SubNavigationItems/Matches";
import Table from "./Components/Pages/SubNavigationItems/Table";
import Statistics from "./Components/Pages/SubNavigationItems/Statistics";
import LeagueProvider from "./Components/Store/LeagueProvider";

const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "",
        element: <LeaguesRoot />,
        children: [
          { path: ":leagueId/matches", element: <Matches /> },
          { path: ":leagueId/table", element: <Table /> },
          { path: ":leagueId/statistics", element: <Statistics /> },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <LeagueProvider>
      <RouterProvider router={router} />
    </LeagueProvider>
  );
}

export default App;
