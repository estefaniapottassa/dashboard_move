import React from 'react';
import SmallCard from './SmallCard';


let totalProducts = {
    title: 'Total Products',
    color: 'primary', 
    cuantity: 21,
    icon: 'fa-clipboard-list'
}


let totalUsers = {
    title:' Total users', 
    color:'success', 
    cuantity: '79',
    icon:'fas fa-user'
}


let totalCategories = {
    title:'Total Categories' ,
    color:'warning',
    cuantity:'49',
    icon:'fa-clipboard-list'
}

let cartProps = [totalProducts, totalUsers, totalCategories];

function ContentRowTotals(){
    return (
    
        <div className="row">
            
            {cartProps.map( (total, i) => {

                return <SmallCard {...total} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowTotals;