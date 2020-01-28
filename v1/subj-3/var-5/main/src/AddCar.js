import React from 'react';

export class AddCar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            make: '',
            model: '',
            price: ''
        }
    }

    onHandleChange=(ev)=>{
        this.setState({[ev.target.name]: ev.target.value});
    }
    
    AddCar = () => {
        let car = {
            make: this.state.make,
            model: this.state.model,
            price: this.state.price
        };
        this.props.onAdd(car);
    }

    render(){
        return (
            <div>
                <input type="name" id="make" name="model" onChange={e=>this.onHandleChange}/>
                <input type="name" id="model" name="model"onChange={e=>this.onHandleChange}/>
                <input type="name" id="price" name="price"onChange={e=>this.onHandleChange}/>
                <button type="button" value="add car" onclick = {()=>AddCar()}/>
                
            </div>
        )
    }
}