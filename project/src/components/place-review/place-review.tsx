import { paintRating } from '../../common';
import {Review} from '../../types/review';


type ReviewProps = {
  review: Review;
}

function PlaceReview ({review}: ReviewProps): JSX.Element {
  const {user, comment, rating, date} = review;

  const month = new Date(date).toLocaleString('en-us', { month: 'short' });
  const year = new Date(date).getFullYear();
  const argumentDate = `${year}-${new Date(date).getMonth()}-${new Date(date).getDate()}`;

  return (
    <li className="reviews__item" data-testid="Review">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name" data-testid="UserName">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars" data-testid="Rating">
            <span style={{width: `${paintRating(rating)}%`}}></span>
            <span className="visually-hidden">{rating}</span>
          </div>
        </div>
        <p className="reviews__text" data-testid="Comment">
          {comment}
        </p>
        <time className="reviews__time" dateTime={argumentDate} data-testid="Data">{month} {year}</time>
      </div>
    </li>
  );
}

export default PlaceReview;
