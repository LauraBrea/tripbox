import React,{useEffect,useState} from 'react';
import './ItemListContainer.css';
import { ItemList } from './ItemList/ItemList.js';


export const ItemListContainer = ({greeting}) => {

    const getItems = () =>{
        return new Promise ((resolve) =>{

            setTimeout(()=> resolve(
            [{id:1, 
            img: 'https://images.unsplash.com/photo-1639502153551-2ea0443fcf0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=912&q=80',
            name: 'Staycation Anselmo', 
            category:'Bienestar',
            description: 'Accedé a un hotel de lujo durante todo un día y escapá de la rutina.', 
            price:'$8600'},
            {
            id:2, 
            img: 'https://images.unsplash.com/photo-1643133277936-9f93d8792522?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            name: 'Big Pons Restó', 
            category:'Gastronomía',
            description: 'Cocina de alta calidad en un ambiente sumamante agradable y familiar.', 
            price:'$3500'},
            {
            id:3, 
            img: 'https://images.unsplash.com/photo-1558347718-b45a32c31c03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            name: 'Angostura Resort', 
            category:'Escapadas',
            description: 'Una escapada ideal para desconectarte entre la montaña y el lago.', 
            price:'$28900'},
            {id:4, 
            img: 'https://images.unsplash.com/photo-1631839686574-2497d4b71873?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
            name: 'Una noche francesa', 
            category:'Escapadas',
            description: 'Un antiguo edificio de 1910, convertido en un hotel boutique urbano.', 
            price:'$11900'}
            ]

            ),2000)
        })
    }

    const [items, setItems] = useState([]);

    useEffect(()=>{
        getItems().then(data =>{
            setItems(data)})
    },[])


    return <div className="itemListContainer">
                <section>
                    {greeting}

                    <h1>Descubrí Tripbox</h1>
                    <p>Tripbox es una forma diferente de vivir emociones y experiencias únicas. <br></br> Sumate a la experiencia!</p>

                </section>

                <ItemList items={items}/>   
            </div>
}