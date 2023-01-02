import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { useState, } from 'react';
import './App.css';
import Main from '../Main/Main';
import PageNotFound from '../PageNotFound/PageNotFound';
import Catalog from '../Catalog/Catalog';
import Catalog_3 from '../Catalog/Catalog_3';
import Catalog_2 from '../Catalog/Catalog_2'
import Emailjs from '../Emailjs/Emailjs';
import Emailjscalc from '../Emailjscalc/Emailjscalc';
import Portfolio from '../Portfolio/Portfolio';
import { ImagePopup } from '../ImagePopup/ImagePopup';
import Contacts from '../Contacts/Contacts';
function App() {
  const [isOrderbuyOpen, sethandleOrderbuyOpen] = useState(false);
  const [isCalcbuyOpen, sethandleCalcbuyOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [selectedCar, setSelectedCar] = useState([]);
  const [selectedC, setSelectedC] = useState([]);
  const [isImagePopup, setImagePopup] = useState(false);

  const closePopupsMessage = () => {
    sethandleOrderbuyOpen(false);
    sethandleCalcbuyOpen(false)
    setImagePopup(false);

  };

  //открытие попапа с картинкой
  const handleCardClick = (card) => {
    setSelectedCard(card);
    setImagePopup(true);
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

  //открытие попапа онлайн записи
  const handleCalcb = (card) => {
    sethandleCalcbuyOpen(true)
    setSelectedC(card);
  }
  return (
    <div className='page'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Main
              onCalcbuy={handleCalcbuy} onCalcb={handleCalcb}
              onOrderbuy={handleOrderbuy}
              cardx={selectedCard} type={'all'}
            />
          </Route>
          <Route exact path='/catalog'>
            <Catalog onOrderbuy={handleOrderbuy}
              cardx={selectedCard} type={'all'} />
          </Route>
          <Route exact path='/catalog_2'>
            <Catalog_2 onOrderbuy={handleOrderbuy}
              cardx={selectedCard} type={'all'} />
          </Route>
          <Route exact path='/catalog_3'>
            <Catalog_3 onCalcbuy={handleCalcbuy} onCalcb={handleCalcb} />
          </Route>
          <Route exact path='/portfolio'>
            <Portfolio
              onCardClick={handleCardClick} type={'all'} />
          </Route>
          <Route exact path='/contacts'>
            <Contacts />
          </Route>
          <Route path='*'>
            <PageNotFound />
          </Route>
        </Switch>
      </BrowserRouter>
      <Emailjs
        isOpen={isOrderbuyOpen}
        onClose={closePopupsMessage}
        card={selectedCard}
      />
      <Emailjscalc
        isOpen={isCalcbuyOpen}
        onClose={closePopupsMessage}
        card={selectedCar}
        cards={selectedC}
      />
      <ImagePopup
        isOpen={isImagePopup}
        onClose={closePopupsMessage}
        card={selectedCard}
      />
    </div>
  )
}

export default App;