import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import NotFound from "./components/NotFound/NotFound";
import SignIn from "./components/SignIn/SignIn";
import Registration from "./components/Registration/Registration";

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/shop'>
            <Shop></Shop>
          </Route>
          <Route path='/singIn'>
            <SignIn></SignIn>
          </Route>
          <Route path='/singUp'>
            <Registration></Registration>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
