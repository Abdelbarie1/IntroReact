import {Navbar , NavbarBrand} from 'reactstrap';
import Main from './components/MainComponent';
import './App.css';
import {DISHES} from './shared/dishes';
import {BrowserRouter} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <div>
        <Main/>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
