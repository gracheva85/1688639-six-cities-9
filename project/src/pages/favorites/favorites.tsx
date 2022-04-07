import Header from '../../components/header/header';
import FavoritesFull from '../../components/favorites-full/favorites-full';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import { store } from '../../store';
import { useEffect } from 'react';
import { LogoType } from '../../settings';
import { useAppSelector } from '../../hooks';
import { getFavorite } from '../../store/offers-data/selectors';
import { fetchFavouriteAction } from '../../store/api-actions';

function Favorites(): JSX.Element {
  useEffect(()=>{store.dispatch(fetchFavouriteAction());}, []);
  const offers = useAppSelector(getFavorite).filter(({isFavorite}) => isFavorite);

  return (
    <div data-testid="Favorites" className={`page ${offers.length ===0 ? 'page--favorites-empty' : ''}`}>
      <Header />
      {offers.length>0 ? <FavoritesFull offers={offers}/> : <FavoritesEmpty />}
      <footer className="footer container" data-testid="FavoritesFooter">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width={LogoType.Footer.Width} height={LogoType.Footer.Height} />
        </a>
      </footer>
    </div>
  );
}

export default Favorites;
