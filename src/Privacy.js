import React from 'react';
import styled from 'styled-components';

const PrivacyContainer = styled.div`
  max-width: 1300px;
  margin: 60px auto 0;
  padding: 0 20px 80px;
`;

function Privacy() {
  return (
    <PrivacyContainer>
      <h1>隱私權政策</h1>
      <section>
        <h2>一、隱私權保護政策的適用範圍</h2>
        <p>1.1 本隱私權保護政策說明了當您使用本網站時，我們如何處理您的個人識別資料。</p>
        <p>1.2 本政策不適用於本網站所提供的外部連結網站。</p>
        <p>1.3 未經本網站委託或參與管理的第三方人員不在本政策的適用範圍內。</p>
      </section>

      <section>
        <h2>二、資料的蒐集與使用方式</h2>
        <p>2.1 當您使用本網站的互動性服務，如服務信箱、問卷調查等，我們可能會蒐集您的姓名、電子郵件地址、連絡方式及使用時間。</p>
        <p>2.2 本網站的部分圖片由指定單位提供。</p>
        <p>2.3 在您瀏覽本網站時，我們的伺服器會記錄您的IP位址、使用時間、瀏覽器資訊及您的瀏覽行為，僅供內部分析以增進服務品質。</p>
        <p>2.4 我們將對問卷調查結果進行統計與分析。統計數據及說明文字可能會被公開，但不會揭露任何個人資訊。</p>
        <p>2.5 除非有法律要求或您已同意，否則我們不會將您的個人資料提供給第三方或用於其他目的。</p>
      </section>

      <section>
        <h2>三、資料之保護</h2>
        <p>3.1 本網站採取各種必要措施，如防火牆和防毒系統，以確保您的資料安全。</p>
        <p>3.2 僅經過授權的人員可以接觸您的個人資料，且必須遵守保密義務。違反者將面臨法律處罰。</p>
        <p>3.3 若因業務需要與第三方合作，我們將要求其遵守保密義務並進行必要的監督。</p>
      </section>

      <section>
        <h2>四、網站對外的相關連結</h2>
        <p>4.1 本網站可能包含其他網站的連結。這些網站的隱私政策可能與我們不同，請您參考相關網站的隱私政策。</p>
      </section>

      <section>
        <h2>五、Cookie之使用</h2>
        <p>5.1 為提供更好的使用體驗，本網站可能會在您的裝置上設置和使用Cookie。</p>
        <p>5.2 若您不希望接受Cookie，您可以調整瀏覽器設定。但這可能導致某些功能無法正常使用。</p>
      </section>

      <section>
        <h2>六、隱私權保護政策之修正</h2>
        <p>6.1 本網站有權修改隱私權政策。當政策有所更改時，我們會在網站上公告。</p>
      </section>
    </PrivacyContainer>
  );
}

export default Privacy;
