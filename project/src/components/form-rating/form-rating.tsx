import { v4 as uuidv4 } from 'uuid';
import { ratingStars } from '../../consts';
import FormRatingStar from '../form-rating-star/form-rating-star';

export default function FormRating(): JSX.Element {

  return (
    <div className="reviews__rating-form form__rating">
      {ratingStars.map(({ stars, title }) => (
        <FormRatingStar key={uuidv4()} stars={stars} title={title} />
      ))}
    </div>
  );
}


