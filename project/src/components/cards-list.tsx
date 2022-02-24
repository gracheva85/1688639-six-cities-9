import PlaceCard from '../components/place-card';
import {Offers} from '../types/offer';

type CardsListProps = {
  offers: Offers;
}

function CardsList(props:  CardsListProps): JSX.Element {
  const {offers} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => <PlaceCard key = {offer.id} offer={offer} />)
      }
    </div>
  );
}

export default CardsList;
