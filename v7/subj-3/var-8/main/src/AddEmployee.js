import React from 'react';

export class AddEmployee extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            surname: '',
            experience: ''
        };
    }

    addEmployee = () => {
        let employee = {
            name: this.state.name,
            surname: this.state.surname,
            experience: this.state.experience
        };
        this.props.onAdd(employee);
    }

    render(){
        return (
            <div>
                
            </div>
        )
    }
}