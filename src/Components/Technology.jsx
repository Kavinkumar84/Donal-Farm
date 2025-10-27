import React from 'react'
import {Col, Row, Container } from "react-bootstrap";
import img5 from "../assets/5.png";
import img6 from "../assets/6.png";
import img7 from "../assets/7.png";

const Technology = () => {
  return (
    <div>
          <div className="cont">
                <div className="yellow">
                  <div className="box_cont">
                    <Container fluid="xl">
                      <Row>
                        <Col lg={4}>
                          <div
                            className="box"
                            style={{ backgroundImage: `url(${img5})` }}
                          >
                            <div className="box_txt bg-light">
                              We Use New Technology
                            </div>
                            <div className="hov_txt"></div>
                          </div>
                        </Col>
                        <Col lg={4}>
                          <div
                            className="box"
                            style={{ backgroundImage: `url(${img6})` }}
                          >
                            <div className="box_txt bg-light">Making Healthy Foods</div>
                          </div>
                        </Col>
                        <Col lg={4}>
                          <div
                            className="box"
                            style={{ backgroundImage: `url(${img7})` }}
                          >
                            <div className="box_txt bg-light ">
                              Reforming In The Systems
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </div>
              </div>
    </div>
  )
}

export default Technology