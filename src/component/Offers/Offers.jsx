import React from 'react'
import { Container, Row, Col, Button, Image } from 'react-bootstrap'
import Offers1 from '../Assets/Offers1.jpg'

const Offers = () => {
  return (
    <div>
      <hr/>
      <Container>
      {/* <h1 className='text-center mt-2'>We Offers For You</h1> */}
    
        <Row className='justify-content-center' >
            <Col xs={10} className='d-flex justify-content-center' style={{backgroundColor:'#ffb6c1'}} >
            <Col md={6} className='d-flex justify-content-center align-items-center'>
            <div><h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <Button>Check Now</Button></div>
            </Col>
            <Col md={6}>
            <Image style={{height:'300px',width:'100%' }} src={Offers1} alt='product_7'></Image>
            </Col>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Offers
