import React, { Component } from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBMask,
  MDBView,
} from "mdbreact";

import food from "../Assets/food.jpeg";
import weded from "../Assets/weded.jpg";
import saloon from "../Assets/saloon.jpg";
import Service1 from "../Assets/Service1.jpg";
import Service2 from "../Assets/Service2.jpg";
import Service3 from "../Assets/Service3.jpg";
import svg1 from "../Assets/svg1.svg";
import car from "../Assets/car.svg";
import shut from "../Assets/shut.svg";
import taxi from "../Assets/taxi.svg";
import "../CSS/Services.css";
class Services extends Component {
  render() {
    return (
      <div className="">
        <MDBContainer>
          <section className="text-center pt-5 px-4 py-5 mb-5">
            <h2 className="h1-responsive font-weight-bold ">
              <span className="light-golden"> PRIME SERVICES</span>
            </h2>
            <MDBRow>
              <MDBCol md="4" className="mb-3">
                <MDBView hover className="hoverable">
                  <MDBCard
                    style={{
                      borderRadius: "1.25rem",
                      backgroundImage: `url(${food})`,
                      backgroundSize: "334px 264px",
                    }}
                    className=" cloudy-knoxville-gradient"
                  >
                    <MDBCardBody
                      style={{ borderRadius: "1.25rem", padding: "21%" }}
                      className=" img-gradient-overlay"
                    >
                      {/* <img
                      src={svg1}
                      alt=""
                      style={{display:"inline", float:"none"}}
                      /> */}

                      {/* <MDBIcon
                        icon="car-side"
                        size="4x"
                        className="purple-text"
                      /> */}
                      <h4 className="font-weight-bold  white-text">Food</h4>
                    </MDBCardBody>
                  </MDBCard>
                  <MDBMask
                    style={{ borderRadius: "1.25rem" }}
                    className="flex-center"
                    overlay="black-strong"
                  >
                    <p className="white-text font-weight-bold">
                      {" "}
                      RAJPUT CATERING IS ONE OF THE TOP CATERING SERVICE IN
                      EVENT DIARY
                    </p>
                  </MDBMask>
                </MDBView>
              </MDBCol>
              <MDBCol md="4" className="mb-3">
                <MDBView hover className="hoverable">
                  <MDBCard
                    style={{
                      borderRadius: "1.25rem",
                      backgroundImage: `url(${weded})`,
                      backgroundSize: "334px 264px",
                    }}
                  >
                    <MDBCardBody
                      style={{ borderRadius: "1.25rem", padding: "21%" }}
                      className=" rgba-grey-strong  white-text"
                    >
                      {/* <img
                      src={taxi}
                      alt=""
                      style={{display:"inline", float:"none"}}
                      /> */}

                      <h4 className="font-weight-bold  ">Venue</h4>
                    </MDBCardBody>
                  </MDBCard>
                  <MDBMask
                    style={{ borderRadius: "1.25rem" }}
                    className="flex-center"
                    overlay="black-strong"
                  >
                    <p className="white-text font-weight-bold">
                      {" "}
                      GLOBAL MARQUEE IS PRIME PLACE TO ORGANIZE EVENT
                    </p>
                  </MDBMask>
                </MDBView>
              </MDBCol>
              <MDBCol md="4" className="mb-3">
                <MDBView hover className="hoverable">
                  <MDBCard
                    style={{
                      borderRadius: "1.25rem",
                      backgroundImage: `url(${saloon})`,
                      backgroundSize: "334px 264px",
                    }}
                  >
                    <MDBCardBody
                      style={{ borderRadius: "1.25rem", padding: "21%" }}
                      className=" rgba-grey-strong  white-text"
                    >
                      {/* <img
                      src={shut}
                      alt=""
                      style={{display:"inline", float:"none"}}
                      /> */}

                      <h4 className="font-weight-bold  ">Beauty</h4>
                    </MDBCardBody>
                  </MDBCard>
                  <MDBMask
                    style={{ borderRadius: "1.25rem" }}
                    className="flex-center"
                    overlay="black-strong"
                  >
                    <p className="white-text font-weight-bold ">
                      {" "}
                      KASHEES IS BEST SALOON IN KARACHI RIGHT NOW
                      <br /> Coming Soon
                    </p>
                  </MDBMask>
                </MDBView>
              </MDBCol>
            </MDBRow>
            {/* <div className="mt-5">
              <BusRequestForm/>
              </div> */}
          </section>
        </MDBContainer>
      </div>
    );
  }
}
export default Services;
