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
    
    addCar = () => {
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
                <input type="text" id="make" name="model" onChange={e=>this.onHandleChange(e)}/>
                <input type="text" id="model" name="model" onChange={e=>this.onHandleChange(e)}/>
                <input type="text" id="price" name="price" onChange={e=>this.onHandleChange(e)}/>
                <input type="button" value="add car" onclick = {() => {
                        this.props.onAdd(
                             {
                                make: this.state.make,
                                model: this.state.model,
                                price: this.state.price
                            }
                        )
                    
                }}/>
            </div>
        )
    }
}