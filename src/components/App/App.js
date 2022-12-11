import { Route, Switch } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import PageNotFound from '../PageNotFound/PageNotFound';
function App() {
  return (
    <div className='page'>
      <Switch>
        <Route exact path='/'>
          <Main
          />
        </Route>
        <Route path='*'>
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  )
}

export default App;