import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Heder from './component/Heder/Heder';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import SingUp from './component/SingUp/SingUp';
import Footer from './component/Footer/Footer';
import CheckOut from './component/CheckOut/CheckOut';

function App() {
  return (
    <div className="App">
      <Heder></Heder>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/service/:serviceId' element={<CheckOut></CheckOut>}></Route>
        <Route path='/login'element={<Login></Login>}></Route>
        <Route path='/singup' element={<SingUp></SingUp>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
