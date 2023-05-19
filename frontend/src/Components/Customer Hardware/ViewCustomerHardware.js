import React from 'react'
import { Card, Col } from "react-bootstrap";
import './CustomerHardware.css'
import { useNavigate } from 'react-router';

const ViewCustomerHardware = ({ hardware }) => {
  
  const navigate = useNavigate();
  return (
    <>
      <Col>
        <Card className="shadow-lg m-4 rounded card">
          <Card.Img
            className="cardImage"
            onClick={()=> { navigate(`/customerItem/${hardware.hardwareName}`)}}
            src={"http://localhost:8070/uploads/" + hardware.image}
          ></Card.Img>

          <Card.Body>
            <Card.Title>{hardware.hardwareName}</Card.Title>
            <Card.Title>{hardware.address}</Card.Title>
            <Card.Title>0{hardware.contact}</Card.Title>
            <Card.Title>{hardware.email}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default ViewCustomerHardware