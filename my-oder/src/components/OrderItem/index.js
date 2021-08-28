import React, { Component } from 'react';
import './style.css'

class OrderItem extends Component {
    render() {
        return (
            <div className='orderItem'>
                <div className='oderItem__picContainer--red'>
                    <img className='oderItem__pic'></img>
                </div>
                <div className='oderItem__content'>
                    <div className='oderItem__product'>Product Name</div>
                    <div className='oderItem__shop'>Shop Name</div>
                    <div>
                        <div className='oderItem__price'>13</div>
                        <div><button className='oderItem__btn 
                        oderItem__btn--red'>Comment</button></div>
                    </div>

                </div>
                
            </div>
        );
    }
}

export default OrderItem;