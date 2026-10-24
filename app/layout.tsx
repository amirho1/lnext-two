import { Analytics } from '@vercel/analytics/next'
import { Vazirmatn } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const vazirmatn = Vazirmatn({ subsets: ['arabic', 'latin'], display: 'swap', variable: '--font-vazirmatn' })
export const metadata: Metadata = {
  title: 'آل‌نکست | تجربه امروز، انتخاب فردا',
  description: 'آل‌نکست، طراح تجربه‌های یادگیری برای آینده تحصیلی و شغلی دانش‌آموزان. با اولین بوت‌کمپ تحصیلی نهمی‌ها در تهران آشنا شوید.',
}
export const viewport: Viewport = { colorScheme: 'light', themeColor: '#f9faf8' }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fa" dir="rtl" className={`light ${vazirmatn.variable}`}><body>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
