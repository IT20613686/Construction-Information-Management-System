import React from 'react';
import Header from '../Header/Header';
import './AddHardware.css';

function AddHardware() {
  return (
    <div>
      <Header />
      <br />
      <div className="hardwareBtn">
        <button class="btn">Hardwares</button>
      </div>
      <br />
      <br />
      <br />
      <div className="container">
        <div className="form">
          <form action="http://localhost:8070/hardware/add" method="post" encType='multipart/form-data'>
            <div class="formGroup">
              <input
                type="text"
                id="hardWare"
                name='hardwareName'
                placeholder="Hardware Name"
                autocomplete="off"
                required
              />
            </div>
            <div class="formGroup">
              <input
                type="text"
                id='address'
                placeholder="Address"
                name="address"
                required
                autocomplete="off"
              />
            </div>
            <div class="formGroup">
              <input
                type="text"
                id="contact"
                name='contact'
                placeholder="Contact No"
                required
                autocomplete="off"
              />
            </div>
            <div class="formGroup">
              <input
                type="email"
                id="email"
                name='email'
                placeholder="Email Address"
                required
                autocomplete="off"
              />
            </div>
            <div className='imageGroup'>
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
  );
}

export default AddHardware