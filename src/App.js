import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList';;

class App extends Component {
  constructor(params) {
    super()
    this.state = {
      items: [],
      item: '',
      id: uuidv4(),
      editItem: false
    }
  }

  handleChange = (e) => {
    this.setState({
      item: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item
    }

    const updateItems = [...this.state.items, newItem]
    this.setState({
      items: updateItems,
      item: '',
      id: uuidv4(),
      editItem: false
    })
  }

  clearList = () => {
    this.setState({
      items: []
    })
  }

  handleDelete = (id) => {
    const filterItems = this.state.items.filter(item => item.id !== id)
    this.setState({
      items: filterItems
    })
  }

  handleEdit = (id) => {
    const filterItems = this.state.items.filter(item => item.id !== id)
    const selectItem = this.state.items.find(item => item.id === id)
    this.setState({
      items: filterItems,
      item: selectItem.title,
      editItem: true,
      id: id // I understand
    })
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-4">
              <h3 className="text-capitalize text-center">Todo Input</h3>
              <TodoInput
                item={this.state.item}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                editItem={this.state.editItem}
              />
              <TodoList
                items={this.state.items}
                clearList={this.clearList}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
              />
            </div>
          </div>
       </div>
      </div>
    );
  }
}

export default App;
