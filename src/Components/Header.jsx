import React from "react";
import "./Header.css";
import { Fence } from "lucide-react";
import styled from 'styled-components';
import Checkbox from "../Buttons/Checkbox";
import logo from '../assets/logo.png'
const Header = () => {
  return (
    <div>
      <header>
        <div className="image">
          <img src={logo} alt="" />
        </div>
        <div className="Navbar ">
          <nav>
            <div className="Home">
              <a className="Home_a" href="">
                Home
              </a>
              <div className="Home_drop">
                <li>
                  <a href="">Home 1</a>
                </li>
                <li>
                  <a href="">Home 2</a>
                </li>
                <li>
                  <a href="">Home 3</a>
                </li>
              </div>
            </div>

            <div className="Home">
              <a className="Home_a" href="">
                Page
              </a>
              <div className="Home_drop">
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">Our Commitments</a>
                </li>
                <li>
                  <a href="">Our Events</a>
                </li>
                <li>
                  <a href="">Our Farmers</a>
                </li>
                <li>
                  <a href="">Our History</a>
                </li>
                <li>
                  <a href="">Coming Soon</a>
                </li>
                <li>
                  <a href="">404</a>
                </li>
                <li>
                  <a href="">Event Detail</a>
                </li>
                <li>
                  <a href="">FAQs</a>
                </li>
                <li>
                  <a href="">Gallery</a>
                </li>
                <li>
                  <a href="">Testimonial</a>
                </li>
              </div>
            </div>
            <div className="Home">
              <a className="Home_a" href="">
                Portfolio
              </a>
              <div className="Home_drop">
                <li>
                  <a href="">Portfolio Style 1</a>
                </li>
                <li>
                  <a href="">Portfolio Style 2</a>
                </li>
                <li>
                  <a href="">Portfolio Style 3</a>
                </li>
                <li>
                  <a href="">Portfolio Details</a>
                </li>
              </div>
            </div>
            <div className="Home">
              <a className="Home_a" href="">
                Shop
              </a>
              <div className="Home_drop">
                <li>
                  <a href="">Shop Products</a>
                </li>
                <li>
                  <a href="">Shop Details</a>
                </li>
                <li>
                  <a href="">Shop Cart</a>
                </li>
                <li>
                  <a href="">Wishlist</a>
                </li>
                <li>
                  <a href="">Checkout</a>
                </li>
                <li>
                  <a href="">Order Tracking</a>
                </li>
                <li>
                  <a href="">My Account</a>
                </li>
                <li>
                  <a href="">Order Detail</a>
                </li>
              </div>
            </div>
            <div className="Home">
              <a className="Home_a" href="">
                Service
              </a>
              <div className="Home_drop">
                <li>
                  <a href="">Our Services</a>
                </li>
                <li>
                  <a href="">Service Detail</a>
                </li>
              </div>
            </div>
            <div className="Home">
              <a className="Home_a" href="">
                Blog
              </a>
              <div className="Home_drop">
                <li>
                  <a href="">Blog Full Width</a>
                </li>
                <li>
                  <a href="">Blog Right Sidebar</a>
                </li>
                <li>
                  <a href="">Blog Single</a>
                </li>
              </div>
            </div>
            <div className="Home">
              <a href="" className="Home_a">
                Contact
              </a>
            </div>
          </nav>
        </div>
        <div className="icons d-flex align-items-center gap-5 ">
          <div className="touch">
            <span>Get In Touch!</span>
            <div className="touch_arr">
              <i class="bi bi-caret-right"></i>
            </div>
          </div>
          <div className="icon  ">
            <div className="search fs-5">
              <i class="bi bi-search"></i>
            </div>
            <div className="search fs-5">
              <i class="bi bi-basket"></i>
            </div>
          </div>
          <div
            className="search"
            id="fence"
            style={{ backgroundColor: "#0d401c" }}
          >
            <Fence
              size={24}
              color="white"
              background="#fffffeff"
              style={{ fill: "white" }}
            />
          </div>
          <div className="menu_bar">
          <Checkbox />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
