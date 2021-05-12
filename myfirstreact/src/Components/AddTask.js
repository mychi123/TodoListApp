import React, { Component } from 'react';
import TaskList from './TaskList';

class AddTask extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showTaskList: false,
            name: '',
        }
    }
    linkList = () => {
        this.props.closeForm()
    }
    handleAddTask = () => {
        this.props.addTask(this.state.name)
        this.linkList()
    }
    isChangedName = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    render() {
        if (this.state.showTaskList === true) {
            return (
                <TaskList />
            )
        } else {
            return (
                <div>
                    <div className="container">
                        <h2>Add New List</h2>
                        <div className="form-group">
                            <label htmlFor="username-input">Name</label>
                            <input id="username-input"  type="text" className="form-control" placeholder="Enter name of task" onChange={this.isChangedName} />
                        </div>

                        <button type="submit" style={{ marginRight: 5 + 'px' }} className="btn btn-default" onClick={this.handleAddTask}><i className="glyphicon glyphicon-plus"></i>Add</button>
                      
                        <TaskList/>
                    </div>
                </div>
            );
        }
    }
}

export default AddTask;