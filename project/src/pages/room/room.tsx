import { useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import Navigation from '../../components/navigation/navigation';
import PlaceCard from '../../components/place-card/place-card';
import RoomCard from '../../components/room-card/room-card';
import {Offer} from '../../types/offer';
import { Review } from '../../types/review';
import Map from '../../components/map/map';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { sortOffers } from '../../common';
import { getOfferId } from '../../store/action';

type RoomProps = {
  offers: Offer[];
  reviews: Review[];
};

function Room(props: RoomProps): JSX.Element {
  const {offers, reviews} = props;
  const currentCity = useAppSelector((state) => state.city);
  const currentType = useAppSelector((state) => state.sortingType);
  const dispatch = useAppDispatch();
  const nextOffers = sortOffers(offers, currentCity, currentType).slice(0, 3);

  const params = useParams();
  const current = params.id;
  dispatch(getOfferId(Number(current)));
  const newSelectedPoint = useAppSelector((state) => state.offerId);

  const currentOffer = offers.find((item)=>String(item.id)===current);
  const roomCard = currentOffer && <RoomCard reviews={reviews} offer={currentOffer} />;

  return (
    <div className="page">
      <Header navigation={<Navigation />}/>
      <main className="page__main page__main--property">
        <section className="property">
          {roomCard}
          <section className="property__map map">
            <Map offers={nextOffers} selectedPoint={newSelectedPoint}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {
                nextOffers.slice(0, 3).map((item) => <PlaceCard key = {item.id} offer={item} articleClassChange={'near-places__card'} imgClassChange={'near-places__image-wrapper'} />)
              }
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Room;
