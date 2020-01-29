import React from 'react';

export default class AddBook extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            bookTitle: '',
            bookType: '',
            bookPrice: 0
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