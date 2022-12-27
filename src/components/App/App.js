import { Route, Switch } from 'react-router-dom';
import { useState, } from 'react';
import './App.css';
import Main from '../Main/Main';
import PageNotFound from '../PageNotFound/PageNotFound';
import Catalog from '../Catalog/Catalog';
import Catalog_3 from '../Catalog/Catalog_3';
import Emailjs from '../Emailjs/Emailjs';
import Emailjscalc from '../Emailjscalc/Emailjscalc';
function App() {
  const [isOrderbuyOpen, sethandleOrderbuyOpen] = useState(false);
  const [isCalcbuyOpen, sethandleCalcbuyOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [selectedCar, setSelectedCar] = useState();
  const closePopupsMessage = () => {
    sethandleOrderbuyOpen(false);
    sethandleCalcbuyOpen(false)
  };

  //открытие попапа онлайн записи
  const handleOrderbuy = (card) => {
    setSelectedCard(card);
    sethandleOrderbuyOpen(true)

  }

  //открытие попапа онлайн записи
  const handleCalcbuy = (card) => {
    sethandleCalcbuyOpen(true)
    setSelectedCar(card);
  }
  return (
    <div className='page'>
      <Switch>
        <Route exact path='/'>
          <Main
          />
        </Route>
        <Route exact path='/catalog'>
          <Catalog onOrderbuy={handleOrderbuy}
            cardx={selectedCard} type={'all'} />
        </Route>
        <Route exact path='/catalog_3'>
          <Catalog_3 onCalcbuy={handleCalcbuy} t={selectedCar} />
        </Route>

        <Route path='*'>
          <PageNotFound />
        </Route>
      </Switch>
      <Emailjs
        isOpen={isOrderbuyOpen}
        onClose={closePopupsMessage}
        card={selectedCard}
      />

      <Emailjscalc
        isOpen={isCalcbuyOpen}
        onClose={closePopupsMessage}
        card={selectedCar}
      />
    </div>
  )
}

export default App;