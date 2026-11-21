import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
const ArrowUpRight = () => <span aria-hidden="true">↗</span>;
const Menu = () => <span aria-hidden="true" className="icon">☰</span>;
const X = () => <span aria-hidden="true" className="icon">×</span>;
const Phone = () => <span aria-hidden="true">☎</span>;
const Mail = () => <span aria-hidden="true">✉</span>;
const MapPin = () => <span aria-hidden="true">⌖</span>;

const services = ['New patios', 'Driveways', 'Retaining walls', 'Hedge trimming & garden tidy-ups'];

function App() {
  const [open, setOpen] = React.useState(false);
  const scrollTo = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setOpen(false); };
  return <div className="site">
    <header className="nav">
      <button className="brand" onClick={() => scrollTo('home')} aria-label="Vartry Landscaping home"><span>VARTRY</span><small>LANDSCAPING & PROJECTS</small></button>
      <nav className={open ? 'nav-links open' : 'nav-links'}>
        {['home','about','services','projects','contact'].map((id) => <button key={id} onClick={() => scrollTo(id)}>{id}</button>)}
      </nav>
      <button className="menu" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X/> : <Menu/>}</button>
      <button className="nav-cta" onClick={() => scrollTo('contact')}>FREE QUOTE <ArrowUpRight size={16}/></button>
    </header>

    <main>
      <section id="home" className="hero">
        <img src="/assets/hero.png" alt="A finished garden patio and lawn" />
        <div className="hero-overlay" />
        <div className="hero-copy"><p className="eyebrow light">DUBLIN · WICKLOW · WEXFORD · KILDARE</p><h1>Transforming<br/><em>outdoor spaces.</em></h1><p className="hero-sub">Landscaping done properly, with care.</p><button className="light-button" onClick={() => scrollTo('contact')}>START A PROJECT <ArrowUpRight size={16}/></button></div>
        <div className="hero-scroll">SCROLL TO EXPLORE <span>↓</span></div>
      </section>

      <section id="about" className="intro split-section">
        <div><p className="eyebrow">VARTRY LANDSCAPING & PROJECTS</p><h2>Making room<br/><em>for better living.</em></h2></div>
        <div className="body-copy"><p>We provide professional landscaping and outdoor improvement services, helping turn your garden into something special.</p><p>I’m George from Vartry Landscaping & Projects — with over 10 years’ experience transforming outdoor spaces across Dublin, Wicklow, Wexford & Kildare.</p><p>Free call-outs and free quotations. No pressure, just honest advice and solid work.</p><button className="outline-button" onClick={() => scrollTo('services')}>OUR SERVICES <ArrowUpRight size={16}/></button></div>
      </section>

      <section id="services" className="services split-section"><div className="service-image"><img src="/assets/project-garden.png" alt="Garden with new lawn and retaining wall" /></div><div className="dark-panel"><p className="eyebrow light">WHAT WE DO</p><h2>Built for the<br/><em>way you live.</em></h2><p>From a new patio to a complete garden refresh, we bring practical ideas and skilled workmanship to every project.</p><div className="service-list">{services.map((s,i)=><div key={s}><span>0{i+1}</span>{s}</div>)}</div><button className="light-button" onClick={() => scrollTo('contact')}>GET A FREE QUOTE <ArrowUpRight size={16}/></button></div></section>

      <section id="projects" className="projects"><div className="section-heading"><div><p className="eyebrow">SELECTED WORK</p><h2>Projects with<br/><em>purpose.</em></h2></div><p>Every garden is different. Every project starts with a conversation.</p></div><div className="project-grid"><article><img src="/assets/project-driveway.png" alt="New driveway and front entrance"/><div><p className="eyebrow">01 · ASHFORD</p><h3>Driveways & entrances</h3><button onClick={() => scrollTo('contact')}>DISCUSS YOUR PROJECT <ArrowUpRight size={15}/></button></div></article><article><img src="/assets/project-garden.png" alt="Landscaped backyard garden"/><div><p className="eyebrow">02 · WICKLOW</p><h3>Gardens that work harder</h3><button onClick={() => scrollTo('contact')}>DISCUSS YOUR PROJECT <ArrowUpRight size={15}/></button></div></article></div></section>

      <section id="contact" className="contact split-section"><div><p className="eyebrow">LET’S TALK</p><h2>Ready to make<br/><em>your garden work?</em></h2><p className="contact-note">Tell us a little about your project and we’ll get back to you with honest advice and a free quotation.</p><div className="contact-details"><a href="tel:0833707354"><Phone size={17}/>083 370 7354</a><a href="mailto:vartryprojects@gmail.com"><Mail size={17}/>vartryprojects@gmail.com</a><span><MapPin size={17}/>Ashford, Co. Wicklow</span></div></div><form onSubmit={(e)=>{e.preventDefault(); alert('Thanks — we will be in touch soon.')}}><label>Name<input required placeholder="Your name"/></label><label>Email<input required type="email" placeholder="you@example.com"/></label><label>Tell us about your project<textarea required rows="5" placeholder="A new patio, driveway, garden tidy-up..."></textarea></label><button className="outline-button" type="submit">SEND ENQUIRY <ArrowUpRight size={16}/></button></form></section>
    </main>
    <footer><div className="footer-brand">VARTRY<small>LANDSCAPING & PROJECTS</small></div><p>Transforming outdoor spaces across Dublin, Wicklow, Wexford & Kildare.</p><div className="footer-links"><button onClick={() => scrollTo('about')}>ABOUT</button><button onClick={() => scrollTo('services')}>SERVICES</button><button onClick={() => scrollTo('projects')}>PROJECTS</button><button onClick={() => scrollTo('contact')}>CONTACT</button></div><small>© {new Date().getFullYear()} Vartry Landscaping & Projects</small></footer>
  </div>
}

createRoot(document.getElementById('root')).render(<App />);
