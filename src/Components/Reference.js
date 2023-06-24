import React, { useState } from "react";

function Reference() {
  const [references, setReferences] = useState([{ name: "", designation: "", email: "", contactNo: "", companyName: "" }]);

  const handleReferenceInputChange = (index, event) => {
    const values = [...references];
    if (event.target.name === "name") {
      values[index].name = event.target.value;
    } else if (event.target.name === "designation") {
      values[index].designation = event.target.value;
    } else if (event.target.name === "email") {
      values[index].email = event.target.value;
    } else if (event.target.name === "contactNo") {
      values[index].contactNo = event.target.value;
    } else {
      values[index].companyName = event.target.value;
    }

    setReferences(values);
  };

  const handleAddReference = () => {
    const values = [...references];
    values.push({ name: "", designation: "", email: "", contactNo: "", companyName: "" });
    setReferences(values);
  };

  const handleRemoveReference = (index) => {
    const values = [...references];
    values.splice(index, 1);
    setReferences(values);
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-4 font-weight-bold">References</h3>
      {references.map((reference, index) => (
        <div key={index} className="card mb-4">
          <div className="card-header">
            <h4>Reference {index + 1}</h4>
            {index > 0 && (
              <button type="button" className="btn btn-danger float-right" onClick={() => handleRemoveReference(index)}>
                Remove
              </button>
            )}
          </div>
          <div className="card-body">
            <div className="form-group">
              <label>Name</label>
              <input type="text" className="form-control" name="name" value={reference.name} onChange={(event) => handleReferenceInputChange(index, event)} />
            </div>
            <div className="form-group">
              <label>Designation</label>
              <input type="text" className="form-control" name="designation" value={reference.designation} onChange={(event) => handleReferenceInputChange(index, event)} />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" name="email" value={reference.email} onChange={(event) => handleReferenceInputChange(index, event)} />
            </div>
            <div className="form-group">
              <label>Contact No</label>
              <input type="text" className="form-control" name="contactNo" value={reference.contactNo} onChange={(event) => handleReferenceInputChange(index, event)} />
            </div>
            <div className="form-group">
              <label>Company Name</label>
              <input type="text" className="form-control" name="companyName" value={reference.companyName} onChange={(event) => handleReferenceInputChange(index, event)} />
            </div>
          </div>
        </div>
      ))}
      <div className="form-group">
        <button type="button" className="btn btn-primary" onClick={() => handleAddReference()}>
          Add More
        </button>
      </div>
      <hr/>
      <div className="text-left">
        <button className="btn btn-warning font-weight-bold mt-2" type="submit">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Reference;

