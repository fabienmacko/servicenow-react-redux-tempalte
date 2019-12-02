import React from 'react';
import './create.scss';

const Create = ({createIncident, controlInput, sdValue, dValue}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    createIncident();
  }

  const handleChange = (e) => {
    const {id, value} = e.target;
    controlInput(id, value);
  }

  return (
    <div id="create">
      <h2>Create a new incident here</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="sd">Short Description:</label>
        <input type="text" name="sd" id="sd" value={sdValue} onChange={handleChange}/>
        <label htmlFor="d">Description:</label>
        <input type="text" name="d" id="d" value={dValue} onChange={handleChange}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Create;