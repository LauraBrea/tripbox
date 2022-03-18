import React from 'react';
import { Item } from '../Item/Item';
import { Navigate } from 'react-router-dom';
import './Itemlist.css';


export const ItemList=({items}) => {

    if(items.length === 0) { 
		return <Navigate to='/' /> }
   
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
                            price={item.price} 
                            stock={item.stock} 
                            />
                    </div>
                })
            }
    </div>
}
