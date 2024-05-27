import './App.css';
import Header from './Components/Header/Header';
import { Context } from './StateManagement/Context';
import MainNavigation from './Navigation/MainNavigation';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Components/Footer/Footer';

function App() {
  return (

    <Context>
      <Header />
      <BrowserRouter>
        <MainNavigation />
      </BrowserRouter>
      <Footer/>
    </Context>

  );
}

export default App;
