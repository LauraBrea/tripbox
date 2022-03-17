import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail/ItemDetail.js";
import { Loader } from "../Loader/Loader";
import { dataBase } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import "./ItemDetailContainer.css";

export const ItemDetailContainer = () => {

  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(false)

  const { itemId } = useParams()

  useEffect(() => {
      setLoading(true)
    
      const itemDocRef = doc(dataBase, 'productos', itemId);
        
      getDoc(itemDocRef)
            .then ((doc) => {
              setItem ({id: doc.id, ...doc.data()})
            })
            .finally(() => {
                setLoading(false)
            })
  }, [itemId])

  return (
      <div >
        {loading ? <Loader /> : <ItemDetail {...item}/> } 
      </div>
)
};
