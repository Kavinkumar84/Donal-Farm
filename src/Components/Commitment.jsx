import React from "react";
import img12 from "../assets/12.png";
import img19 from "../assets/19.png";
import img20 from "../assets/20.png";
import img21 from "../assets/21.png";
import img22 from "../assets/22.png";
import img23 from "../assets/23.png";
import img24 from "../assets/24.png";
import "./Commitment.css";
const Commitment = () => {
  return (
    <div className="Commitment">
      <div className="commit_cont">
        <div className="whole_comm_cont">
          <div className="right_comm">
            <div className="r-com-h1">
              <img src={img12} alt="" />
              <div className="txt1" style={{ color: "#278D45" }}>
                Our Commitment
              </div>
            </div>
            <div className="txt11">
              We Always Bring <br />Customers Green & Clean Products
            </div>
            <div className="txt4" style={{ color: "#707875" }}>
              At Capital Gardens we believe that we have a duty to adhere to
              good environmental practice, and operate in a sustainable manner.
              As lovers of plants and the environment it is only natural for us
              to want to reduce man’s impact.
            </div>
            <div className="comm_imgs">
              <div className="cont_img">
                <div className="comm_txt">
                    <img src={img21} alt="" />
                </div>
                <div className="txt_comm">
                  Minimal <br />Chemicals..
                </div>
              </div>
              <div className="cont_img">
                <div className="comm_txt">
                    <img src={img22} alt="" />
                </div>
                <div className="txt_comm">
                  Minimal <br />Chemicals..
                </div>
              </div>
              <div className="cont_img">
                <div className="comm_txt">
                    <img src={img23} alt="" />
                </div>
                <div className="txt_comm">
                  All Organic <br />Waste Reused
                </div>
              </div>
              <div className="cont_img">
                <div className="comm_txt">
                    <img src={img24} alt="" />
                </div>
                <div className="txt_comm">
                 Do Not Use <br />Artificial Light
                </div>
              </div>
                
            </div>
            <div
                className="touch1"
                style={{
                  width: "310px",
                  backgroundColor: "#0d401c",
                  color: "white",
                }}
              >
                <span>See More Our Commitments</span>
                <div className="touch_arr">
                  <i class="bi bi-caret-right"></i>
                </div>
              </div>
          </div>
          <div className="left_comm">
            {/* <img src={img19} alt="" />   */}
              <img src={img19} className="img19" alt="" />
              <br /><br />
            <div className="bigimg">
              <img src={img20} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commitment;
