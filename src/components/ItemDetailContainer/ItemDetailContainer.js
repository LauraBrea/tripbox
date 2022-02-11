import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { requestData } from "../Data/requestData";
import { ItemDetail } from "./ItemDetail/ItemDetail.js";
import { Loader } from "../Loader/Loader";
import "./ItemDetailContainer.css";


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

  return (
      <div >
        {loading ? <Loader /> : <ItemDetail {...item}/> } 
      </div>
)
};
