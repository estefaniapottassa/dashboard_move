import React from "react";
import { useState, useEffect } from "react";

//const categories = ['running', 'tenis'] 

function  CategoriesInDb() {

  const [categories, setCategories] = useState(["prueba"]);

  useEffect(() => {
   
    fetch("http://localhost:3000/api/products",  {'mode': 'no-cors'})
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.products)
      })
      .catch((err) => console.log(err));
  }, []); // como segundo parametro le paso un array vacio para que se ejecute solo una vez
  

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Categories in Data Base
          </h5>
        </div>

        <div className="card-body">
          <div className="row">
              {categories.map((oneCategory, i) => 
                  <div className="col-lg-6 mb-4"  key={i}>
                    <div className="card bg-info text-white shadow">
                      <div className="card-body"> {oneCategory} </div>
                    </div>
                  </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoriesInDb;
