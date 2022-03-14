import { useAppSelector } from '../../hooks';
import { store } from '../../store';
import { getRating } from '../../store/action';

type FormRatingStarProps = {
  stars: number;
  title: string;
};

function FormRatingStar({ stars, title }: FormRatingStarProps) {
  const currentRating = useAppSelector((state) => state.commentRating);

  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={stars}
        id={`${stars}-stars`}
        type="radio"
        onChange={()=>{store.dispatch(getRating(stars));}}
        checked={stars === currentRating}
      />
      <label htmlFor={`${stars}-stars`} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default FormRatingStar;
