import React from 'react';
import ChartRow from './ChartRow';
import { useState, useEffect } from "react";

function Chart (){

    const [tableRowsData, setTableRowsData] = useState(["algo"]);

    useEffect(() => {
      fetch("http://localhost:3000/api/products")
        .then((res) => res.json())
        .then((data) => {
            setTableRowsData(data.productsApi)
        })
        .catch((err) => console.log(err));
    }, []); // como segundo parametro le paso un array vacio para que se ejecute solo una vez
    
    return (
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Descripción</th>
                                <th>Marca</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            tableRowsData.map( ( row , i) => {
                                return <ChartRow { ...row} key={i}/>
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;