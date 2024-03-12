// ShopContext.js

import React, { createContext, useState } from "react";
import all_product from '../component/Assets/all_product';

export const ShopContext = createContext(null);

const getDefaultCard = () => {
    let cart = {};
    for (let index = 0; index < all_product.length; index++) {
        cart[all_product[index].id] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCard());

    const addToCart = (itemId) => {
        setCartItems(prev => ({ ...prev,[itemId]: prev[itemId]+1 }));
    }

    const removeFromCart = (itemId) => {
        if (cartItems[itemId] > 0) {
            setCartItems(prev => ({ ...prev, [itemId]: prev[itemId]-1 }));
        }
    }

    const contextValue = { all_product, cartItems, addToCart, removeFromCart };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;
