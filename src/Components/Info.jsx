import React from "react";
import img8 from "../assets/8.png";
import img9 from "../assets/9.png";
import img10 from "../assets/10.png";
import { TiTick } from "react-icons/ti";
const Info = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="info_cont">
        <div className="left_info ">
          <div className="txt1" style={{ color: "#278D45", fontWeight: "900" }}>
            We have 30 years of agriculture & eco farming experience
          </div>
          <h1 className="info_txt1">
            Providing The Finest Products To The Best Feed Suppliers.
          </h1>
          <div className="info_txt2">
            Elders is headquartered in Adelaide, South Australia, where our
            story began in 1839, but our expansive network now reaches every
            corner of Australia.
          </div>
          <div className="info_txt2">
            At Mycorrhizal Applications (MA), we are dedicated to sustainability
            by providing the agriculture, horticulture, landscaping, and
            forestry industries with efficient and effective microbial-based
            biorational solutions. As the world’s leading manufacturer and
            supplier of mycorrhizal soil inoculants, MA researches, produces,
            and markets mycorrhizal fungi which accelerate plant performance.
          </div>
          <div
            className="touch1"
            style={{ backgroundColor: "#0d401c", color: "white" }}
          >
            <span>More About Us</span>
            <div className="touch_arr">
              <i class="bi bi-caret-right"></i>
            </div>
          </div>
          <img
            src={img8}
            alt=""
            style={{ width: "100%", height: "350px", borderRadius: "15px" }}
          />
        </div>
        <div className="right_info ">
          <div className="right_box1">
            <div className="right_box1_sub ">
              <div className="right_txt1">Trust By Clients</div>
              <div className="right_txt2">12,980 +</div>
              <div className="right_txt3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                non porttitor felis.
              </div>
            </div>
          </div>
          <div className="right_box2">
            <div className="div right_box2_sub">
              <div className="right_txt_cont">
                <div className="right_txt1_cont">
                  <div className="circle_tick">
                    <TiTick />
                  </div>
                  <div className="right_txt4">Modern Agriculture Equipment</div>
                </div>
                <div className="right_txt1_cont">
                  <div className="circle_tick">
                    <TiTick />
                  </div>
                  <div className="right_txt4">Awesome Harvest of Wheat</div>
                </div>
                <div className="right_txt1_cont">
                  <div className="circle_tick">
                    <TiTick />
                  </div>
                  <div className="right_txt4">Fresh Fruits & Vegetables</div>
                </div>
              </div>
              <hr />
              <div className="right_box3">
                <div className="sub_Rbox1">
                  <div className="crl1">
                    <img src={img9} alt="" />
                  </div>
                  <div className="sub_rTxt1">
                    Highly Qualified & Specialized Farmers
                  </div>
                </div>
                <div className="sub_Rbox1">
                  <div className="crl1">
                    <img src={img10} alt="" />
                  </div>
                  <div className="sub_rTxt1">
                    Fruit, Vegetables And Livestock
                  </div>
                </div>
                <div className="read">Read More</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
