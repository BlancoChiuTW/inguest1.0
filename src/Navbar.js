import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logoSvg from './pic/InGuest_logo.png';

const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center; // 這行確保所有子項目垂直居中
  padding: 20px 0;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;

  div#leftNav, div#rightNav {
    display: flex;
    align-items: center; // 這行確保左右導航的項目垂直居中
  }

  div#leftNav{
    padding-left: 50px;
  }
  div#rightNav{
    padding-right:50px;
  }

  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    align-items: center;
    font-size: 16px;

    li {
      display: flex;
      align-items: center;
      color: #333;
      margin: 0 15px;
      font-weight: 700;
      letter-spacing: 0.0428571em;
      text-transform: uppercase;
      font-size: 20px;
      transition: color 0.3s;

      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-right: 0;
      }

      &:hover {
        color: #ff8c00;
      }
    }
  }
`;

const Logo = styled.img`
  max-height: 50px;
  align-self: center; // 這行確保Logo自己垂直居中，不受其他內容的影響
`;

const StyledLink = styled(Link)`
  color: #333;
  text-decoration: none;
  margin: 0 15px;
  font-weight: 700;
  letter-spacing: 0.0428571em;
  text-transform: uppercase;
  font-size: 20px;
  transition: color 0.3s;

  &:hover {
    color: #ff8c00;
  }
`;

const StyledA = styled.a`
  color: #333;
  text-decoration: none;
  margin: 0 15px;
  font-weight: 700;
  letter-spacing: 0.0428571em;
  text-transform: uppercase;
  font-size: 20px;
  transition: color 0.3s;

  &:hover {
    color: #ff8c00;
  }
`;

function Navbar() {
  return (
    <NavStyled>
      <div id='leftNav'>
        <ul>
          <li><StyledLink to="/">首頁</StyledLink></li>
        </ul>
      </div>

      <Logo src={logoSvg} alt="Your Logo" />

      <div id='rightNav'>
        <ul>
          <li><StyledLink to="/about">關於</StyledLink></li>
          <li><StyledLink to="/help">幫助</StyledLink></li>
          <li><StyledA href="#footer">聯絡</StyledA></li> {/* 使用 StyledA 並設定 href */}
        </ul>
      </div>
    </NavStyled>
  );
}

export default Navbar;