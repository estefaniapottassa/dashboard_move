import React from 'react';
import imagenFondo from '../assets/images/zapatillas_nike_AirMax90.JPG'
import { useState, useEffect } from "react";


function LastProductInDb(){

    const [lastProduct, setLastProduct] = useState(["0"]);

    useEffect(() => {
      async function getLastProduct() {
        const response = await fetch('http://localhost:3000/api/products');
        const data = await response.json();
        setLastProduct(data.productsApi[data.productsApi.length - 1])
      }
      getLastProduct()
    }, [])

    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Last product in Data Base</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt=" Star Wars - Mandalorian "/>
                    </div>
                    <h1>{lastProduct.name}</h1>
                    <p>{lastProduct.description}</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View product detail</a>
                </div>
            </div>
        </div>
    )
}

export default LastProductInDb;
