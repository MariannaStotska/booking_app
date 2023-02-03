import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Offers from "./components/Offers";
import Footter from "./components/Footter";

function App() {
  return (
    <div className="App">
      <Header/>
        <Offers/>
        <Footter/>
    </div>
  );
}

export default App;
