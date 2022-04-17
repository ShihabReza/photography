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

import Blog from './component/Blog/Blog';
import RequireAuth from './component/RequireAuth/RequireAuth';
import NotFound from './component/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <Heder></Heder>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/singup' element={<SingUp></SingUp>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/checkout' element={
          
            <RequireAuth>
              <CheckOut></CheckOut>
            </RequireAuth>
        
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
