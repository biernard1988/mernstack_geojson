import React, { useState, useEffect } from "react";
import axios from "axios";

function ListProperties() {
  const [propers, setPropers] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/properties")
      .then((response) => {
        console.log(response.data);
        setPropers(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {!propers ? (
        <p>Loading...</p>
      ) : (
        <div className="propertiesCard">
          {propers.map((prop) => (
            <div key={prop._id} className="card">
              <h1>{prop.title}</h1>
              <p>Owner: {prop.owner.name}</p>
              <h4>Price: {prop.price}$</h4>
              <h4>Area²: {prop.area}</h4>
              <h4>Bedrooms: {prop.bedrooms}</h4>
              <img src={prop.images} alt="" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ListProperties;
