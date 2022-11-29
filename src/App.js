import './App.css';
import Views from './Views/Views';
import Footer from './Components/Footer/Footer';
import Gastrogate from './Components/Gastrogate/Gastrogate';

function App() {
  return (
    <div className="App">
      <div className='main'>
        <Views />
      </div>
      <Footer />
      <Gastrogate />
    </div>
  );
}

export default App;
