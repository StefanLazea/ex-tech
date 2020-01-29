import React from 'react';

export class AddStudent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            surname: '',
            age: ''
        };
    }

    addStudent = () => {
        let student = {
            name: this.state.name,
            surname: this.state.surname,
            age: this.state.age
        };
        this.props.onAdd(student);
    }

    render(){
        return (
            <div>
                
            </div>
        )
    }
}