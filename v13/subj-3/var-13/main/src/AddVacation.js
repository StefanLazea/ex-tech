import React from 'react';

export default class AddVacation extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            destination: '',
            locationType: '',
            price: 0
        };
    }

    render(){
        return (
        <div>
        </div>
        );
    }

    handleAdd = () => {
        let item = {...this.state};
        this.props.itemAdded(item);
    }
}