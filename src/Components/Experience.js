import React from 'react';
import '../styles/styles.css';

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: '',
      positionTitle: '',
      mainTasks: '',
      startDate: '',
      endDate: '',
      isEditing: true
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ isEditing: false });
  }

  handleEdit = () => {
    this.setState({ isEditing: true });
  }

  render() {
    if (this.state.isEditing) {
      return (
        <form onSubmit={this.handleSubmit}>
          <h2>Experience</h2>
          <label>
            Company Name:
            <input type="text" name="companyName" value={this.state.companyName} onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Position Title:
            <input type="text" name="positionTitle" value={this.state.positionTitle} onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Main Tasks:
            <textarea name="mainTasks" value={this.state.mainTasks} onChange={this.handleInputChange}></textarea>
          </label>
          <br />
          <label>
            Dates of Employment:
            <input type="date" name="startDate" value={this.state.startDate} onChange={this.handleInputChange} /> to <input type="date" name="endDate" value={this.state.endDate} onChange={this.handleInputChange} />
          </label>
          <br />
          <button type="submit">Submit</button>
          <button type="button" onClick={this.handleEdit}>Edit</button>
        </form>
      );
    } else {
      return (
        <div>
          <h2>Experience</h2>
          <p>Company Name: {this.state.companyName}</p>
          <p>Position Title: {this.state.positionTitle}</p>
          <p>Main Tasks: {this.state.mainTasks}</p>
          <p>Dates of Employment: {this.state.startDate} to {this.state.endDate}</p>
          <button type="button" onClick={this.handleEdit}>Edit</button>
        </div>
      );
    }
  }
}

export default Experience;
