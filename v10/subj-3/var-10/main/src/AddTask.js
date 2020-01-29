import React from 'react';

export default class AddTask extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            taskName: '',
            taskPriority: 'low',
            taskDuration: 0
        };
    }

    render(){
        return (
        <div>
        </div>
        );
    }

    addTask = () => {
        let task = {...this.state};
        this.props.taskAdded(task);
    }
}