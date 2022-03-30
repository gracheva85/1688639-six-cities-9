import Header from '../../components/header/header';
import FavoritesFull from '../../components/favorites-full/favorites-full';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import { useAppSelector } from '../../hooks';
import { store } from '../../store';
import { fetchFavoriteAction } from '../../store/api-actions';
import { useEffect } from 'react';
import { LogoType } from '../../settings';
import { getFavorite } from '../../store/offers-data/selectors';

function Favorites(): JSX.Element {
  useEffect(()=>{store.dispatch(fetchFavoriteAction());}, []);
  const offersFavorite = useAppSelector(getFavorite).filter(({isFavorite}) => isFavorite);

  return (
    <div data-testid="Favorites" className={`page ${offersFavorite.length ===0 ? 'page--favorites-empty' : ''}`}>
      <Header />
      {offersFavorite.length>0 ? <FavoritesFull offers={offersFavorite}/> : <FavoritesEmpty />}
      <footer className="footer container" data-testid="FavoritesFooter">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width={LogoType.Footer.Width} height={LogoType.Footer.Height} />
        </a>
      </footer>
    </div>
  );
}

export default Favorites;
