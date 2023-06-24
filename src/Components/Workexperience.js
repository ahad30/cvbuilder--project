import { useState } from "react";

function WorkExperience() {
  const [jobs, setJobs] = useState([
    { companyName: "", designation: "", department: "", startYear: "", endYear: "", startMonth: "", endMonth: "", salary: "" }
  ]);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const list = [...jobs];
    list[index][name] = value;
    setJobs(list);
  };

  const handleAddJob = () => {
    setJobs([...jobs, { companyName: "", designation: "", department: "", startYear: "", endYear: "", startMonth: "", endMonth: "", salary: "" }]);
  };

  const handleRemoveJob = (index) => {
    const list = [...jobs];
    list.splice(index, 1);
    setJobs(list);
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-4 font-weight-bold">Work Experience</h3>
      {jobs.map((job, index) => (
        <div key={index} className="border p-3 mb-3">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Company Name</label>
                <input type="text" name="companyName" value={job.companyName} onChange={(event) => handleInputChange(index, event)} className="form-control" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Designation</label>
                <input type="text" name="designation" value={job.designation} onChange={(event) => handleInputChange(index, event)} className="form-control" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Department</label>
                <input type="text" name="department" value={job.department} onChange={(event) => handleInputChange(index, event)} className="form-control" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Starting Year</label>
                <input type="text" name="startYear" value={job.startYear} onChange={(event) => handleInputChange(index, event)} className="form-control" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Ending Year</label>
                <input type="text" name="endYear" value={job.endYear} onChange={(event) => handleInputChange(index, event)} className="form-control" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Starting Month</label>
                <input type="text" name="startMonth" value={job.startMonth} onChange={(event) => handleInputChange(index, event)} className="form-control" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Ending Month</label>
                <input type="text" name="endMonth" value={job.endMonth} onChange={(event) => handleInputChange(index, event)} className="form-control" />
              </div>
            </div>
            <div className="col-md-6">
            <div className="form-group">
            <label>Salary</label>
            <input type="text" name="salary" value={job.salary} onChange={(event) => handleInputChange(index, event)} className="form-control" />
          </div>
        </div>
      </div>
      
      {index !== 0 && <button className="btn btn-danger float-right mt-4" onClick={() => handleRemoveJob(index)}>Remove</button>}
    </div>
  ))}
  <button className="btn btn-primary mb-3" onClick={() => handleAddJob()}>Add more</button>
  <div className="text-left">
        <button className="btn btn-warning font-weight-bold mt-5" type="submit">
          Submit
        </button>
      </div>
</div>
);
}

export default WorkExperience;