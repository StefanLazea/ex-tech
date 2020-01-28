import React from 'react';
import AddCar from './AddCar';

export class CarList extends React.Component {
    constructor(){
        super();
        this.state = {
            cars: []
        };
    }   

    render(){
        return (
            <div>
                <AddCar />
            </div>
        )
    }
}