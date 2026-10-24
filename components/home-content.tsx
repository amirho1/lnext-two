import Link from 'next/link'
import { ArrowLeft, ArrowDown, ArrowUpLeft, Compass, MoveUpRight, MapPin, CalendarDays, GraduationCap } from 'lucide-react'
import { FutureOrbit } from '@/components/future-orbit'

export function HomeContent() {
  return <main>
    <section className="hero shell" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div className="eyebrow"><span className="eyebrow-line" /> آینده، از تجربه شروع می‌شود</div>
        <h1 id="hero-title">آینده منتظر نمی‌ماند.<br /><span className="headline-purple">تو یک قدم <span className="ahead-word">جلوتر<svg viewBox="0 0 180 14" aria-hidden="true"><path d="M3 10 Q80 -2 177 7" /></svg></span> باش.</span></h1>
        <p className="hero-description">آل‌نکست، جایی برای کشف مسیر تحصیلی و شغلی توست.<br className="desktop-break" /> با تجربه‌های واقعی، خودت را بهتر بشناس و آگاهانه‌تر<br className="desktop-break" /> برای قدم بعدی انتخاب کن.</p>
        <div className="hero-actions"><Link className="primary-link" href="/events/ninth-grade">آشنایی با رویداد نخست <ArrowUpLeft size={20} /></Link><a className="text-link" href="#experience">آل‌نکست را کشف کن <span className="circle-arrow"><ArrowLeft size={16} /></span></a></div>
        <div className="hero-note"><span className="mini-orbit" aria-hidden="true" /><span>برای دانش‌آموزانی که می‌خواهند<br /><strong>مسیر خودشان را بسازند.</strong></span></div>
      </div>
      <FutureOrbit />
      <div className="hero-bottom"><a href="#next-event"><ArrowDown size={14} /> قدم بعدی، همین پایین</a><span dir="ltr">YOUR FUTURE. YOUR NEXT.</span></div>
    </section>
    <section id="next-event" className="event-strip shell" aria-labelledby="event-title">
      <div className="event-number" aria-hidden="true">01<span>رویداد نخست</span></div>
      <div className="event-title-group"><span className="small-label">اولین قدم، یک انتخاب آگاهانه</span><h2 id="event-title">بوت‌کمپ تحصیلی نهمی‌ها</h2><div className="event-meta"><span><MapPin /> تهران</span><span><CalendarDays /> دی‌ماه ۱۴۰۵</span><span><GraduationCap /> پایه نهم</span></div></div>
      <div className="event-status"><span><i className="status-dot" /> در حال برنامه‌ریزی</span><p>جزئیات این تجربه به‌زودی اعلام می‌شود.</p></div>
      <Link className="event-arrow" href="/events/ninth-grade" aria-label="مشاهده جزئیات بوت‌کمپ تحصیلی نهمی‌ها"><ArrowUpLeft /></Link>
    </section>
    <section id="experience" className="experience-section shell">
      <div className="section-heading"><div><span className="eyebrow">فقط درباره آینده حرف نمی‌زنیم</span><h2>آینده را <span>تجربه می‌کنیم.</span></h2></div><p>هر مسیر، با یک تجربه تازه شروع می‌شود.<br />آل‌نکست برای همین لحظه‌ها شکل گرفته است.</p></div>
      <div className="experience-grid">{[{n:'۰۱', title:'خودت را کشف کن', text:'فرصتی برای فکر کردن به علاقه‌ها، توانایی‌ها و سؤال‌هایی که درباره آینده داری.', icon:Compass},{n:'۰۲', title:'دنیای تازه را تجربه کن', text:'نگاهی فراتر از کتاب‌های درسی؛ به مسیرهای تحصیلی و دنیای واقعی شغل‌ها.', icon:MoveUpRight},{n:'۰۳', title:'قدم بعدی را آگاهانه بردار', text:'تجربه‌هایی برای ساختن نگاه روشن‌تر به انتخاب‌های پیش رو.', icon:ArrowUpLeft}].map(item => <article key={item.n}><div className="experience-card-top"><item.icon size={28} strokeWidth={1.4}/><span>{item.n}</span></div><h3>{item.title}</h3><p>{item.text}</p></article>)}</div><p className="content-note">این‌ها جهت‌گیری تجربه‌های آل‌نکست هستند؛ محتوای هر رویداد پس از نهایی‌شدن معرفی می‌شود.</p>
    </section>
    <section id="partners" className="partners-section shell"><span className="partner-mark" aria-hidden="true">↖</span><div><span className="eyebrow">برای ساختن فردایی بهتر، کنار هم</span><h2>آینده، یک مسیر مشترک است.</h2><p>مدارس و حامیان می‌توانند در شکل‌گیری تجربه‌های یادگیری آل‌نکست همراه شوند.<br />جزئیات مسیر همکاری و راه‌های ارتباطی پس از تأیید منتشر می‌شوند.</p></div><span className="partner-label">مدارس · حامیان · همراهان آینده</span></section>
    <footer className="site-footer shell"><Link href="/" className="footer-brand" dir="ltr">allnext.</Link><span>تجربه امروز، انتخاب فردا.</span><span dir="ltr">ALLNEXT © 2026</span></footer>
  </main>
}
