import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import firebase from 'firebase/app'



class App extends React.Component {

  constructor() {
    super();
    this.state = {
      products: [],
      loading: true


      // Without using Firebase
        // products: [
        //     {
        //         price: 77777,
        //         title: 'Phone',
        //         qty: 1,
        //         img: 'https://www.91-img.com/gallery_images_uploads/f/c/fcf35da7857e7c95d02f03ef5f1f6749261e9662.JPG?tr=h-550,w-0,c-at_max',
        //         id: 1
        //     },
        //     {
        //         price: 777,
        //         title: 'HeadPhone',
        //         qty: 1,
        //         img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Yjgt_hjd8idhYNbBscc7c0DV-GCYzMrTMU1PXa1R&s',
        //         id: 2
        //     },
        //     {
        //         price: 399999,
        //         title: 'Laptop',
        //         qty: 1,
        //         img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUSvTp-9oeUOd6rbO0j7nTYraN5gsu_dSxPK_4SnHdzg&s',
        //         id: 3
        //     }
        // ]
    }
    this.db = firebase.firestore()
}

componentDidMount() {
  // firebase
  // .firestore()
  // .collection('products')
  // .get()
  // .then((snapshot) => {
  //   console.log(snapshot);

  //   snapshot.docs.map((doc) => {
  //     console.log(doc.data())
  //   });

  //   const products = snapshot.docs.map((doc) => {
  //     const data = doc.data();
  //     data['id'] = doc.id;
  //     return data;
  //   });
  //   this.setState({
  //     products: products,
  //     loading: false
  //   })
  // });

  firebase
  .firestore()
  .collection('products')
  .onSnapshot((snapshot) => {
    console.log(snapshot);

    snapshot.docs.map((doc) => {
      console.log(doc.data())
    });

    const products = snapshot.docs.map((doc) => {
      const data = doc.data();
      data['id'] = doc.id;
      return data;
    });
    this.setState({
      products: products,
      loading: false
    })
  });
}

handleIncreaseQuantity = (product) => {
    const {products} = this.state;
    const index = products.indexOf(product);

    // products[index].qty += 1;

    // this.setState({
    //     products: products
    // })
    const docRef = this.db.collection('products').doc(products[index].id);

    docRef
      .update({
        qty: products[index].qty + 1
       })
       .then(() => {
        console.log('Updated successfully')
       })
       .catch((error) => {
        console.log('Error:', error)
       })
}

handleDecreaseQuantity = (product) => {
    const {products} = this.state;
    const index = products.indexOf(product);

    if(products[index].qty === 0)
    {
        return;
    }

    // products[index].qty -= 1;

    // this.setState({
    //     products: products
    // })
    const docRef = this.db.collection('products').doc(products[index].id);

    docRef
      .update({
        qty: products[index].qty - 1
       })
       .then(() => {
        console.log('Updated successfully')
       })
       .catch((error) => {
        console.log('Error:', error)
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

addProduct = () => {
 this.db
    .collection('products')
    .add({
      img: '',
      price: 699,
      qty: 3,
      title: 'watch'
    })
    .then((docRef) => {
      console.log('Products has been added', docRef);
    })
    .catch((error) => {
      console.log('Error:', error);
    })
}

  render() {
    const {products, loading} = this.state;
  return (
    <div className="App">
      <Navbar count={this.getCartCount()}/>
      <button onClick={this.addProduct} style={{padding: 20, fontSize: 20}}>Add a product</button>
      <h1 id="name">CART</h1>
      <Cart
      products = {products}
      onIncreaseQuantity = {this.handleIncreaseQuantity}
      onDecreaseQuantity = {this.handleDecreaseQuantity}
      onDeleteProduct = {this.handleDeleteProduct}
      />
      {loading && <h1> Loading...</h1> }
      <div style={{padding: 10, fontSize:20}}>TOTAL: {this.getCartTotal()}</div>
    </div>
  );
  }
}

export default App;
