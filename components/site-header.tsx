'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowUpLeft, Menu, X } from 'lucide-react'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  return <header className="site-header shell">
    <Link href="/" className="brand" aria-label="آل‌نکست، صفحه اصلی"><span className="brand-symbol" aria-hidden="true"><span /><span /><span /></span><span className="brand-word" dir="ltr">allnext<span className="brand-dot">.</span></span></Link>
    <nav className="desktop-nav" aria-label="ناوبری اصلی"><Link href="/" className="active-link">خانه</Link><Link href="/#next-event">رویدادها <span className="nav-dot" /></Link><Link href="/#experience">درباره آل‌نکست</Link><Link href="/#partners">همکاری با ما</Link></nav>
    <Link className="header-cta" href="/events/ninth-grade">کشف رویداد پیش رو <ArrowUpLeft size={17} /></Link>
    <button className="mobile-menu" aria-label={open ? 'بستن منو' : 'باز کردن منو'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    {open && <nav id="mobile-navigation" className="mobile-nav" aria-label="ناوبری موبایل">{[['/', 'خانه'], ['/#next-event', 'رویدادها'], ['/#experience', 'درباره آل‌نکست'], ['/#partners', 'همکاری با ما']].map(([href, text]) => <Link key={text} href={href} onClick={() => setOpen(false)}>{text}<ArrowUpLeft size={16} /></Link>)}</nav>}
  </header>
}
