/**
 * @author Mevan Nirosh
 * @version 1.0
 * @since 2022-03-16
 */

import React, { useState } from "react";
import { Button, Modal, Row, Col, Form } from "react-bootstrap";
import BranchesDropdown from "../branchesDropdown/BranchesDropdown";
import DriversDropdown from "../driversDropdown/DriversDropdown";
import CategoriesDropdown from "../categoriesDropdown/CategoriesDropdown";
import axios from "axios";

import Alert from "@material-ui/lab/Alert";

const api = axios.create({
  baseURL: `http://localhost:8080/api/v1`,
});

const CreateVehicleModal = (props) => {
  const [data, setData] = useState([]);
  const [branchValue, setBranchValue] = useState();
  const [driverValue, setDriverValue] = useState();
  const [categoryValue,setCategoryValue]=useState();


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
    const Bvalue = e.Bid;
    setBranchValue(Bvalue);
  };
  const handleDriverChange = (e) => {
    const Dvalue = e.Did;
    setDriverValue(Dvalue);
  };
  const handleCategoryChange = (e) => {
    const Cvalue = e.Cid;
    setCategoryValue(Cvalue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const copyData = { ...data };
    copyData.driver=driverValue
    copyData.branch=branchValue
    copyData.category=categoryValue
    api
      .post("/vehicle/create", copyData)
      .then((res) => {
        setIsSuccess(true);
        setSuccessMessages(["Vehicle added successfully"]);
        setErrorMessages([]);
        setIserror(false);
      })
      .catch((error) => {
        setErrorMessages(["Vehicle creation failed"]);
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
          Create Vehicle
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
            <Form.Group as={Col} controlId="formGridVehicleName">
              <Form.Label>Vehicle Name</Form.Label>
              <Form.Control
                name="vehicleName"
                type="text"
                placeholder="Enter Vehicle Name"
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridVehicleNumber">
              <Form.Label>Vehicle #</Form.Label>
              <Form.Control
                name="numberPlate"
                type="text"
                placeholder="Enter Vehicle Number"
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridDriverName">
              <Form.Label>Driver</Form.Label>
              <DriversDropdown name="branchId" onChange={handleDriverChange} />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridBranch">
              <Form.Label>Branch</Form.Label>
              <BranchesDropdown name="driver" onChange={handleBranchChange} />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridBranch">
              <Form.Label>Category</Form.Label>
              <CategoriesDropdown name="category" onChange={handleCategoryChange} />
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

export default CreateVehicleModal;
