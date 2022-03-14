import CommentForm from '../form/form';
import { v4 as uuidv4 } from 'uuid';
import PlaceReviewList from '../place-review-list/place-review-list';
import { Offer } from '../../types/offer';
import { Review } from '../../types/review';
import { correctType, paintRating } from '../../common';
import { AuthorizationStatus } from '../../consts';
import { useAppSelector } from '../../hooks';
import { store } from '../../store';
import { fetchCommentAction } from '../../store/api-actions';
import { useEffect } from 'react';

type RoomCardProps = {
  offer: Offer;
  currentId: number
};

function RoomCard({offer, currentId}: RoomCardProps): JSX.Element {
  const {images, price, rating, title, type, description, bedrooms, maxAdults, host, isPremium, goods} = offer;
  const imagesForRender = images.slice(0, 6);

  const getPropertyMark = () => isPremium? <div className="property__mark"><span>Premium</span></div> : '';

  const currentAuthorizationStatus = useAppSelector((state) => state.authorizationStatus);

  useEffect(() => {
    store.dispatch(fetchCommentAction(currentId));
  }, [currentId]);

  const reviews: Review[] = useAppSelector((state) => state.comments);

  return (
    <>
      <div className="property__gallery-container container">
        <div className="property__gallery">
          {
            imagesForRender.map((image) => (
              <div key={uuidv4()} className="property__image-wrapper">
                <img className="property__image" src={image} alt="Studio" />
              </div>
            ))
          }
        </div>
      </div>
      <div className="property__container container">
        <div className="property__wrapper">
          {getPropertyMark()}
          <div className="property__name-wrapper">
            <h1 className="property__name">
              {title}
            </h1>
            <button className="property__bookmark-button button" type="button">
              <svg className="property__bookmark-icon" width="31" height="33">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="property__rating rating">
            <div className="property__stars rating__stars">
              <span style={{width: `${paintRating(rating)}%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="property__rating-value rating__value">{rating}</span>
          </div>
          <ul className="property__features">
            <li className="property__feature property__feature--entire">
              {correctType(type)}
            </li>
            <li className="property__feature property__feature--bedrooms">
              {bedrooms} Bedrooms
            </li>
            <li className="property__feature property__feature--adults">
          Max {maxAdults} adults
            </li>
          </ul>
          <div className="property__price">
            <b className="property__price-value">&euro;{price}</b>
            <span className="property__price-text">&nbsp;night</span>
          </div>
          <div className="property__inside">
            <h2 className="property__inside-title">What&apos;s inside</h2>
            <ul className="property__inside-list">
              {
                goods.map((good) => (
                  <li key={uuidv4()} className="property__inside-item">
                    {good}
                  </li>
                ))
              }
            </ul>
          </div>
          <div className="property__host">
            <h2 className="property__host-title">Meet the host</h2>
            <div className="property__host-user user">
              <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                <img className="property__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar"/>
              </div>
              <span className="property__user-name">
                {host.name}
              </span>
              <span className="property__user-status">
                {host.isPro&&'Pro'}
              </span>
            </div>
            <div className="property__description">
              <p className="property__text">
                {description}
              </p>
            </div>
          </div>
          <section className="property__reviews reviews">
            <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
            <PlaceReviewList reviews={reviews}/>
            {currentAuthorizationStatus===AuthorizationStatus.Auth&&<CommentForm currentId={currentId}/>}
          </section>
        </div>
      </div>
    </>
  );
}

export default RoomCard;
