import React from 'react'
import './Subtotal.css'
import CurrencyFormat from "react-currency-format";
import { ShoppingBasket } from '@material-ui/icons';
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from './reducer';
function Subtotal() {
    const [{basket}, dispatch]= useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal({basket.length} items): <strong>{`${value}`}</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox"/>This order contains gift
                        </small> 
                    </>
                )}       
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"Rs"}
            />
            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
