import React from "react";
import data_product from "../Assets/data";
import Item from "../Item/Item";
import { Col, Container, Row } from "react-bootstrap";

const Popular = () => {
  return (
    <div>
      <h1 className="text-center">POPULAR IN SKIN</h1>
      <hr />
      <Container>
        <Row>
          {data_product.map((item, i) => (
            <Col key={i} md={3} className="mt-2">
              <Item
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Popular;
