import './App.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/Homepage/homepage';
import ProductScreen from './screens/ProjectScreen/ProjectScreen';
import About from './screens/About/About';
import PortfolioMain from './screens/Portfolio/Portfolio';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <main className="main">
          <Route path="/project/:id" component={ProductScreen}></Route>
          <Route path="/portfolio" component={PortfolioMain}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
