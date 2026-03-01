import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <style jsx>{`
        .footer {
          background: var(--color-primary);
          color: white;
          padding: 4rem 0 2rem;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 1.5rem;
          margin-bottom: 3rem;
        }

        .footer-section h3 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          color: white;
        }

        .footer-section p,
        .footer-section a {
          color: rgba(255, 255, 255, 0.85);
          line-height: 2;
          display: block;
        }

        .footer-section a:hover {
          color: var(--color-accent);
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .contact-icon {
          width: 1.25rem;
          height: 1.25rem;
          flex-shrink: 0;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          padding: 2rem 1.5rem 0;
          text-align: center;
          color: rgba(255, 255, 255, 0.7);
        }

        @media (min-width: 768px) {
          .footer-content {
            grid-template-columns: repeat(3, 1fr);
            padding: 0 3rem;
          }

          .footer-bottom {
            padding: 2rem 3rem 0;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>關於我們</h3>
            <p>
              南部最專業的人力仲介服務，專精看護工與工廠移工媒合，
              服務高雄、台南、屏東等南部縣市，24年經驗值得信賴。
            </p>
          </div>

          <div className="footer-section">
            <h3>快速連結</h3>
            <Link href="/services">服務項目</Link>
            <Link href="/about">關於我們</Link>
            <Link href="/cases">成功案例</Link>
            <Link href="/contact">聯絡我們</Link>
          </div>

          <div className="footer-section">
            <h3>聯絡資訊</h3>
            <div className="contact-info">
              <div className="contact-item">
                <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>(07) 1234-5678</span>
              </div>
              <div className="contact-item">
                <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@southlabor.com.tw</span>
              </div>
              <div className="contact-item">
                <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>高雄市前鎮區中山三路 123 號</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} 南部人力仲介. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
