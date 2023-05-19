import React,{useState,useEffect,useRef} from 'react'
import AdminHeader from '../Admin Header/AdminHeader';
import axios from 'axios';
import { useReactToPrint } from "react-to-print";
import { FiPrinter } from "react-icons/fi";
import { ViewHardwareItemReport } from './ViewHardwareItemReport';

function HardwareItemReport() {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });

    const [hardwareItems, setHardwareItems] = useState([]);

    useEffect(() => {
      function getHardwareItems() {
        axios
          .get("http://localhost:8070/hardwareItem/view")
          .then((res) => {
            setHardwareItems(res.data);
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
      <AdminHeader />
      <div className="body">
        <div ref={componentRef} className='rtb'>
          <form>
            <table className="reportTable">
              <thead>
                <tr>
                  <th>ItemID</th>
                  <th>ItemName</th>
                  <th>BrandName</th>
                  <th>HardwareName</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Stock</th>
                </tr>
              </thead>

              <tbody>
                {hardwareItems.map((item) => (
                  <ViewHardwareItemReport item={item} />
                ))}
              </tbody>
            </table>
          </form>
        </div>
        <br />
        <div className="reportBtn">
          <button onClick={handlePrint} className="btn3">
            <FiPrinter /> Print Report
          </button>
        </div>
      </div>
    </div>
  );
}

export default HardwareItemReport