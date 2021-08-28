import React, { Component } from "react";
import "./style.css";

class OrderItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      stars: props.data.stars || 0,
      comment: props.data.comment || "",
    };
  }

  //Product List
  render() {
    const { shop, product, price, picture, ifCommented } = this.props.data;
    return (
      <div className="OrderItem">
        <div className="orderItem_picContainer">
          <img className="orderItem_pic" src={picture} alt="" />
        </div>
        <div className="orderItem_content">
          <div className="orderItem_product">{product}</div>
          <div className="orderItem_shop">{shop}</div>
          <div className="orderItem_detail">
            <div className="orderItem_price">{price}</div>
            <div>
              {ifCommented ? (
                <button className="orderItem_btn orderItem_btn_grey">
                  Commented
                </button>
              ) : (
                <button
                  className="orderItem_btn orderItem_btn_red"
                  onClick={this.handleOpenEidt}
                >
                  Comment
                </button>
              )}
            </div>
          </div>
        </div>
        {this.state.editing ? this.renderEditArea() : null}
      </div>
    );
  }

  //Commenting
  renderEditArea() {
    return (
      <div className="orderItem_commentContainer">
        <textarea
          onChange={this.handleCommentChange}
          value={this.state.comment}
          className="orderItem_comment"
        />
        {this.renderStars()}
        <button
          className="orderItem_btn orderItem_btn_red"
          onClick={this.handleSubmitComment}
        >
          Commit
        </button>
        <button
          className="orderItem_btn orderItem_btn_grey"
          onClick={this.handleCancelComment}
        >
          Cancel
        </button>
      </div>
    );
  }

  renderStars() {
    const { stars } = this.state;
    return (
      <div>
        {[1, 2, 3, 4, 5].map((item, index) => {
          const lightClass = stars >= item ? "orderItem_star_linght" : "";
          return (
            <span
              className={"orderItem_star  " + lightClass}
              key={index}
              onClick={this.handleClickStars.bind(this, item)}
            >
              ★
            </span>
          );
        })}
      </div>
    );
  }

  handleOpenEidt = () => {
    this.setState({
      editing: true,
    });
  };

  handleCommentChange = (e) => {
    this.setState({
      comment: e.target.value,
    });
  };

  handleClickStars = (stars) => {
    this.setState({
      stars: stars,
    });
  };

  handleCancelComment = () => {
    this.setState({
      editing: false,
      stars: this.props.data.stars || 0,
      comment: this.props.data.comment || "",
    });
  };

  handleSubmitComment = () => {
    const { id } = this.props.data;
    const { comment, stars } = this.state;
    this.setState({
      editing: false,
    });
    this.props.onSubmit(id, comment, stars);
  };
}

export default OrderItem;
