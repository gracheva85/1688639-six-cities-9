import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Main from '../pages/main/main';
import Favorites from '../pages/favorites/favorites';
import SignIn from '../pages/sign-in/sign-in';
import Room from '../pages/room/room';
import Error from '../components/error';
import PrivateRoute from '../components/private-route';
import {AppRoute, AuthorizationStatus} from '../consts';

type AppScreenProps = {
  placesCount: number;
}

function App({placesCount}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main placesCount={placesCount} />} />
        <Route path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Login} element={<SignIn />} />
        <Route path={AppRoute.Offer} element={<Room />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
