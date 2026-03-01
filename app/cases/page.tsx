'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function CasesPage() {
  const cases = [
    {
      title: '高雄某電子代工廠',
      category: '工廠移工',
      description: '為該廠媒合 50 名製造業技術人員，解決產線人力短缺問題，提升產能 30%。',
      result: '人力到位率 100%，客戶續約至今',
    },
    {
      title: '台南某食品加工廠',
      category: '工廠移工',
      description: '提供 30 名食品製造與包裝人力，協助擴大生產規模，滿足訂單需求。',
      result: '準時交付，獲得客戶高度肯定',
    },
    {
      title: '屏東某長照機構',
      category: '看護工',
      description: '為該機構媒合 15 名專業看護人員，提升照護品質，減輕照護壓力。',
      result: '照護品質提升，家屬滿意度達 95%',
    },
    {
      title: '高雄某製造業集團',
      category: '工廠移工',
      description: '協助集團旗下三座工廠招募共 80 名技術人員，統一管理提升效率。',
      result: '長期合作夥伴，每年續約',
    },
    {
      title: '台南某家庭',
      category: '看護工',
      description: '為需要長期照護的長者媒合專業居家看護，提供 24 小時照護服務。',
      result: '家屬讚譽有加，推薦親友使用',
    },
    {
      title: '屏東某紡織廠',
      category: '工廠移工',
      description: '媒合 40 名紡織作業人員，協助該廠順利接下大型訂單。',
      result: '訂單如期完成，建立長期合作',
    },
  ]

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
        .cases-grid { display: grid; grid-template-columns: 1fr; gap: 2rem; }
        .case-card {
          background: white;
          padding: 2.5rem;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          border-left: 4px solid var(--color-accent);
          transition: all 0.3s ease;
        }
        .case-card:hover { transform: translateY(-4px); box-shadow: 0 8px 24px rgba(3, 105, 161, 0.15); }
        .case-category {
          display: inline-block;
          background: var(--color-accent);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        .case-card h3 { color: var(--color-primary); margin-bottom: 1rem; }
        .case-result {
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--color-border);
          color: var(--color-text-light);
          font-weight: 500;
        }
        @media (min-width: 768px) {
          .page-hero, .content { padding-left: 3rem; padding-right: 3rem; }
          .cases-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>

      <Navbar />

      <section className="page-hero">
        <h1>成功案例</h1>
        <p>我們為客戶創造的價值</p>
      </section>

      <section className="content">
        <div className="cases-grid">
          {cases.map((caseItem, index) => (
            <div key={index} className="case-card">
              <span className="case-category">{caseItem.category}</span>
              <h3>{caseItem.title}</h3>
              <p>{caseItem.description}</p>
              <div className="case-result">
                <strong>成果：</strong> {caseItem.result}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}
