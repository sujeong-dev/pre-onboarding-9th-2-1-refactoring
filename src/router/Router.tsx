import Main from '../pages/Main';
import Reservation from '../pages/Reservation';
import { Navigate, Route, Routes } from 'react-router-dom';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/main' />} />
      <Route path='/main' element={<Main />} />
      <Route path='/reservations' element={<Reservation />} />
    </Routes>
  );
}
