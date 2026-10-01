import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, Camera as Instagram, Menu, Phone, X, Star, CheckCircle, ShieldCheck, Calendar } from 'lucide-react';
import './styles.css';

const work = [
  ['work-before-exterior.png', 'Exterior refresh', 'Before'],
  ['work-after-exterior.png', 'Exterior refresh', 'After'],
  ['work-before-interior.png', 'Interior reset', 'Before'],
  ['work-after-interior.png', 'Interior reset', 'After'],
  ['work-foam.png', 'Safe wash', 'Recent'],
  ['work-blue.png', 'Full valet', 'Recent'],
  ['work-wheel.png', 'Wheel care', 'Recent'],
  ['work-porsche.png', 'Luxury finish', 'Recent']
];

const services = [
  ['01', 'The Essential Valet', 'A meticulous maintenance clean that keeps your car looking its best.', 'From £45'],
  ['02', 'The Full Valet', 'A deep interior and exterior reset for the cars that need a little more love.', 'From £95'],
  ['03', 'The Signature Detail', 'The complete CB experience — premium products, precision finish, lasting protection.', 'From £175']
];

function App() {
  const [menu, setMenu] = useState(false);
  const [book, setBook] = useState(false);

  return (
    <div className="app">
      {/* Announcement Bar */}
      <div className="top-bar">
        <span>CB VALETING · LINCOLNSHIRE & NORTH YORKSHIRE</span>
        <span className="top-bar-divider">•</span>
        <span className="top-bar-highlight">MOBILE VALETING TO YOUR DOORSTEP</span>
      </div>

      {/* Header */}
      <header>
        <a className="brand" href="#top">
          <img src="/logo.png" alt="CB Valeting Logo" />
          <span>CB <b>VALETING</b></span>
        </a>

        <nav className={menu ? 'open' : ''}>
          <a href="#about" onClick={() => setMenu(false)}>About Us</a>
          <a href="#services" onClick={() => setMenu(false)}>Services</a>
          <a href="#work" onClick={() => setMenu(false)}>Recent Work</a>
          <a href="#contact" onClick={() => setMenu(false)}>Contact</a>
          <button className="nav-mobile-cta" onClick={() => { setMenu(false); setBook(true); }}>
            Book Your Valet <ArrowRight size={16} />
          </button>
        </nav>

        <div className="header-actions">
          <button className="nav-cta" onClick={() => setBook(true)}>
            Book a valet <ArrowRight size={17} />
          </button>
          <button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="Toggle Navigation">
            {menu ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <main id="top">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-bg">
            <picture>
              <source media="(max-width: 768px)" srcSet="/hero-mobile.png" />
              <img src="/hero.png" alt="Luxury Mobile Valeting" />
            </picture>
            <div className="hero-overlay"></div>
          </div>

          <div className="hero-content">
            <div className="eyebrow">
              <span className="eyebrow-line"></span> PREMIUM MOBILE VALETING
            </div>
            
            <h1>Leave the dirt.<br /><em>Keep the shine.</em></h1>
            
            <p>
              Luxury mobile valeting brought to your doorstep. A meticulous finish, wherever you are in Lincolnshire & North Yorkshire.
            </p>

            <div className="hero-actions">
              <button className="gold-btn full-mobile" onClick={() => setBook(true)}>
                Book Your Valet <ArrowRight size={18} />
              </button>
              <a className="secondary-btn full-mobile" href="#work">
                See Recent Work <ArrowRight size={16} />
              </a>
            </div>

            <div className="proof-bar">
              <div className="proof-stars">
                <Star size={14} fill="#d4ad21" color="#d4ad21" />
                <Star size={14} fill="#d4ad21" color="#d4ad21" />
                <Star size={14} fill="#d4ad21" color="#d4ad21" />
                <Star size={14} fill="#d4ad21" color="#d4ad21" />
                <Star size={14} fill="#d4ad21" color="#d4ad21" />
              </div>
              <span><strong>5.0 Rated</strong> • Trusted by local drivers in Lincs & N. Yorks</span>
            </div>
          </div>
        </section>

        {/* Ticker Bar */}
        <section className="ticker">
          <div className="ticker-inner">
            <span>PREMIUM PRODUCTS</span><i>✦</i>
            <span>ATTENTION TO DETAIL</span><i>✦</i>
            <span>WE COME TO YOU</span><i>✦</i>
            <span>LINCOLNSHIRE & NORTH YORKSHIRE</span><i>✦</i>
            <span>PREMIUM PRODUCTS</span><i>✦</i>
            <span>ATTENTION TO DETAIL</span>
          </div>
        </section>

        {/* About / Intro Section */}
        <section className="intro" id="about">
          <div className="section-label">01 / WHY CB VALETING</div>
          <div className="intro-body">
            <h2>More than a clean.<br /><em>A proper finish.</em></h2>
            <p>
              We believe your car deserves more than a quick wash. CB Valeting brings careful, considered detailing to your home or workplace — so you get back a car that feels genuinely looked after.
            </p>
            
            <div className="features-grid">
              <div className="feature-item">
                <CheckCircle size={18} color="#d4ad21" />
                <span>Mobile Service at Home or Work</span>
              </div>
              <div className="feature-item">
                <ShieldCheck size={18} color="#d4ad21" />
                <span>Safe Paintwork & Interior Care</span>
              </div>
            </div>

            <a href="#services" className="text-link">
              Explore Our Services <ArrowRight size={16} />
            </a>
          </div>
        </section>

        {/* Services Section */}
        <section className="services" id="services">
          <div className="service-head">
            <div>
              <div className="section-label">02 / OUR SERVICES</div>
              <h2>Pick your level<br /><em>of clean.</em></h2>
            </div>
            <p>Every valet is tailored to your car, your schedule and the finish you want. No rushed jobs. No shortcuts.</p>
          </div>

          <div className="service-grid">
            {services.map((s, i) => (
              <article className={i === 1 ? 'service-card featured' : 'service-card'} key={s[0]}>
                <div className="service-no">
                  <span>{s[0]}</span>
                  {i === 1 && <span className="badge">MOST POPULAR</span>}
                </div>
                <h3>{s[1]}</h3>
                <p>{s[2]}</p>
                <div className="service-bottom">
                  <strong>{s[3]}</strong>
                  <button className="card-btn" onClick={() => setBook(true)}>
                    <span>Book Service</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Gallery / Recent Work */}
        <section className="work" id="work">
          <div className="work-head">
            <div>
              <div className="section-label">03 / RECENT WORK</div>
              <h2>The proof is<br /><em>in the finish.</em></h2>
            </div>
            <a className="text-link" href="https://www.instagram.com/cb_valeting_ltd/" target="_blank" rel="noopener noreferrer">
              Follow on Instagram <Instagram size={17} />
            </a>
          </div>

          <div className="gallery">
            {work.map((w, i) => (
              <div className="tile" key={w[0]}>
                <img src={'/' + w[0]} alt={w[1]} />
                <div className="tile-overlay">
                  <span>{w[2]}</span>
                  <strong>{w[1]}</strong>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial Quote */}
        <section className="quote">
          <div className="quote-mark">“</div>
          <blockquote>“A proper professional job from start to finish. The car looked brand new — and I didn’t even have to leave the house.”</blockquote>
          <div className="stars">
            ★★★★★ <span>— Verified Local Customer</span>
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta" id="contact">
          <div className="cta-content">
            <div className="section-label">04 / READY WHEN YOU ARE</div>
            <h2>Your car's next<br /><em>best day starts here.</em></h2>
          </div>
          <button className="gold-btn full-mobile" onClick={() => setBook(true)}>
            Book a Valet Now <ArrowRight size={18} />
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div className="brand">
          <img src="/logo.png" alt="CB Valeting" />
          <span>CB <b>VALETING</b></span>
        </div>
        <p>Premium mobile valeting across Lincolnshire & North Yorkshire.</p>
        <div className="footer-links">
          <a href="https://www.instagram.com/cb_valeting_ltd/" target="_blank" rel="noopener noreferrer">
            <Instagram size={18} /> @cb_valeting_ltd
          </a>
          <a href="#contact" onClick={() => setBook(true)}>
            <Calendar size={17} /> Book a Valet Online
          </a>
        </div>
        <small>© 2025 CB Valeting LTD. All rights reserved.</small>
      </footer>

      {/* Mobile Floating Action Button */}
      <button className="floating-fab" onClick={() => setBook(true)} aria-label="Book a Valet">
        <Calendar size={20} />
        <span>Book Valet</span>
      </button>

      {/* Booking Modal */}
      {book && (
        <div className="modal" onClick={() => setBook(false)}>
          <div className="modal-card" onClick={e => e.stopPropagation()}>
            <button className="close" onClick={() => setBook(false)} aria-label="Close modal">
              <X size={20} />
            </button>
            <div className="section-label">BOOK A VALET</div>
            <h2>Let's get your car<br /><em>looking its best.</em></h2>
            <p>Send us a few details and we'll confirm availability for your doorstep valet.</p>
            <input placeholder="Your Name" />
            <input placeholder="Phone Number" />
            <input placeholder="Location / Postcode" />
            <select defaultValue="">
              <option value="" disabled>Choose a service</option>
              <option value="essential">The Essential Valet (From £45)</option>
              <option value="full">The Full Valet (From £95)</option>
              <option value="signature">The Signature Detail (From £175)</option>
            </select>
            <button className="gold-btn full-width">
              Request Booking <ArrowRight size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
