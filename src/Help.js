import React from 'react';
import styled from 'styled-components';

const HelpContainer = styled.div`
  max-width: 1300px;
  margin: 60px auto 0;
  padding: 0 20px 80px;
`;

const FAQ = styled.div`
  margin-top: 20px;
`;

const Question = styled.h2`
  font-weight: bold;
`;

const Answer = styled.p`
  margin-left: 20px;
`;

function Help() {
  return (
    <HelpContainer>
      <h1>幫助中心</h1>
      <p>這裡是您的幫助頁面的內容。您可以在這裡提供常見問題解答或其他有助於用戶的資訊。</p>

      <FAQ>
        <Question>Q：如果收到的商品有瑕疵怎麼辦？</Question>
        <Answer>A： 若您收到的商品有任何瑕疵，請您在收到商品後的7天內聯絡我們的客服團隊，並提供商品瑕疵的照片。我們將進行確認並為您提供適當的解決方案，例如更換新商品或退款。</Answer>
      </FAQ>

      <FAQ>
        <Question>Q：我想退換貨，如果收到的商品想退換怎麼辦？</Question>
        <Answer>A： 如果您不滿意所購買的商品或想進行退換貨，請在收到商品後的14天內聯絡我們的客服團隊。請確保商品未使用、未洗滌，並保持原始包裝完整。我們將提供退換貨的詳細流程指引。</Answer>
      </FAQ>

      <FAQ>
        <Question>Q：我下單的時候有貨，後來又告知沒有貨(售完)？</Question>
        <Answer>A： 我們深感抱歉給您帶來的不便。由於商品存貨數量與實際銷售速度有時會有些許落差，可能會出現這種情況。如果您所訂購的商品售完，我們的客服團隊將儘速通知您，並協助您更改訂單或進行退款。</Answer>
      </FAQ>
    </HelpContainer>
  );
}

export default Help;
