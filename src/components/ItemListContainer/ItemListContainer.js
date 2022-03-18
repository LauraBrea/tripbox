import { useEffect,useState } from 'react';
import { ItemList } from './ItemList/ItemList.js';
import { Loader } from "../Loader/Loader";
import { useParams } from 'react-router-dom';
import { dataBase } from "../../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import './ItemListContainer.css';


export const ItemListContainer = () => {
    
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)

    const { catId } = useParams ()

    useEffect( () => {
        setLoading(true)

        const itemRef = collection(dataBase, 'productos')
        const q = catId ? query(itemRef, where("category", "==", catId)) : itemRef
    
        getDocs(q)
            .then((resp) => {
                setItems( resp.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                }))
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
