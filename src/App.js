import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Blogs from './Pages/Blogs/Blogs';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import AddItem from './Pages/AddNewItem/AddItem';
import LogIn from './Pages/LogIn/LogIn/LogIn';
import SignUp from './Pages/LogIn/SignUp/SignUp';
import RequiredAuth from './Pages/RequiredAuth/RequiredAuth';
import { ToastContainer } from 'react-bootstrap';
import MyItem from './Pages/MyItem/MyItem';
import Error404 from './Pages/Error404/Error404';
import Review from './Pages/Home/Review/Review';
import AllReview from './Pages/AllReview/AllReview';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/review' element={<AllReview></AllReview>}></Route>
        <Route path='/inventory' element={<ManageInventory></ManageInventory>}></Route>
        <Route path='/additem' element={
          <RequiredAuth>
            <AddItem></AddItem>
          </RequiredAuth>
        }></Route>
        <Route path='/details/:productId' element={
          <RequiredAuth>
            <ProductDetails></ProductDetails>
          </RequiredAuth>
        }></Route>
        <Route path='/myitem' element={
          <RequiredAuth>
            <MyItem></MyItem>
          </RequiredAuth>
        }></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/register' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
