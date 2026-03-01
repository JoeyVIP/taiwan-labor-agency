'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function ServicesPage() {
  return (
    <>
      <style jsx>{`
        .page-hero {
          background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
          color: white;
          padding: 10rem 1.5rem 6rem;
          text-align: center;
        }

        .page-hero h1 {
          color: white;
          margin-bottom: 1rem;
        }

        .page-hero p {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.9);
        }

        .service-detail {
          padding: 6rem 1.5rem;
        }

        .service-detail:nth-child(even) {
          background: var(--color-background);
        }

        .service-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
        }

        .service-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .service-header h2 {
          color: var(--color-primary);
          margin-bottom: 1rem;
        }

        .service-header p {
          font-size: 1.25rem;
          color: var(--color-text-light);
        }

        .service-features {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        .feature-card {
          background: white;
          padding: 2.5rem;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          border-top: 4px solid var(--color-accent);
        }

        .feature-card h3 {
          color: var(--color-primary);
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .feature-icon {
          width: 2rem;
          height: 2rem;
          color: var(--color-accent);
        }

        .feature-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-top: 1.5rem;
        }

        .feature-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          color: var(--color-text);
        }

        .feature-list li::before {
          content: '→';
          color: var(--color-accent);
          font-weight: bold;
          flex-shrink: 0;
        }

        .process {
          padding: 8rem 1.5rem;
          background: white;
        }

        .process-header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .process-header h2 {
          color: var(--color-primary);
          margin-bottom: 1rem;
        }

        .process-steps {
          max-width: 1000px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .process-step {
          display: flex;
          gap: 2rem;
          align-items: flex-start;
        }

        .step-number {
          flex-shrink: 0;
          width: 4rem;
          height: 4rem;
          background: var(--color-accent);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Oswald', sans-serif;
          font-size: 1.75rem;
          font-weight: 700;
        }

        .step-content h3 {
          color: var(--color-primary);
          margin-bottom: 0.75rem;
        }

        .step-content p {
          color: var(--color-text);
        }

        .certifications {
          padding: 6rem 1.5rem;
          background: var(--color-background);
          text-align: center;
        }

        .certifications h2 {
          color: var(--color-primary);
          margin-bottom: 3rem;
        }

        .cert-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .cert-card {
          background: white;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .cert-card h4 {
          color: var(--color-primary);
          margin-top: 1rem;
        }

        .cta-section {
          background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
          padding: 8rem 1.5rem;
          text-align: center;
          color: white;
        }

        .cta-section h2 {
          color: white;
          margin-bottom: 2rem;
        }

        @media (min-width: 768px) {
          .service-features {
            grid-template-columns: repeat(2, 1fr);
          }

          .service-content {
            grid-template-columns: repeat(2, 1fr);
          }

          .page-hero,
          .service-detail,
          .process,
          .certifications,
          .cta-section {
            padding-left: 3rem;
            padding-right: 3rem;
          }
        }
      `}</style>

      <Navbar />

      <section className="page-hero">
        <h1>專業服務項目</h1>
        <p>為南部企業與家庭提供全方位人力仲介服務</p>
      </section>

      {/* 看護工服務 */}
      <section id="caregiver" className="service-detail">
        <div className="service-header">
          <h2>看護工仲介服務</h2>
          <p>專業的居家照護人力媒合，讓您的家人獲得最妥善的照顧</p>
        </div>

        <div className="service-features">
          <div className="feature-card">
            <h3>
              <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              居家看護
            </h3>
            <p>提供專業居家照護人力，協助家庭照顧長者或病患。</p>
            <ul className="feature-list">
              <li>日常生活起居協助</li>
              <li>基本醫療照護</li>
              <li>飲食料理與營養照護</li>
              <li>陪同就醫與復健</li>
            </ul>
          </div>

          <div className="feature-card">
            <h3>
              <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              醫院看護
            </h3>
            <p>專業醫院看護人力，提供住院病患完善照護。</p>
            <ul className="feature-list">
              <li>24 小時病患照護</li>
              <li>協助醫療處置</li>
              <li>生活起居協助</li>
              <li>家屬聯絡協調</li>
            </ul>
          </div>

          <div className="feature-card">
            <h3>
              <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              長照機構
            </h3>
            <p>為長照機構提供專業照護人力支援。</p>
            <ul className="feature-list">
              <li>護理之家人力</li>
              <li>日間照護中心</li>
              <li>失智症照護</li>
              <li>復健中心人力</li>
            </ul>
          </div>

          <div className="feature-card">
            <h3>
              <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              24 小時服務
            </h3>
            <p>全天候專人服務，隨時協助您解決問題。</p>
            <ul className="feature-list">
              <li>緊急狀況即時處理</li>
              <li>專人諮詢服務</li>
              <li>定期追蹤關懷</li>
              <li>問題快速解決</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 工廠移工服務 */}
      <section id="factory" className="service-detail">
        <div className="service-header">
          <h2>工廠移工仲介服務</h2>
          <p>為製造業提供專業移工媒合，解決企業人力需求</p>
        </div>

        <div className="service-features">
          <div className="feature-card">
            <h3>
              <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
              製造業人力
            </h3>
            <p>為各類製造業提供專業技術人力。</p>
            <ul className="feature-list">
              <li>電子組裝</li>
              <li>機械操作</li>
              <li>品管檢驗</li>
              <li>包裝出貨</li>
            </ul>
          </div>

          <div className="feature-card">
            <h3>
              <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              食品加工
            </h3>
            <p>食品產業專業人力媒合服務。</p>
            <ul className="feature-list">
              <li>食品製造</li>
              <li>包裝作業</li>
              <li>品質控管</li>
              <li>倉儲管理</li>
            </ul>
          </div>

          <div className="feature-card">
            <h3>
              <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
              紡織業
            </h3>
            <p>紡織製造業人力解決方案。</p>
            <ul className="feature-list">
              <li>紡織作業</li>
              <li>成衣製造</li>
              <li>品質檢驗</li>
              <li>包裝整理</li>
            </ul>
          </div>

          <div className="feature-card">
            <h3>
              <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              完整管理
            </h3>
            <p>提供完整的後續管理服務。</p>
            <ul className="feature-list">
              <li>定期訪視</li>
              <li>問題協調處理</li>
              <li>續約辦理</li>
              <li>法規諮詢</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 服務流程 */}
      <section className="process">
        <div className="process-header">
          <h2>服務流程</h2>
          <p>簡單四步驟，輕鬆解決人力需求</p>
        </div>

        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>諮詢評估</h3>
              <p>聯絡我們進行需求諮詢，由專業顧問為您評估最適合的人力方案，提供完整的服務說明與費用試算。</p>
            </div>
          </div>

          <div className="process-step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>媒合配對</h3>
              <p>根據您的需求條件，從我們的人力資料庫中精選合適人選，安排面試確保雙方都滿意。</p>
            </div>
          </div>

          <div className="process-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>合約簽訂</h3>
              <p>協助辦理相關申請文件，簽訂合法契約，確保雙方權益，完成所有法定程序。</p>
            </div>
          </div>

          <div className="process-step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>後續服務</h3>
              <p>定期訪視關懷，協助解決工作上的問題，提供續約、轉換等服務，確保長期穩定合作。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 認證標章 */}
      <section className="certifications">
        <h2>合法認證與保障</h2>
        <div className="cert-grid">
          <div className="cert-card">
            <svg style={{width: '4rem', height: '4rem', margin: '0 auto', color: 'var(--color-primary)'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <h4>政府合法立案</h4>
          </div>
          <div className="cert-card">
            <svg style={{width: '4rem', height: '4rem', margin: '0 auto', color: 'var(--color-primary)'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
            <h4>就業服務許可</h4>
          </div>
          <div className="cert-card">
            <svg style={{width: '4rem', height: '4rem', margin: '0 auto', color: 'var(--color-primary)'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <h4>專業認證團隊</h4>
          </div>
          <div className="cert-card">
            <svg style={{width: '4rem', height: '4rem', margin: '0 auto', color: 'var(--color-primary)'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
            <h4>保險保障完善</h4>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>立即開始合作</h2>
        <Link href="/contact" className="btn btn-primary">
          聯絡我們
        </Link>
      </section>

      <Footer />
    </>
  )
}
