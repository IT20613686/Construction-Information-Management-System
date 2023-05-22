import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router';
import CustomerHeader from '../Customer Header/CustomerHeader';
import './CustomerHardware.css'

const ViewCustomerItem = () => {

    const [items, setItems] = useState([]);
    const [q, setQ] = useState("");
    const { name } = useParams();

    useEffect(() => {
      function getHardwareItems() {
        axios
          .get("http://localhost:8070/hardwareItem/view")
          .then((res) => {
            setItems(res.data);
            console.log(res.data);
          })
          .catch((err) => {
            alert(err.message);
          });
      }

      getHardwareItems();
    }, []);
    
  return (
    <div>
      <CustomerHeader/>
      <div className="body">
        <div className="search-container">
          <input
            type="text"
            className="search"
            placeholder="Search..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </div>
        <form>
          <table className="table">
            <thead>
              <tr>
                <th>ItemID</th>
                <th>ItemName</th>
                <th>BrandName</th>
                <th>HardwareName</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>

            <tbody>
              {items
                .filter((item) => {
                  if (q === "") {
                    return item;
                  } else if (
                    item.itemName.toLowerCase().includes(q.toLowerCase())
                  ) {
                    return item;
                  }
                })
                .map((item) => {
                  if (name == item.hardwareName) {
                      return (
                        <tr>
                          <td>{item.itemID}</td>
                          <td>{item.itemName}</td>
                          <td>{item.brandName}</td>
                          <td>{item.hardwareName}</td>
                          <td>{item.price}</td>
                          <td>{item.quantity}</td>
                        </tr>
                      );
                  }
                })}
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
}

export default ViewCustomerItem