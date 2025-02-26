import React from "react";
import { Card } from "react-bootstrap";
import "../index.css";
import Rating from "./Rating";
import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    <Card className="my-3 rounded h-100">
      {" "}
      {/* Add h-100 class */}
      <Link to={`/product/${product._id}`}>
        <Card.Img
          src={product.image}
          style={{ height: "200px", objectFit: "cover" }} // Fixed height for images
        />
      </Link>
      <Card.Body className="d-flex flex-column">
        {" "}
        {/* Add flex classes */}
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div" className="product-title">
            {" "}
            {/* Add custom class */}
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <div className="my-2">
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
              color={"#f8e825"}
            />
          </div>
        </Card.Text>
        <Card.Text as="h4" className="mt-auto">
          {" "}
          {/* Push price to bottom */}${product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;
