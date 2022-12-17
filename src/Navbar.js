import React from "react";

const Navbar = (props) => {
        
        return (
           <div  style={styles.nav}>
            <div style={styles.cartIconContainer}>
                <img style={styles.cartIcon} src="https://cdn-icons-png.flaticon.com/128/726/726496.png" alt="cart-icon" />
                <span style={styles.cartCount}>{props.count}</span>
            </div>
           </div> 
        );
}

const styles = {
    cartIcon: {
        height: 50,
        marginRight: 20
    },

    nav: {
        height:70,
        background: 'rgb(66, 64, 64)',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItmes: 'centre'
    },

    cartIconContainer: {
        position: 'relative'
    },

    cartCount: {
        background: 'green',
        borderRadius: '50%',
        padding: '4px 8px',
        position: 'absolute',
        right: 0,
        top: -7
    }
};

export default Navbar;