import { Route, Switch } from 'react-router-dom';
import { useState, } from 'react';
import './App.css';
import Main from '../Main/Main';
import PageNotFound from '../PageNotFound/PageNotFound';
import Catalog from '../Catalog/Catalog';
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
            cardx={selectedCard} />
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