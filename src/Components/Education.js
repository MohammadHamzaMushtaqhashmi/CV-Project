import React from 'react';
import '../styles/styles.css';

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schoolName: '',
      titleOfStudy: '',
      dateOfStudy: '',
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
          <h2>Education</h2>
          <label>
            School Name:
            <input type="text" name="schoolName" value={this.state.schoolName} onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Title of Study:
            <input type="text" name="titleOfStudy" value={this.state.titleOfStudy} onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Date of Study:
            <input type="date" name="dateOfStudy" value={this.state.dateOfStudy} onChange={this.handleInputChange} />
          </label>
          <br />
          <button type="submit">Submit</button>
          <button type="button" onClick={this.handleEdit}>Edit</button>
        </form>
      );
    } else {
      return (
        <div>
          <h2>Education</h2>
          <p>School Name: {this.state.schoolName}</p>
          <p>Title of Study: {this.state.titleOfStudy}</p>
          <p>Date of Study: {this.state.dateOfStudy}</p>
          <button type="button" onClick={this.handleEdit}>Edit</button>
        </div>
      );
    }
  }
}

export default Education;
