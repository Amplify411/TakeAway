import {moneyFormat} from "../util/formattingMoney";
import "../cssFiles/meal.css";
function Meal(props){    
    return (
        <ul className="meal">
            {props.data.map(item => 
                <li className="meal-item">
                    <article>
                        <img src={item.image} alt="food-item" />
                        <div>
                            <h3>{item.name}</h3>
                            <p className="meal-item-price">{moneyFormat.format(item.price)}</p>
                            <p className="meal-item-description">{item.description}</p>
                        </div>
                        <p >
                            <button className="meal-item-button" >Add to cart</button>
                        </p>
                    </article>
                </li>)}
        </ul>
    )
}
export default Meal;