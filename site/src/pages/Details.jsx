import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Details() {
  const [product, setProduct] = useState(null);

  const params = useParams();

  console.log(params.pid);

  useEffect(() => {
    axios
      .get(`https://65489546dd8ebcd4ab232d5f.mockapi.io/products/${params.pid}`)
      .then((response) => {
        console.log(response);
        if (response.status == 200) {
          setProduct(response.data);
        }
      });
  }, []);

  if (product === null) {
    return (
      <div className="spinner-border text-danger" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  return (
    <>
      {product !== null ? (
        <div>{product.name}</div>
      ) : (
        <p className="alert alert-danger">No product found</p>
      )}
    </>
  );
}

export default Details;
