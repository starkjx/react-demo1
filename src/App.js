import React, { Component } from 'react';
import './App.css';
import './reset.css';
import 'normalize.css';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import UserDialog from './UserDialog';
import {getCurrentUser, signOut} from './leanCloud';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: getCurrentUser()||{},
      newTodo: '',
      todoList: []
    };
    //this.addTodo = this.addTodo.bind(this);
  };
  componentDidUpdate(){
  };
  addTodo(event){
    this.state.todoList.push({
      id: idMaker(),
      title: event.target.value,
      status: null,
      deleted: false
    });
    this.setState({
      newTodo: '',
      todoList: this.state.todoList
    })
  };
  changeTitle(event){
    this.setState({
      newTodo: event.target.value,
      todoList: this.state.todoList
    });
  };
  toggle(e,todo){
    todo.status = todo.status === 'completed' ? '' : 'completed';
    this.setState(this.state);
  };
  delete(event,todo){
    todo.deleted = true;
    this.setState(this.state);
  };
  onSignUpOrSignIn(user){
    let stateCopy = JSON.parse(JSON.stringify(this.state)) 
    stateCopy.user = user
    this.setState(stateCopy)
  }
  onsignOut(){
    signOut();
    let stateCopy = JSON.parse(JSON.stringify(this.state)) 
    stateCopy.user = {}
    this.setState(stateCopy)
  };
  render() {
    let todos = this.state.todoList
    .filter((item)=> !item.deleted)  
    .map((item,index)=>{
      return (
        <li key={index}>
          <TodoItem todo={item} onToggle={this.toggle.bind(this)}
                                onDelete={this.delete.bind(this)}/>
        </li>
      );
    });
    return (
      <div className="App">
        <h1>{this.state.user.username||'我'}的待办
            {this.state.user.id ? <button onClick={this.onsignOut.bind(this)}>登出</button> : null}
        </h1> 
        <div className="inputWrapper">
          <TodoInput content={this.state.newTodo}
                     onChange={this.changeTitle.bind(this)}
                     onSubmit={this.addTodo.bind(this)}/>
        </div>
        <ol className="todoList">
          {todos}
        </ol>
        {this.state.user.id ? 
          null : 
          <UserDialog onSignUp={this.onSignUpOrSignIn.bind(this)}
                      onSignIn={this.onSignUpOrSignIn.bind(this)}/>}
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