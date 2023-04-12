import React, {useState, useEffect} from 'react'
import Header from '../Header/Header'
import { Link } from 'react-router-dom';
import './AddHardwareItem.css';
import axios from 'axios'

function AddHardwareItem() {

  const [itemName, setItemName] = useState("");
  const [brandName, setBrandName] = useState("");
  const [hardwareName, setHardwareName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [hardwares, setHardware] = useState([]);

  useEffect(() => {
    function getHardware() {
      axios
        .get("http://localhost:8070/hardware/view")
        .then((res) => {
          setHardware(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    getHardware();
  }, []);

  const showMe = (event) => {
    setHardwareName(event.target.value);
  };

  function sendData(e) {
    e.preventDefault();

    const newHardwareItem = {
      itemName,
      brandName,
      hardwareName,
      price,
      quantity
    }
    axios.post("http://localhost:8070/hardwareItem/add", newHardwareItem).then(() => {
      alert("Item added successfully");
      window.location.reload();
    }).catch((err) => {
      alert(err);
    })

  }

  return (
    <div>
      <Header />
      <div className="body">
        <br />
        <div className="itemBtn">
          <Link to="/viewHardwareItem" className="btn">
            Items
          </Link>
        </div>
        <br />
        <br />
        <br />
        <div className="container">
          <div className="form">
            <form onSubmit={sendData}>
              <div class="formGroup">
                <input
                  type="text"
                  id="itemName"
                  name="itemName"
                  className="addInput"
                  placeholder="Item Name"
                  autocomplete="off"
                  required
                  onChange={(e) => {
                    setItemName(e.target.value);
                  }}
                />
              </div>
              <div class="formGroup">
                <input
                  type="text"
                  id="brandName"
                  name="brandName"
                  className="addInput"
                  placeholder="Brand Name"
                  autocomplete="off"
                  required
                  onChange={(e) => {
                    setBrandName(e.target.value);
                  }}
                />
              </div>
              <div class="formGroup">
                <input
                  type="number"
                  id="price"
                  name="price"
                  className="addInput"
                  placeholder="Price"
                  autocomplete="off"
                  required
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
              </div>
              <div class="formGroup">
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  className="addInput"
                  placeholder="Quantity"
                  autocomplete="off"
                  required
                  onChange={(e) => {
                    setQuantity(e.target.value);
                  }}
                />
              </div>
              <div className="formGroup">
                <label for="" className="form-label1">
                  Hardware Name
                </label>
                {hardwares.length === 0 ? (
                  ""
                ) : (
                  <select onChange={(event) => showMe(event)}>
                    <option value="">Select Hardware</option>
                    {hardwares.map((hardware, index) => {
                      return (
                        <option key={index} value={hardware.hardwareName}>
                          {hardware.hardwareName}
                        </option>
                      );
                    })}
                  </select>
                )}
              </div>
              <br></br>
              <div class="formGroup">
                <button type="submit" className="btn2">
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

export default AddHardwareItem