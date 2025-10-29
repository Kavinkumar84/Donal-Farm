import React from "react";
import img12 from "../assets/12.png";
import img26 from "../assets/26.png";
import img27 from "../assets/27.png";
import img28 from "../assets/28.png";
import img29 from "../assets/29.png";
import "./Discover.css";
import { Col, Row } from "react-bootstrap";
const Discover = () => {
  return (
    <div className="Discover">
      {/* <div className="Discover_bg_img">
            <img src={img26} alt="" />
        </div> */}
      <div className="Discover_container">
        <Row>
          <Col lg={4}>
            <div
              className="Discover_col"
              style={{ backgroundImage: `url(${img27})` }}
            >
                <div className="col_img">
                    <img src={img12} alt="" />
                </div>
              <div className="txt11">Discover Farm Tour</div>
              <div className="txt4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
                cursus massa.
              </div>
              <div className="read">Read More</div>
            </div>
          </Col>
          <Col lg={4}>
            <div
              className="Discover_col"
              style={{ backgroundImage: `url(${img28})` }}
            >
                <div className="col_img">
                    <img src={img12} alt="" />
                </div>
              <div className="txt11">Farm In Summer</div>
              <div className="txt4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
                cursus massa.
              </div>
              <div className="read">Read More</div>
            </div>
          </Col>
          <Col lg={4}>
            <div
              className="Discover_col"
              style={{ backgroundImage: `url(${img29})` }}
            >
                <div className="col_img">
                    <img src={img12} alt="" />
                </div>
              <div className="txt11">Children's Summer Camp</div>
              <div className="txt4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
                cursus massa.
              </div>
              <div className="read">Read More</div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Discover;
