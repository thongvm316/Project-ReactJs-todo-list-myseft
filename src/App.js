import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList';;

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-4">
              <h3 className="text-capitalize text-center">Todo Input</h3>
              <TodoInput />
            </div>
          </div>
       </div>
      </div>
    );
  }
}

export default App;
