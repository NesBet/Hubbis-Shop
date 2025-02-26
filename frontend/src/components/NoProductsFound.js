import React from "react";
import { Alert } from "react-bootstrap";

function NoProductsFound() {
  return (
    <Alert variant="info" className="text-center">
      <Alert.Heading>No Products Found</Alert.Heading>
      <p>
        Sorry, we couldn't find any products matching your search criteria. Try
        searching with different keywords or browse our other products.
      </p>
    </Alert>
  );
}

export default NoProductsFound;
