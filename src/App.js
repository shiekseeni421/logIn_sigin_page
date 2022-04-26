import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SigIn from "./Component/sigInPage";
import LoginPage from "./Component/LogInPage";
import Calculator from "./Component/Createcalculator";
import Header from "./Component/Header";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/signIn">
          <SigIn />
        </Route>
        <Route exact path="/logIn" component={LoginPage} />
        <Route path="/calculator" component={Calculator} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
