import React from 'react';
import './shop-header.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'


const ShopHeader = ({ numItems, total }) => {
    return (

        <header className="shop-header row">

            <Link to="/reStore">
                <div className="logo text-dark" href="dfasd">Книжный магазин</div>
            </Link>

            <Link to="/cart">
                <div className="shopping-cart" href="dasdsad">
                    <i className="cart-icon fa fa-shopping-cart" />
                    {numItems} items (${total})
                </div>
            </Link>

        </header>

    );
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => {
    return {
        numItems: cartItems.length,
        total: orderTotal
    }
}

export default connect(mapStateToProps)(ShopHeader);
