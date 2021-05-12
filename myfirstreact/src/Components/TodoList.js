import React, { Component } from 'react';


class TodoList extends Component {
    handleEdit = () => {
        this.props.openEditForm()
        this.props.editTask(this.props.name, this.props.getIndexTask)
    }
    handleDelete = () => {
        this.props.deleteTask(this.props.name)
    }
    render() {
        
     return <table><thead>
         <tr>
            
            <th>{this.props.name}</th>
            <th>
                <button type="button" className="btn btn-outline-primary" onClick={this.handleEdit}><i className="glyphicon glyphicon-edit"></i>Edit</button>
            </th>
            <th>
                <button type="button" className="btn btn-outline-primary" onClick={this.handleDelete}><i className="glyphicon glyphicon-remove"></i>Delete</button>
            </th>
          
          
        </tr>
     </thead>

        </table>
    }
}


export default TodoList;