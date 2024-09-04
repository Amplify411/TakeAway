
import Header from "../components/Header";
import { cartAction } from "../store/cart-slice";
import { useDispatch, useSelector } from 'react-redux';
import CartItem from "../components/CartItem";
import "../cssFiles/cart.css";
function Cart(){
    const cartItems = useSelector(state=> state.cart.cart)
    console.log(cartItems);
    const dispatch = useDispatch();  
    return(
        <div className="cart">
            <Header />
            <h2>Your Cart</h2>
            <ul>
            { cartItems.map((item)=>{
                return <CartItem
                key={item.id}
                name={item.name}
                quantity={item.quantity}
                price={item.price}
                onIncrease={() => dispatch(cartAction.addToCart(item))}
                onDecrease={() => dispatch(cartAction.removeFromCart(item.id))}
              />
            })}
            </ul>
        </div>
    )
}

export default Cart;