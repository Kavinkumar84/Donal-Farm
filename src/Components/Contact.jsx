import React from "react";
import "./Contact.css";
import img30 from "../assets/30.png";
import img12 from "../assets/12.png";
import { Col, Row } from "react-bootstrap";
import { IoLocationSharp } from "react-icons/io5";
import { TiContacts, TiTick } from "react-icons/ti";
import { BsClock } from "react-icons/bs";
const Contact = () => {
  return (
    <div className="Contact">
      <div className="Contact_container">
        <Row>
          <Col lg={5}>
            <div className="Contact_col">
              <div className="Contact_col1">
                <img src={img30} alt="" />
              </div>
              <div className="Contact_col2 d-flex justify-content-center align-items-center">
                <div className="Contact_col_sub">
                  <div className="Contact_col_sub1">
                    <div className="crcl">
                      <IoLocationSharp />
                    </div>
                    <div className="Contact_address">
                      <div className="Contact_txt1">Farm Address</div>
                      <div className="Contact_txt2">
                        Prinsengracht 250, 2501016 PM <br />
                        Amsterdam Netherlands
                      </div>
                    </div>
                  </div>
                  <div className="Contact_col_sub1">
                    <div className="crcl">
                      <TiContacts />
                    </div>
                    <div className="Contact_address">
                      <div className="Contact_txt1">Contact Us</div>
                      <div className="Contact_txt2">
                        Donalfarms@gmail.com <br />
                        Call Us 24/7: +1 987 654 3210
                      </div>
                    </div>
                  </div>
                  <div className="Contact_col_sub1">
                    <div className="crcl">
                      <BsClock />
                    </div>
                    <div className="Contact_address">
                      <div className="Contact_txt1">Working Hours</div>
                      <div className="Contact_txt2">
                        Mon - Fri: 8.00am - 18.00pm <br />
                        Sat: 9.00am - 17.00pm Holidays: Closes
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={7}>
            <div className="Contact_col" style={{ backgroundColor: "#0D401C" }}>
              <div className="Container_col_sub">
                <div className="txt1">Let's Cooperate Together</div>
                <div className="Container_col_sub_txt1">Contact Us Today!</div>
                <div className="txt3" style={{ color: "white" }}>
                  We will reply you within 24 hours via email, thank you for
                  contacting
                </div>
                <div className="Container_whead_img">
                  <img src={img12} alt="" />
                </div>
                <form className="Contact_form">
                  <div className="imp1">
                    <input type="text" name="" id="" placeholder="Name*" />
                    <input type="email" name="" id="" placeholder="E-mail*" />
                  </div>
                  <div className="imp1">
                    <input type="tel" name="" id="" placeholder="Mobile*" />
                    <select name="" id="">
                      <option value="">You need support?</option>
                      <option value="">You need support?1</option>
                      <option value="">You need support?2</option>
                      <option value="">You need support?3</option>
                    </select>
                  </div>
                  <div className="imp2">
                    <input type="text" name="" id="" />
                  </div>
                </form>
                <div className="right_txt1_cont">
                  <input type="checkbox" name="" id="check" />
                  <div className="right_txt4">Awesome Harvest of Wheat</div>
                  <div className="touch1" style={{ margin: "0px" }}>
                    <span>Send Message</span>
                    <div className="touch_arr">
                      <i class="bi bi-caret-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Contact;
