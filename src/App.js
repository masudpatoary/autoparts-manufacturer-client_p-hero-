import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Footer from './Components/Shared/Footer';
import NaVBar from './Components/Shared/NaVBar';

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <NaVBar></NaVBar>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='*' element={<div>Not Found</div>}></Route>
        </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
