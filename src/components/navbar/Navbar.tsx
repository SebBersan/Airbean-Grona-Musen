import "./Navbar.scss";
import Hamburger from "hamburger-react";

import { BsFillHandbagFill } from "react-icons/bs";

// få tag i cart.antal för varje o plussa ihop

const Navbar = ({ handleBurgerMenu, cart, handleCartModal }) => {
  console.log("navbarcarttttt", cart);

  const numberOfItems = cart.map((item) => {
    return item.antal;
  });

  // if (cart.length > 0) {
  //   const total = numberOfItems.reduce((acc, current) => acc + current);
  // }

  // const numberOfItems = cart.map((item) => {
  //   return item.price;
  // });
  // const total = priceArray.reduce((acc, current) => acc + current);
  // console.log("ttotal:", total);

  // console.log("jihaaa", numberOfItems);

  const number = numberOfItems.length;

  // console.log(numberOfItems.length);

  return (
    <nav className="navbar">
      <section className="navbar__burger-wrapper" onClick={handleBurgerMenu}>
        <Hamburger className="navbar__burger" />
      </section>
      <section className="navbar__basket" onClick={handleCartModal}>
        <section className="navbar__cart-count">{number}</section>
        <section className="navbar__icon-wrapper">
          <BsFillHandbagFill className="navbar__icon" />
        </section>
      </section>
    </nav>
  );
};

export default Navbar;
