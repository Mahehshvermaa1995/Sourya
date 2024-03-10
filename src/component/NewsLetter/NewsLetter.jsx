import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaLongArrowAltRight } from "react-icons/fa";
import './NewLetters.css'
const NewsLetter = () => {
  return (
    <div>
       <section className="subscribe-area pb-50 pt-70">
      <Container>
        <Row>
          <Col md={4}>
            <div className="subscribe-text mb-15">
              <span>JOIN OUR NEWSLETTER</span>
              <h2>subscribe newsletter</h2>
            </div>
          </Col>
          <Col md={8}>
            <div className="subscribe-wrapper subscribe2-wrapper mb-15">
              <div className="subscribe-form">
              <Row>
            
            <Col xs={5} className='d-flex justify-content-end' >
              <Button variant="primary" type="submit" className="newsletter-button">
                subscribe <FaLongArrowAltRight />
              </Button>
            </Col>
            <Col xs={7}>
              <Form>
                <Form.Control type="email" placeholder="enter your email address" className="newsletter-input" />
              </Form>
            </Col>
          </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    </div>
  )
}

export default NewsLetter
