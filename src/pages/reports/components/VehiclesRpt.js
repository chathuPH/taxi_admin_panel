import React, { useState,useEffect } from "react";
import { forwardRef } from "react";
import Grid from "@material-ui/core/Grid";

import MaterialTable from "material-table";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import axios from "axios";
import Alert from "@material-ui/lab/Alert";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

const api = axios.create({
  baseURL: `http://localhost:8080/api/v1`,
});

const VehiclesRpt=()=> {
  var columns = [
    {
      title: "ID",
      field: "id",
      hidden: true,
      editable: "never",
      headerStyle: {
        backgroundColor: "#00994d",
        color: "#FFF",
      },
    },
    {
      title: "Vehicle Name",
      field: "vehicleName",
      headerStyle: {
        backgroundColor: "#00994d",
        color: "#FFF",
      },
    },
    {
      title: "Vehicle #",
      field: "numberPlate",
      headerStyle: {
        backgroundColor: "#00994d",
        color: "#FFF",
      },
    },
    {
      title: "Category",
      field: "category",
      editable: "never",
      headerStyle: {
        backgroundColor: "#00994d",
        color: "#FFF",
      },
      render:data=>data.category?.categoryName
    },
    {
      title: "Driver",
      field: "driver",
      editable: "never",
      headerStyle: {
        backgroundColor: "#00994d",
        color: "#FFF",
      },
      render:data=>data.driver?.driverName
    },
    {
      title: "Branch",
      field: "branch",
      editable: "never",
      headerStyle: {
        backgroundColor: "#00994d",
        color: "#FFF",
      },
      render:data=>data.branch?.brnachName
    },
    {
      title: "Status",
      field: "status",
      headerStyle: {
        backgroundColor: "#00994d",
        color: "#FFF",
      },
    },
  ];
  const [data, setData] = useState([]); //table data

  //for error handling
  const [iserror, setIserror] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);

  useEffect(()=>{
    api
    .get("/vehicle/findAll")
    .then((res) => {
      setData(res.data);
    })
    .catch((error) => {
      console.log("Error");
    });
  },[])

  return (
    <div className="container mt-5">
      <div className="App">
        <Grid container spacing={25}>
          <Grid item xs={1}></Grid>
          <Grid item xs={10}>
            <div>
              {iserror && (
                <Alert severity="error">
                  {errorMessages.map((msg, i) => {
                    return <div key={i}>{msg}</div>;
                  })}
                </Alert>
              )}
            </div>
            <MaterialTable
              title="Vehicles Report"
              columns={columns}
              data={data}
              options={{
                grouping: true,
                exportButton: true,
              }}
              icons={tableIcons}
            />
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </div>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default VehiclesRpt;
