import { v4 as uuidv4 } from 'uuid';
import FormRatingStar from '../form-rating-star/form-rating-star';

const ratingStars = [
  { stars: 5, title: 'perfect' },
  { stars: 4, title: 'good' },
  { stars: 3, title: 'not bad' },
  { stars: 2, title: 'badly' },
  { stars: 1, title: 'terribly' },
];

type FormRatingProps = {
  isDisabled: boolean
};

export default function FormRating({isDisabled}: FormRatingProps): JSX.Element {

  return (
    <div className="reviews__rating-form form__rating">
      {ratingStars.map(({ stars, title }) => (
        <FormRatingStar key={uuidv4()} stars={stars} title={title} isDisabled={isDisabled} />
      ))}
    </div>
  );
}


