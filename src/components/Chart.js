import React from 'react';
import ChartRow from './ChartRow';
import { useState, useEffect } from "react";

// let tableRowsData = [
//     {
//         Title: 'Billy Elliot ',
//         Length: '123',
//         Rating: '5',
//         Categories: ['Drama','Comedia'],
//         Awards: 2
//     },
//     {
//         Title: 'Alicia en el país de las maravillas',
//         Length: '142',
//         Rating: '4.8',
//         Categories: ['Drama','Acción','Comedia'],
//         Awards: 3
//     },
    
// ]

function Chart (){

    const [tableRowsData, setTableRowsData] = useState(["algo"]);

    useEffect(() => {
      fetch("http://localhost:3000/api/products", {mode: 'no-cors'})
        .then((res) => res.json())
        .then((data) => {
            setTableRowsData(data.products)
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