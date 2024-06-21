export enum AppRoutes {
  HOME = '/',
  ERROR_PAGE = '/error',
  LOGIN = '/login',
  ESCAPE_ROOMS = '/escape-rooms',
}

export enum EscapeRoomsRoutes {
  ESCAPE_ROOM = '/escape-rooms/:id',
}

export enum BookingRoutes {
  BOOKING = '/booking',
  ADD_BOOKING = '/booking/add/:escapeRoomId',
  EDIT_BOOKING = '/booking/edit/:bookingId',
}

export enum CustomerRoutes {
  CUSTOMER = '/customers',
  CUSTOMER_BOOKINGS = '/customers/bookings',
}
