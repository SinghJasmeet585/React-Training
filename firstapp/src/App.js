import logo from './logo.svg';
import './App.css';
import Header, { dummyFunc } from './components/Header';
import Footer from './components/Footer';
//import MainContent from './components/MainContent';
import ContactList from './components/ContactList';

function App() {
  return (
    <div>
      <Header />
      <ContactList />
      <Footer />
      </div>
  );
}

export default App;
