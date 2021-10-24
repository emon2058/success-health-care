import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Registration from './Pages/Registration/Registration';
import ServiceDetails from './Pages/Home/ServiceDetails/ServiceDetails';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Contact from './Pages/Contact/Contact';
import Discount from './Pages/Discount/Discount';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
          <Switch>
          <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/home">
                <Home></Home>
              </Route>
              <PrivateRoute path="/service/:serviceId">
                <ServiceDetails></ServiceDetails>
              </PrivateRoute>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="/registration">
                <Registration></Registration>
              </Route>
              <PrivateRoute path="/contact">
                <Contact></Contact>
              </PrivateRoute>
              <PrivateRoute path="/discount">
                <Discount></Discount>
              </PrivateRoute>
              <Route path="*">
                <NotFound></NotFound>
              </Route>
          </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
