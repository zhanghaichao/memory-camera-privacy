import { policies } from './policy-content';

const base = '/memory-camera-privacy';
export default function Policy({ language }: { language: 'en' | 'zh' }) {
  const copy = policies[language];
  return <div lang={language === 'zh' ? 'zh-CN' : 'en'}>
    <a className="skip" href="#policy">{language === 'zh' ? '跳转至正文' : 'Skip to policy'}</a>
    <div className="shell" id="top">
      <header className="masthead">
        <a className="brand" href={`${base}${language === 'zh' ? '/zh/' : '/'}`} aria-label="Memory Camera">
          <span className="wordmark">Memory</span><span className="brand-label">CAMERA<br />时光相机</span>
        </a>
        <a className="header-policy" href="#policy">{language === 'zh' ? '阅读隐私政策' : 'Read the policy'} <span aria-hidden="true">↗</span></a>
        <nav className="languages" aria-label="Language / 语言">
          <a href={`${base}/`} lang="en" aria-current={language === 'en' ? 'page' : undefined}>English</a>
          <a href={`${base}/zh/`} lang="zh-CN" aria-current={language === 'zh' ? 'page' : undefined}>中文</a>
        </nav>
      </header>
      <main>
        <div className="hero">
        <div className="opening">
          <p className="eyebrow">MEMORY CAMERA / {language === 'zh' ? '隐私与信任' : 'PRIVACY & TRUST'}</p>
          <h1>{copy.title}</h1>
          <p className="privacy-promise">{language === 'zh' ? <>把此刻，留给从前。<br />把回忆，留给自己。</> : <>A little out of time.<br />Always your memories.</>}</p>
          <p className="lead">{copy.lead}</p>
          <a className="policy-button" href="#policy">{language === 'zh' ? '阅读完整政策' : 'Read the full policy'} <span aria-hidden="true">↓</span></a>
          <p className="date">{copy.updated} <time dateTime="2026-09-07">{copy.date}</time></p>
          <div className="edition"><span>1986 — 2012</span><span>{language === 'zh' ? '8 种年代 · 一份私人回忆' : '8 camera eras. Your own story.'}</span></div>
        </div>
        <div className="app-showcase">
          <div className="showcase-heading"><span>THE CAMERA ARCHIVE</span><span>01 / 08</span></div>
          <div className="showcase-images">
            <figure className="app-screen">
              <img src={`${base}/images/app-home.png`} width="1080" height="2400" alt={language === 'zh' ? 'Memory Camera 实际首页，包含年代选择、拍摄和相册导入入口' : 'Actual Memory Camera home screen with camera eras, capture and photo import'} fetchPriority="high" />
            </figure>
            <figure className="archive-print">
              <img src={`${base}/images/coast.png`} width="1536" height="1024" alt={language === 'zh' ? 'App 内置的 2003 年代海岸电车风格示意图' : 'Coastal tram illustration used for the app’s 2003 camera era'} />
              <figcaption><span>2003</span><div>DIGITAL<br /><small>{language === 'zh' ? '慢一点，像从前' : 'A slower kind of day'}</small></div></figcaption>
            </figure>
            <span className="showcase-note">A LITTLE<br />OUT OF TIME.</span>
          </div>
          <p className="image-caption">{language === 'zh' ? 'App 实际界面 · 图片为内置风格示意' : 'Actual app interface · Built-in illustrative artwork'}</p>
        </div>
        </div>
        <section className="app-journey" aria-label={language === 'zh' ? '认识 Memory Camera' : 'Inside Memory Camera'}>
          <div className="journey-intro"><p className="eyebrow">INSIDE MEMORY CAMERA</p><h2>{language === 'zh' ? '从取景，到珍藏。' : 'From a moment to a memory.'}</h2></div>
          <a href="#photos"><span className="journey-step">01 / {language === 'zh' ? '选择年代' : 'CHOOSE AN ERA'}</span><strong>{language === 'zh' ? '胶片的温度，数码的记忆。' : 'Film warmth. Digital nostalgia.'}</strong><p>{language === 'zh' ? '在 1986—2012 的八种年代风格中，找到喜欢的成像氛围。' : 'Find your mood in eight camera styles, from 1986 to 2012.'}</p><span className="journey-link">{language === 'zh' ? '了解照片处理' : 'How photos are processed'} ↗</span></a>
          <a href="#photos"><span className="journey-step">02 / {language === 'zh' ? '拍摄或导入' : 'CAPTURE OR IMPORT'}</span><strong>{language === 'zh' ? '记录此刻，也重温旧照片。' : 'New moments. Familiar photographs.'}</strong><p>{language === 'zh' ? '使用相机拍摄，或从系统照片选择器中选取一张照片。' : 'Take a photograph or choose one through the system photo picker.'}</p><span className="journey-link">{language === 'zh' ? '了解相机权限' : 'About camera access'} ↗</span></a>
          <a href="#retention"><span className="journey-step">03 / {language === 'zh' ? '保存与分享' : 'KEEP OR SHARE'}</span><strong>{language === 'zh' ? '在本机处理，由你决定去向。' : 'Edited on your device. Kept your way.'}</strong><p>{language === 'zh' ? '对比原图与年代效果，保存到相册，或主动分享给所选应用。' : 'Compare the original and edited image, save it, or choose an app to share with.'}</p><span className="journey-link">{language === 'zh' ? '了解保存与删除' : 'About storage and deletion'} ↗</span></a>
        </section>
        <div className="summary" aria-label={copy.summaryLabel}>
          {copy.summary.map((label, i) => <div key={label}><span>0{i + 1}</span><strong>{label}</strong></div>)}
        </div>
        <div className="reading">
          <nav className="contents" aria-label={copy.contents}>
            <p className="eyebrow">{copy.contents}</p>
            <ol>{copy.sections.map((section, i) => <li key={section.id}><a href={`#${section.id}`}><span className="number">{String(i + 1).padStart(2, '0')}</span>{section.title}</a></li>)}</ol>
          </nav>
          <article id="policy" aria-label={copy.title}>
            {copy.sections.map((section, i) => <section className="policy-section" id={section.id} key={section.id}>
              <div className="section-title"><span className="number">{String(i + 1).padStart(2, '0')}</span><h2>{section.title}</h2></div>
              {section.paragraphs.map((paragraph, j) => <p key={j}>{paragraph}</p>)}
              {section.id === 'services' && <p><a href="https://policies.google.com/privacy">{copy.googleLink} ↗</a><br /><a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement">{copy.githubLink} ↗</a></p>}
              {section.id === 'contact' && <div className="contact"><p className="eyebrow">{copy.contactLabel}</p><p className="contact-name">Jocelyn</p><a href="mailto:seansheaton@gmail.com">seansheaton@gmail.com ↗</a></div>}
            </section>)}
          </article>
        </div>
      </main>
      <footer><p>© 2026 Memory Camera · <span className="package">com.memorycamera.app</span></p><a href="#top">{copy.back} ↑</a></footer>
    </div>
  </div>;
}
