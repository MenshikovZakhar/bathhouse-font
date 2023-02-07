import { YMaps, Map } from '@pbe/react-yandex-maps';
import './Map.css';
const Maps = () => (
  <YMaps>
    <div>
      <Map className='maps' defaultState={{ center: [55.09338, 61.387085], zoom: 16 }} />
    </div>
  </YMaps>
);
export default Maps;

