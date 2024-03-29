import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Footer from './Components/Shared/Footer';
import NaVBar from './Components/Shared/NaVBar';
import SignIn from './Components/Authentication/SignIn';
import SignUp from './Components/Authentication/Sugnup';
import DashBoard from './Components/DashBoard/DashBoard';
import ManageAllParts from './Components/DashBoard/Admin/ManageAllParts/ManageAllParts';
import RequireAuth from './Components/Authentication/RequirAuth';
import ManageAllOrders from './Components/DashBoard/Admin/ManageAllOrders/ManageAllOrders';
import MakeAdmin from './Components/DashBoard/Admin/MakeAdmin';
import PartsDetail from './Components/Home/AllParts.js/PartsDetail';
import { ToastContainer } from 'react-toastify';
import PageNotFound from './Components/Shared/PageNotFound';
import 'react-toastify/dist/ReactToastify.css';
import MyOrders from './Components/DashBoard/User/MyOrders/MyOrders';
import MyReviews from './Components/DashBoard/User/MyReviews/MyReviews';
import Payment from './Components/DashBoard/User/MyOrders/Payment';
import Profile from './Components/DashBoard/Profile/Profile';
import MyPortfolio from './Components/MyPortfolio/MyPortfolio';
import Blog from './Components/Blog/Blog';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NaVBar></NaVBar>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        {/* <Route path='/myportfolio' element={<MyPortfolio />}></Route>
        <Route path='/blog' element={<Blog />}></Route> */}
        <Route element={<RequireAuth />}>
          <Route path='/autoparts/:id' element={<PartsDetail></PartsDetail>}></Route>
          <Route path='/dashboard' element={<DashBoard></DashBoard>}>
            <Route path='/dashboard/myprofile' element={<Profile />}></Route>
            <Route path='/dashboard/myorders' element={<MyOrders></MyOrders>}></Route>
            <Route path='/dashboard/myreview' element={<MyReviews />}></Route>
            <Route path='/dashboard/manageorders' element={<ManageAllOrders></ManageAllOrders>}></Route>
            <Route path='/dashboard/manageparts' element={<ManageAllParts></ManageAllParts>}></Route>
            <Route path='/dashboard/makeadmin' element={<MakeAdmin></MakeAdmin>}></Route>
            <Route path='/dashboard/payment/:id' element={<Payment></Payment>}></Route>
          </Route>
        </Route>

        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
