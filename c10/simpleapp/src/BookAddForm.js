import React from 'react';
import {Component} from 'react';
import BookList from './BookList';

class BookAddForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            title : '',
            content : ''
        }
        this.handleChange = (evt) => {
            this.setState({
                [evt.target.name] : evt.target.value
            })
        }
    }
    render(){
        return <div>
            <input type="text" placeholder="title" onChange={this.handleChange} name="title" />
            <input type="text" placeholder="content" onChange={this.handleChange} name="content" />
            <input type="button" value="add" onClick={() => this.props.onAdd({
                title : this.state.title,
                content : this.state.content
            })} name="content" />
        </div>
    }
}

export default BookAddForm;
