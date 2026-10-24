'use client'

import { useEffect, useState } from 'react'
import { ArrowUpLeft, Sparkles, Asterisk } from 'lucide-react'
import Link from 'next/link'

export function FutureOrbit({ startsAt = null }: { startsAt?: string | null }) {
  const [now, setNow] = useState<number | null>(null)
  const deadline = startsAt && /(?:Z|[+-]\d{2}:\d{2})$/.test(startsAt) ? Date.parse(startsAt) : NaN
  const confirmed = Number.isFinite(deadline)
  useEffect(() => {
    if (!confirmed) return
    setNow(Date.now())
    const timer = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(timer)
  }, [confirmed, deadline])
  const remaining = confirmed && now !== null ? Math.max(0, Math.floor((deadline - now) / 1000)) : null
  const values = remaining === null ? null : [Math.floor(remaining / 86400), Math.floor(remaining / 3600) % 24, Math.floor(remaining / 60) % 60, remaining % 60]
  return (
    <div className="orbit-scene">
      <div className="orbit-coordinate coordinate-top" dir="ltr">NEXT EXPERIENCE / 001</div>
      <div className="orbit-ring ring-outer" aria-hidden="true" />
      <div className="orbit-ring ring-middle" aria-hidden="true" />
      <div className="orbit-ring ring-inner" aria-hidden="true" />
      <div className="orbit-axis" aria-hidden="true" />
      <div className="orbital-track" aria-hidden="true"><span /></div>
      <span className="orbit-tag tag-discover"><Sparkles size={15} /> کشف کن</span>
      <span className="orbit-tag tag-experience">تجربه کن <span className="tiny-plus">+</span></span>
      <span className="orbit-tag tag-choose">مسیرت رو بساز <ArrowUpLeft size={15} /></span>
      <div className="orbit-core">
        <span className="orbit-eyebrow"><i className="status-dot" /> ایستگاه بعدی آینده</span>
        {values && remaining !== 0 ? <div className="live-countdown" role="timer" aria-label="زمان باقی‌مانده تا رویداد">{values.map((v, i) => <div key={i}><strong>{v.toLocaleString('fa-IR', { minimumIntegerDigits: 2 })}</strong><small>{['روز', 'ساعت', 'دقیقه', 'ثانیه'][i]}</small></div>)}</div> : <div className="coming-soon">{remaining === 0 ? 'زمان تجربه‌ست' : confirmed ? 'در راه است' : 'به‌زودی'}<Asterisk className="orbit-asterisk" size={42} strokeWidth={1.6} aria-hidden="true" /></div>}
        <p>{remaining === 0 ? 'برای آخرین وضعیت، صفحه رویداد را ببینید' : confirmed ? 'تا شروع تجربه‌ای تازه' : 'یک تجربه، برای انتخاب‌های بزرگ'}</p>
        <span className="planning-label">{confirmed ? new Intl.DateTimeFormat('fa-IR', { timeZone: 'Asia/Tehran', dateStyle: 'medium', timeStyle: 'short' }).format(deadline) : 'زمان دقیق در حال برنامه‌ریزی است'}</span>
        <Link href="/events/ninth-grade" className="orbit-link">اولین رویداد آل‌نکست <ArrowUpLeft size={15} /></Link>
      </div>
      <div className="orbit-coordinate coordinate-bottom" dir="ltr"><span>35.6892° N</span><span>TEHRAN, IR</span></div>
    </div>
  )
}
