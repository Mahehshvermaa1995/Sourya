import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Card, Button } from "react-bootstrap"; 
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
   
      <Card className="mb-2">
        
        <Link to={`/product/${props.id}`}>
          <Card.Img variant="top" onClick={window.scrollTo(0,0)} style={{ height: '200px' }} src={props.image} />
        </Link>
        <Card.Body> 
          <Card.Text>{props.name}</Card.Text>
          <Card.Title> Rs.{props.price}</Card.Title>
          <Button variant="primary">Add to Cart</Button> {/* Corrected typo in "Add to Cart" */}
        </Card.Body>
      </Card>
    
  );
};

export default Item;
