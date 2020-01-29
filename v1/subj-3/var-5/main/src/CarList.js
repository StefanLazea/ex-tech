import React from 'react';
import AddCar from './AddCar';

export class CarList extends React.Component {
    constructor(){
        super();
        this.state = {
            cars: []
        };
        this.add = (car) => {
            this.state.cars.push(car);
        }
    }  
    
   

    render(){
        return (
            <div>
                <AddCar onAdd={this.add}/>
                {this.state.cars.map((e,i)=><li key ={i}>{e.make} {e.model} {e.price}</li>)}
            </div>
        )
    }
}