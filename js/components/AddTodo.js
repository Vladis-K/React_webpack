import React, { Component, PropTypes } from 'react'

export default class AddTodo extends Component {
    render() {
        return (
            <div className="container-fluid">
                 <form className="form-inline">
                     <div className="form-group">
                         <input type = 'text' className="form-control" ref='input' />
                         <button type = 'button'
                                    className="btn btn-warning"
                                    onClick = {(e)=> this.handleClick(e)}>Go!
                         </button>
                     </div>
                 </form>
            </div>
        )
    }

    handleClick(e) {
        const node = this.refs.input;
        const text = node.value.trim();
        this.props.onAddClick(text);
        node.value = ''
    }
}
