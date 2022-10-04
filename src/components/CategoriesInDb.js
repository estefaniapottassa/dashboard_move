import React from "react";
import { useState, useEffect } from "react";


function  CategoriesInDb() {

  const [categories, setCategories] = useState(["prueba"]);

    useEffect(() => {
      async function fetchCategories() {
        const response = await fetch('http://localhost:3000/api/products/brands');
        const data = await response.json();
        setCategories(data.brands)
      }
      fetchCategories()
    })


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
                      <div className="card-body"> {oneCategory.name} </div>
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
