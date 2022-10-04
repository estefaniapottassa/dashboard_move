import React from 'react';
import SmallCard from './SmallCard';
import { useState, useEffect } from "react";

function ContentRowTotals(){

    const [countProducts, setCountproducts] = useState(["0"]);

    useEffect(() => {
      async function getCountProducts() {
        const response = await fetch('http://localhost:3000/api/products');
        const data = await response.json();
        setCountproducts(data.meta.count)
      }
      getCountProducts()
    }, [])
    
    const [countUsers, setCountUsers] = useState(["0"]);

    useEffect(() => {
      async function getCountUsers() {
        const response = await fetch('http://localhost:3000/api/users');
        const data = await response.json();
        setCountUsers(data.count)
      }
      getCountUsers()
    }, [])

    const [countBrands, setCountBrands] = useState(["0"]);

    useEffect(() => {
      async function getCountBrands() {
        const response = await fetch('http://localhost:3000/api/products/brands');
        const data = await response.json();
        setCountBrands(data.count)
      }
      getCountBrands()
    }, [])

    let cartProps = [{
        title: 'Total Products',
        color: 'primary', 
        cuantity: countProducts,
        icon: 'fa-clipboard-list'
    },{
        title:' Total users', 
        color:'success', 
        cuantity: countUsers,
        icon:'fas fa-user'
    }, {
        title: 'Total Brands',
        color: 'primary', 
        cuantity: countBrands,
        icon: 'fa-clipboard-list', 
    }]

    return (
        <div className="row">
            {cartProps.map( (total, i) => {
                return <SmallCard {...total} key={i}/>
            })}
        </div>
    )
}

export default ContentRowTotals;