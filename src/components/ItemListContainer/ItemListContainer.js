import React,{useEffect,useState} from 'react';
import { stock } from '../BaseDatosItems/stock';
import { ItemList } from './ItemList/ItemList.js';
import './ItemListContainer.css';


export const pedirDatos = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(stock)
        }, 2500)
    })
}

export const ItemListContainer = () => {
    
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect( () => {
        setLoading(true)

        pedirDatos()
            .then((res) => {
                setItems( res )
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
               setLoading(false)
            })

    }, [])

    return <div className="itemListContainer">
                <section>
                    <h1>Descubrí Tripbox</h1>
                    <p>Tripbox es una forma diferente de vivir emociones y experiencias únicas. <br></br> Vivilo. Disfrutá. Regalá!</p>
                </section>
                {loading ? <h2 className='loading'>Cargando...</h2> : <ItemList items={items}/> } 
            </div>
}


