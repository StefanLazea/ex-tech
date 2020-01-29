import React from 'react';

export class AddProduct extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            category: '',
            price: ''
        };
    }

    addProduct = () => {
        let product = {
            name: this.state.name,
            category: this.state.category,
            price: this.state.price
        };
        this.props.onAdd(product);
    }

    render(){
        return (
            <div>

            </div>
        )
    }
}