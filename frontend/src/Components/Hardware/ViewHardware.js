import React, {useState,useEffect,Fragment} from 'react'
import Header from '../Header/Header'
import axios from 'axios'
import { EditHardware } from './EditHardware';
import { ViewHardwareTable } from './ViewHardwareTable';
import './ViewHardware.css'
import { Link,useNavigate } from 'react-router-dom';

function ViewHardware() {

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/hardware-report`;
    navigate(path);
  };

     const [hardwares, setHardwares] = useState([]);
     const [q, setQ] = useState("");

     useEffect(() => {
       function getHardwares() {
         axios.get("http://localhost:8070/hardware/view").then((res) => {
             setHardwares(res.data);
             console.log(res.data);
           })
           .catch((err) => {
             alert(err.message);
           });
       }

       getHardwares();
     }, []);

     const [editFormData, setEditFormData] = useState({
       hardwareID: "",
       hardwareName: "",
       address: "",
       contact: "",
       email: "",
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

       const updateHardware = {
         ID: editHardware,
         address: editFormData.address,
         contact: editFormData.contact,
       };

       axios.put("http://localhost:8070/hardware/update/:ID", updateHardware).then(() => {
           alert("Hardware updated");
           window.location.reload();
         })
         .catch((err) => {
           alert(err);
         });
     }

     const [editHardware, setEditHardware] = useState(null);

     const handleEditClick = (e, hardware) => {
       e.preventDefault();
       setEditHardware(hardware._id);

       const formValues = {
         hardwareID: hardware.hardwareID,
         hardwareName: hardware.hardwareName,
         address: hardware.address,
         contact: hardware.contact,
         email: hardware.email,
       };

       setEditFormData(formValues);
     };

     const handleCancelClick = () => {
       setEditHardware(null);
     };

     const handleDeleteClick = (id) => {
       axios.delete(`http://localhost:8070/hardware/delete/`+id).then(() => {
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
          <Link to="/addHardware" class="btn">
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
                <th>HardwareID</th>
                <th>HardwareName</th>
                <th>Address</th>
                <th>Contact</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {hardwares
                .filter((hardware) => {
                  if (q === "") {
                    return hardware;
                  } else if (
                    hardware.hardwareName
                      .toLowerCase()
                      .includes(q.toLowerCase())
                  ) {
                    return hardware;
                  }
                })
                .map((hardware) => (
                  <Fragment>
                    {editHardware === hardware._id ? (
                      <EditHardware
                        editFormData={editFormData}
                        handleEditFormChange={handleEditFormChange}
                        handleCancelClick={handleCancelClick}
                      />
                    ) : (
                      <ViewHardwareTable
                        hardware={hardware}
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

export default ViewHardware