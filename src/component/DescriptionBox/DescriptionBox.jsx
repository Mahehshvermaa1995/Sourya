import React from "react";
import { Card, Container, ListGroup,Row } from "react-bootstrap";


const DescriptionBox = (props) => {
    const { product } = props;
  return (
 <Container >
<Row className="mt-3">
<Card>
      <Card.Body>
      
        <Card.Title>{product.productName}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>{product.price}</Card.Text>
      </Card.Body>
      <ListGroup variant="flush">
      
            <div>{product.review}</div>
            {/* <div>{product.rating}</div> */}
          
        
      </ListGroup>
    </Card>
</Row>
    
 </Container>
  );
};

export default DescriptionBox;
