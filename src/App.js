
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Header from './components/headerComponent';
import Main from "./components/mainComponent";
import Footer from "./components/footerComponent";



function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <div classname="container">
                <Main />
            </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
