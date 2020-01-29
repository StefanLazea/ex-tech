import React from 'react';

export default class AddTransaction extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            transactionNumber: '',
            transactionType: '',
            amount: 0
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