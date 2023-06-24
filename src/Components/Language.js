import React, { useState } from "react";

function Language() {
  const [languages, setLanguages] = useState([""]);

  const handleInputChange = (index, event) => {
    const list = [...languages];
    list[index] = event.target.value;
    setLanguages(list);
  };

  const handleAddLanguage = () => {
    setLanguages([...languages, ""]);
  };

  const handleRemoveLanguage = (index) => {
    const list = [...languages];
    list.splice(index, 1);
    setLanguages(list);
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-4 font-weight-bold">Language</h3>
      {languages.map((language, index) => (
        <div key={index} className="input-group mb-3">
          <input
            type="text"
            name="language"
            value={language}
            onChange={(event) => handleInputChange(index, event)}
            className="form-control"
            placeholder="Language"
          />
          {index !== 0 && (
            <button
              className="btn btn-danger"
              type="button"
              onClick={() => handleRemoveLanguage(index)}
            >
              Remove
            </button>
          )}
        </div>
      ))}
      <button
        className="btn btn-primary mb-3"
        type="button"
        onClick={() => handleAddLanguage()}
      >
        Add more
      </button>
      <div className="text-left">
        <button className="btn btn-warning font-weight-bold mt-4" type="submit">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Language;
