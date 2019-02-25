import React, { Component } from 'react';
import './App.css';
import './reset.css';
import 'normalize.css';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      newTodo: '',
      todoList: []
    };
    //this.addTodo = this.addTodo.bind(this);
  };
  addTodo(event){
    this.state.todoList.push({
      id: idMaker(),
      title: event.target.value,
      status: null,
      deleted: false
    })
    this.setState({
      newTodo: '',
      todoList: this.state.todoList
    })
  };
  changeTitle(event){
    this.setState({
      newTodo: event.target.value,
      todoList: this.state.todoList
    })
  };
  render() {
    let todos = this.state.todoList.map((item,index)=>{
      return (
        <li key={index}>
          <TodoItem todo={item} />
        </li>
      );
    });
    return (
      <div className="App">
        <h1>这是我的待办</h1> 
        <div className="inputWrapper">
          <TodoInput content={this.state.newTodo}
                     onChange={this.changeTitle.bind(this)}
                     onSubmit={this.addTodo.bind(this)}/>
        </div>
        <ol>
          {todos}
        </ol>
      </div>
    );
  }
}

export default App;


let id = 0;

function idMaker(){
  id += 1;
  return id;
}