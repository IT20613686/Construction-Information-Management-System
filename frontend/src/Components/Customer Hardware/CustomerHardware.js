import React, { useState, useEffect } from 'react'
import ViewCustomerHardware from './ViewCustomerHardware';
import { Row, Container } from "react-bootstrap";
import axios from 'axios'
import CustomerHeader from '../Customer Header/CustomerHeader';

export default function CustomerHardware() {

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
    <>
      <CustomerHeader/>
      <Container className="justify-content-center p-2">
        <Row>
          {hardwares.map((hardware) => {
            return <ViewCustomerHardware hardware={hardware} />;
          })}
        </Row>
      </Container>
    </>
  );
}
