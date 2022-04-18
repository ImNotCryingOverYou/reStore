import React from 'react'
import { connect } from 'react-redux'
import './cart-page.css'
import {
    bookAddedToCart,
    bookRemovedFromCart,
    allBooksRemovedFromCart
} from '../../actions'

const CartPage = ({ items, total, onIncrease, onDecrease, onDelete }) => {
    const renderRow = (item) => {
        const { id, title, count, total, coverImage, bookPrice } = item;

        return (
            <div className='cart-item' key={id}>
                <div className="col-md-3">
                    <img src={coverImage} alt="cool" height="230px" width="150px" />
                </div>
                <div className="col-md-4">
                    <h3>{title}</h3>
                    <p className="lead fw-bold">
                        {count} X  ${bookPrice} = ${total}
                    </p>
                    <button
                        onClick={() => onIncrease(id)}
                        className="btn btn-outline-dark">
                        <i className="fa fa-plus-circle" />
                    </button>
                    <button
                        onClick={() => onDecrease(id)}
                        className="btn btn-outline-dark">
                        <i className="fa fa-minus-circle" />
                    </button>
                    <button
                        onClick={() => onDelete(id)}
                        className="btn btn-outline-dark">
                        <i className="fa fa-trash-o" />
                    </button>
                </div>
            </div>
        )
    }


    return (
        <div className='wrapper'>
            {items.map(renderRow)}
        </div>
    )
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => {
    return {
        items: cartItems,
        total: orderTotal
    }
}

const mapDispatchToProps = {
    onIncrease: bookAddedToCart,
    onDecrease: bookRemovedFromCart,
    onDelete: allBooksRemovedFromCart
}
export default connect(mapStateToProps, mapDispatchToProps)(CartPage);