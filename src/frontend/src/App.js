import { TeamPage } from "./pages/TeamPage";
import { MatchPage } from "./pages/MatchPage";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/teams/:teamName/matches/:year">
            <MatchPage />
          </Route>
          <Route path="/teams/:teamName">
            <TeamPage>IPL Dashboard</TeamPage>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
