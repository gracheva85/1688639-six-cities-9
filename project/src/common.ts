import { OffersType, PlaceType, SortingType } from './consts';
import { Offer } from './types/offer';

const correctType = (type: string) => {
  switch (type) {
    case PlaceType.Apartment:
      return OffersType.Apartment;
      break;
    case PlaceType.Room:
      return OffersType.Room;
      break;
    case PlaceType.House:
      return OffersType.House;
      break;
    case PlaceType.Hotel:
      return OffersType.Hotel;
      break;
  }
};

const sortOffers = (offers: Offer[], city: string, type: string ) => {
  const filteredOffers = offers.filter((offer) => offer.city.name === city);
  switch (type) {
    case SortingType.PriceToHigh:
      return filteredOffers.sort((a, b) => a.price-b.price );
      break;
    case SortingType.PriceToLow:
      return filteredOffers.sort((a, b) => b.price-a.price );
      break;
    case SortingType.Top:
      return filteredOffers.sort((a, b) => b.rating-a.rating );
      break;
    default:
      return filteredOffers;
  }
};

const updateData = (offers: Offer[], offer: Offer) => {
  const index = offers.findIndex((item) => item.id === offer.id);
  if (index === -1) {
    return offers;
  }

  return [
    ...offers.slice(0, index),
    offer,
    ...offers.slice(index + 1),
  ];
};

const paintRating = (rating: number) => Math.round(rating)*20;

export {sortOffers, paintRating, correctType, updateData};
