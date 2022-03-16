import {memo} from 'react';
import {Link} from 'react-router-dom';
import {useAppSelector} from '../../hooks';
import {store} from '../../store';
import {changeСity} from '../../store/offers-process/offers-process';

type CityProps = {
  currentCity: string;
}
function City({currentCity}: CityProps): JSX.Element {
  const city = useAppSelector(({OFFERS}) => OFFERS.city);
  const hoverCityClick = () =>  store.dispatch(changeСity(currentCity));

  return (
    <li onClick={hoverCityClick}
      className="locations__item"
    >
      <Link to="" title='offer' className={`locations__item-link tabs__item ${currentCity===city&&'tabs__item--active'}`} >
        <span>{currentCity}</span>
      </Link>
    </li>);
}

export default memo(City);
