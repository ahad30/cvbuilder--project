import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";

function PInfo() {
  const [socialLinks, setSocialLinks] = useState([
    { name: "", url: "" }
  ]);

  const handleAddSocialLink = () => {
    setSocialLinks([...socialLinks, { name: "", url: "" }]);
  };

  const handleRemoveSocialLink = (index) => {
    const list = [...socialLinks];
    list.splice(index, 1);
    setSocialLinks(list);
  };

  const handleSocialLinkInputChange = (index, event) => {
    const { name, value } = event.target;
    const list = [...socialLinks];
    list[index][name] = value;
    setSocialLinks(list);
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-4 font-weight-bold">Personal Info</h3>
      <div className="row">
        <div className="col-md-4">
          <div className="form-group">
            <label>Upload your Image</label>
            <input type="file" className="form-control-file" />
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group">
            <label>Age</label>
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group">
            <label>Gender</label>
            <select className="form-control">
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" />
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group">
            <label>Phone</label>
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group">
            <label>Contact</label>
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="col-md-12">
          <label>Social Links</label>
          {socialLinks.map((link, index) => (
            <div key={index} className="input-group mb-3">
              <div className="input-group-prepend">
                <select
                  name="name"
                  value={link.name}
                  onChange={(event) =>
                    handleSocialLinkInputChange(index, event)
                  }
                  className="custom-select mr-3"
                >
                  <option value="">Select Social Link</option>
                  <option value="facebook">Facebook</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="website">Website</option>
                  <option value="github">GitHub</option>
                </select>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="link"
                  value={link.link}
                  onChange={(event) =>
                    handleSocialLinkInputChange(index, event)
                  }
                  placeholder="Enter link"
                  className="form-control"
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-danger mt-3"
                    type="button"
                    onClick={() => handleRemoveSocialLink(index)}
                  >
                    Remove Link
                  </button>
                </div>
              </div>
            </div>
          ))}
          <button
            type="button"
            className="btn btn-success mb-3"
            onClick={handleAddSocialLink}
          >
            Add Social Link
          </button>
        </div>
      </div>
      <div className="text-left">
        <button className="btn btn-warning font-weight-bold mt-5" type="submit">
          Submit
        </button>
      </div>
    </div>
  );
}
export default PInfo;
