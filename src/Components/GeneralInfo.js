import React, { useState } from 'react';
import '../styles/styles.css';

const GeneralInfo = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isEditing, setIsEditing] = useState(true);

  const handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'phone') {
      setPhone(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  if (isEditing) {
    return (
      <form onSubmit={handleSubmit}>
        <h2>General Information</h2>
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={email} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Phone Number:
          <input type="tel" name="phone" value={phone} onChange={handleInputChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
        <button type="button" onClick={handleEdit}>Edit</button>
      </form>
    );
  } else {
    return (
      <div>
        <h2>General Information</h2>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Phone Number: {phone}</p>
        <button type="button" onClick={handleEdit}>Edit</button>
      </div>
    );
  }
};

export default GeneralInfo;
