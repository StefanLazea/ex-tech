import React, { Component } from 'react'

class Chapter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditing: false,
            title: this.props.item.title,
            content: this.props.item.content
        }
        this.handleChange = (evt) => {
            this.setState({
                [evt.target.name]: evt.target.value
            })
        }
        this.save = () => {
            this.props.onSave(this.props.item.id, {
                title: this.state.title,
                content: this.state.content
            })
            this.setState({
                isEditing: false
            })
        }
    }
    render() {
        if (this.state.isEditing) {
            return <div>
                <h3>
                    <input type="text" name="title" onChange={this.handleChange} value={this.state.title} />
                </h3>
                <h5>
                    <input type="text" name="content" onChange={this.handleChange} value={this.state.content} />
                </h5>
                <div>
                    <input type="button" value="cancel" onClick={() => this.setState({
                        isEditing: false
                    })} />
                    <input type="button" value="save" onClick={this.save} />
                </div>

            </div>
        }
        else {
            return <div>
                <h3>
                    {this.props.item.title}
                </h3>
                <h5>
                    {this.props.item.content}
                </h5>
                <div>
                    <input type="button" value="edit" onClick={() => this.setState({
                        isEditing: true
                    })} />
                    <input type="button" value="delete" onClick={() => this.props.onDelete(this.props.item.id)} />
                </div>
            </div>
        }
    }

}

export default Chapter