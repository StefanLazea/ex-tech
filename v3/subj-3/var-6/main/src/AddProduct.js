import React from 'react';

export class AddProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            category: '',
            price: ''
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    addProduct = () => {
        let product = {
            name: this.state.name,
            category: this.state.category,
            price: this.state.price
        };
        this.props.onAdd(product);
    }

    render() {
        return (
            <div>
                <input type="text" name="name" id="name" onClick={e=>this.handleChange(e)}/>
                <input type="text" name="category" id="category" onClick={e=>this.handleChange(e)}/>
                <input type="text" name="price" id="price" onClick={e=>this.handleChange(e)}/>
                <button value="add product" onClick={this.addProduct}>add product</button>
            </div>
        )
    }
}
export default AddProduct;
