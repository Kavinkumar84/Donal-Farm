import React from "react";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import { Carousel, Col, Row, Container } from "react-bootstrap";
import img5 from "../assets/5.png";
import img6 from "../assets/6.png";
import img7 from "../assets/7.png";

const ImageCarousel = () => {
  return (
    <div className="caro">
      <div style={{ position: "relative" }}>
        <Carousel fade>
          <Carousel.Item className="captions">
            <img src={img1} alt="Test Img" />
            <Carousel.Caption>
              <div className="txt">
                <div className="txt1">
                  Better Agriculture for Better Future{" "}
                </div>
                <div className="txt2">Every Crop Counts,</div>
                <div className="txt2">Every Farmer Matters.</div>
                <div className="txt3">
                  The paramount doctrine of the economic and technological
                  euphoria of recent{" "}
                </div>
                <div className="touch1">
                  <span>See our Services</span>
                  <div className="touch_arr">
                    <i class="bi bi-caret-right"></i>
                  </div>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src={img2} alt="Test Img" />
            <Carousel.Caption>
              <div className="txt">
                <div className="txt1">Better Agriculture for Better Future</div>
                <div className="txt2">Every Crop Counts,</div>
                <div className="txt2">Every Farmer Matters.</div>
                <div className="txt3">
                  The paramount doctrine of the economic and technological
                  euphoria of recent{" "}
                </div>
                <div className="touch1">
                  <span>See our Services</span>
                  <div className="touch_arr">
                    <i class="bi bi-caret-right"></i>
                  </div>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src={img3} alt="Test Img" />

            <Carousel.Caption>
              <div className="txt">
                <div className="txt1">Better Agriculture for Better Future</div>
                <div className="txt2">Every Crop Counts,</div>
                <div className="txt2">Every Farmer Matters.</div>
                <div className="txt3">
                  The paramount doctrine of the economic and technological
                  euphoria of recent{" "}
                </div>
                <div className="touch1">
                  <span>See our Services</span>
                  <div className="touch_arr">
                    <i class="bi bi-caret-right"></i>
                  </div>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="imge1">
        <img src={img4} alt="Test Img" />
      </div>
      {/* <div className="cont">
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
      </div> */}
      <br />
      <br />
      <br />
    </div>
  );
};

export default ImageCarousel;
