import React, { Component } from "react";
import "./style.css"

class OrderItem extends Component {
    render() {
        const { shop, product, price, picture, ifCommented} = this.props.data; 
        return (
            <div className="orderItem">
                <div className="oderItem__picContainer--red">
                    <img className="oderItem__pic" src={picture}></img>
                </div>
                <div className="oderItem__content">
                    <div className="oderItem__product">{product}</div>
                    <div className="oderItem__shop">{shop}</div>
                    <div>
                        <div className="oderItem__price">{price}</div>
                        <div>
                            {
                                ifCommented ? (
                                    <button className="oderItem__btn 
                                        oderItem__btn--grey">Comment1
                                    </button>
                                ) : (
                                    <button className="oderItem__btn 
                                        oderItem__btn--red">Comment2
                                    </button>
                                )
                            }
                            
                        </div>
                    </div>

                </div>
                
            </div>
        );
    }
}

export default OrderItem;