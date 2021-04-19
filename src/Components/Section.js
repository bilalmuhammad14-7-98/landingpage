import React from "react";
import { Button, Col, Row, Container, Image } from "react-bootstrap";
import wedding from "../Images/wedding.png";
import styles from "../Styles/Styles.module.css";
import wed1 from "../Images/wed1.gif";
import wed2 from "../Images/wed2.gif";
import hd from "../Images/hd.gif"

const Section = () => {
  return (
    <div>
      <Container fluid="md">
        {/* this is row number  1 */}
        <Row className="my-5">
          <Col xl={6} lg={6} md={6} xs={12} className="mt-3">
            <div className={styles.img}>
              {/* <img src={wedding} alt="wedding.png"/>
               */}

              <Image src={wed2} fluid />
            </div>
          </Col>
          <Col xl={6} lg={6} md={6} xs={12} className="mt-3">
            <div className={styles.content1}>
              <h2>Welcome to Event Diary</h2>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
            </div>
          </Col>
        </Row>

        <Row className="my-5">
          <Col xl={6} lg={6} md={6} xs={12} className="mt-3">
            <div className={styles.content1}>
              <h2>Welcome to Event Diary</h2>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
            </div>
          </Col>
          <Col xl={6} lg={6} md={6} xs={12} className="mt-3">
            <div className={styles.img}>
              {/* <img src={wedding} alt="wedding.png"/>
               */}

              <Image src={wed1} fluid />
            </div>
          </Col>
        </Row>

        <Row className="my-5">
          <Col xl={6} lg={6} md={6} xs={12} className="mt-3">
            <div className={styles.img}>
              {/* <img src={wedding} alt="wedding.png"/>
               */}

              <Image src={hd} fluid />
            </div>
          </Col>
          <Col xl={6} lg={6} md={6} xs={12} className="mt-3">
            <div className={styles.content1}>
              <h2>Welcome to Event Diary</h2>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section;
