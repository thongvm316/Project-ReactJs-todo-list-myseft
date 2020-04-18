import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
    render() {
        const { items } = this.props;
        return (
            <ul className="list-group my-5">
            <h3 className="text-capitalize text-center">todo list</h3>

            {
                items.map((item) => {
                    return <TodoItem
                                key={item.id}
                                title={item.title}
                            />        
                })
            }
            
            <button 
                 type="button" 
                 className="btn btn-danger my-5 btn-block"
             >Clear List  
             </button>
        </ul>
        );
    }
}

export default TodoList;