import { useParams } from 'react-router-dom';
import RoomProperty from '../../components/room-property/room-property';
import { useAppSelector } from '../../hooks';
import Error from '../error/error';


function Room() {
  const offers = useAppSelector((state) => state.offers);
  const paramsId = Number(useParams().id);
  const test = offers.some((offer)=>offer.id===paramsId);

  if (test) {
    return <RoomProperty /> ;
  }

  return <Error />;
}

export default Room;
