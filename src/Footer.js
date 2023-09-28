import React from 'react';
import styled from 'styled-components';
import logoImage from './pic/InGuest_logo_modified.png';

const StyledFooter = styled.footer`
  background-color: black;
  color: white;
  padding: 40px 0;
  position: relative;
  width: 100%;
`;

const FooterContent = styled.div`
  max-width: 1150px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: left;
`;

const LogoImage = styled.img`
  max-width: 100px;
  margin-bottom: 20px;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 16px;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  margin-top: 20px;

  a {
    color: white;
    margin: 0 15px;
    text-decoration: none;
    transition: color 0.3s;
    display: flex;
    align-items: center;

    &:hover {
      color: #ff8c00;
    }

    &::before {
      content: '🔗';  // 這裡是一個示例icon，您可以替換成其他的或使用真正的icon圖片
      margin-right: 5px;
    }
  }
`;

const Divider = styled.hr`
  border: 0;
  border-top: 1px solid white;
  margin: 20px 0;
`;

const PrivacyLink = styled.a`
  color: white;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #ff8c00;
  }
`;

const Footer = () => {
  return (
    <StyledFooter id="footer">
      <FooterContent>
        <LogoImage src={logoImage} alt="大俠娛樂集團" />
        <FooterLinks>
          <a href="https://www.facebook.com">Facebook</a>
          <a href="https://www.tiktok.com/zh-Hant-TW">TikTok</a>
          <a href="https://www.instagram.com">Instagram</a>
        </FooterLinks>
        <p>Gmail:InGuestoffice@gmail.com</p>

        <Divider />
        <PrivacyLink href="/privacy">隱私政策</PrivacyLink>
        <FooterText>大俠娛樂集團 © 2023. All rights reserved.</FooterText>
      </FooterContent>
    </StyledFooter>
  );
};

export default Footer;
