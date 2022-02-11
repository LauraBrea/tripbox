import React,{useEffect,useState} from 'react';
import { requestData } from "../Data/requestData";
import { ItemList } from './ItemList/ItemList.js';
import { Loader } from "../Loader/Loader";
import { useParams } from 'react-router-dom';
import './ItemListContainer.css';


export const ItemListContainer = () => {
    
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)

    const { catId } = useParams ()

    useEffect( () => {
        setLoading(true)

        requestData()
        .then((res) => {
            if (catId) {
                setItems( res.filter((el) => el.category === catId ) )
            } else {
                setItems(res)
            }
        })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
               setLoading(false)
            })

    }, [catId])

    return <div className="itemListContainer">
                <section>
                    <h2 className='titleH2'>Descubrí Tripbox</h2>
                    <p className='subTitle'>Tripbox es una forma diferente de vivir emociones y experiencias únicas.</p>
                    <p className='subTitle'><strong>Vivilo. Disfrutá. Regalá!</strong></p>
                </section>
                {loading ? <Loader /> : <ItemList items={items}/> } 
            </div>
}


