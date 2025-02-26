import "./CartModalOrderItem.css";
import { AiOutlineDelete } from "react-icons/ai";

const CartModalOrderItem = ({ item }) => {
  return (
    <section className="order-item">
      <section className="order-item__wrapper">
        <h1 className="order-item__type">{item.title}</h1>
        <h1 className="order-item__dots"></h1>
        <section className="order-item__select-wrapper">
          <div className="order-item__btn">-</div>
          <div className="order-item__amount">{item.antal}</div>
          <div className="order-item__btn">+</div>
          <div className="order-item__trash">
            <AiOutlineDelete />
          </div>
        </section>
      </section>
      <p className="order-item__price">{item.price}</p>
    </section>
  );
};

export default CartModalOrderItem;