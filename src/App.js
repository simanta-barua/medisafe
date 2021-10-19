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
import AuthProvider from "./contexts/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/shop'>
              <Shop></Shop>
            </Route>
            <Route path='/signIn'>
              <SignIn></SignIn>
            </Route>
            <Route path='/signUp'>
              <Registration></Registration>
            </Route>
            <PrivateRoute path='/placeorder'>
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
