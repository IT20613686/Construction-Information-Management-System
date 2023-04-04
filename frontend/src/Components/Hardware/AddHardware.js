import React from 'react';
import Header from '../Header/Header';
import './AddHardware.css';
import { Link } from 'react-router-dom';

function AddHardware() {
  return (
    <div>
      <Header />
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
              action="http://localhost:8070/hardware/add"
              method="post"
              encType="multipart/form-data"
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
                />
              </div>
              <div class="formGroup">
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  className="addInput"
                  placeholder="Contact No"
                  required
                  autocomplete="off"
                />
              </div>
              <div class="formGroup">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className='addInput'
                  placeholder="Email Address"
                  required
                  autocomplete="off"
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