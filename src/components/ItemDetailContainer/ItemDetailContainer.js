import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail/ItemDetail.js";
import { Loader } from "../Loader/Loader";
import "./ItemDetailContainer.css";

import { dataBase } from "../../Firebase/config";
import { doc, getDoc } from "firebase/firestore";

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
  }, [])

  return (
      <div >
        {loading ? <Loader /> : <ItemDetail {...item}/> } 
      </div>
)
};

/*
export const ItemDetailContainer = () => {

  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(false)

  const { itemId } = useParams()

  useEffect(() => {
      setLoading(true)

      requestData()
          .then((res) => {
              setItem( res.find((el) => el.id === Number(itemId)) )
          })
          .finally(() => {
              setLoading(false)
          })
  }, [])
  */