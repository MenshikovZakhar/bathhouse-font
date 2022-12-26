import { Route, Switch } from 'react-router-dom';
import { useState, } from 'react';
import './App.css';
import Main from '../Main/Main';
import PageNotFound from '../PageNotFound/PageNotFound';
import Catalog from '../Catalog/Catalog';
import Catalog_3 from '../Catalog/Catalog_3';
import Catalog_4 from '../Catalog/Catalog_4';
import Catalog_5 from '../Catalog/Catalog_5';
import Emailjs from '../Emailjs/Emailjs';
function App() {
  const [isOrderbuyOpen, sethandleOrderbuyOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const closePopupsMessage = () => {
    sethandleOrderbuyOpen(false);
  };

  //открытие попапа онлайн записи
  const handleOrderbuy = (card) => {
    setSelectedCard(card);
    sethandleOrderbuyOpen(true)
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
          <Catalog_3 />
        </Route>
        <Route exact path='/catalog_4'>
          <Catalog_4 />
        </Route>
        <Route exact path='/catalog_5'>
          <Catalog_5 />
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
    </div>
  )
}

export default App;