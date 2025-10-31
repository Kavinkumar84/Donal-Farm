import React from "react";
import "./Footer.css";
import img31 from "../assets/31.png";
import img32 from "../assets/32.png";
import img33 from "../assets/33.png";
import logo2 from "../assets/logo2.png";
import {
  FaFacebookF,
  FaTwitter,
  FaPhoneAlt,
  FaPinterestP,
} from "react-icons/fa";
import {} from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { SlClock } from "react-icons/sl";
import { BsFillBoxSeamFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer_cont">
        <div className="Footer_cont_sub">
          <div className="Footer_cont1">
            <div className="logo1">
              <img src={logo2} alt="" />
            </div>
            <div className="Footer_cont1_txt txt1">
              Farm of laughter and happiness!
            </div>
            <div className="Foter_Social_icons">
              <div className="Social_crcl">
                <FaFacebookF />
              </div>
              <div className="Social_crcl">
                <FaTwitter />
              </div>
              <div className="Social_crcl">
                <IoLogoInstagram />
              </div>
              <div className="Social_crcl">
                <FaPinterestP />
              </div>
            </div>
          </div>
          <hr class="dashed-line" />
          <div className="Footer_cont2">
            <div className="Footer_Address">
              <div className="Footer_txt">Contacts us!</div>
              <div className="Footer_Address_cont1">
                <div className="adrs">
                  <div className="icon_clr">
                    <FaLocationDot />
                  </div>
                  <div className="adrs_txt">
                    Prinsengracht 250, 2501016 PM Amsterdam Netherlands
                  </div>
                </div>
                <div className="adrs">
                  <div className="icon_clr">
                    <FaPhoneAlt />
                  </div>
                  <div className="adrs_txt">Call us: (234) 109-6666</div>
                </div>
                <div className="adrs">
                  <div className="icon_clr">
                    <BsFillBoxSeamFill s />
                  </div>
                  <div className="adrs_txt">Mail: Donalfarms@gmail.com</div>
                </div>
                <div className="adrs">
                  <div className="icon_clr">
                    <SlClock />
                  </div>
                  <div className="adrs_txt">Mon - Sat: 8.00am - 18.00pm</div>
                </div>
              </div>
            </div>
            <div className="Footer_Address">
              <div className="Footer_txt">New Posts</div>
              <div className="Footer_Address_cont1">
                <div className="adrs">
                  <img src={img32} alt="" />
                  <div className="post_txt">
                    <div className="post_txt1">
                      Learn 10 Best Tips for New Formers
                    </div>
                    <div className="post_txt2">30 Oct, 2024</div>
                  </div>
                </div>
                <div className="adrs">
                  <img src={img33} alt="" />
                  <div className="post_txt">
                    <div className="post_txt1">
                      Farmer Sentiment Darkens Hopes Fade
                    </div>
                    <div className="post_txt2">30 Oct, 2024</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Footer_Address">
              <div className="Footer_txt">Quick Links</div>
              <div className="Footer_Address_cont1">
                <li>Learn About Us</li>
                <li>Services We Provide</li>
                <li>View Recent Projects</li>
                <li>Meet The Farmers</li>
                <li>Up Coming Events</li>
              </div>
            </div>
            <div className="Footer_Address">
              <div className="Footer_txt">Subscribe Newsletter</div>
              <div className="Footer_Address_cont1 my-4">
                <input type="email" name="" id="" placeholder="Email*" />
                <div
                  className="touch1"
                  style={{ margin: "0px", width: "100%" }}
                >
                  <span>Subscribe Now</span>
                  <div className="touch_arr">
                    <i class="bi bi-caret-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr class="dashed-line" />
          <div className="Footer_cont3">
            <div className="post_txt1">
              Copyright © 2024 Donal Farm by{" "}
              <span style={{ color: "#f8c32c" }}>Themesflat</span>. All Rights
              Reserved.
            </div>
            <div className="Footer_cont3_txt2">
              <div className="post_txt1">Confidentiality & Privacy</div>
              <div className="post_txt1">Legal Information</div>
              <div className="post_txt1">Return and Refund Policy</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
