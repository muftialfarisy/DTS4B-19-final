import React from "react";
import {
  MDBListGroup,
  MDBListGroupItem,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import {
  Button,
  TextField,
  Grid,
  Paper,
  AppBar,
  Typography,
  Toolbar,
  Link,
} from "@mui/material";
const TopList = () => {
  return (
    <div>
      <Grid
        container
        spacing={12}
        justifyContent="center"
        alignItems="center"
        direction="row"
      >
        <Grid item>
          <h6 className="bg-black p-2 text-white">Marketing team</h6>
          <MDBListGroup light className="mb-4">
            <MDBListGroupItem className="d-flex  bg-black justify-content-start align-items-start">
              <div className="d-flex align-items-center">
                <img
                  src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                  alt=""
                  style={{ width: "45px", height: "45px" }}
                  className="rounded-circle"
                />
                <div className="ms-3">
                  <p className="fw-bold text-white">John Doe</p>
                  <p className="mb-0  text-white">john.doe@gmail.com</p>
                </div>
              </div>
            </MDBListGroupItem>
            <MDBListGroupItem className="d-flex  bg-black justify-content-start align-items-start">
              <div className="d-flex align-items-center">
                <img
                  src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                  alt=""
                  style={{ width: "45px", height: "45px" }}
                  className="rounded-circle"
                />
                <div className="ms-3">
                  <p className="fw-bold mb-1 text-white">Alex Ray</p>
                  <p className=" mb-0 text-white">alex.ray@gmail.com</p>
                </div>
              </div>
            </MDBListGroupItem>
            <MDBListGroupItem className="d-flex  bg-black justify-content-start align-items-start">
              <div className="d-flex align-items-center">
                <img
                  src="https://mdbootstrap.com/img/new/avatars/7.jpg"
                  alt=""
                  style={{ width: "45px", height: "45px" }}
                  className="rounded-circle"
                />
                <div className="ms-3">
                  <p className="fw-bold mb-1 text-white">Kate Hunington</p>
                  <p className="mb-0 text-white">kate.hunington@gmail.com</p>
                </div>
              </div>
            </MDBListGroupItem>
          </MDBListGroup>
        </Grid>
        <Grid item>
          <h6 className="bg-black p-2 text-white">Marketing team</h6>
          <MDBListGroup light className="mb-4">
            <MDBListGroupItem className="d-flex  bg-black justify-content-start align-items-start">
              <div className="d-flex align-items-center">
                <img
                  src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                  alt=""
                  style={{ width: "45px", height: "45px" }}
                  className="rounded-circle"
                />
                <div className="ms-3">
                  <p className="fw-bold text-white">John Doe</p>
                  <p className="mb-0  text-white">john.doe@gmail.com</p>
                </div>
              </div>
            </MDBListGroupItem>
            <MDBListGroupItem className="d-flex  bg-black justify-content-start align-items-start">
              <div className="d-flex align-items-center">
                <img
                  src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                  alt=""
                  style={{ width: "45px", height: "45px" }}
                  className="rounded-circle"
                />
                <div className="ms-3">
                  <p className="fw-bold mb-1 text-white">Alex Ray</p>
                  <p className=" mb-0 text-white">alex.ray@gmail.com</p>
                </div>
              </div>
            </MDBListGroupItem>
            <MDBListGroupItem className="d-flex  bg-black justify-content-start align-items-start">
              <div className="d-flex align-items-center">
                <img
                  src="https://mdbootstrap.com/img/new/avatars/7.jpg"
                  alt=""
                  style={{ width: "45px", height: "45px" }}
                  className="rounded-circle"
                />
                <div className="ms-3">
                  <p className="fw-bold mb-1 text-white">Kate Hunington</p>
                  <p className="mb-0 text-white">kate.hunington@gmail.com</p>
                </div>
              </div>
            </MDBListGroupItem>
          </MDBListGroup>
        </Grid>
      </Grid>
      {/* <MDBContainer>
        <MDBRow>
          <MDBCol size="md" className="ml-5">
            <h6 className="bg-black p-2 text-white">Marketing team</h6>
            <MDBListGroup light className="mb-4">
              <MDBListGroupItem className="d-flex  bg-black justify-content-start align-items-start">
                <div className="d-flex align-items-center">
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                    alt=""
                    style={{ width: "45px", height: "45px" }}
                    className="rounded-circle"
                  />
                  <div className="ms-3">
                    <p className="fw-bold text-white">John Doe</p>
                    <p className="mb-0  text-white">john.doe@gmail.com</p>
                  </div>
                </div>
              </MDBListGroupItem>
              <MDBListGroupItem className="d-flex  bg-black justify-content-start align-items-start">
                <div className="d-flex align-items-center">
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                    alt=""
                    style={{ width: "45px", height: "45px" }}
                    className="rounded-circle"
                  />
                  <div className="ms-3">
                    <p className="fw-bold mb-1 text-white">Alex Ray</p>
                    <p className=" mb-0 text-white">alex.ray@gmail.com</p>
                  </div>
                </div>
              </MDBListGroupItem>
              <MDBListGroupItem className="d-flex  bg-black justify-content-start align-items-startr">
                <div className="d-flex align-items-center">
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/7.jpg"
                    alt=""
                    style={{ width: "45px", height: "45px" }}
                    className="rounded-circle"
                  />
                  <div className="ms-3">
                    <p className="fw-bold mb-1 text-white">Kate Hunington</p>
                    <p className="mb-0 text-white">kate.hunington@gmail.com</p>
                  </div>
                </div>
              </MDBListGroupItem>
            </MDBListGroup>
          </MDBCol>
        </MDBRow>
      </MDBContainer> */}
    </div>
  );
};

export default TopList;
