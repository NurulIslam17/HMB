import './App.css';
import Home from './page/Home';
import { Routes,Route } from 'react-router-dom';
import Login from './page/Login';
import Register from './page/Register';
import Dashboard from './page/Dashboard';
import Room from './page/Room';
import Booking from './page/Booking';
import MyBooking from './page/MyBooking';
import RoomDetail from './page/RoomDetail';
import AddRoom from './page/AddRoom';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/rooms' element={<Room/>}/>
        <Route path='/bookings' element={<Booking/>}/>
        <Route path='/my-booking' element={<MyBooking/>}/>
        <Route path='/room-details' element={<RoomDetail/>}/>
        <Route path='/add-room' element={<AddRoom/>}/>
      </Routes>

    </>
  );
}

export default App;
