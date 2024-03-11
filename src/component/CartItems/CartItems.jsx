import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import { Col, Container, Image, Row } from "react-bootstrap";
import { IoMdRemoveCircleOutline } from "react-icons/io";

const CartItems = () => {
    const { all_product, cartItems, removeFromCart } = useContext(ShopContext);
    
    return (
        <Container>
            <Row>
                {all_product.map((product) => {
                    if (cartItems[product.id] >0) {
                        return (
                            <Col ms={2} key={product.id}>
                                <div>
                                    <Image src={product.image} alt={product.name} />
                                    <p>{product.name}</p>
                                    <IoMdRemoveCircleOutline
                                        onClick={() => {
                                            removeFromCart(product.id); // Pass product id to removeFromCart
                                        }}
                                    />
                                    <hr />
                                </div>
                            </Col>
                        );
                    }
                    return null;
                })}
            </Row>
        </Container>
    );
};

export default CartItems;
