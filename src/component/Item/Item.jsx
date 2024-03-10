import React from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
const Item = (props) => {
  return (
    <div>
    
      <Card >
      <Link to={`/product/${props.id}`}  ><Card.Img variant="top" style={{ height: '200px' }} src={props.image} /></Link>
        <Card.Body>
          <Card.Text>{props.name}</Card.Text>
          <Card.Title> Rs.{props.price}</Card.Title>
          <Button variant="primary">Add to Card</Button>
        </Card.Body>
      </Card>
     
    </div>
  );
};

export default Item;
