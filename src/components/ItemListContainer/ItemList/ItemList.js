import React from 'react';
import { Item } from '../Item/Item';
import './Itemlist.css';


export const ItemList=({items}) => {
   
    return <div>
    {    
        items.map((item) =>{
            return <div key={item.id} className="ListContainer">
                    <Item 
                    id={item.id} 
                    img={item.img} 
                    title={item.name} 
                    categ={item.category} 
                    map={item.map} 
                    descr={item.description}
                    price={item.price} />
            </div>
        })
    }
    </div>
}
