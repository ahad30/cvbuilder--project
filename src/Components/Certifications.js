import { useState } from "react";

const Certifications = () => {
  const [courses, setCourses] = useState([{ name: "", duration: "", coordinator: "", institution: "" }]);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const list = [...courses];
    list[index][name] = value;
    setCourses(list);
  };

  const handleAddCourse = () => {
    setCourses([...courses, { name: "", duration: "", coordinator: "", institution: "" }]);
  };

  const handleRemoveCourse = (index) => {
    const list = [...courses];
    list.splice(index, 1);
    setCourses(list);
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-4 font-weight-bold">Certifications</h3>
      {courses.map((course, index) => (
        <div key={index}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label> Name</label>
                <input type="text" name="name" value={course.name} onChange={(event) => handleInputChange(index, event)} className="form-control" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Institution</label>
                <input type="text" name="duration" value={course.duration} onChange={(event) => handleInputChange(index, event)} className="form-control" />
              </div>
            </div>
           
            
          </div>
          {index === courses.length - 1 && (
            <div className="text-left">
              <button type="button" onClick={handleAddCourse} className="btn btn-primary mr-2">Add More</button>
              {courses.length !== 1 && <button type="button" onClick={() => handleRemoveCourse(index)} className="btn btn-danger">Remove</button>}
            </div>
          )}
          <hr />
        </div>
        
        
      ))}
      <div className="text-left">
          <button className="btn btn-warning font-weight-bold mt-3" type="submit">
          Submit
          </button>
          </div>
    </div>
    
  );
};

export default Certifications;
