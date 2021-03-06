import {Link} from 'react-router-dom';
import {AppRoute} from '../../consts';
import {LogoType} from '../../settings';

function LogoHeader(): JSX.Element {
  return (
    <Link to={AppRoute.Root} className="header__logo-link" >
      <img className="header__logo"
        src="img/logo.svg"
        alt="6 cities logo"
        width={LogoType.Header.Width}
        height={LogoType.Header.Height}
      />
    </Link>
  );
}

export default LogoHeader;
