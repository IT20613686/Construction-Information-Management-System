import React,{useState,useEffect,useRef} from 'react'
import AdminHeader from '../Admin Header/AdminHeader';
import { ViewHardwareReport } from './ViewHardwareReport';
import axios from 'axios';
import { useReactToPrint } from "react-to-print";
import { FiPrinter } from "react-icons/fi";
import './ViewHardware.css';

function HardwareReport() {

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    });
    
    const [hardwares, setHardwares] = useState([]);

    useEffect(() => {
      function getHardwares() {
        axios
          .get("http://localhost:8070/hardware/view")
          .then((res) => {
            setHardwares(res.data);
            console.log(res.data);
          })
          .catch((err) => {
            alert(err.message);
          });
      }

      getHardwares();
    }, []);

  return (
    <div>
      <AdminHeader />
      <div className="body">
        <div ref={componentRef} className='rtb'>
          <form>
            <table className="reportTable">
              <thead>
                <tr>
                  <th>HardwareID</th>
                  <th>HardwareName</th>
                  <th>Address</th>
                  <th>Contact</th>
                  <th>Email</th>
                </tr>
              </thead>

              <tbody>
                {hardwares.map((hardware) => (
                  <ViewHardwareReport hardware={hardware} />
                ))}
              </tbody>
            </table>
          </form>
        </div>
        <br/>
        <div className='reportBtn'>
          <button onClick={handlePrint} className="btn3">
            <FiPrinter /> Print Report
          </button>
        </div>
      </div>
    </div>
  );
}

export default HardwareReport