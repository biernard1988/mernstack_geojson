import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function OneProperty() {
  const [propers, setPropers] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/properties/${id}`)
      .then((response) => {
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
          <div className="card">
            <h1>{propers.title}</h1>
            <p>Owner: {propers.owner.name}</p>
            <p>Email: {propers.owner.email}</p>
            <p>Phone: {propers.owner.phoneNumber}</p>
            <h4>Price: {propers.price}$</h4>
            <h4>Area²: {propers.area}</h4>
            <h4>Bedrooms: {propers.bedrooms}</h4>
            <img src={propers.images} alt="" />
          </div>
        </div>
      )}
    </div>
  );
}

export default OneProperty;
