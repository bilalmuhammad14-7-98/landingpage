import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import "../CSS/Footer.css";
class Footer extends Component {
  render() {
    return (
      <>
        <div className="_1mf7g49">
          <div className="_1rhq33r">
            <div className="_6potu2">
              <Grid container spacing={2} className="_80hz0u">
                <Grid item xs={6} sm={6}>
                  <div className="_16m6rsw">
                    <h5 className="_fz2ylp2 ">Services</h5>
                    <div className="_n9spha">
                      <a href="/" className="_1ep48ve" color="white">
                        <p className="_1qnbzph1">Beauty</p>
                      </a>

                      <a href="/" className="_1ep48ve" color="white">
                        <p className="_1qnbzph1">Venue</p>
                      </a>

                      <a href="/" className="_1ep48ve" color="white">
                        <p className="_1qnbzph1">Food</p>
                      </a>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <div className="_16m6rsw">
                    <h5 className="_fz2ylp2 ">Our Prime Services</h5>
                    <div className="_n9spha">
                      <a href="/faqs" className="_1ep48ve" color="white">
                        <p className="_1qnbzph1">Luxury Cars</p>
                      </a>

                      <a href="/careers" className="_1ep48ve" color="white">
                        <p className="_1qnbzph1">Bridal Makeup</p>
                      </a>

                      <a href="/privacy" className="_1ep48ve" color="white">
                        <p className="_1qnbzph1">Designer Suites</p>
                      </a>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
          <div className="rightElement">
            <div className="line"></div>
            <div className="_1c5gg8p">
              <div className=" text-center">
                <h5 className="_fz2ylp2" style={{color:"#01024e"}}>EVENT DIARY</h5>
                <div className="_1cntog"></div>
                <h4 className="_1t2cz04u">+92 3030303030</h4>
                <div className="_1cvivhm">
                  {/* <p className="_1qnbzph1">
                    Open 12/7
                    <br />
                    <br />
                  </p> */}
                  <a className="_vrd46t" href="mailto:info@sathchaloo.com">
                    <p className="_zgd71g">info@eventdiary.com</p>
                  </a>
                </div>
                <div className="_5wea01 ">
                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com" className=""><span className="_otbi82"><i class="fab fa-facebook-f"></i></span></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com" className=""><span className="_otbi82"><i class="fab fa-instagram"></i></span></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com" className=""><span className="_otbi82"><i class="fab fa-linkedin-in"></i></span></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.snapchat.com" className=""><span className="_otbi82"><i class="fab fa-snapchat-ghost"></i></span></a>
                </div>
                <p className="_1t4ppqa5">
                  {" "}
                  &copy; {new Date().getFullYear()} by <b>Event Diary</b>{" "}
                  Company Pvt. Ltd. | All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Footer;
