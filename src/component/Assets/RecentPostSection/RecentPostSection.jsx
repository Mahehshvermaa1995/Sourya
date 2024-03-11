import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import new_collections from '../new_collections'
    import Item from '../../Item/Item';

function RecentPostSection( props) {
    return (
        
        <Container>
         <h1 className="text-center">Related Products</h1>
      <hr />
        <Row>
        {new_collections.map((item, i) => {
              return (
          <Col md={3} className='mt-2 mb-3'>
           
                <Item
                key={i}
                  id={item.id}
                  name={item.name}
                  image= {item.image}
                  price={item.price}
                />
                </Col>
              );
            })}
          
        </Row>
      </Container>
    );
}

export default RecentPostSection;
