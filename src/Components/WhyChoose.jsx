import React from "react";
import "./WhyChoose.css";
import img18 from "../assets/18.png";
import img12 from "../assets/12.png";
import { FaPlay } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
const WhyChoose = () => {
  return (
    <div className="choose">
      <div className="choose_cont">
        <div className="whole_choose">
          <div className="left_choose">
            <div className="box_yellow">
              <div className="box_yellow_sub">
                <div className="brown_crcl">
                  <div className="play">
                    <FaPlay />
                  </div>
                </div>
              </div>
            </div>
            <div className="choose_img">
              <img src={img18} alt="" />
            </div>
          </div>
          <div className="right_choose">
            <div className="right_cont">
              <div className="ch_h1">
                <img src={img12} alt="" />
                <span
                  className="txt1"
                  style={{
                    color: "#278D45",
                    fontWeight: "900",
                    fontSize: "25px",
                  }}
                >
                  Why Choose DonalFarm?
                </span>
              </div>
              <div className="txt10">
                Our Crops Are Grown With Wonderful Love Of Nature
              </div>
              <div className="info_txt2" style={{ lineHeight: "25px" }}>
                Wendell Berry said it best when he said that “eating is an
                agricultural act.” Our mission is to change the food system by
                providing a healthy, fresh alternative to industrial food.
                Large-scale agriculture often uses pesticides, herbicides,
                genetic modification.
              </div>
              <div
                className="touch1"
                style={{
                  width: "270px",
                  backgroundColor: "#0d401c",
                  color: "white",
                }}
              >
                <span>More Why Choose Us</span>
                <div className="touch_arr">
                  <i class="bi bi-caret-right"></i>
                </div>
              </div>
            </div>
            <div className="right_cont2">
              <div className="right_subcont">
                <div className="subLine">
                  <div className="subcont">
                    <div className="circle_tick1" style={{ fontSize: "30px" }}>
                      <TiTick />
                    </div>
                    <div className="subcont_txt1">100% Organic Products
</div>
                    <div className="subcont_txt2">Ultrices sagittis orci a scelerisque purus semper eget duis at. Sollicitudin nibh sit amet commodo nulla.</div>
                  </div>
                  <div className="vert_line"></div>
                </div>
                <div className="subLine">
                  <div className="subcont">
                    <div className="circle_tick1" style={{ fontSize: "30px" }}>
                      <TiTick />
                    </div>
                    <div className="subcont_txt1">Absolute Quality</div>
                    <div className="subcont_txt2">Ultrices sagittis orci a scelerisque purus semper eget duis at. Sollicitudin nibh sit amet commodo nulla.</div>
                  </div>
                  <div className="vert_line"></div>
                </div>
                <div className="subLine">
                  <div className="subcont">
                    <div className="circle_tick1" style={{ fontSize: "30px" , fontWeight :'200'}}>
                      <TiTick />
                    </div>
                    <div className="subcont_txt1">Environmentally Friendly</div>
                    <div className="subcont_txt2">Ultrices sagittis orci a scelerisque purus semper eget duis at. Sollicitudin nibh sit amet commodo nulla.</div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
