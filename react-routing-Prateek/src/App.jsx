import ContactList from './components/ContactList';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import NotFound from './components/NotFound';
import Login from './components/Login';
import PrivateRoute from './PrivateRoute';
import AddContact from './components/AddContact';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <PrivateRoute exact path='/' component={ContactList} />
          <PrivateRoute path='/edit/:id' component={AddContact} />
          <Route path='/login' component={Login} />
          <Route path='/contactus' component={ContactUs} />
          <Route path='/aboutus'>
            <AboutUs />
          </Route>
          <Route path='*' component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
