import PlaceCard from '../place-card/place-card';
import {Offer} from '../../types/offer';
import { RenderPlase } from '../../settings';

const articleClass = 'cities__place-card';
const imgClass = 'cities__image-wrapper';
const cardListPlace = RenderPlase.PlaceCard;

type PlaceCardListProps = {
  offers: Offer[];
}

function  PlaceCardList({offers}:  PlaceCardListProps): JSX.Element {

  return (
    <div className="cities__places-list places__list tabs__content" data-testid="PlaceList">
      {
        offers.map((offer) =>
          (
            <PlaceCard
              key={offer.id}
              offer={offer}
              articleClassChange={articleClass}
              imgClassChange={imgClass}
              renderPlace={cardListPlace}
            />
          ))
      }
    </div>
  );
}

export default PlaceCardList;

