'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <>
      <style jsx>{`
        .page-hero {
          background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
          color: white;
          padding: 10rem 1.5rem 6rem;
          text-align: center;
        }
        .page-hero h1 { color: white; margin-bottom: 1rem; }
        .content { padding: 6rem 1.5rem; max-width: 1200px; margin: 0 auto; }
        .content h2 { color: var(--color-primary); margin: 3rem 0 1.5rem; }
        .values-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; margin: 3rem 0; }
        .value-card { background: var(--color-background); padding: 2rem; border-radius: 8px; border-left: 4px solid var(--color-accent); }
        .value-card h3 { color: var(--color-primary); margin-bottom: 1rem; }
        @media (min-width: 768px) {
          .page-hero, .content { padding-left: 3rem; padding-right: 3rem; }
        }
      `}</style>

      <Navbar />

      <section className="page-hero">
        <h1>關於我們</h1>
        <p>深耕南部 24 年的人力仲介專家</p>
      </section>

      <section className="content">
        <h2>公司簡介</h2>
        <p>
          我們是南部最專業的人力仲介服務公司，自 2000 年成立以來，專注於為南部地區的企業與家庭提供優質的人力媒合服務。
          經過 24 年的深耕，我們累積了豐富的經驗與廣大的人力資源網絡，成功為超過 500 家企業解決人力需求，
          媒合超過 3000 位看護工與工廠移工，獲得客戶一致好評。
        </p>

        <h2>服務理念</h2>
        <p>
          我們秉持「專業、誠信、用心」的服務理念，以客戶需求為出發點，提供最合適的人力解決方案。
          我們深知人力資源對企業營運的重要性，也理解家庭對於照護品質的期待，
          因此我們嚴格把關每一位候選人的資格與專業能力，確保提供最優質的服務。
        </p>

        <div className="values-grid">
          <div className="value-card">
            <h3>專業服務</h3>
            <p>24年經驗累積，提供最專業的人力媒合與諮詢服務。</p>
          </div>
          <div className="value-card">
            <h3>誠信為本</h3>
            <p>合法立案，透明收費，確保客戶與勞工雙方權益。</p>
          </div>
          <div className="value-card">
            <h3>用心服務</h3>
            <p>定期追蹤關懷，快速解決問題，建立長期信賴關係。</p>
          </div>
          <div className="value-card">
            <h3>在地優勢</h3>
            <p>深耕南部，了解在地需求，提供最即時的服務。</p>
          </div>
        </div>

        <h2>服務據點</h2>
        <p>
          總部設立於高雄市，並在台南、屏東設有服務據點，提供南部地區完整的在地服務。
          我們的專業團隊隨時待命，無論您身在何處，都能獲得最即時的協助。
        </p>
      </section>

      <Footer />
    </>
  )
}
