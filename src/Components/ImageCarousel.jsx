import React from "react";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import { Carousel } from "react-bootstrap";
import './ImageCarousel.css'
const ImageCarousel = () => {
  return (
    <div className="caro">
      <div className="carousel">
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
        <img src={img4} alt="" />
      </div>
    </div>
  );
};

export default ImageCarousel;
