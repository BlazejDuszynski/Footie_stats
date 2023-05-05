import "./App.css";
import Home from "./Components/Pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Components/Pages/Root";
import LeaguesRoot from "./Components/Pages/LeaguesRootLayout";
import Matches, {
  loader as matchesLoader,
} from "./Components/Pages/SubNavigationItems/Matches/Matches";
import Table from "./Components/Pages/SubNavigationItems/Table/Table";
import Statistics from "./Components/Pages/SubNavigationItems/Statistics/Statistics";
import LeagueProvider from "./Components/Store/LeagueProvider";
import leaguesIDs from "./Components/Pages/SubNavigationItems/leaguesIDs";
import DateProvider from "./Components/Store/DateProvider";

const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "",
        element: <LeaguesRoot />,
        children: [
          {
            path: ":leagueId/matches",
            element: <Matches />,
            loader: (params) => matchesLoader(params, leaguesIDs),
          },
          { path: ":leagueId/table", element: <Table /> },
          { path: ":leagueId/statistics", element: <Statistics /> },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <DateProvider>
      <LeagueProvider>
        <RouterProvider router={router} />
      </LeagueProvider>
    </DateProvider>
  );
}

export default App;
