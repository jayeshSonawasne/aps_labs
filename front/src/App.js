import {Route,Routes} from 'react-router-dom'
import AboutUs from './Componants/AboutUs';
import Footer from './Componants/Footer';
import Home from './Componants/Home';
import NavBar from './Componants/NavBar';
import Imbibe from './Componants/Imbibe';
import Implement from './Componants/Implement';
import Innovate from './Componants/Innovate';
import Contact from './Componants/Contact';
import Product from './Componants/Product';
import Cart from './Componants/Cart';
import Login from './dash/Login';
import Dashboard from './dash/Dashboard';
import Register from './dash/Registerr';
import ListofProducts from './dash/ListofProducts'
import AddProduct from "./dash/AddProduct";
import Orders from "./dash/Orders";
import Procurement from "./dash/Procurement";
import Packaging from "./dash/Packaging";
import Dispatch from "./dash/Dispatch";
import LogOut from "./dash/LogOut";

function App() {
  return (
    <>
   {/* <NavBar/> */}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/aboutus/' element={<AboutUs/>}>
      <Route path='imbibe' element={<Imbibe/>}/>
      <Route path='implement' element={<Implement/>}/>
      <Route path='innovate' element={<Innovate/>}/>
        </Route>
      <Route path='cart' element={<Cart/>}/>
      <Route path='/adminlogin' element={<Login/>}/>
      <Route path="/register" element={<Register/>}/> 
      <Route path="/dashboard/" element={<Dashboard/>}>
      <Route path="productlist" element={<ListofProducts/>}/>
      <Route path="addproduct" element={<AddProduct/>}/>
      <Route path="order" element={<Orders/>}/>
      <Route path="procurement" element={<Procurement/>}/>
      <Route path="packaging" element={<Packaging/>}/>
      <Route path="dispatch" element={<Dispatch/>}/>
      <Route path="logout" element={<LogOut/>}/>
      </Route>

    </Routes>
    {/* <Footer/> */}
    </>
  );
}

export default App;
