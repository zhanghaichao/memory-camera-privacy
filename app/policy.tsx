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
        <nav className="languages" aria-label="Language / 语言">
          <a href={`${base}/`} lang="en" aria-current={language === 'en' ? 'page' : undefined}>English</a>
          <a href={`${base}/zh/`} lang="zh-CN" aria-current={language === 'zh' ? 'page' : undefined}>中文</a>
        </nav>
      </header>
      <main>
        <div className="opening">
          <p className="eyebrow">MEMORY CAMERA / {language === 'zh' ? '隐私与信任' : 'PRIVACY & TRUST'}</p>
          <h1>{copy.title}</h1>
          <p className="lead">{copy.lead}</p>
          <p className="date">{copy.updated} <time dateTime="2026-09-07">{copy.date}</time></p>
        </div>
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
