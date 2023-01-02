import { YMaps, Map } from '@pbe/react-yandex-maps';
import './Map.css';
const Maps = () => (
  <YMaps>
    <div>
      <Map className='maps' defaultState={{ center: [55.145468, 61.372631], zoom: 18 }} />
    </div>
  </YMaps>
);
export default Maps;

