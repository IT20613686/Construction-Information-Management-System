import React from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Col, Form, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ErrorMessage from "../../Components/ErrorMessage/ErrorMessage";
import Loading from "../../Components/Loading/Loading";
import MainScreen from "../../Components/MainScreen/MainScreen";
import "./Register.css";
import { register } from "../../actions/userAction";
// import Footer from "../../components/Footer";
// import HomeNavBar from "../../components/HomeNavBar";
// import Header from "../../components/Header/Header";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [pic, setPic] = useState(
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  );
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  //if user enter wrong pw
  const [message, setMessage] = useState(null);
  //if user didnot choose the image
  const [picMessage, setPicMessage] = useState(null);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const navigate = useNavigate();

  //redirect to order page
  useEffect(() => {
    if (userInfo) {
      navigate("/register");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    //if pw are not equal throw an error
    if (password !== confirmpassword) {
      setMessage("password do not match");
    } else {
      dispatch(register(name, email, password, phone, pic)).then(() => {
        alert("Successfully registered!");
        window.location.reload();
      });
      
    }
  };

  const postDetails = (pics) => {
    if (!pics) {
      return setPicMessage("Please Select an Image");
    }

    setPicMessage(null);
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "verver_emarket");
      data.append("cloud_name", "wafra");
      fetch("https://api.cloudinary.com/v1_1/wafra/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setPic(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return setPicMessage("Please select an image ");
    }
  };

  return (
    <>
      <MainScreen tittle="Let's Get Started!">
        <Card className="pCard" style={{ paddingtop: 0 , marginLeft: 150 , marginRight: 150 }}>
            <div className="loginContainer">
              {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
              {message && (
                <ErrorMessage variant="danger">{message}</ErrorMessage>
              )}
              {loading && <Loading />}
              <Col >
                <Form onSubmit={submitHandler}>
                  <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      className="line"
                      type="name"
                      value={name}
                      placeholder="Enter name"
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      className="line"
                      type="email"
                      value={email}
                      placeholder="Enter email"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      className="line"
                      type="password"
                      value={password}
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="confirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      className="line"
                      type="password"
                      value={confirmpassword}
                      placeholder="Confirm Password"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicPhone">
                    <Form.Label>Phone No</Form.Label>
                    <Form.Control
                      className="line"
                      type="text"
                      value={phone}
                      placeholder="Enter Phone No"
                      pattern="[0]{1}[0-9]{9}"
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <br />
                  <Button className="registerSubmit" variant="primary" type="submit">
                    Register
                  </Button>
                </Form>
                <Row className="py-3">
                  <Col>
                    Already Have an Account ? <Link to="/login">Login</Link>
                  </Col>
                </Row>
              </Col>
            </div>
          </Card>
      </MainScreen>
    </>
  );
};

export default RegisterScreen;
