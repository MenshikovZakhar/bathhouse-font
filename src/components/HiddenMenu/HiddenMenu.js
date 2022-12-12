import { NavLink, Link } from 'react-router-dom';
import './HiddenMenu.css';
import logo from '../../images/logo_1.png';
import telegram from '../../images/telegram.svg';
import phone from '../../images/phone.svg';
import whatsapp from '../../images/whatsapp.svg';
function HiddenMenu({ onClickCloseMenu }) {
  return (
    <section className='hidden-menu'>
      <nav className='nav__menu_adapt'>
        <div className='nav-menu__close' onClick={onClickCloseMenu}></div>
        <div className='nav-movie__movie_adapt'>
          <Link to='/' className='header__link'>
            <img className='header__logo-hiddenMenu' src={logo} alt='logo' />
          </Link>
          <Link
            to='/'
            className='nav-movie__link-adapt'
            onClick={onClickCloseMenu}
          >
            Главная
          </Link>
          <NavLink
            to='/catalog'
            className={({ isActive }) =>
              isActive
                ? 'nav-movie__link-adapt active'
                : 'nav-movie__link-adapt'
            }
            onClick={onClickCloseMenu}
          >
            Каталог
          </NavLink>
          <NavLink
            to='/delivery'
            className={({ isActive }) =>
              isActive
                ? 'nav-movie__link-adapt active'
                : 'nav-movie__link-adapt'
            }
            onClick={onClickCloseMenu}
          >
            Доставка
          </NavLink>
          <NavLink
            to='/portfolio'
            className={({ isActive }) =>
              isActive
                ? 'nav-movie__link-adapt active'
                : 'nav-movie__link-adapt'
            }
            onClick={onClickCloseMenu}
          >
            Наши работы
          </NavLink>
          <NavLink
            to='/contacts'
            className={({ isActive }) =>
              isActive
                ? 'nav-movie__link-adapt active'
                : 'nav-movie__link-adapt'
            }
            onClick={onClickCloseMenu}
          >
            Контакты
          </NavLink>
        </div>
        <h1 className="hidden-menu__title">Cвязаться с нами</h1>

        <div className='iqons'>
          <a href="tel:+79514652520">
            <img className='iqons__logo' src={phone} alt='logo' />
          </a>
          <a href="https://wa.me/79514652520" target="_blank" rel="noreferrer">
            <img className='iqons__logo' src={whatsapp} alt='logo' />
          </a>
          <a href="https://t.me/79514652520" target="_blank" rel="noreferrer">
            <img className='iqons__logo' src={telegram} alt='logo' />
          </a>
        </div>
      </nav>
    </section>
  );
};

export default HiddenMenu;