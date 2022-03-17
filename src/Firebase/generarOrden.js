import { collection, writeBatch, getDocs, addDoc, Timestamp, query, where, documentId } from "firebase/firestore"
import { dataBase } from "./config"
import swal from 'sweetalert';

export const generarOrden = async (values, cart, totalCart, setOrderId, deleteCart) => {
    const orden = {
        comprador: values,
        items: cart,
        total: totalCart(),
        fyh: Timestamp.fromDate(new Date())
    } 

    const batch = writeBatch(dataBase);
    const ordersRef = collection(dataBase, "orders");
    const productosRef = collection(dataBase, "productos");
    
    const q = query(productosRef, where(documentId(), 'in', cart.map((el) => el.id)))
    const productos = await getDocs(q)
    const outOfStock = []
    
    productos.docs.forEach((doc) => {
        const item = cart.find((el) => el.id === doc.id)

        if (doc.data().stock >= item.qty) {
            batch.update(doc.ref, {
                stock: doc.data().stock - item.qty
            })
        } else {
            outOfStock.push(item)
        }
    })

    if (outOfStock.length === 0) {
        addDoc(ordersRef, orden)
            .then((doc) => {
                batch.commit()
                setOrderId(doc.id)
                deleteCart()
            })
    } else {
        swal("Ups! algo salió mal...", "Transacción cancelada por falta de stock", {
            buttons: false,
            timer: 2000,
          });
          deleteCart()    }
}

/*
import { collection, writeBatch, getDocs, addDoc, Timestamp, query, where, documentId } from "firebase/firestore"
import { dataBase } from "./config"

import swal from 'sweetalert';

export const generarOrden = async (values, cart, totalCart, setOrderId, deleteCart) => {
    const orden = {
        comprador: values,
        items: cart,
        total: totalCart(),
        fyh: Timestamp.fromDate(new Date())
    } 

    console.log (orden)

    const batch = writeBatch(dataBase);
    const ordersRef = collection(dataBase, "orders");
    const productosRef = collection(dataBase, "productos");

    const stockQuery = query(productosRef, where(documentId(), 'in', cart.map(({ item }) => item.id)));
    const productos = await getDocs(stockQuery);
    const outOfStock = [];


    productos.docs.forEach((document) => {
        const itemUpdate = cart.find(({ item }) => item.id === document.id)

        if (document.data().stock >= itemUpdate.qty) {
            batch.update(document.ref, {
                stock: document.data().stock - itemUpdate.qty
            })
        } else {
            outOfStock.push(itemUpdate);
        }
    })

    if (outOfStock.length === 0) {
        addDoc(ordersRef, orden).then((document) => {
                batch.commit()
                setOrderId(document.id)
                deleteCart()
            })
    } else {
        swal("Ups! algo salió mal...", "Transacción cancelada por falta de stock", {
            buttons: false,
            timer: 2000,
          });
          deleteCart()
    }

}
*/