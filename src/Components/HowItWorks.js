import React, { Component } from "react";
import { MDBContainer } from "mdbreact";
import wd1 from "../Assets/wd1.jpeg"
import wd2 from "../Assets/wd2.jpeg"
import wd3 from "../Assets/wd3.jpeg"
import wd4 from "../Assets/wd4.jpeg"
import wd5 from "../Assets/wd5.jpeg"
import wd6 from "../Assets/wd6.jpeg"
import a from "../Assets/1.png";
import b from "../Assets/2.png";
import c from "../Assets/3.png";
import d from "../Assets/4.png";
import e from "../Assets/5.png";
import f from "../Assets/6.png";
import g from "../Assets/7.png";
import h from "../Assets/8.png";
import "../CSS/HowItWork.css";
import Slider from "react-slick";
class HowItWorks extends Component {
  render() {
    var settings = {
      centerMode: true,
      centerPadding: 0,
      draggable: true,
      speed: 1000,
      slidesToShow: 3, //changes on responsive
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 500,
          settings: {
            mobileFirst: true,
            arrows: false,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],
      dots: true,
      arrows: false,
      autoplay: true,
      useCSS: true,
      touchMove: true
    };
    return (
      <div className="big">
        <MDBContainer>
          <section className="  ">
            <h2 className="h1-responsive font-weight-bold  ">
              <span className="light-golden">Event</span>{" "}
              <span className="deep_purple">Diary</span>
              <span className="light-golden">Application</span>
            </h2>

            <Slider {...settings}>
              <div style={{ width: "315px" }}>
                <img src={wd1} alt="" height="380px" width="180px" />
              </div>
              <div style={{ width: "315px" }}>
              <img src={wd2} alt="" height="380px" width="180px" />
              </div>
              <div style={{ width: "315px" }}>
              <img src={wd3} alt="" height="380px" width="180px" />
              </div>
              <div style={{ width: "315px" }}>
              <img src={wd4} alt="" height="380px" width="180px" />  
              </div>
              <div style={{ width: "315px" }}>
              <img src={wd5} alt="" height="380px" width="180px" />  
              </div>
              <div style={{ width: "315px" }}>
              <img src={wd6} alt="" height="380px" width="180px" />  
              </div>
            </Slider>
          </section>
        </MDBContainer>
      </div>
    );
  }
}
export default HowItWorks;
