import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="text-center text-lg-start text-dark" style={{ backgroundColor: '#ECEFF1' }}>
      <section className="d-flex justify-content-between p-4 text-white" style={{ backgroundColor: '#086cba' }}>
        <div className="me-5">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a href="/" className="text-white me-4"><FaFacebookF /></a>
          <a href="/" className="text-white me-4"><FaTwitter /></a>
          <a href="/" className="text-white me-4"><FaGoogle /></a>
          <a href="/" className="text-white me-4"><FaInstagram /></a>
          <a href="/" className="text-white me-4"><FaLinkedin /></a>
          <a href="/" className="text-white me-4"><FaGithub /></a>
        </div>
      </section>
      <section>
        <Container className="text-center text-md-start mt-5">
          <Row className="mt-3">
            <Col md={3} lg={4} xl={3} mx="auto" mb="4">
              <h6 className="text-uppercase fw-bold"> Menalwell Technologies</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#086cba', height: '2px' }} />
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit , consectetur 
              </p>
            </Col>
            <Col md={2} lg={2} xl={2} mx="auto" mb="4">
              <h6 className="text-uppercase fw-bold">Products</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#086cba', height: '2px' }} />
              <p><a href="#!" className="text-dark">MDBootstrap</a></p>
              <p><a href="#!" className="text-dark">MDWordPress</a></p>
              <p><a href="#!" className="text-dark">BrandFlow</a></p>
              <p><a href="#!" className="text-dark">Bootstrap Angular</a></p>
            </Col>
            <Col md={3} lg={2} xl={2} mx="auto" mb="4">
              <h6 className="text-uppercase fw-bold">Useful links</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
              <p><a href="#!" className="text-dark">Your Account</a></p>
              <p><a href="#!" className="text-dark">Become an Affiliate</a></p>
              <p><a href="#!" className="text-dark">Shipping Rates</a></p>
              <p><a href="#!" className="text-dark">Help</a></p>
            </Col>
            <Col md={4} lg={3} xl={3} mx="auto" mb-md-0 mb="4">
              <h6 className="text-uppercase fw-bold">Contact</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
              <p><i className="fas fa-home mr-3"></i> A-28 Noida Sector 04</p>
              <p><i className="fas fa-envelope mr-3"></i> info@example.com</p>
              <p><i className="fas fa-phone mr-3"></i> + 5040405000</p>
              <p><i className="fas fa-print mr-3"></i> + 8050505050</p>
            </Col>
          </Row>
        </Container>
      </section>
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright:
        <a className="text-dark" href="https://Menalwell.com/">Menalwell Technologies Pvt Ltd</a>
      </div>
    </footer>
  );
};

export default Footer;
