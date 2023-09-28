import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  max-width: 1300px;
  margin: 60px auto 0;
  padding: 0 20px 80px;
`;

function About() {
  return (
    <AboutContainer>
      <h1>關於「隱客(InGuest)」</h1>
      <p>歡迎您來到「隱客(InGuest)」，一個猶如古老江湖的客棧，提供每位過路的俠客一個休憩的場所。在這裡，您可以品嚐一杯熱茶，並聆聽我們以說書形式，娓娓道來的動人故事，讓您感受那份深刻的體驗和迴響。</p>
      <h2>我們的服務</h2>
      <p>隱客不僅僅是一個網站，更是一個故事的集散地。我們以說書的形式，帶您進入一個個深刻的故事中，如同古時客棧中的說書人，讓您在繁忙的生活中，找到一片屬於自己的江湖。</p>
      <h2>我們的成立初衷</h2>
      <p>「隱客(InGuest)」的背後，是由兩位有著武俠夢和滿懷江湖氣的熱血青年所創立。我們的友誼已經長達16年。在年少時期，滿腔熱血的我們成立了「大俠娛樂集團」，帶著武俠、江湖夢想。隨著時間的流逝，我們各自走向不同的人生道路，一位走向了電子系的研究，而另一位則投身於中文系的學術研究。然而，我們的夢想並未因此而熄滅。在相隔多年後，我們的人生路徑再度交匯，「大俠娛樂集團」也得以重獲新生。於是，這個網站應運而生，旨在將我們的夢想和熱情，分享給更多的人。</p>
    
    </AboutContainer>
  );
}

export default About;