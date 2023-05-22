import React,{useState,useEffect} from 'react';
import AdminHeader from '../Admin Header/AdminHeader';
import './AddHardware.css';
import { Link } from 'react-router-dom';
import axios from 'axios'

function AddHardware() {

  const [hardwareName, setHardwareName] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState();

  function sendData(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("hardwareName", hardwareName);
    formData.append("address", address);
    formData.append("contact", contact);
    formData.append("email", email);
    formData.append("image", image);

    axios
      .post("http://localhost:8070/hardware/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        alert("Hardware added successfully");
        window.location.reload();
      })
      .catch((err) => {
        alert(err);
      });

  }
  return (
    <div>
      <AdminHeader />
      <div className="body">
        <br />
        <div className="hardwareBtn">
          <Link to="/viewHardware" class="btn">
            Hardwares
          </Link>
        </div>
        <br />
        <br />
        <br />
        <div className="container">
          <div className="form">
            <form
              onSubmit={sendData}
            >
              <div class="formGroup">
                <input
                  type="text"
                  id="hardWare"
                  name="hardwareName"
                  className="addInput"
                  placeholder="Hardware Name"
                  autocomplete="off"
                  required
                  onChange={(e) => {
                    setHardwareName(e.target.value);
                  }}
                />
              </div>
              <div class="formGroup">
                <input
                  type="text"
                  id="address"
                  placeholder="Address"
                  name="address"
                  className="addInput"
                  required
                  autocomplete="off"
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
              </div>
              <div class="formGroup">
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  className="addInput"
                  placeholder="Contact No"
                  pattern="[0]{1}[0-9]{9}"
                  required
                  autocomplete="off"
                  onChange={(e) => {
                    setContact(e.target.value);
                  }}
                />
              </div>
              <div class="formGroup">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="addInput"
                  placeholder="Email Address"
                  required
                  autocomplete="off"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="imageGroup">
                <label for="actual-btn" className="imageLabel">
                  Image
                </label>
                <input
                  type="file"
                  id="actual-btn"
                  name="image"
                  className="upload"
                  required
                  onChange={(e) => {
                    setImage(e.target.files[0]);
                  }}
                />
              </div>
              <div class="formGroup">
                <button type="submit" class="btn2">
                  ADD
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddHardware