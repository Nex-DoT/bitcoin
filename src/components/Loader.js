import React from 'react';
//loader
import Loading from "../gif/Loading.gif"
// Gif
import style from "../style/gif.module.css"
const Loader = () => {
    return (
        <div className={style.Loader}>
                <img className={style.loader} src={Loading} alt="" />
        </div>
    );
};

export default Loader;