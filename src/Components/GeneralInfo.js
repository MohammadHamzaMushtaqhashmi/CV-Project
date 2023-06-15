import React from 'react';
import '../styles/styles.css';

class GeneralInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
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
          <h2>General Information</h2>
          <label>
            Name:
            <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Email:
            <input type="email" name="email" value={this.state.email} onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Phone Number:
            <input type="tel" name="phone" value={this.state.phone} onChange={this.handleInputChange} />
          </label>
          <br />
          <button type="submit">Submit</button>
          <button type="button" onClick={this.handleEdit}>Edit</button>
        </form>
      );
    } else {
      return (
        <div>
          <h2>General Information</h2>
          <p>Name: {this.state.name}</p>
          <p>Email: {this.state.email}</p>
          <p>Phone Number: {this.state.phone}</p>
          <button type="button" onClick={this.handleEdit}>Edit</button>
        </div>
      );
    }
  }
}

export default GeneralInfo;
