import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import Navigation from '../../components/navigation/navigation';
import PlaceCard from '../../components/place-card/place-card';
import RoomCard from '../../components/room-card/room-card';
import { CITY } from '../../consts';
import {Offer} from '../../types/offer';
import { Review } from '../../types/review';
import Map from '../../components/map/map';

type RoomProps = {
  offers: Offer[];
  reviews: Review[];
};

function Room(props: RoomProps): JSX.Element {
  const {offers, reviews} = props;
  const nextOffers = offers.slice(0, 3);

  const [selectedPoint, setSelectedPoint] = useState(0);

  const onListItemHover = (listItemName: number) => {
    const currentPoint = offers.find((offer) =>
      offer.id === listItemName,
    );
    currentPoint&&setSelectedPoint(currentPoint.id);
  };

  const params = useParams();
  const current = params.id;
  const currentOffer = offers.find((item)=>String(item.id)===current);

  const roomCard = currentOffer && <RoomCard reviews={reviews} offer={currentOffer} />;

  return (
    <div className="page">
      <Header navigation={<Navigation />}/>
      <main className="page__main page__main--property">
        <section className="property">
          {roomCard}
          <section className="property__map map">
            <Map city={CITY} offers={nextOffers} selectedPoint={selectedPoint} />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {
                nextOffers.slice(0, 3).map((item) => <PlaceCard key = {item.id} offer={item} articleClassChange={'near-places__card'} imgClassChange={'near-places__image-wrapper'} onListItemHover={onListItemHover} />)
              }
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Room;
