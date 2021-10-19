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
import Footer from "./components/Footer/Footer";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Category from "./components/Category/Category";
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
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/shop'>
              <Shop></Shop>
            </Route>
            <PrivateRoute path='/productdetails/:productid'>
              <ProductDetails></ProductDetails>
            </PrivateRoute>
            <Route path='/signin'>
              <SignIn></SignIn>
            </Route>
            <Route path='/signup'>
              <Registration></Registration>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path='/contact'>
              <Contact></Contact>
            </Route>
            <Route path='/category'>
              <Category></Category>
            </Route>
            <PrivateRoute path='/placeorder'>
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
