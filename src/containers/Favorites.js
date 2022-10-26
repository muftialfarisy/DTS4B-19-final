import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import "../List.css";

const topseries = [
  {
    image: "https://mdbootstrap.com/img/new/fluid/city/055.webp",
    judul: "judul 1",
    dekcripsi: "ini adalah judul 1",
  },
  {
    image: "https://mdbootstrap.com/img/new/fluid/city/055.webp",
    judul: "judul 2",
    dekcripsi: "ini adalah judul 2",
  },
  {
    image: "https://mdbootstrap.com/img/new/fluid/city/055.webp",
    judul: "judul 3",
    dekcripsi: "ini adalah judul 3",
  },
  {
    image: "https://mdbootstrap.com/img/new/fluid/city/055.webp",
    judul: "judul 4",
    dekcripsi: "ini adalah judul 4",
  },
  {
    image: "https://mdbootstrap.com/img/new/fluid/city/055.webp",
    judul: "judul 5",
    dekcripsi: "ini adalah judul 5",
  },
  {
    image: "https://mdbootstrap.com/img/new/fluid/city/055.webp",
    judul: "judul 6",
    dekcripsi: "ini adalah judul 6",
  },
];
export default function Favorites() {
  return (
    <div className="list">
      <h3 className="text-white">Favorites</h3>
      <div className="d-flex justify-content-center align-items-center text-white">
        <MDBRow className="row-cols-1 row-cols-md-4 g-4 w-50 h-50">
          {topseries.map((tseries) => (
            <MDBCol key={tseries.judul}>
              <MDBCard
                style={{ backgroundColor: "black", border: "1px solid blue" }}
              >
                <MDBCardImage
                  src="https://mdbootstrap.com/img/new/standard/city/044.webp"
                  alt="..."
                  position="top"
                />
                <MDBCardBody>
                  <MDBCardTitle>{tseries.judul}</MDBCardTitle>
                  <MDBCardText>{tseries.dekcripsi}</MDBCardText>
                </MDBCardBody>
                <MDBCardFooter>
                  <Button
                    sx={{ color: "white" }}
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                  >
                    Delete
                  </Button>
                </MDBCardFooter>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </div>
    </div>
  );
}
