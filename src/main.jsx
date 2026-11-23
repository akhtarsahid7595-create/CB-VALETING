import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
const ArrowUpRight = () => <span aria-hidden="true">↗</span>;
const Menu = () => <span aria-hidden="true" className="icon">☰</span>;
const X = () => <span aria-hidden="true" className="icon">×</span>;
const Phone = () => <span aria-hidden="true">☎</span>;
const Mail = () => <span aria-hidden="true">✉</span>;
const MapPin = () => <span aria-hidden="true">⌖</span>;

const services = ['Lawn mowing', 'Hedge cutting & pruning', 'Tree felling & reduction', 'Stump grinding', 'Turf laying', 'Fencing & decking', 'Slab laying', 'Shed bases & roofing', 'High pressure washing'];

function App() {
  const [open, setOpen] = React.useState(false);
  const scrollTo = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setOpen(false); };
  return <div className="site">
    <header className="nav">
      <button className="brand" onClick={() => scrollTo('home')} aria-label="Apple Tree Landscapes home"><span>APPLE TREE</span><small>LANDSCAPES · TREE & GARDEN SERVICES</small></button>
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
        <div className="hero-copy"><p className="eyebrow light">TREE & GARDEN SERVICES · HELPING GARDENS LOOK THEIR BEST</p><h1>Helping gardens<br/><em>look their best.</em></h1><p className="hero-sub">Reliable garden care, from lawn to tree work.</p><button className="light-button" onClick={() => scrollTo('contact')}>GET A FREE QUOTE <ArrowUpRight size={16}/></button></div>
        <div className="hero-scroll">SCROLL TO EXPLORE <span>↓</span></div>
      </section>

      <section id="about" className="intro split-section">
        <div><p className="eyebrow">APPLE TREE LANDSCAPES</p><h2>Care for every<br/><em>corner of your garden.</em></h2></div>
        <div className="body-copy"><p>Apple Tree Landscapes provides dependable tree and garden services to keep outdoor spaces neat, healthy and looking their best.</p><p>From regular lawn mowing and hedge cutting to tree felling, turf laying, fencing and pressure washing, we take care of the jobs that make a garden feel finished.</p><p>For a free, no-obligation quotation, call or contact Martin today.</p><button className="outline-button" onClick={() => scrollTo('services')}>VIEW OUR SERVICES <ArrowUpRight size={16}/></button></div>
      </section>

      <section id="services" className="services split-section"><div className="service-image"><img src="/assets/project-garden.png" alt="Well-kept garden with lawn and hedge" /></div><div className="dark-panel"><p className="eyebrow light">TREE & GARDEN SERVICES</p><h2>Everything your<br/><em>garden needs.</em></h2><p>Practical, professional help for gardens big and small — from routine maintenance to bigger outdoor projects.</p><div className="service-list">{services.map((s,i)=><div key={s}><span>{String(i+1).padStart(2,'0')}</span>{s}</div>)}</div><button className="light-button" onClick={() => scrollTo('contact')}>GET A FREE QUOTE <ArrowUpRight size={16}/></button></div></section>

      <section id="projects" className="projects"><div className="section-heading"><div><p className="eyebrow">OUR WORK</p><h2>Simple jobs,<br/><em>beautiful results.</em></h2></div><p>From a freshly cut lawn to a new fence or tidy hedge, the details make the difference.</p></div><div className="project-grid"><article><img src="/assets/project-driveway.png" alt="Neat lawn and garden border"/><div><p className="eyebrow">01 · LAWN CARE</p><h3>Lawns looking their best</h3><button onClick={() => scrollTo('contact')}>REQUEST A QUOTE <ArrowUpRight size={15}/></button></div></article><article><img src="/assets/project-garden.png" alt="Landscaped backyard garden"/><div><p className="eyebrow">02 · HEDGES & FENCING</p><h3>Neat, tidy garden boundaries</h3><button onClick={() => scrollTo('contact')}>REQUEST A QUOTE <ArrowUpRight size={15}/></button></div></article></div></section>

      <section id="contact" className="contact split-section"><div><p className="eyebrow">FREE QUOTATIONS</p><h2>Let’s get your<br/><em>garden sorted.</em></h2><p className="contact-note">For a free no-obligation quotation, call or contact Martin. Tell us what you need and we’ll be happy to help.</p><div className="contact-details"><a href="tel:07583666389"><Phone size={17}/>07583 666389</a><a href="mailto:jonmart2012@btinternet.com"><Mail size={17}/>jonmart2012@btinternet.com</a><span><MapPin size={17}/>Tree & garden services</span></div></div><form onSubmit={(e)=>{e.preventDefault(); alert('Thanks — Martin will be in touch soon.')}}><label>Name<input required placeholder="Your name"/></label><label>Email<input required type="email" placeholder="you@example.com"/></label><label>Tell us about your project<textarea required rows="5" placeholder="Lawn mowing, tree work, fencing..."></textarea></label><button className="outline-button" type="submit">SEND ENQUIRY <ArrowUpRight size={16}/></button></form></section>
    </main>
    <footer><div className="footer-brand">APPLE TREE<small>LANDSCAPES · TREE & GARDEN SERVICES</small></div><p>Helping gardens look their best with reliable, professional outdoor services.</p><div className="footer-links"><button onClick={() => scrollTo('about')}>ABOUT</button><button onClick={() => scrollTo('services')}>SERVICES</button><button onClick={() => scrollTo('projects')}>OUR WORK</button><button onClick={() => scrollTo('contact')}>CONTACT</button></div><small>© {new Date().getFullYear()} Apple Tree Landscapes</small></footer>
  </div>
}

createRoot(document.getElementById('root')).render(<App />);
