import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Footer from './Components/Shared/Footer';
import NaVBar from './Components/Shared/NaVBar';
import SignIn from './Components/Authentication/SignIn';
import SignUp from './Components/Authentication/Sugnup';
import DashBoard from './Components/DashBoard/DashBoard';

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <NaVBar></NaVBar>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/dashboard' element={<DashBoard></DashBoard>}>
          <Route path='/dashboard/profile' element={<p>My Profile</p>}></Route>
          <Route path='/dashboard/orders' element={<p>My Profile</p>}></Route>
          <Route path='/dashboard/review' element={<p>My Profile</p>}></Route>
          <Route path='/dashboard/addnewparts' element={<p>My Profile</p>}></Route>
          <Route path='/dashboard/manageorders' element={<p>My Profile</p>}></Route>
          <Route path='/dashboard/manageparts' element={<p>My Profile</p>}></Route>
          <Route path='/dashboard/makeadmin' element={<p>My Profile</p>}></Route>
        </Route>

        <Route path='*' element={<div>Not Found</div>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
