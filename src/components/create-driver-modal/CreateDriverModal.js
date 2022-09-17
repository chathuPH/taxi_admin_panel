/**
 * @author Mevan Nirosh
 * @version 1.0
 * @since 2022-03-16
 */

import React, { useState } from "react";
import { Button, Modal, Row, Col, Form } from "react-bootstrap";
import BranchesDropdown from "../branchesDropdown/BranchesDropdown";
import axios from "axios";

import Alert from "@material-ui/lab/Alert";

const api = axios.create({
  baseURL: `http://localhost:8080/api/v1`,
});

const CreateDriverModal = (props) => {
  const [data, setData] = useState([]);
  const [branchValue, setBranchValue] = useState();

  const [iserror, setIserror] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);

  const [isSuccess, setIsSuccess] = useState(false);
  const [successMessages, setSuccessMessages] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleBranchChange = (e) => {
    const value = e.Bid;
    setBranchValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const copyData = { ...data };
    copyData.status = "free";
    copyData.type = "driver";
    copyData.branchId = branchValue;
    api
      .post("/auth/register", copyData)
      .then((res) => {
        setIsSuccess(true);
        setSuccessMessages(["Driver added successfully"]);
        setErrorMessages([]);
        setIserror(false);
      })
      .catch((error) => {
        setErrorMessages(["Driver creation failed"]);
        setIserror(true);
      });
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onExited={() => {
        setIserror(false);
        setErrorMessages([]);
        setIsSuccess(false);
        setSuccessMessages([]);
        setData([]);
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create Driver
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          {iserror && (
            <Alert severity="error">
              {errorMessages.map((msg, i) => {
                return <div key={i}>{msg}</div>;
              })}
            </Alert>
          )}
        </div>
        <div>
          {isSuccess && (
            <Alert severity="success">
              {successMessages.map((msg, i) => {
                return <div key={i}>{msg}</div>;
              })}
            </Alert>
          )}
        </div>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridUserName">
              <Form.Label>Username</Form.Label>
              <Form.Control
                name="username"
                type="text"
                placeholder="Enter username"
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Enter password"
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridDriverName">
              <Form.Label>Driver Name</Form.Label>
              <Form.Control
                name="driverName"
                type="text"
                placeholder="Enter Name"
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridBranch">
              <Form.Label>Branch</Form.Label>
              <BranchesDropdown name="branchId" onChange={handleBranchChange} />
            </Form.Group>
          </Row>

          <br />
          <Button variant="primary" type="submit">
            Save
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default CreateDriverModal;
