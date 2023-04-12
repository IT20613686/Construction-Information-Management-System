import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios';
import Header from '../Header/Header';
import { Link, useNavigate } from 'react-router-dom';
import { EditHardwareItem } from "./EditHardwareItem";
import { ViewHardwareItemTable } from "./ViewHardwareItemTable";

function ViewHardwareItem() {

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/hardwareItem-report`;
    navigate(path);
  };

   const [hardwareItems, setHardwareItems] = useState([]);
   const [q, setQ] = useState("");

   useEffect(() => {
     function getHardwareItems() {
       axios.get("http://localhost:8070/hardwareItem/view").then((res) => {
           setHardwareItems(res.data);
           console.log(res.data);
         })
         .catch((err) => {
           alert(err.message);
         });
     }

     getHardwareItems();
   }, []);

   const [editFormData, setEditFormData] = useState({
     itemID: "",
     itemName: "",
     brandName: "",
     hardwareName: "",
     price: "",
     quantity: "",
   });

   const handleEditFormChange = (e) => {
     e.preventDefault();

     const fieldName = e.target.getAttribute("name");
     const fieldValue = e.target.value;

     const newFormData = { ...editFormData };
     newFormData[fieldName] = fieldValue;

     setEditFormData(newFormData);
   };

   function updateData(e) {
     e.preventDefault();

     const updateHardwareItem = {
       ID: editHardwareItem,
       price: editFormData.price,
       quantity: editFormData.quantity,
     };

     axios.put("http://localhost:8070/hardwareItem/update/:ID", updateHardwareItem).then(() => {
         alert("Item updated");
         window.location.reload();
       })
       .catch((err) => {
         alert(err);
       });
   }

   const [editHardwareItem, setEditHardwareItem] = useState(null);

   const handleEditClick = (e, hardwareItem) => {
     e.preventDefault();
     setEditHardwareItem(hardwareItem._id);

     const formValues = {
       itemID: hardwareItem.itemID,
       itemName: hardwareItem.itemName,
       brandName: hardwareItem.brandName,
       hardwareName: hardwareItem.hardwareName,
       price: hardwareItem.price,
       quantity: hardwareItem.quantity,
     };

     setEditFormData(formValues);
   };

   const handleCancelClick = () => {
     setEditHardwareItem(null);
   };

   const handleDeleteClick = (id) => {
     axios.delete(`http://localhost:8070/hardwareItem/delete/` + id).then(() => {
         window.location.reload();
       })
       .catch((err) => {
         alert(err);
       });
   }; 

  return (
    <div>
      <Header />
      <div className="body">
        <br />
        <div className="hardwareBtn">
          <Link to="/addHardwareItem" class="btn">
            + ADD
          </Link>
        </div>

        <div className="search-container">
          <input
            type="text"
            className="search"
            placeholder="Search..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </div>

        <form onSubmit={updateData}>
          <table className="table">
            <thead>
              <tr>
                <th>ItemID</th>
                <th>ItemName</th>
                <th>BrandName</th>
                <th>HardwareName</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Stock</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {hardwareItems
                .filter((item) => {
                  if (q === "") {
                    return item;
                  } else if (
                    item.itemName.toLowerCase().includes(q.toLowerCase())
                  ) {
                    return item;
                  }
                })
                .map((item) => (
                  <Fragment>
                    {editHardwareItem === item._id ? (
                      <EditHardwareItem
                        editFormData={editFormData}
                        handleEditFormChange={handleEditFormChange}
                        handleCancelClick={handleCancelClick}
                      />
                    ) : (
                      <ViewHardwareItemTable
                        item={item}
                        handleEditClick={handleEditClick}
                        handleDeleteClick={handleDeleteClick}
                      />
                    )}
                  </Fragment>
                ))}
            </tbody>
          </table>
        </form>
        <div className="reportBtn">
          <button onClick={routeChange} className="btn">
            REPORT
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewHardwareItem