import React, { Component } from 'react';

interface ProductProps {
    name: string;
    price: number;
}

class Product extends Component<ProductProps> {
    render() {
        const { name, price } = this.props;
        return (
            <div>
                <h2>Product: {name}</h2>
                <p>Price: ${price}</p>
            </div>
        )
    }
}

export default Product;