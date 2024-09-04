import "../cssFiles/cart.css";
import { moneyFormat } from "../util/formattingMoney";
function CartItem({
    name,
    quantity,
    price,
    onIncrease,
    onDecrease,
  }){
    
    return(
        <li className="cart-item">
      <p>
        {name} - {quantity} x {moneyFormat.format(price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={onDecrease}>-</button>
        <span>{quantity}</span>
        <button onClick={onIncrease}>+</button>
      </p>
    </li>
    )
}

export default CartItem;


