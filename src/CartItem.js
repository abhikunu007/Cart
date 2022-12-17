import React from "react";

class CartItem extends React.Component {
    

    increaseQuantity = () =>  {
        // console.log('this', this.state);
        // SetState Form 1 --->
        // this.setState({
        //     qty: this.state.qty + 1
        // });

        // setState Form 2 --->
        this.setState((prevState) => {
            return {
                qty: prevState.qty +1
            }
        });
    }

    decreaseQuantity = () => {

        const {qty} = this.state;
        if(qty === 0) {
            return;
        }

        // this.setState({
        //     qty: this.state.qty - 1
        // });       

        this.setState((nextState) => {
            return{
                qty: nextState.qty - 1
            }
        });
    }

    deleteItem = () => {
        
    }



    render() {
        const { price, title, qty } = this.props.product;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 30 }}>{title}</div>
                    <div style={{ color: '#777' }}>Rs: {price}</div>
                    <div style={{ color: '#777' }}> Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img src="https://cdn-icons-png.flaticon.com/128/4315/4315609.png"
                            alt="increase"
                            className="action-icons"
                            onClick={this.increaseQuantity} />
                        <img src="https://cdn-icons-png.flaticon.com/128/4436/4436695.png" 
                        alt="decrease"
                         className="action-icons" 
                         onClick={this.decreaseQuantity}/>
                        <img src="https://cdn-icons-png.flaticon.com/128/216/216658.png"
                         alt="delete" 
                         className="action-icons" 
                         onClick={this.deleteItem}/>
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 3,
        background: '#ccc'
    }
}

export default CartItem;