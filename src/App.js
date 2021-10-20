import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
          <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Footer></Footer>
          </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
