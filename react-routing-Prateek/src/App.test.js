import { render, screen } from '@testing-library/react';
import App from './App';
import AboutUs from './components/AboutUs';
import Header from './components/Header';
import { BrowserRouter as Router } from 'react-router-dom';

describe('contact manager application tests', () => {

  test('should render aboutUs component', () => {
    render(<AboutUs />);
    expect(screen.getByText('About Us')).toBeInTheDocument();
  });

  test('should render Header Component with contaact manager text', () => {
    render(
      <Router>
        <Header />
      </Router>

    );
    expect(screen.getByText('Contact us')).toBeInTheDocument();
  });

  test('should have 5 links in the header component', () => {
    const element = document.createElement( 'div' );
    renderer(
      <Router>
        <Header />
      </Router>
      , element
    );

    const count = element.
  });
  

})
