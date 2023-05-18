import React from 'react';
export default function Header() {
  return (
    <div>
      <div className="navbar">
        <ul className="unorderlist_1">
          <li className="listitems">
            <div>
              <h3 className="logo">Graana</h3>
            </div>
          </li>
          <li className="listitems">
            <a href="#">BUY</a>
          </li>
          <li className="listitems">
            <a href="#">SELL</a>
          </li>
          <li className="listitems">
            <a href="#">RENT</a>
          </li>
          <li className="listitems">
            <a href="#">INVEST</a>
          </li>
        </ul>
        <div className="leftnavbar">
          <ul className="unorderlist_2">
            <li className="listitems2">
              <a href="#">WANTED</a>
            </li>
            <li className="listitems2">
              <button className="signin">sign in</button>
            </li>
          </ul>
        </div>
      </div>
      <div className="header">
        <h2 className="feature">
          buy or rent vetted properties at the most trusted online real estate
          portal
        </h2>
        <div className="btns">
          <button className="btn">BUY</button>
          <button className="btn">RENT</button>
        </div>
        <div className="input">
          <input
            type="text"
            placeholder="Search by city or area..."
            className="search"
            size="45"
          />
          <button type="submit" className="submit">
            <i class="fa fa-search"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
