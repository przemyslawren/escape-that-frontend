export enum AppRoutes {
  HOME = '/',
  ESCAPE_ROOMS = '/escape-rooms',
  ESCAPE_ROOMS_ROUTES = '/escape-rooms/*',
  ERROR_PAGE = '/error',
}

export enum EscapeRoomsRoutes {
  ESCAPE_ROOM = '/escape-rooms/:id',
  ADD_ESCAPE_ROOM = '/escape-rooms/add',
  EDIT_ESCAPE_ROOM = '/escape-rooms/edit/:id',
}

export enum BookingRoutes {
  BOOKING = '/booking',
  ADD_BOOKING = '/booking/add',
  EDIT_BOOKING = '/booking/edit/:id',
}
