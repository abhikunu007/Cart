import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";


class App extends React.Component {

  constructor() {
    super();
    this.state = {
        products: [
            {
                price: 77777,
                title: 'Phone',
                qty: 1,
                img: 'https://www.91-img.com/gallery_images_uploads/f/c/fcf35da7857e7c95d02f03ef5f1f6749261e9662.JPG?tr=h-550,w-0,c-at_max',
                id: 1
            },
            {
                price: 777,
                title: 'HeadPhone',
                qty: 1,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Yjgt_hjd8idhYNbBscc7c0DV-GCYzMrTMU1PXa1R&s',
                id: 2
            },
            {
                price: 399999,
                title: 'Laptop',
                qty: 1,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUSvTp-9oeUOd6rbO0j7nTYraN5gsu_dSxPK_4SnHdzg&s',
                id: 3
            }
        ]
    }
}

handleIncreaseQuantity = (product) => {
    const {products} = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
        products: products
    })
}

handleDecreaseQuantity = (product) => {
    const {products} = this.state;
    const index = products.indexOf(product);

    if(products[index].qty === 0)
    {
        return;
    }

    products[index].qty -= 1;

    this.setState({
        products: products
    })
}

handleDeleteProduct = (id) => {
    const {products} = this.state;

    const items = products.filter((item) => item.id !== id);

    this.setState({
        products: items
    });
}

getCartCount = () => {
  const {products} = this.state;

  let count = 0;

  products.forEach((product) => {
    count += product.qty;
  });
  return count;
}

getCartTotal = () => {
  const {products} = this.state;

  let cartTotal = 0;

  products.map((product) => {
    cartTotal = cartTotal + product.qty * product.price
  });
  return cartTotal;
}



  render() {
    const {products} = this.state;
  return (
    <div className="App">
      <Navbar count={this.getCartCount()}/>
      <h1 id="name">CART</h1>
      <Cart
      products = {products}
      onIncreaseQuantity = {this.handleIncreaseQuantity}
      onDecreaseQuantity = {this.handleDecreaseQuantity}
      onDeleteProduct = {this.handleDeleteProduct}
      />
      <div style={{padding: 10, fontSize:20}}>TOTAL: {this.getCartTotal()}</div>
    </div>
  );
  }
}

export default App;
