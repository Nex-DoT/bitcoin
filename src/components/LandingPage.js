import React,{useState , useEffect} from 'react';
//api
import { api } from '../service/api';
//Gif
import Loader from './Loader';
//componnet
import Cart from './Cart';
//style
import style from "../style/LandingPage.module.css"

const LandingPage = () => {
    const [data,setData] = useState([])
    const [search , setSearch] = useState("");
    useEffect(()=>{
        const data = async ()=>{
            setData(await api())
        }
        data()
    },[])

    const searchHandler = event=>{
        setSearch(event.target.value)
    }
    const searchCoin = data.filter(item=> item.name.toLowerCase().includes(search.toLowerCase()))
    return (
        <>
            {data.length ?
            <div className={style.Landing}>
                <input type="text" placeholder='Search' value={search} onChange={searchHandler} />
                 <div className={style.map}>
                    {searchCoin.map(item => <Cart key={item.id} data={item}/>)}
                 </div>
            </div>
             :
            <Loader/>
            }

        </>
    );
};

export default LandingPage;