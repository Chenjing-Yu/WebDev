import React, {Component} from 'react'

const EditModal = (oldName, hideModal) => {
  if (!this.state.show) return null;
  return (
    <div>
      <h2>{this.state.title}</h2>
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.oldTaskName}
          onChange={this.handleChange}
        >
        </input>
        <button type='submit' value='cancel'>Cancel</button>
        <button type='submit' value='save'>Save</button>
      </form>
    </div>
  );
}
