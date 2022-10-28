import { useContext, useState } from 'react';
import MyOrder from '../containers/MyOrder';
import { AppContext } from '../context/AppContext';
import '../styles/Header.scss';
import Menu from './Menu';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);

  const { state } = useContext(AppContext);

  const handleToggle = (e) => {
    e.preventDefault();
    setToggle(!toggle);
  };

  return (
    <nav>
      <img src="" alt="menu" className="menu" />
      <div className="navbar-left">
        <img src="" alt="logo" className="nav-logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>
            julian@example.com
          </li>
          <li
            className="navbar-shopping-cart"
            onClick={() => setToggleOrders(!toggleOrders)}
          >
            <img
              src="https://e7.pngegg.com/pngimages/1008/303/png-clipart-shopping-cart-icon-product-return-shopping-cart-retail-supermarket-thumbnail.png"
              alt="shopping cart"
              width="30"
            />
            <div> {state.cart.length > 0 ? state.cart.length : null} </div>
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrders && <MyOrder />}
    </nav>
  );
};

export default Header;
