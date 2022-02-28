enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  Root = '/'
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

const CITY = {
  title: 'Амстердам',
  lat: 52.370216,
  lng: 4.895168,
  zoom: 12,
};

const PIN = '/img/pin.svg';

const PIN_ACTIVE = '/img/pin-active.svg';

export {AppRoute, AuthorizationStatus, CITY, PIN, PIN_ACTIVE};
