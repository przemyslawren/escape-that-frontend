export enum AppRoutes {
  HOME = '/',
  ESCAPE_ROOMS = '/escape-rooms',
  ESCAPE_ROOMS_ROUTES = '/escape-rooms/*',
  ERROR_PAGE = '/error',
  LOGIN = '/login',
}

export enum EscapeRoomsRoutes {
  ESCAPE_ROOM = '/escape-rooms/:id',
}

export enum BookingRoutes {
  BOOKING = '/booking',
  ADD_BOOKING = '/booking/add',
  EDIT_BOOKING = '/booking/edit/:id',
}

export enum CustomerRoutes {
  CUSTOMER = '/customers',
  CUSTOMER_BOOKINGS = '/customers/bookings',
}
