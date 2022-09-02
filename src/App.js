// import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer';
import Main from './Components/Main';
import NavArea from './Components/NavArea';

function App() {
  return (
    <div className="App bg-real-dark text-white">
      <div>
        <NavArea />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
