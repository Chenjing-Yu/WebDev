import React, { Component } from 'react';
import './App.css'

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      tasks: [
        {
        taskName: 'task1',
        isDone: false,
        },
        {
        taskName: 'task2',
        isDone: true,
        }
      ],
      input: '',
    };

    this.handleTaskClick = this.handleTaskClick.bind(this);
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({input: event.target.value});
  }

  handleSubmit(event) {
    this.addTask(this.state.input);
    event.preventDefault();
  }

  addTask(name) {
    let newList = this.state.tasks.slice();
    newList.push({
      taskName: name,
      isDone: false,
    });
    this.setState({tasks: newList});
  }

  removeTask(index) {
    let newList = this.state.tasks.slice();
    newList.splice(index, 1);
    this.setState({tasks: newList});
  }

  handleTaskClick(index) {
    let newList = this.state.tasks.slice();
    newList[index].isDone = !newList[index].isDone;
    this.setState({tasks: newList});
  }

  renderTask(task, index) {
    return (<Task
      value = {task.taskName}
      isDone = {task.isDone}
      onClick = {this.handleTaskClick}
      remove = {this.removeTask}
      key = {index}
      index = {index}
      />
    );
  }

  render() {
    const items = this.state.tasks.map((item, index) => this.renderTask(item, index));
    return (
      <div id='app'>
        <h1>Todo list</h1>
        <div id='tasks'>
          <ul>
            {items}
          </ul>
        </div>
        <form ref='form' className='form-inline' onSubmit={this.handleSubmit}>
          <input
            type='text'
            className='form-control'
            value={this.state.input}
            placeholder='add a new todo...'
            onChange={this.handleChange}
            >
          </input>
          <button type='submit'>Add</button>
        </form>
      </div>
    );
  }
}

class Task extends Component {
  render() {
    const className = this.props.isDone ? 'done' : 'todo';
    return (
      <li>
        <div className={className} onClick={() => this.props.onClick(this.props.index)}>
          <span className='icon'>&times;</span>
          {this.props.value}
        </div>
        <button className='remove'
          onClick={() => this.props.remove(this.props.index)}
          >&times;
        </button>
      </li>
    );
  }
}
