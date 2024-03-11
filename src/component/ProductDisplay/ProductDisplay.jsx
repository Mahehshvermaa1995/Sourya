import React, { useContext } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { ShopContext } from "../../context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  return (
    <Container>
      <Row>
        <Col md={6}>
          <Row>
            <Col md={2} className="me-3">
              <ul className="list-group list-group-flush" style={{ listStyle: "none" }}>
                {[...Array(4)].map((_, index) => (
                  <li key={index}>
                    <img
                      className="list-group-item p-2 mt-1"
                      style={{ width: "100px", height: "100px" }}
                      src={product.image}
                      alt=""
                    />
                  </li>
                ))}
              </ul>
            </Col>
            <Col md={9}>
              <div className="picZoomer">
                <img className="img-fluid" src={product.image} alt={product.name} />
              </div>
            </Col>
          </Row>
        </Col>
        <Col md={6}>
          <div>
            <h1>{product.name}</h1>
            <div>
              <div>
                <span>
                  M.R.P. : <i className="fa fa-inr"></i> <del>1399</del>
                </span>
                <br />
                <span>
                  M.R.P. : <i className="fa fa-inr"></i>
                  {product.price}
                </span>
              </div>
              <div>
                {/* Add Quantity functionality can be added here */}
              </div>
              <div>
                <span>Description About this product:-</span>
                <p>
                  {product.description}
                </p>
              </div>
              <form action="" method="post" acceptCharset="utf-8">
                <ul></ul>
                <div className="_p-qty-and-cart">
                  <div className="_p-add-cart">
                    <Button className="btn-primary me-3" tabIndex="0">
                      <i className="fa fa-shopping-cart"></i> Buy Now
                    </Button>
                    <Button onClick={() => addToCart(product.id)} className="btn-success" tabIndex="0">
                      <i className="fa fa-shopping-cart"></i> Add to Cart
                    </Button>
                    {/* Hidden inputs for additional data */}
                    <input type="hidden" name="pid" value={product.id} />
                    <input type="hidden" name="price" value={product.price} />
                    <input type="hidden" name="url" value={product.url} />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDisplay;
