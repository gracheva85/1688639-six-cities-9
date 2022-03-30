import { loadOffer, offersData, updateFavorites } from './offers-data';
import {loadOffers, loadOffersFavorite, loadOffersNearby, loadComments, resetComments} from './offers-data';
import {makeFakeOffer, makeFakeReview} from '../../utils/mocks';
import { defaultOffer } from '../../consts';

const offer = makeFakeOffer();
const offers = [makeFakeOffer(), makeFakeOffer()];
const comments = [makeFakeReview(), makeFakeReview()];

describe('Reducer: offersData', () => {
  it('without additional parameters should return initial state', () => {
    expect(offersData.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        offers: [],
        offer: defaultOffer,
        offersFavorite: [],
        offersNearby: [],
        comments: [],
        isDataLoaded: false,
        isOfferLoaded: false,
        isLoadedOffersNearby: false,
        isLoadedComments: false,
      });
  });
  it('should load offers', () => {
    const state = {
      offers: [],
      offer: defaultOffer,
      offersFavorite: [],
      offersNearby: [],
      comments: [],
      isDataLoaded: false,
      isOfferLoaded: false,
      isLoadedOffersNearby: false,
      isLoadedComments: false,
    };
    expect(offersData.reducer(state, loadOffers(offers)))
      .toEqual({
        offers,
        offer: defaultOffer,
        offersFavorite: [],
        offersNearby: [],
        comments: [],
        isDataLoaded: true,
        isOfferLoaded: false,
        isLoadedOffersNearby: false,
        isLoadedComments: false,
      });
  });
  it('should load offer', () => {
    const state = {
      offers: [],
      offer: defaultOffer,
      offersFavorite: [],
      offersNearby: [],
      comments: [],
      isDataLoaded: false,
      isOfferLoaded: false,
      isLoadedOffersNearby: false,
      isLoadedComments: false,
    };
    expect(offersData.reducer(state, loadOffer(offer)))
      .toEqual({
        offers: [],
        offer: offer,
        offersFavorite: [],
        offersNearby: [],
        comments: [],
        isDataLoaded: false,
        isOfferLoaded: true,
        isLoadedOffersNearby: false,
        isLoadedComments: false,
      });
  });
  it('should load offersFavorite', () => {
    const state = {
      offers: [],
      offer: defaultOffer,
      offersFavorite: [],
      offersNearby: [],
      comments: [],
      isDataLoaded: false,
      isOfferLoaded: false,
      isLoadedOffersNearby: false,
      isLoadedComments: false,
    };
    expect(offersData.reducer(state, loadOffersFavorite(offers)))
      .toEqual({
        offers: [],
        offer: defaultOffer,
        offersFavorite: offers,
        offersNearby: [],
        comments: [],
        isDataLoaded: false,
        isOfferLoaded: false,
        isLoadedOffersNearby: false,
        isLoadedComments: false,
      });
  });
  it('should load offersNearby', () => {
    const state = {
      offers: [],
      offer: defaultOffer,
      offersFavorite: [],
      offersNearby: [],
      comments: [],
      isDataLoaded: false,
      isOfferLoaded: false,
      isLoadedOffersNearby: false,
      isLoadedComments: false,
    };
    expect(offersData.reducer(state, loadOffersNearby(offers)))
      .toEqual({
        offers: [],
        offer: defaultOffer,
        offersFavorite: [],
        offersNearby: offers,
        comments: [],
        isDataLoaded: false,
        isOfferLoaded: false,
        isLoadedOffersNearby: true,
        isLoadedComments: false,
      });
  });
  it('should load comments', () => {
    const state = {
      offers: [],
      offer: defaultOffer,
      offersFavorite: [],
      offersNearby: [],
      comments: [],
      isDataLoaded: false,
      isOfferLoaded: false,
      isLoadedOffersNearby: false,
      isLoadedComments: false,
    };
    expect(offersData.reducer(state,  loadComments(comments)))
      .toEqual({
        offers: [],
        offer: defaultOffer,
        offersFavorite: [],
        offersNearby: [],
        comments: comments,
        isDataLoaded: false,
        isOfferLoaded: false,
        isLoadedOffersNearby: false,
        isLoadedComments: true,
      });
  });
  it('should reset comments', () => {
    const state = {
      offers: [],
      offer: defaultOffer,
      offersFavorite: [],
      offersNearby: [],
      comments: [],
      isDataLoaded: false,
      isOfferLoaded: false,
      isLoadedOffersNearby: false,
      isLoadedComments: false,
    };
    expect(offersData.reducer(state, resetComments()))
      .toEqual({
        offers: [],
        offer: defaultOffer,
        offersFavorite: [],
        offersNearby: [],
        comments: [],
        isDataLoaded: false,
        isOfferLoaded: false,
        isLoadedOffersNearby: false,
        isLoadedComments: false,
      });
  });

  it('should update favorites', () => {
    const offerFirst = makeFakeOffer();
    const offerSecond = makeFakeOffer();

    const state = {
      offers: [offerFirst, offerSecond],
      offer: offerFirst,
      offersFavorite: [offerFirst, offerSecond],
      offersNearby: [offerFirst, offerSecond],
      comments: [],
      isDataLoaded: false,
      isOfferLoaded: false,
      isLoadedOffersNearby: false,
      isLoadedComments: false,
    };
    expect(offersData.reducer(state, updateFavorites(offerFirst)))
      .toEqual({
        offers: [offerFirst, offerSecond],
        offer: offerFirst,
        offersFavorite: [offerFirst, offerSecond],
        offersNearby: [offerFirst, offerSecond],
        comments: [],
        isDataLoaded: false,
        isOfferLoaded: false,
        isLoadedOffersNearby: false,
        isLoadedComments: false,
      });
  });
});
