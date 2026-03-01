import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '南部專業人力仲介 - 看護工、工廠移工專業媒合',
  description: '專精南部區域（高雄、台南、屏東）的專業人力仲介服務，提供看護工、工廠移工專業媒合，24年經驗值得信賴。',
  keywords: ['人力仲介', '移工', '看護工', '高雄', '台南', '屏東', '代工廠', '製造業'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <body>{children}</body>
    </html>
  )
}
