import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { AppRoutes, BookingRoutes, EscapeRoomsRoutes } from './routes/routes';
import Home from './components/home/Home';
import EscapeRooms from './components/escapeRooms/EscapeRooms';
import Bookings from './components/bookings/Bookings';
import AddBooking from './components/bookings/addBooking/AddBooking';
import EditBooking from './components/bookings/editBooking/EditBooking';
import ErrorPage from './components/errorPage/ErrorPage';
import EscapeRoomDetail from './components/escapeRooms/escapeRoomDetail/EscapeRoomDetail';
import AddEscapeRoom from './components/escapeRooms/addEscapeRoom/AddEscapeRoom';
import EditEscapeRoom from './components/escapeRooms/editEscapeRoom/EditEscapeRoom';
import Layout from './components/layout/Layout';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoutes.HOME} element={<Layout />}>
            <Route index element={<Home />} />
            <Route path={AppRoutes.ESCAPE_ROOMS} element={<EscapeRooms />}>
              <Route
                path={EscapeRoomsRoutes.ESCAPE_ROOM}
                element={<EscapeRoomDetail />}
              />
              <Route
                path={EscapeRoomsRoutes.ADD_ESCAPE_ROOM}
                element={<AddEscapeRoom />}
              />
              <Route
                path={EscapeRoomsRoutes.EDIT_ESCAPE_ROOM}
                element={<EditEscapeRoom />}
              />
            </Route>
            <Route path={BookingRoutes.BOOKING} element={<Bookings />}>
              <Route
                path={BookingRoutes.ADD_BOOKING}
                element={<AddBooking />}
              />
              <Route
                path={BookingRoutes.EDIT_BOOKING}
                element={<EditBooking />}
              />
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
