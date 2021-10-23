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
              <Route path="/service/:serviceId">
                <ServiceDetails></ServiceDetails>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="/registration">
                <Registration></Registration>
              </Route>
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
