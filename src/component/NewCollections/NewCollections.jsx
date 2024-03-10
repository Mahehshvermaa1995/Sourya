import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import new_collections from '../Assets/new_collections'
    import Item from '../Item/Item';

const NewCollections = () => {
  return (
    <div>
       <h1 className="text-center">POPULAR IN SKIN</h1>
      <hr />
      <Container>
        <Row>
        {new_collections.map((item, i) => {
              return (
          <Col md={3} className='mt-2'>
           
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
    </div>
  )
}

export default NewCollections
