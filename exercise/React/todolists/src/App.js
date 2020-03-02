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
      createdTask: '',
      editIndex: null,
      showModal: false,
    };

    this.handleTaskClick = this.handleTaskClick.bind(this);
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.editTask = this.editTask.bind(this);//>>
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = (index) => {
    console.log('App.showModal: index='+index);
    this.setState({
      editIndex: index,
      showModal: true,
    });
  };

  hideModal = (doChange, newTaskName) => {
    console.log('App.hideModal: editIndex='+this.state.editIndex
    + '; doChange=' + doChange + '; newTaskName='+newTaskName);
    if (doChange) {
      this.editTask(this.state.editIndex, newTaskName);
    }
    this.setState({
      showModal: false,
      editIndex: null,
    });
  };

  handleChange(event) {
    this.setState({createdTask: event.target.value});
  }

  handleSubmit(event) {
    this.addTask(this.state.createdTask);
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

  editTask(index, newTaskName) {
    let newList = this.state.tasks.slice();
    newList[index].taskName = newTaskName;
    this.setState({
      tasks: newList,
    });
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
      edit = {this.showModal}
      key = {index}
      index = {index}
      />
    );
  }

  render() {
    console.log('App.render: EditModal.show='+this.state.showModal);
    const items = this.state.tasks.map((item, index) => this.renderTask(item, index));
    const modalDiv = this.state.showModal ?
    <EditModal
      taskName={this.state.tasks[this.state.editIndex].taskName}
      hideModal={this.hideModal}
    /> : <div></div>
    ;
    return (
      <div id='app'>
        <h1>Todo list</h1>
        <div id='tasks'>
          {items}
        </div>
        <form ref='form' className='form-inline' onSubmit={this.handleSubmit}>
          <input
            type='text'
            className='form-control'
            value={this.state.createdTask}
            placeholder='add a new todo...'
            onChange={this.handleChange}
            >
          </input>
          <button type='submit'>Add</button>
        </form>
        {modalDiv}
      </div>
    );
  }
}

class Task extends Component {
  render() {
    console.log('Task.render: this.props.index='+this.props.index);
    const className = 'task-name ' + (this.props.isDone ? 'done' : 'todo');
    return (
      <div className='task-item'>
        <div className={className} onClick={() => this.props.onClick(this.props.index)}>
          <span className='icon'>&times;</span>
          {this.props.value}
        </div>
        <div className='edit'>
          <button className='edit-btn'
            onClick={() => this.props.edit(this.props.index)}
          >edit
          </button>
        </div>
        <div className='remove'>
          <button className='remove-btn'
            onClick={() => this.props.remove(this.props.index)}
          >remove
          </button>
        </div>
      </div>
    );
  }
}

class EditModal extends Component {// = ({taskName, show, hideModal}) => {
  constructor(props) {
    super(props);
    let {taskName, hideModal} = this.props;
    this.state={
      newName: taskName,
    };
    this.title='Edit the task.';
    this.taskName = taskName;
    this.hideModal = hideModal;
  }

  handleChange = (event) => {
    this.setState({
      newName: event.target.value,
    });
  }

  onSubmit = (event) => {
    console.log('EditModal.onSubmit: newName='+this.state.newName);
    this.hideModal(this.taskName !== this.state.newName, this.state.newName);
    event.preventDefault();
  }

  render() {
    return (
      <div className='modal'>
        <section className='modal_main'>
          <h2>{this.title}</h2>
          <form onSubmit={this.onSubmit}>
            <input
              value={this.state.newName}
              onChange={this.handleChange}
            >
            </input>
            <button type='submit' value='save'>Save</button>
          </form>
        </section>
      </div>
    );
  }

}
