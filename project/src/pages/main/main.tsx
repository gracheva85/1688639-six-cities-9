import Header from '../../components/header/header';
import Navigation from '../../components/navigation/navigation';
import {Offer} from '../../types/offer';
import CitiesList from '../../components/cities-list/cities-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeСity, getOfferId, resetOfferId } from '../../store/action';
import { sortOffers } from '../../common';
import EmptyContainer from '../../components/empty-container/empty-container';
import FullContainer from '../../components/full-container/full-container';

type MainProps = {
  offers: Offer[];
}

function Main({offers}: MainProps): JSX.Element {
  const currentCity = useAppSelector((state) => state.city);
  const currentType = useAppSelector((state) => state.sortingType);
  const dispatch = useAppDispatch();
  const sortedOffers = sortOffers(offers, currentCity, currentType);

  const onListItemHover = (listItemName: number) => {
    const currentPoint = offers.find((offer) =>
      offer.id === listItemName,
    );
    currentPoint ? dispatch(getOfferId(listItemName)) : dispatch(resetOfferId());
  };

  const onCityItemHover = (cityName: string) => {
    dispatch(changeСity(cityName));
  };

  return (
    <div className="page page--gray page--main">
      {<Header navigation={<Navigation />} />}
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList onCityItemHover={onCityItemHover}/>
          </section>
        </div>
        <div className="cities">
          {sortedOffers.length>0? <FullContainer offers={sortedOffers} onListItemHover={onListItemHover} /> : <EmptyContainer city={currentCity} />}
        </div>
      </main>
    </div>
  );
}

export default Main;
