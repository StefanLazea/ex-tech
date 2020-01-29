import React from 'react';
import AddProduct from './AddProduct';

export class ProductList extends React.Component {
    constructor() {
        super();
        this.state = {
            products: []
        };
    }

    add = (product) => {
        this.setState({
            products: [...this.state.products, product]
        })
    }

    render() {
        return (
            <div>
                <AddProduct onAdd={this.add} />
            </div>
        )
    }
}
