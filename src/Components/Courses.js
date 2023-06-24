import { useState } from "react";

const Courses = () => {
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
      <h3 className="mb-4 font-weight-bold">PROFESSIONAL TRAINING SUMMERY</h3>
      {courses.map((course, index) => (
        <div key={index}>
          <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                <label>Course Name</label>
                <input type="text" name="name" value={course.name} onChange={(event) => handleInputChange(index, event)} className="form-control" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label>Duration</label>
                <input type="text" name="duration" value={course.duration} onChange={(event) => handleInputChange(index, event)} className="form-control" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label>Organized By</label>
                <input type="text" name="coordinator" value={course.coordinator} onChange={(event) => handleInputChange(index, event)} className="form-control" />
              </div>
            </div>
            <div className="col-md-2">
              <div className="form-group">
                <label>Institution</label>
                <input type="text" name="institution" value={course.institution} onChange={(event) => handleInputChange(index, event)} className="form-control" />
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

export default Courses;
