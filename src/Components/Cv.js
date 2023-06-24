import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Language from './Language';
import PInfo from './PersonalInfo';
import WorkExperience from './Workexperience';
import Summary from './Summary';
import Areasofexperties from './Areasofexperties';
import Courses from  './Courses';
import Projects from  './Projects';
import Education from './Education';
import Certifications from './Certifications';
import Extracurricularactivities from './Extracurricularactivities';
import Reference from './Reference';

import Logo from '../images/Logo.png';


function Cv() {
  const [activeIndex, setActiveIndex] = useState(0);
  const handlePrevious = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < buttons.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };
  

  const buttons = [
    { title: "Personal Info", path: "/PersonalInfo" },
    { title: "Summary", path: "/Summary" },
    { title: "Work Experience", path: "/Workexperience" },
    { title: "Education", path: "/Education" },
    { title: "Language", path: "/Language" },
    { title: "Areas of Expertise", path: "/Areasofexperties" },
    { title: "Courses", path: "/Courses" },
    { title: "Certifications", path: "/Certifications" },
    { title: "Projects", path: "/Projects" },
    { title: "Extracurricular Activities", path: "/Extracurricularactivities" },
    { title: "Reference", path: "/Reference" }
  ];

  return (
    <Router>
      <section  style={{ backgroundColor: "#7A52C1", padding: "20px" }}>
      <h1 className='d-flex justify-content-center cvh1' style={{ color: "White" }}> Carriastic Resume Builder</h1>
      </section>

      <section style={{ backgroundColor: "#7A52C1", padding: "20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            {buttons.map((button, index) => (
              <Link to={button.path} key={index}>
                <button className='trackbuttons mr-1'
                  style={{ backgroundColor: activeIndex === index ? "#7A52C1" : "#fff", color: activeIndex === index ? "#fff" : "#000" }}
                  onClick={() => setActiveIndex(index)}
                >
                  {button.title}
                </button>
              </Link>
            ))}
          </div>
         {/*  <div>
            <button className='prevnxt' onClick={handlePrevious} disabled={activeIndex === 0}>Prev</button>
            <button className='prevnxt' onClick={handleNext} disabled={activeIndex === buttons.length - 1}>Next</button>
          </div> */}
          <div>
            <button className='previewbtn btn btn-warning font-weight-bold' >Preview</button>
            
          </div>
        </div>
      </section>

     <Routes>
        <Route path="/PersonalInfo" element={<PInfo/>}/>
        <Route path="/Summary" element={<Summary/>}/>
        <Route path="/Workexperience" element={<WorkExperience/>}/>
        <Route path="/Education" element={<Education/>}/>
        <Route path="/Language" element={<Language/>}/>
        <Route path="/Areasofexperties" element={<Areasofexperties/>}/>
        <Route path="/Courses" element={<Courses/>}/>
        <Route path="/Certifications" element={<Certifications/>}/>
        <Route path="/Projects" element={<Projects/>}/>
        <Route path="/Extracurricularactivities" element={<Extracurricularactivities/>}/>
        <Route path="/Reference" element={<Reference/>}/>
      </Routes>


  </Router> 
  );
}

export default Cv;
