import React, { Component, PropTypes } from 'react'
import Todo from './Todo'

export default class TodoList extends Component {
    render() {
        return (
            <div className="container-fluid">
                <ul>{
                    this.props.todos.map(todo =>
                        <Todo key = {todo.id}{...todo} />)
                    }
                </ul>
            </div>
        )
    }
}