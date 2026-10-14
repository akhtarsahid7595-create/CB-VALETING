import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  ArrowRight, 
  Menu, 
  Phone, 
  X, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Car, 
  MapPin, 
  Calendar, 
  Clock, 
  MessageCircle,
  ExternalLink
} from 'lucide-react';
import './styles.css';

const InstagramIcon = ({ size = 18, color = "currentColor", className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={color} 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const PHONE_DISPLAY = '087 951 2170';
const PHONE_TEL = 'tel:0879512170';
const WHATSAPP_LINK = 'https://wa.me/353879512170?text=Hi%20Inishowen%20Valeting%2C%20I%20would%20like%20to%20enquire%20about%20booking%20a%20valet.';
const INSTAGRAM_URL = 'https://www.instagram.com/inishowenvaleting/';

const servicesData = [
  {
    no: '01',
    title: 'Exterior Detailing',
    desc: 'Multi-stage safe wash, active snow foam, iron decontamination, alloy deep clean, tyre dressing, and high-gloss ceramic spray sealant.',
    priceFrom: 'From €30',
    tag: 'Exterior Focus',
    features: [
      'pH-neutral snow foam pre-wash',
      'Two-bucket safe contact wash',
      'Wheel barrels & faces decontaminated',
      'Hydrophobic paint sealant applied'
    ]
  },
  {
    no: '02',
    title: 'Interior Deep Reset',
    desc: 'Thorough cabin restoration. Deep extraction shampoo on seats and carpets, steam sanitation, leather conditioning, and crystal-clear glass inside.',
    priceFrom: 'From €55',
    tag: 'Cabin Restoration',
    features: [
      'Full vacuum including boot & crevices',
      'Upholstery & mat shampoo extraction',
      'Dashboard & door trims UV protected',
      'Odour elimination & fresh scent'
    ]
  },
  {
    no: '03',
    title: 'Mini Valet',
    desc: 'The ideal routine maintenance refresh. Keeps your vehicle fresh and spotless between deep details, inside and out.',
    priceFrom: 'From €45',
    tag: 'Maintenance',
    features: [
      'Exterior safe foam wash & dry',
      'Wheel faces cleaned & tyres dressed',
      'Full interior vacuum & dust down',
      'Glass cleaned inside & out'
    ]
  },
  {
    no: '04',
    title: 'Full Signature Valet',
    desc: 'Our comprehensive bumper-to-bumper transformation. Combines meticulous exterior detailing with an intensive interior deep clean.',
    priceFrom: 'From €80',
    tag: 'Most Popular',
    popular: true,
    features: [
      'Complete exterior multi-stage wash & gloss',
      'Full interior wet vacuum & steam clean',
      'Leather & fabric protection applied',
      'Long-lasting paint protection finish'
    ]
  }
];

const galleryItems = [
  {
    src: '/bmw-gloss.png',
    title: 'High-Gloss Mirror Finish',
    caption: 'Recent customer BMW 4 Series coupe detailed to showroom gloss',
    featured: true
  },
  {
    src: '/inishowen-foam.jpg',
    title: 'Safe Snow Foam Pre-Wash',
    caption: 'Lifting road grit and grime safely without scratching'
  },
  {
    src: '/inishowen-interior.jpg',
    title: 'Immaculate Cockpit Detailing',
    caption: 'Dust-free vents, matte leather finish & sanitized interior'
  },
  {
    src: '/work-wheel.png',
    title: 'Wheel & Caliper Decontamination',
    caption: 'Brake dust removal and durable tyre dressing'
  },
  {
    src: '/work-after-exterior.png',
    title: 'Paint Clarity & Reflection',
    caption: 'Swirl-free wash finish with hydrophobic water beading'
  },
  {
    src: '/work-after-interior.png',
    title: 'Deep Upholstery Clean',
    caption: 'Spotless seats, restored carpets and fresh scent'
  }
];

const coverageAreas = [
  'Inishowen Peninsula',
  'Buncrana',
  'Carndonagh',
  'Moville',
  'Clonmany',
  'Derry / Londonderry',
  'Letterkenny',
  'Ballybofey',
  'Newtowncunningham'
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Full Signature Valet');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    vehicle: '',
    service: 'Full Signature Valet',
    date: ''
  });

  const handleOpenBooking = (serviceName) => {
    if (serviceName) setSelectedService(serviceName);
    setFormData(prev => ({ ...prev, service: serviceName || prev.service }));
    setModalOpen(true);
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    const msg = `Hi Inishowen Valeting! My name is ${formData.name || 'a customer'}. I would like to book a ${formData.service} for my ${formData.vehicle || 'car'} in ${formData.location || 'Donegal/Derry'}. My phone is ${formData.phone || ''}.`;
    const targetUrl = `https://wa.me/353879512170?text=${encodeURIComponent(msg)}`;
    window.open(targetUrl, '_blank');
  };

  return (
    <div className="app-container">
      {/* Top Announcement Bar */}
      <div className="top-banner">
        <div className="top-banner-inner">
          <span className="brand-badge">INISHOWEN VALETING</span>
          <span className="banner-tagline">
            📍 Mobile Valeting & Detailing · Inishowen · Derry · Letterkenny · <em>We Come To You</em>
          </span>
          <a href={PHONE_TEL} className="top-phone">
            <Phone size={13} /> {PHONE_DISPLAY}
          </a>
        </div>
      </div>

      {/* Main Header / Navigation */}
      <header className="site-header">
        <div className="header-inner">
          <a href="#top" className="brand-logo">
            <img src="/inishowen-logo.png" alt="Inishowen Valeting Logo" />
            <div className="brand-text">
              <span className="brand-name">INISHOWEN</span>
              <span className="brand-sub">VALETING</span>
            </div>
          </a>

          <nav className={`desktop-nav ${mobileMenuOpen ? 'is-open' : ''}`}>
            <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
            <a href="#work" onClick={() => setMobileMenuOpen(false)}>Recent Work</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Coverage</a>
            
            <div className="mobile-only-actions">
              <a href={PHONE_TEL} className="mobile-call-btn">
                <Phone size={16} /> Call {PHONE_DISPLAY}
              </a>
              <button className="btn-primary" onClick={() => { setMobileMenuOpen(false); handleOpenBooking(); }}>
                Book Your Valet ↗
              </button>
            </div>
          </nav>

          <div className="header-right">
            <a href={PHONE_TEL} className="header-tel-link">
              <Phone size={15} />
              <span>{PHONE_DISPLAY}</span>
            </a>
            <button className="btn-primary header-cta" onClick={() => handleOpenBooking()}>
              Book a Valet ↗
            </button>
            <button 
              className="menu-toggle-btn" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <main id="top">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-bg-wrapper">
            <img 
              src="/inishowen-hero.jpg" 
              alt="Luxury car detailed on scenic Irish driveway" 
              className="hero-bg-image" 
            />
            <div className="hero-gradient-overlay"></div>
          </div>

          <div className="hero-content">
            <div className="hero-eyebrow">
              <span className="dot-pulse"></span>
              MOBILE VALETING & DETAILING · INISHOWEN · DERRY · LETTERKENNY
            </div>

            <h1 className="hero-title">
              Showroom finish.<br />
              <em>Delivered to your doorstep.</em>
            </h1>

            <p className="hero-lead">
              Professional mobile vehicle care brought directly to your home or workplace across Inishowen, Derry, and Letterkenny. Safe wash methods, deep interior steam extraction, and long-lasting paint protection.
            </p>

            <div className="hero-cta-group">
              <button className="btn-primary hero-btn-main" onClick={() => handleOpenBooking()}>
                Book Your Valet ↗
              </button>
              <a href={PHONE_TEL} className="btn-secondary hero-call-btn">
                <Phone size={16} /> Call {PHONE_DISPLAY}
              </a>
              <a href="#work" className="hero-work-link">
                View our work <span>↓</span>
              </a>
            </div>

            {/* Mobile / Local Trust Proof Bar */}
            <div className="hero-trust-bar">
              <div className="trust-item">
                <Car size={16} className="trust-icon" />
                <span><strong>We Come To You</strong> at Home or Work</span>
              </div>
              <div className="trust-divider">•</div>
              <div className="trust-item">
                <ShieldCheck size={16} className="trust-icon" />
                <span><strong>Safe Wash</strong> Swirl-Free Methods</span>
              </div>
              <div className="trust-divider">•</div>
              <div className="trust-item">
                <MapPin size={16} className="trust-icon" />
                <span>Donegal & Derry Border Covered</span>
              </div>
            </div>
          </div>

          {/* Floating Hero Badge */}
          <div className="hero-floating-badge">
            <img src="/inishowen-logo.png" alt="Inishowen Valeting badge" />
            <div className="badge-details">
              <strong>Inishowen · Derry · Letterkenny</strong>
              <span>Fully Equipped Mobile Service</span>
            </div>
          </div>
        </section>

        {/* Ticker / Trust Strip */}
        <section className="feature-strip">
          <div className="strip-container">
            <div className="strip-item">
              <Sparkles size={16} className="strip-icon" />
              <span>PREMIUM PH-NEUTRAL PRODUCTS</span>
            </div>
            <div className="strip-dot">✦</div>
            <div className="strip-item">
              <Car size={16} className="strip-icon" />
              <span>100% MOBILE TO YOUR DOORSTEP</span>
            </div>
            <div className="strip-dot">✦</div>
            <div className="strip-item">
              <ShieldCheck size={16} className="strip-icon" />
              <span>SAFE TWO-BUCKET WASH TECHNIQUE</span>
            </div>
            <div className="strip-dot">✦</div>
            <div className="strip-item">
              <MapPin size={16} className="strip-icon" />
              <span>INISHOWEN / DERRY / LETTERKENNY</span>
            </div>
          </div>
        </section>

        {/* The Inishowen Standard (Intro Section) */}
        <section className="standard-section" id="about">
          <div className="standard-grid">
            <div className="standard-col-left">
              <p className="eyebrow-tag">THE INISHOWEN STANDARD</p>
              <h2 className="section-title">
                Care you can<br />
                <em>see and feel.</em>
              </h2>
            </div>
            <div className="standard-col-right">
              <p className="body-lead">
                Inishowen Valeting delivers careful, considered detailing with a finish that lasts well beyond the driveway. We believe your vehicle deserves far more than a rushed roadside sponge wash.
              </p>
              <p className="body-sub">
                Every service is tailored to the exact condition of your car, van, or 4x4. Using premium pH-neutral snow foams, dedicated microfibres, and high-temperature steam extraction, we protect your paintwork from scratches while restoring your cabin to spotless, hygienic comfort.
              </p>
              <div className="standard-action">
                <a href="#services" className="link-arrow">
                  Explore our services ↗
                </a>
              </div>
            </div>
          </div>

          {/* 4 Feature Pillars */}
          <div className="pillars-grid">
            <div className="pillar-card">
              <div className="pillar-icon-box">
                <Car size={24} />
              </div>
              <h3>We Come To You</h3>
              <p>No waiting rooms or drop-offs. We arrive at your driveway or workplace fully equipped with professional gear.</p>
            </div>
            <div className="pillar-card">
              <div className="pillar-icon-box">
                <ShieldCheck size={24} />
              </div>
              <h3>Scratch-Free Wash</h3>
              <p>Multi-stage pre-washes, active snow foam and two-bucket grit-guarded techniques to protect your clear coat.</p>
            </div>
            <div className="pillar-card">
              <div className="pillar-icon-box">
                <Sparkles size={24} />
              </div>
              <h3>Interior Deep Reset</h3>
              <p>Deep extraction wet shampoo on upholstery, steam sanitisation of touchpoints, and UV protection for plastics.</p>
            </div>
            <div className="pillar-card">
              <div className="pillar-icon-box">
                <Clock size={24} />
              </div>
              <h3>Flexible & Fast Booking</h3>
              <p>Book directly by phone, WhatsApp, or request online. Fast confirmation tailored to your personal schedule.</p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="services-section" id="services">
          <div className="section-header text-center">
            <p className="eyebrow-tag">OUR SERVICES</p>
            <h2 className="section-title">
              Choose your<br />
              <em>level of care.</em>
            </h2>
            <p className="section-desc">
              From a crisp maintenance wash to an intensive inside-and-out transformation, there’s a bespoke package for every vehicle.
            </p>
          </div>

          <div className="services-grid">
            {servicesData.map((service) => (
              <article 
                key={service.no} 
                className={`service-card ${service.popular ? 'is-popular' : ''}`}
              >
                {service.popular && (
                  <div className="popular-badge">MOST POPULAR</div>
                )}
                <div className="service-card-top">
                  <span className="service-number">{service.no}</span>
                  <span className="service-tag">{service.tag}</span>
                </div>

                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.desc}</p>

                <ul className="service-features-list">
                  {service.features.map((feat, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={16} className="feature-check" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="service-card-footer">
                  <div className="service-price">
                    <span className="price-label">Starting at</span>
                    <strong className="price-val">{service.priceFrom}</strong>
                  </div>
                  <button 
                    className="service-book-btn"
                    onClick={() => handleOpenBooking(service.title)}
                  >
                    <span>Book Service</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="pricing-section" id="pricing">
          <div className="section-header text-center">
            <p className="eyebrow-tag light-cyan">SIMPLE, TRANSPARENT PRICING</p>
            <h2 className="section-title text-white">
              Find the right<br />
              <em>finish for your vehicle.</em>
            </h2>
            <p className="section-desc text-silver">
              Transparent rates based on vehicle size and condition. Every booking is confirmed clearly before work begins.
            </p>
          </div>

          <div className="pricing-container">
            <div className="pricing-columns-grid">
              {/* Column 1: Exterior & Mini */}
              <div className="price-box">
                <div className="price-box-header">
                  <h3>Exterior Detailing</h3>
                  <p className="price-box-sub">Safe wash, wheel clean, decontamination & ceramic sealant.</p>
                </div>
                <div className="price-row-list">
                  <div className="price-row">
                    <span>Small Car (Hatchback, Polo, Fiesta)</span>
                    <strong>€30</strong>
                  </div>
                  <div className="price-row">
                    <span>Medium Car (Saloon, Golf, 3 Series)</span>
                    <strong>€35</strong>
                  </div>
                  <div className="price-row">
                    <span>Large Car / SUV / Estate / 4x4</span>
                    <strong>€40</strong>
                  </div>
                </div>

                <div className="price-box-header mt-lg">
                  <h3>Mini Valet</h3>
                  <p className="price-box-sub">Maintenance clean: exterior foam wash + interior vacuum & wipe.</p>
                </div>
                <div className="price-row-list">
                  <div className="price-row">
                    <span>Small Car</span>
                    <strong>€45</strong>
                  </div>
                  <div className="price-row">
                    <span>Medium Car</span>
                    <strong>€50</strong>
                  </div>
                  <div className="price-row">
                    <span>Large Car / SUV</span>
                    <strong>€55</strong>
                  </div>
                </div>
              </div>

              {/* Column 2: Interior & Full Valet */}
              <div className="price-box featured-price-box">
                <div className="price-box-header">
                  <h3>Interior Deep Reset</h3>
                  <p className="price-box-sub">Full shampoo extraction, steam sanitisation & leather care.</p>
                </div>
                <div className="price-row-list">
                  <div className="price-row">
                    <span>Small Car</span>
                    <strong>€55</strong>
                  </div>
                  <div className="price-row">
                    <span>Medium Car</span>
                    <strong>€65</strong>
                  </div>
                  <div className="price-row">
                    <span>Large Car / 7-Seater / SUV</span>
                    <strong>€75</strong>
                  </div>
                </div>

                <div className="price-box-header mt-lg">
                  <div className="flex-title-badge">
                    <h3>Full Signature Valet</h3>
                    <span className="badge-pill">Complete Transformation</span>
                  </div>
                  <p className="price-box-sub">Bumper-to-bumper deep exterior detail and full interior reset.</p>
                </div>
                <div className="price-row-list">
                  <div className="price-row highlight-row">
                    <span>Small Car</span>
                    <strong>€80</strong>
                  </div>
                  <div className="price-row highlight-row">
                    <span>Medium Car</span>
                    <strong>€95</strong>
                  </div>
                  <div className="price-row highlight-row">
                    <span>Large Car / SUV / 4x4</span>
                    <strong>€110</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Extras / Add-on Services */}
            <div className="pricing-extras-card">
              <h3 className="extras-title">Specialist Add-On Treatments</h3>
              <div className="extras-grid">
                <div className="extra-item">
                  <span className="extra-name">Leather Seats Conditioned & Protected</span>
                  <b className="extra-cost">+€20</b>
                </div>
                <div className="extra-item">
                  <span className="extra-name">Heavy Upholstery & Carpet Wet Shampoo</span>
                  <b className="extra-cost">+€25</b>
                </div>
                <div className="extra-item">
                  <span className="extra-name">Pet Hair & Sand Deep Extraction</span>
                  <b className="extra-cost">+€15</b>
                </div>
                <div className="extra-item">
                  <span className="extra-name">Hand-Applied High Gloss Ceramic Wax</span>
                  <b className="extra-cost">+€25</b>
                </div>
                <div className="extra-item">
                  <span className="extra-name">Engine Bay Clean & Detail</span>
                  <b className="extra-cost">+€30</b>
                </div>
                <div className="extra-item">
                  <span className="extra-name">Commercial Van / Fleet Pricing</span>
                  <b className="extra-cost">Quote</b>
                </div>
              </div>
            </div>

            <div className="pricing-note">
              <p>*Prices may vary depending on vehicle condition, heavy mud, or excessive pet hair. Dual currency (Euro € / Sterling £) accepted across Derry and Donegal border areas.</p>
            </div>

            <div className="pricing-cta-center">
              <button className="btn-primary" onClick={() => handleOpenBooking()}>
                Book at These Rates ↗
              </button>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <MessageCircle size={16} /> WhatsApp Quote
              </a>
            </div>
          </div>
        </section>

        {/* Recent Work / Gallery Section */}
        <section className="work-section" id="work">
          <div className="work-header">
            <div>
              <p className="eyebrow-tag">RECENT RESULTS</p>
              <h2 className="section-title">
                Detailing that<br />
                <em>speaks for itself.</em>
              </h2>
            </div>
            <div className="work-social-link">
              <a 
                href={INSTAGRAM_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-instagram"
              >
                <InstagramIcon size={18} />
                <span>Follow @inishowenvaleting on Instagram</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          <div className="gallery-mosaic">
            {galleryItems.map((item, index) => (
              <div 
                key={index} 
                className={`gallery-card ${item.featured ? 'featured-card' : ''}`}
              >
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="gallery-img" 
                  loading="lazy" 
                />
                <div className="gallery-overlay">
                  <span className="gallery-badge">{item.featured ? 'Client Spotlight' : 'Inishowen Detail'}</span>
                  <h4 className="gallery-card-title">{item.title}</h4>
                  <p className="gallery-card-caption">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="about-section">
          <div className="about-grid">
            <div className="about-image-wrapper">
              <div className="about-logo-frame">
                <img src="/inishowen-logo.png" alt="Inishowen Valeting Official Badge" />
              </div>
              <div className="about-stat-card">
                <strong>100%</strong>
                <span>Mobile to your door</span>
              </div>
            </div>

            <div className="about-content">
              <p className="eyebrow-tag">ABOUT INISHOWEN VALETING</p>
              <h2 className="section-title">
                Professional care.<br />
                <em>Personal service.</em>
              </h2>
              <p className="body-lead">
                Based in the heart of Inishowen and serving drivers across County Donegal and Derry City, Inishowen Valeting is built on honest craftsmanship and relentless attention to detail.
              </p>
              <p className="body-sub">
                We believe your vehicle is a significant investment. Rather than rushing through cars with harsh, abrasive chemicals, we bring modern detailing techniques and gentle, high-grade products directly to your driveway. You get the convenience of carrying on with your day while your vehicle is restored to showroom condition.
              </p>

              <div className="about-contact-links">
                <a href={PHONE_TEL} className="about-btn-tel">
                  <Phone size={16} /> Call {PHONE_DISPLAY} ↗
                </a>
                <a 
                  href={INSTAGRAM_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="about-btn-ig"
                >
                  <InstagramIcon size={16} /> Instagram PM ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Area Section */}
        <section className="coverage-section" id="contact">
          <div className="coverage-card">
            <div className="coverage-header">
              <MapPin size={28} className="coverage-icon" />
              <div>
                <p className="eyebrow-tag light-cyan">WHERE WE OPERATE</p>
                <h3 className="coverage-title">Mobile valeting across Inishowen, Derry & Letterkenny</h3>
              </div>
            </div>
            <p className="coverage-desc">
              We travel to your home, workplace, or business. Don't see your specific town listed below? Give us a quick call to check our schedule.
            </p>
            <div className="area-tags-grid">
              {coverageAreas.map((area, idx) => (
                <div key={idx} className="area-tag">
                  <CheckCircle2 size={14} />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* High Impact Call To Action Banner */}
        <section className="cta-banner">
          <div className="cta-banner-content">
            <p className="cta-eyebrow">READY FOR A SHOWROOM REFRESH?</p>
            <h2 className="cta-heading">
              Your car deserves the<br />
              <em>Inishowen Valeting touch.</em>
            </h2>
            <p className="cta-sub">
              Call, message on WhatsApp, or send an enquiry below. We’ll get back to you immediately with availability.
            </p>
            <div className="cta-buttons">
              <button className="btn-cta-white" onClick={() => handleOpenBooking()}>
                Book Your Valet ↗
              </button>
              <a href={PHONE_TEL} className="btn-cta-dark">
                <Phone size={16} /> Call {PHONE_DISPLAY}
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta-whatsapp">
                <MessageCircle size={16} /> WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-col-brand">
            <div className="footer-brand-header">
              <img src="/inishowen-logo.png" alt="Inishowen Valeting" />
              <div className="footer-brand-title">
                <span>INISHOWEN</span>
                <small>VALETING</small>
              </div>
            </div>
            <p className="footer-brand-desc">
              Premium mobile vehicle valeting and detailing across Inishowen Peninsula, Derry City, and Letterkenny. Safe washing, interior steam resets, and paint protection brought directly to you.
            </p>
            <div className="footer-socials">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <InstagramIcon size={18} />
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <div className="footer-col-nav">
            <h4>Explore</h4>
            <a href="#services">Services</a>
            <a href="#pricing">Pricing</a>
            <a href="#work">Recent Work</a>
            <a href="#about">About Us</a>
            <a href="#contact">Coverage Areas</a>
          </div>

          <div className="footer-col-contact">
            <h4>Contact & Booking</h4>
            <a href={PHONE_TEL} className="footer-contact-item">
              <Phone size={15} /> {PHONE_DISPLAY}
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="footer-contact-item">
              <MessageCircle size={15} /> Message on WhatsApp
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="footer-contact-item">
              <InstagramIcon size={15} /> @inishowenvaleting
            </a>
            <span className="footer-contact-item location-item">
              <MapPin size={15} /> Inishowen / Derry / Letterkenny
            </span>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p>© {new Date().getFullYear()} Inishowen Valeting. All rights reserved.</p>
          <div className="footer-bottom-links">
            <span>Mobile Detailing Specialist</span>
            <span>•</span>
            <span>Donegal & Derry</span>
          </div>
        </div>
      </footer>

      {/* Mobile Floating Action Bar */}
      <div className="mobile-floating-bar">
        <a href={PHONE_TEL} className="floating-call-btn">
          <Phone size={18} />
          <span>Call 087 951 2170</span>
        </a>
        <button className="floating-book-btn" onClick={() => handleOpenBooking()}>
          <Calendar size={18} />
          <span>Book Valet</span>
        </button>
      </div>

      {/* Booking Modal */}
      {modalOpen && (
        <div className="modal-backdrop" onClick={() => setModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close-btn" 
              onClick={() => setModalOpen(false)}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {formSubmitted ? (
              <div className="modal-success">
                <CheckCircle2 size={48} className="success-icon" />
                <h3>Booking Request Received!</h3>
                <p>We've launched WhatsApp to confirm your date and vehicle details directly. If it didn't open automatically, tap below:</p>
                <a href={WHATSAPP_LINK} className="btn-primary full-width mt-md" target="_blank" rel="noopener noreferrer">
                  Open WhatsApp Chat
                </a>
                <button className="btn-secondary full-width mt-sm" onClick={() => { setFormSubmitted(false); setModalOpen(false); }}>
                  Close Window
                </button>
              </div>
            ) : (
              <div>
                <p className="modal-eyebrow">BOOK A MOBILE VALET</p>
                <h3 className="modal-title">
                  Let's get your car<br /><em>looking its best.</em>
                </h3>
                <p className="modal-sub">
                  Provide your details below and we will confirm our availability for your doorstep valet across Inishowen, Derry or Letterkenny.
                </p>

                <form onSubmit={handleFormSubmit} className="modal-form">
                  <div className="form-group">
                    <label>Your Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="e.g. Liam Doherty" 
                      required 
                      value={formData.name} 
                      onChange={handleFormChange}
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone" 
                        placeholder="e.g. 087 123 4567" 
                        required 
                        value={formData.phone} 
                        onChange={handleFormChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Town / Area</label>
                      <input 
                        type="text" 
                        name="location" 
                        placeholder="e.g. Buncrana / Derry" 
                        required 
                        value={formData.location} 
                        onChange={handleFormChange}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Vehicle Make & Model</label>
                      <input 
                        type="text" 
                        name="vehicle" 
                        placeholder="e.g. BMW 4 Series / Ford Kuga" 
                        required 
                        value={formData.vehicle} 
                        onChange={handleFormChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Select Valet Service</label>
                      <select 
                        name="service" 
                        value={formData.service} 
                        onChange={handleFormChange}
                      >
                        <option value="Full Signature Valet">Full Signature Valet (From €80)</option>
                        <option value="Mini Valet">Mini Valet (From €45)</option>
                        <option value="Interior Deep Reset">Interior Deep Reset (From €55)</option>
                        <option value="Exterior Detailing">Exterior Detailing (From €30)</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Preferred Date / Time Window</label>
                    <input 
                      type="text" 
                      name="date" 
                      placeholder="e.g. Next Tuesday morning / Any weekday" 
                      value={formData.date} 
                      onChange={handleFormChange}
                    />
                  </div>

                  <div className="modal-actions">
                    <button type="submit" className="btn-primary full-width modal-submit">
                      <span>Send Booking Request via WhatsApp</span>
                      <ArrowRight size={18} />
                    </button>
                    <a href={PHONE_TEL} className="modal-phone-fallback">
                      Or call directly: <strong>{PHONE_DISPLAY}</strong>
                    </a>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
