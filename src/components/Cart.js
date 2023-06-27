import React from 'react';
//style 
import style from "../style/Cart.module.css"
const Cart = ({data}) => {
    return (
        <>
            <div className={style.cart}>
          <div className={style.title}>
            <img src={data.image} alt="" />  
            <h3>{data.name}</h3>
          </div>

            <p>{data.symbol}</p>
            <h3>${data.current_price}</h3>
            <h3 className={data.market_cap_change_percentage_24h < 0 ? style.red : style.green}>{data.market_cap_change_percentage_24h}</h3>
            <h4>{data.market_cap}</h4>
            </div>
        </>
    );
};

export default Cart;