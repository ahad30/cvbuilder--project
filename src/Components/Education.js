import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Education() {
  const [education, setEducation] = useState([
    { degree: "", university: "", department: "", location: "", startYear: "", endYear: "" }
  ]);

  const handleAddEducation = () => {
    setEducation([...education, { degree: "", university: "", department: "", location: "", startYear: "", endYear: "" }]);
  };

  const handleRemoveEducation = (index) => {
    const newEducation = [...education];
    newEducation.splice(index, 1);
    setEducation(newEducation);
  };

  const handleChangeEducation = (index, event) => {
    const newEducation = [...education];
    newEducation[index][event.target.name] = event.target.value;
    setEducation(newEducation);
  };

  return (
    <div className="container">
        <h3 className="mb-4 font-weight-bold mt-3">Education</h3>
      {education.map((edu, index) => (
        <div key={index} className="mt-4">
          <div className="card card-body">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="degree">Degree</label>
                  <input type="text" className="form-control" name="degree" value={edu.degree} onChange={(event) => handleChangeEducation(index, event)} placeholder="Enter your degree" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="university">Institution Name</label>
                  <input type="text" className="form-control" name="university" value={edu.university} onChange={(event) => handleChangeEducation(index, event)} placeholder="Enter your university" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="department">Department</label>
                  <input type="text" className="form-control" name="department" value={edu.department} onChange={(event) => handleChangeEducation(index, event)} placeholder="Enter your department" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="location">Location</label>
                  <input type="text" className="form-control" name="location" value={edu.location} onChange={(event) => handleChangeEducation(index, event)} placeholder="Enter the location of your university" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="startYear">Starting Year</label>
                  <select className="form-control" name="startYear" value={edu.startYear} onChange={(event) => handleChangeEducation(index, event)}>
                    <option>Choose...</option>
                    <option>2022</option>
                    <option>2021</option>
                    <option>2020</option>
                    <option>2019</option>
                    <option>2018</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="endYear">Ending Year</label>
                  <select className="form-control" name="endYear" value={edu.endYear} onChange={(event) => handleChangeEducation(index, event)}>
                    <option>Choose...</option>
                    <option>2022</option>
                    <option>2021</option>
                    <option>2020</option>
                    <option>2019</option>
                    <option>2018</option>
                  </select>
                </div>
              </div>
              </div>
              </div>

              {index !== 0 && <button className="btn btn-danger float-right  mt-3" onClick={() => handleRemoveEducation(index)}>Remove</button>}
            </div>
))}

<button className="btn btn-primary mt-3 mb-3" onClick={() => handleAddEducation()}>Add more</button>
  <div className="text-left">
        <button className="btn btn-warning font-weight-bold mt-5" type="submit">
          Submit
        </button>
      </div>
 
    </div>
      
      );
}
export default Education;
              
              

