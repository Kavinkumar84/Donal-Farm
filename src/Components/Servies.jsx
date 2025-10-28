import React from "react";
import img11 from "../assets/11.png";
import img12 from "../assets/12.png";
import img13 from "../assets/13.png";
import img14 from "../assets/14.png";
import img15 from "../assets/15.png";
import img16 from "../assets/16.png";
import img17 from "../assets/17.png";

import "./Services.css";
// import { Container } from "lucide-react";
import { Col, Row, Container } from "react-bootstrap";

const Services = () => {
  return (
    <div className="whl_service">
        <div className="service">
      <div className="service_cont">
        <div className="curvedBod">
          <img src={img11} alt="Curved section" />
        </div>
        <div className="col">
          <br />
          <div className="bgrnd"></div>
          <div className="col_cont">
            <div
              className="txt1"
              style={{ color: "#278D45", fontWeight: "900", fontSize: "25px" }}
            >
              What Is Our Expertise?
            </div>
            <div className="txt10">
              We Providing The <br /> Best Agricultural Services
            </div>
            <div className="info_txt2" style={{ lineHeight: "45px" }}>
              Duis eleifend euismod arcu, nec faucibus mauris finibus id.
              Integer mattis, tellus non finibus rutrum.
            </div>
            <img src={img12} alt="" />
            {/* <Container fluid="lg" style={{width :"100%" , border :"2px solid red"}}> */}
            <div className="serv_cont">
              <Row>
                <Col lg={3}>
                  <div className="serv_col_cont">
                    <div className="ser_cont_box">
                      <div className="ser_crcl">
                        <img src={img13} alt="" />
                      </div>
                      <div className="ser_cont_box1">
                        <div className="ser_cont_box1_txt1">
                          Clean Vegetables
                        </div>
                        <div className="yel_line"></div>
                        <div className="ser_cont_box1_txt2">
                          Ultrices sagittis orci a scelerisque purus semper eget
                          duis at. Sollictudin nibh <br />
                          sit amet commodo nulla.
                        </div>
                        <img src={img17} style={{width:"130px", height:"80px"}} alt="" />
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={3}>
                 <div className="serv_col_cont">
                    <div className="ser_cont_box">
                      <div className="ser_crcl">
                        <img src={img14} alt="" />
                      </div>
                      <div className="ser_cont_box1">
                        <div className="ser_cont_box1_txt1">
                          Pure Cow's Milk
                        </div>
                        <div className="yel_line"></div>
                        <div className="ser_cont_box1_txt2">
                          Ultrices sagittis orci a scelerisque purus semper eget
                          duis at. Sollictudin nibh <br />
                          sit amet commodo nulla.
                        </div>
                        <img src={img17} style={{width:"130px", height:"80px"}} alt="" />
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="serv_col_cont">
                    <div className="ser_cont_box">
                      <div className="ser_crcl">
                        <img src={img15} alt="" />
                      </div>
                      <div className="ser_cont_box1">
                        <div className="ser_cont_box1_txt1">
                          Clean Chicken And Eggs
                        </div>
                        <div className="yel_line"></div>
                        <div className="ser_cont_box1_txt2">
                          Ultrices sagittis orci a scelerisque purus semper eget
                          duis at. Sollictudin nibh <br />
                          sit amet commodo nulla.
                        </div>
                        <img src={img17} style={{width:"130px", height:"80px"}} alt="" />
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="serv_col_cont">
                    <div className="ser_cont_box">
                      <div className="ser_crcl">
                        <img src={img16} alt="" />
                      </div>
                      <div className="ser_cont_box1">
                        <div className="ser_cont_box1_txt1">
                          Fertilizer Product
                        </div>
                        <div className="yel_line"></div>
                        <div className="ser_cont_box1_txt2">
                          Ultrices sagittis orci a scelerisque purus semper eget
                          duis at. Sollictudin nibh <br />
                          sit amet commodo nulla.
                        </div>
                        <img src={img17} style={{width:"130px", height:"80px"}} alt="" />
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
            {/* </Container> */}
          </div>
        </div>
      </div>
    </div>
    </div>
  
  );
};

export default Services;
