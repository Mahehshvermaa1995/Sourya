import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Item from '../component/Item/Item';
import { Col, Container, Row } from 'react-bootstrap';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div>
      <Container>
        <Row>
          {all_product.map((item, i) => {
            if (props.category === item.category) {
              return (
                <Col md={3} className='mt-2' key={i}>
                  <Item
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    price={item.price}
                  />
                </Col>
              );
            } else {
              return null;
            }
          })}
        </Row>
      </Container>
    </div>
  );
};

export default ShopCategory;
