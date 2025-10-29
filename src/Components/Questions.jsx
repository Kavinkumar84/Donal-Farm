import React from "react";
import "./Questions.css";
import img12 from "../assets/12.png";
import img25 from "../assets/25.png";
import { Accordion } from "react-bootstrap";
const Questions = () => {
  return (
    <div className="Questions">
      <div className="qus">
        <div className="ques_cont">
          <div className="right_ques">
            <div className="ri_ques_img">
              <div className="ques_img">
                <img src={img12} alt="" />
              </div>
              <div className="txt1" style={{ color: "#278D45" }}>
                Frequently Asked Questions
              </div>
            </div>
            <div className="txt11">
              Most Frequently Asked Questions About The Farm.
            </div>
            <div className="txt4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              sodales faucibus.
            </div>
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  What proof do you need for Carer’s tickets?
                </Accordion.Header>
                <Accordion.Body>
                  Under 2’s are free and will need a ticket. Tickets are free of
                  charge but attract a booking fee to cover the cost of
                  processing the booking. If you book an under 2 ticket please
                  bring with you proof of age.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Do I have to pay extra for the shows?
                </Accordion.Header>
                <Accordion.Body>
                  Under 2’s are free and will need a ticket. Tickets are free of
                  charge but attract a booking fee to cover the cost of
                  processing the booking. If you book an under 2 ticket please
                  bring with you proof of age.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Can I bring my team or friends?
                </Accordion.Header>
                <Accordion.Body>
                  Under 2’s are free and will need a ticket. Tickets are free of
                  charge but attract a booking fee to cover the cost of
                  processing the booking. If you book an under 2 ticket please
                  bring with you proof of age.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <div>
                  <Accordion.Header className="aco_head">
                    {" "}
                    Can I join the farm as a permanent member?
                  </Accordion.Header>
                </div>
                <Accordion.Body>
                  Under 2’s are free and will need a ticket. Tickets are free of
                  charge but attract a booking fee to cover the cost of
                  processing the booking. If you book an under 2 ticket please
                  bring with you proof of age.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="left_ques">
            <div className="left_que_cont">
              <div className="img_left_que">
                <img src={img25} alt="" />
              </div>
              <div className="gr_qu">
                <div className="lf_gr_qu">
                  <div className="lf_txt">
                    You didn't find your question? See more questions and ask us
                    today!
                  </div>
                  <div className="touch1">
                  <span>See our Services</span>
                  <div className="touch_arr">
                    <i class="bi bi-caret-right"></i>
                  </div>
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

export default Questions;
