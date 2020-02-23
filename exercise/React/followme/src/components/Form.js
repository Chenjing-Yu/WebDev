import React, {Component} from 'react'

class Form extends Component{
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      topic: 'react',
    }
  }

  handleNameChange = event => {
    this.setState({
      name: event.target.value,
    })
  }

  handleDescChange = event => {
    this.setState({
      description: event.target.value,
    })
  }

  handleTopicChange = event => {
    this.setState({
      topic: event.target.value,
    })
  }

  handleSubmitChange = event => {
    alert(`${this.state.name}, ${this.state.description}, ${this.state.topic}`);
    event.preventDefault(); //prevent refreshing the web page
  }

  render() {
    const {name, desc, topic} = this.state;
    return (
      <form onSubmit={this.handleSubmitChange}>
        <div>
          <label>Name</label>
          <input
            type='text'
            value={name}
            onChange={this.handleNameChange}
          />
        </div>
        <div>
          <label>description</label>
          <textarea
            value={desc}
            onChange={this.handleDescChange}
          />
        </div>
        <div>
          <label>Topic</label>
          <select value={topic} onChange={this.handleTopicChange}>
            <option value='react'>React</option>
            <option value='angular'>Angular</option>
            <option value='vue'>Vue</option>
          </select>
        </div>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default Form
