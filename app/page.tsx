'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <style jsx>{`
        /* Hero Section */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(3, 105, 161, 0.95), rgba(14, 165, 233, 0.85)),
            url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"><rect fill="%230369A1" width="1200" height="600"/><g fill-opacity="0.1"><circle fill="%23fff" cx="200" cy="150" r="100"/><circle fill="%23fff" cx="800" cy="400" r="150"/><circle fill="%23fff" cx="1000" cy="200" r="80"/></g></svg>');
          background-size: cover;
          background-position: center;
          color: white;
          text-align: center;
          padding: 8rem 1.5rem 4rem;
          position: relative;
        }

        .hero-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        .hero h1 {
          color: white;
          margin-bottom: 2rem;
          opacity: 0;
          animation: fadeInUp 1s ease-out 0.3s forwards;
        }

        .hero-subtitle {
          font-size: clamp(1.25rem, 3vw, 1.75rem);
          margin-bottom: 3rem;
          color: rgba(255, 255, 255, 0.95);
          font-weight: 500;
          opacity: 0;
          animation: fadeInUp 1s ease-out 0.5s forwards;
        }

        .hero-cta {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
          opacity: 0;
          animation: fadeInUp 1s ease-out 0.7s forwards;
        }

        /* Stats Section */
        .stats {
          background: var(--color-primary);
          color: white;
          padding: 5rem 1.5rem;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-family: 'Oswald', sans-serif;
          font-size: clamp(3rem, 8vw, 5rem);
          font-weight: 900;
          color: var(--color-accent);
          line-height: 1;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: clamp(1rem, 2vw, 1.25rem);
          color: rgba(255, 255, 255, 0.9);
          font-weight: 500;
        }

        /* Services Section */
        .services {
          padding: 8rem 1.5rem;
          background: white;
        }

        .section-title {
          text-align: center;
          margin-bottom: 1rem;
          color: var(--color-primary);
        }

        .section-subtitle {
          text-align: center;
          color: var(--color-text-light);
          margin-bottom: 5rem;
          font-size: 1.25rem;
        }

        .services-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .service-card {
          background: var(--color-background);
          padding: 3rem 2rem;
          border-radius: 8px;
          border-left: 4px solid var(--color-accent);
          transition: all 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(3, 105, 161, 0.15);
          border-left-width: 8px;
        }

        .service-icon {
          width: 4rem;
          height: 4rem;
          background: var(--color-primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .service-icon svg {
          width: 2rem;
          height: 2rem;
          color: white;
        }

        .service-card h3 {
          color: var(--color-primary);
          margin-bottom: 1rem;
          font-size: 1.75rem;
        }

        .service-card p {
          color: var(--color-text);
          margin-bottom: 1.5rem;
        }

        .service-features {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 2rem;
        }

        .service-features li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--color-text);
        }

        .service-features li::before {
          content: '✓';
          color: var(--color-accent);
          font-weight: bold;
          font-size: 1.25rem;
        }

        /* Regions Section */
        .regions {
          padding: 8rem 1.5rem;
          background: var(--color-background);
        }

        .regions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 3rem auto 0;
        }

        .region-card {
          background: white;
          padding: 2.5rem 2rem;
          border-radius: 8px;
          text-align: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }

        .region-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(3, 105, 161, 0.15);
        }

        .region-card h3 {
          color: var(--color-primary);
          margin-bottom: 1rem;
        }

        /* CTA Section */
        .cta-section {
          background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
          padding: 8rem 1.5rem;
          text-align: center;
          color: white;
        }

        .cta-section h2 {
          color: white;
          margin-bottom: 1.5rem;
        }

        .cta-section p {
          font-size: 1.25rem;
          margin-bottom: 3rem;
          color: rgba(255, 255, 255, 0.95);
        }

        @media (min-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(4, 1fr);
          }

          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .hero,
          .services,
          .regions,
          .cta-section {
            padding-left: 3rem;
            padding-right: 3rem;
          }

          .stats {
            padding: 5rem 3rem;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>南部最專業人力仲介</h1>
          <p className="hero-subtitle">
            24 年經驗 · 看護工 · 工廠移工 · 專業媒合
          </p>
          <div className="hero-cta">
            <Link href="/contact" className="btn btn-primary">
              立即諮詢
            </Link>
            <Link href="/services" className="btn btn-outline">
              了解服務
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">24+</div>
            <div className="stat-label">年專業經驗</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">合作廠商</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">3000+</div>
            <div className="stat-label">成功媒合</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">合法認證</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2 className="section-title">專業服務項目</h2>
        <p className="section-subtitle">為南部企業與家庭提供全方位人力仲介服務</p>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3>看護工仲介</h3>
            <p>專業的居家照護人力媒合服務，讓您的家人獲得最妥善的照顧。</p>
            <ul className="service-features">
              <li>居家看護服務</li>
              <li>醫院看護服務</li>
              <li>長照機構人力</li>
              <li>24 小時專人服務</li>
            </ul>
            <Link href="/services#caregiver" className="btn btn-secondary">
              了解更多
            </Link>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3>工廠移工仲介</h3>
            <p>為製造業提供專業移工媒合，解決企業人力需求，提升營運效率。</p>
            <ul className="service-features">
              <li>製造業人力</li>
              <li>食品加工人力</li>
              <li>紡織業人力</li>
              <li>完整後續管理</li>
            </ul>
            <Link href="/services#factory" className="btn btn-secondary">
              了解更多
            </Link>
          </div>
        </div>
      </section>

      {/* Regions Section */}
      <section className="regions">
        <h2 className="section-title">服務區域</h2>
        <p className="section-subtitle">深耕南部，在地服務</p>

        <div className="regions-grid">
          <div className="region-card">
            <h3>高雄市</h3>
            <p>總部所在地，提供最即時的在地服務</p>
          </div>
          <div className="region-card">
            <h3>台南市</h3>
            <p>深耕台南工業區，服務眾多代工廠</p>
          </div>
          <div className="region-card">
            <h3>屏東縣</h3>
            <p>屏東在地服務據點，快速響應需求</p>
          </div>
          <div className="region-card">
            <h3>嘉義地區</h3>
            <p>擴展服務至嘉義，涵蓋更多客戶</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>準備好與我們合作了嗎？</h2>
        <p>立即聯絡我們，專業團隊將為您提供最適合的人力解決方案</p>
        <Link href="/contact" className="btn btn-primary">
          立即諮詢
        </Link>
      </section>

      <Footer />
    </>
  )
}
