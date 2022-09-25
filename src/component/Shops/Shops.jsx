import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
import './Shops.css';

const Shops = () => {

    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        const getCart = [...cart, product]
        setCart(getCart)
    }

    return (
        <div className="shop-container">
            <div className='products-container'>
                {
                    products.map(product => <Product product={product} key={product.id} handleAddToCart={handleAddToCart} />)
                }
            </div>
            <div className="cart-container">
                <h4>Carts container ...</h4>
                <h3>Product {cart.length}</h3>
            </div>
        </div>
    );
};

export default Shops;