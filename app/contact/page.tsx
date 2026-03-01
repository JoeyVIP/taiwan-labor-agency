'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, send to API
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

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
        .contact-grid { display: grid; grid-template-columns: 1fr; gap: 4rem; }
        .contact-info { background: var(--color-background); padding: 3rem; border-radius: 8px; }
        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        .contact-item svg { width: 1.5rem; height: 1.5rem; color: var(--color-accent); flex-shrink: 0; margin-top: 0.25rem; }
        .contact-item div h3 { color: var(--color-primary); margin-bottom: 0.5rem; font-size: 1.25rem; }
        .form-container { background: white; padding: 3rem; border-radius: 8px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); }
        .form-group { margin-bottom: 1.5rem; }
        .form-group label { display: block; margin-bottom: 0.5rem; font-weight: 600; color: var(--color-text); }
        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 0.875rem;
          border: 2px solid var(--color-border);
          border-radius: 4px;
          font-family: 'Noto Sans TC', sans-serif;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }
        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--color-primary);
        }
        .form-group textarea { min-height: 150px; resize: vertical; }
        .success-message {
          background: var(--color-accent);
          color: white;
          padding: 1rem;
          border-radius: 4px;
          margin-bottom: 1.5rem;
          text-align: center;
          font-weight: 600;
        }
        @media (min-width: 768px) {
          .page-hero, .content { padding-left: 3rem; padding-right: 3rem; }
          .contact-grid { grid-template-columns: 1fr 1fr; }
        }
      `}</style>

      <Navbar />

      <section className="page-hero">
        <h1>聯絡我們</h1>
        <p>立即聯絡，專業團隊為您服務</p>
      </section>

      <section className="content">
        <div className="contact-grid">
          <div className="contact-info">
            <h2 style={{ color: 'var(--color-primary)', marginBottom: '2rem' }}>聯絡資訊</h2>

            <div className="contact-item">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div>
                <h3>電話</h3>
                <p>(07) 1234-5678</p>
                <p>手機：0912-345-678</p>
              </div>
            </div>

            <div className="contact-item">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <h3>Email</h3>
                <p>info@southlabor.com.tw</p>
                <p>service@southlabor.com.tw</p>
              </div>
            </div>

            <div className="contact-item">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <h3>地址</h3>
                <p>高雄市前鎮區中山三路 123 號 5 樓</p>
              </div>
            </div>

            <div className="contact-item">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3>營業時間</h3>
                <p>週一至週五：09:00 - 18:00</p>
                <p>週六：09:00 - 12:00</p>
                <p>週日及國定假日：休息</p>
              </div>
            </div>
          </div>

          <div className="form-container">
            <h2 style={{ color: 'var(--color-primary)', marginBottom: '2rem' }}>線上諮詢</h2>

            {submitted && (
              <div className="success-message">
                感謝您的諮詢！我們會盡快與您聯絡。
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">姓名 *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">電話 *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="service">服務項目 *</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">請選擇</option>
                  <option value="caregiver">看護工仲介</option>
                  <option value="factory">工廠移工仲介</option>
                  <option value="other">其他</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">需求說明 *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                送出諮詢
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
