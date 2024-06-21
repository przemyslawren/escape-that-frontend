import './App.css';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { AppRoutes, BookingRoutes, EscapeRoomsRoutes } from './routes/routes';
import Home from './components/home/Home';
import EscapeRooms from './components/escapeRooms/EscapeRooms';
import Bookings from './components/bookings/Bookings';
import AddBooking from './components/bookings/addBooking/AddBooking';
import EditBooking from './components/bookings/editBooking/EditBooking';
import ErrorPage from './components/errorPage/ErrorPage';
import EscapeRoomDetail from './components/escapeRooms/escapeRoomDetail/EscapeRoomDetail';
import Layout from './components/layout/Layout';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';
import Login from './components/layout/login/Login';
import { useAuth } from './hooks/useAuth';

const App = (): JSX.Element => {
  const { isAuthenticated, role } = useAuth();

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoutes.HOME} element={<Layout />}>
            <Route index element={<Home />} />
            <Route path={AppRoutes.LOGIN} element={<Login />} />
            <Route path={AppRoutes.ESCAPE_ROOMS} element={<EscapeRooms />} />
            <Route
              path={EscapeRoomsRoutes.ESCAPE_ROOM}
              element={<EscapeRoomDetail />}
            />
            <Route
              path={BookingRoutes.BOOKING}
              element={
                isAuthenticated ? (
                  <Bookings />
                ) : (
                  <Navigate to={AppRoutes.LOGIN} />
                )
              }
            ></Route>
            <Route
              path={BookingRoutes.ADD_BOOKING}
              element={
                isAuthenticated ? (
                  <AddBooking />
                ) : (
                  <Navigate to={AppRoutes.LOGIN} />
                )
              }
            />
            <Route
              path={BookingRoutes.EDIT_BOOKING}
              element={
                isAuthenticated ? (
                  <EditBooking />
                ) : (
                  <Navigate to={AppRoutes.LOGIN} />
                )
              }
            />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
