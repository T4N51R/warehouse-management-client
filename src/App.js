import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Inventory from './Pages/Inventory/Inventory';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Blogs from './Pages/Blogs/Blogs';
import ManageInventory from './Pages/ManageInventory/ManageInventory';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/inventory' element={<ManageInventory></ManageInventory>}></Route>
        <Route path='/details/:productId' element={<ProductDetails></ProductDetails>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
