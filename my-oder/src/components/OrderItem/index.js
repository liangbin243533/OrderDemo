import React, { Component } from "react";
import "./style.css"

class OrderItem extends Component {
    render() {
        const { shop, product, price, picture } = this.props.data; 
        return (
            <div className="orderItem">
                <div className="oderItem__picContainer--red">
                    <img className="oderItem__pic" ></img>
                </div>
                <div className="oderItem__content">
                    <div className="oderItem__product">{product}</div>
                    <div className="oderItem__shop">{shop}</div>
                    <div>
                        <div className="oderItem__price">13</div>
                        <div><button className="oderItem__btn 
                        oderItem__btn--red">Comment</button></div>
                    </div>

                </div>
                
            </div>
        );
    }
}

export default OrderItem;