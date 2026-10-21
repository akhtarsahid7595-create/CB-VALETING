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

const PHONE_DISPLAY = '087 442 7249';
const PHONE_TEL = 'tel:0874427249';
const WHATSAPP_LINK = 'https://wa.me/353874427249?text=Hi%20VD%20Detailing%2C%20I%20would%20like%20to%20enquire%20about%20booking%20a%20valet.';
const INSTAGRAM_URL = 'https://www.instagram.com/_vd_detailing/';

const servicesData = [
  {
    no: '01',
    title: 'Exterior Safe Wash',
    desc: 'Pre-wash & active snow foam, deep wheel & arch cleaning, 2-bucket hand wash, tar & iron decontamination, spray wax, and tyre dressing.',
    priceFrom: 'From €40',
    tag: 'Scratch-Free Wash',
    features: [
      'Pre-wash & snow foam (scratch-free)',
      'Deep wheel & arch cleaning',
      'Two-bucket safe contact hand wash',
      'Tar & iron fallout decontamination',
      'Spray wax (shine & protection)',
      'Tyres dressed to satin finish'
    ]
  },
  {
    no: '02',
    title: 'Interior Deep Clean',
    desc: 'Cabin restoration to fresh and like new. Full vacuum, upholstery shampoo, leather clean & care, steam sanitation, and plastics dressed.',
    priceFrom: 'From €80',
    tag: 'Cabin Restoration',
    features: [
      'Full vacuum (seats, mats, boot)',
      'Upholstery shampoo / leather care',
      'Steam cleaning & stain removal',
      'Plastics cleaned & dressed',
      'Glass polished inside & out',
      'Odour elimination (+€20 pet hair)'
    ]
  },
  {
    no: '03',
    title: 'VD Full Valet',
    desc: 'The ultimate reset for your car! Combines everything from Exterior Safe Wash & Interior Deep Clean plus deep door jambs and extra gloss.',
    priceFrom: 'From €110',
    tag: 'Best Value',
    popular: true,
    features: [
      'Includes everything from Exterior Safe Wash',
      'Includes everything from Interior Deep Clean',
      'Deep door jamb & shut cleaning',
      'Extra high-gloss protective finish',
      '100% Satisfaction Guarantee',
      'Requires water tap & power access'
    ]
  },
  {
    no: '04',
    title: 'Paint Correction & Polishing',
    desc: 'Bring back the ultimate gloss! Swirl mark removal, deep scratch correction, headlight restoration, and long-lasting ceramic coating.',
    priceFrom: 'From €140',
    tag: 'Ultimate Gloss',
    features: [
      'Headlight restoration (from €40)',
      '1-Step polish (removes swirls & adds shine)',
      '2-Step polish (deep scratch removal: from €250)',
      'Ceramic coating protection (+€80 extra)',
      'Free quote tailored to vehicle paint condition'
    ]
  }
];

const galleryItems = [
  {
    src: '/work-jaguar-clean.png',
    alt: 'Jaguar showroom finish with official VD Detailing show plate in Killarney'
  },
  {
    src: '/work-mercedes-clean.png',
    alt: 'Mercedes-Benz C-Class mirror reflection after safe wash in Killarney'
  },
  {
    src: '/work-interior-clean.png',
    alt: 'Interior cockpit detailing with official VD Detailing protective mats'
  },
  {
    src: '/work-hyundai-clean.png',
    alt: 'Metallic blue Hyundai Tucson SUV deep gloss and tyre dressing'
  },
  {
    src: '/work-snow-foam-clean.png',
    alt: 'MJJC Pro snow foam pre-wash lifting road grime safely'
  },
  {
    src: '/work-alloy-clean.png',
    alt: 'Alloy wheel brake dust decontamination and tyre dressing'
  }
];

const coverageAreas = [
  'Killarney',
  'Tralee',
  'Killorglin',
  'Castleisland',
  'Milltown',
  'Beaufort',
  'Farranfore',
  'Kenmare',
  'County Kerry'
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('VD Full Valet');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    vehicle: '',
    service: 'VD Full Valet',
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
    const msg = `Hi VD Detailing! My name is ${formData.name || 'a customer'}. I would like to book a ${formData.service} for my ${formData.vehicle || 'car'} in ${formData.location || 'Kerry'}. My phone is ${formData.phone || ''}.`;
    const targetUrl = `https://wa.me/353874427249?text=${encodeURIComponent(msg)}`;
    window.open(targetUrl, '_blank');
  };

  return (
    <div className="app-container">
      {/* Top Announcement Bar */}
      <div className="top-banner">
        <div className="top-banner-inner">
          <span className="brand-badge">VD DETAILING</span>
          <span className="banner-tagline">
            📍 Mobile Detailing in Kerry (Killarney / Tralee) · Certified & Insured · <em>We Come To You!</em>
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
            <img src="/vd-logo.png" alt="VD Detailing Logo" />
            <div className="brand-text">
              <span className="brand-name">VD DETAILING</span>
              <span className="brand-sub">WASH & POLISH SPECIALISTS</span>
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
          {/* Desktop Background Banner */}
          <div className="hero-bg-wrapper desktop-hero-bg">
            <img 
              src="/hero-banner.jpg" 
              alt="Luxury sports car being detailed to mirror finish in studio" 
              className="hero-bg-image" 
            />
            <div className="hero-gradient-overlay"></div>
          </div>

          <div className="hero-container">
            {/* Mobile Dedicated Visible Banner */}
            <div className="hero-mobile-banner">
              <img 
                src="/hero-banner.jpg" 
                alt="VD Detailing studio banner" 
                className="hero-mobile-banner-img" 
              />
              <div className="mobile-banner-badge">
                <Sparkles size={12} />
                <span>Certified Mobile Detailing Unit</span>
              </div>
            </div>

            <div className="hero-content">
              <div className="hero-eyebrow">
                <span className="dot-pulse"></span>
                <span>CERTIFIED & INSURED MOBILE DETAILING · KERRY</span>
              </div>

              <h1 className="hero-title">
                Showroom finish.<br />
                <em>Delivered to your doorstep.</em>
              </h1>

              <p className="hero-lead">
                Professional mobile vehicle care brought directly to your home or workplace across Killarney, Tralee, and County Kerry. Safe scratch-free wash methods, deep interior steam extraction, and long-lasting paint protection.
              </p>

              <div className="hero-cta-group">
                <button className="btn-primary hero-btn-main" onClick={() => handleOpenBooking()}>
                  Book Your Valet ↗
                </button>
                <a href={PHONE_TEL} className="btn-secondary hero-call-btn">
                  <Phone size={16} /> Call {PHONE_DISPLAY}
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
                  <span><strong>Safe Wash</strong> Scratch-Free</span>
                </div>
                <div className="trust-divider">•</div>
                <div className="trust-item">
                  <MapPin size={16} className="trust-icon" />
                  <span>Killarney & Tralee Covered</span>
                </div>
              </div>
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
              <span>100% MOBILE TO YOUR HOME OR WORK</span>
            </div>
            <div className="strip-dot">✦</div>
            <div className="strip-item">
              <ShieldCheck size={16} className="strip-icon" />
              <span>SAFE TWO-BUCKET WASH TECHNIQUE</span>
            </div>
            <div className="strip-dot">✦</div>
            <div className="strip-item">
              <MapPin size={16} className="strip-icon" />
              <span>KILLARNEY / TRALEE / CO. KERRY</span>
            </div>
          </div>
        </section>

        {/* The VD Standard (Intro Section) */}
        <section className="standard-section" id="about">
          <div className="standard-grid">
            <div className="standard-col-left">
              <p className="eyebrow-tag">THE VD DETAILING STANDARD</p>
              <h2 className="section-title">
                Care you can<br />
                <em>see and feel.</em>
              </h2>
            </div>
            <div className="standard-col-right">
              <p className="body-lead">
                VD Detailing delivers careful, considered mobile vehicle care with a finish that lasts well beyond the driveway. We believe your vehicle deserves far more than a rushed roadside sponge wash.
              </p>
              <p className="body-sub">
                Every service is tailored to the exact condition of your vehicle. Using premium pH-neutral snow foams, dedicated microfibres, gentle multi-stage washes, and high-temperature steam extraction, we protect your paintwork while restoring your cabin to spotless, hygienic comfort.
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
              <p>No waiting rooms or drop-offs. We arrive at your driveway or workplace fully equipped with professional detailing equipment.</p>
            </div>
            <div className="pillar-card">
              <div className="pillar-icon-box">
                <ShieldCheck size={24} />
              </div>
              <h3>Scratch-Free Wash</h3>
              <p>Multi-stage pre-washes, active snow foam and two-bucket grit-guarded techniques to protect your paint's clear coat.</p>
            </div>
            <div className="pillar-card">
              <div className="pillar-icon-box">
                <Sparkles size={24} />
              </div>
              <h3>Interior Deep Reset</h3>
              <p>Deep wet shampoo extraction on upholstery, steam sanitisation of touchpoints, leather care, and odour elimination.</p>
            </div>
            <div className="pillar-card">
              <div className="pillar-icon-box">
                <Clock size={24} />
              </div>
              <h3>Fast & Direct Booking</h3>
              <p>Book directly by phone, WhatsApp, or request online. Fast confirmation tailored around your personal schedule.</p>
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
              From a safe exterior wash to an intensive full valet or multi-stage paint correction, we provide premium mobile car care across Kerry.
            </p>
          </div>

          <div className="services-grid">
            {servicesData.map((service) => (
              <article 
                key={service.no} 
                className={`service-card ${service.popular ? 'is-popular' : ''}`}
              >
                {service.popular && (
                  <div className="popular-badge">BEST VALUE</div>
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
              Transparent rates based on vehicle size. Certified & insured mobile car care delivered right to your location.
            </p>
          </div>

          <div className="pricing-container">
            <div className="pricing-columns-grid">
              {/* Column 1: Exterior & Interior */}
              <div className="price-box">
                <div className="price-box-header">
                  <h3>Exterior Safe Wash</h3>
                  <p className="price-box-sub">Snow foam pre-wash, 2-bucket wash, wheel & arch clean, spray wax & tyre dressing.</p>
                </div>
                <div className="price-row-list">
                  <div className="price-row">
                    <span>Small Car (Polo, Fiesta, Yaris)</span>
                    <strong>From €40</strong>
                  </div>
                  <div className="price-row">
                    <span>Saloon / SUV (3 Series, Golf, C-Class, Tucson)</span>
                    <strong>From €50</strong>
                  </div>
                  <div className="price-row">
                    <span>7-Seater / Commercial Van</span>
                    <strong>From €60</strong>
                  </div>
                </div>

                <div className="price-box-header mt-lg">
                  <h3>Interior Deep Clean</h3>
                  <p className="price-box-sub">Full vacuum, wet shampoo, leather clean/care, steam sanitize & odour elimination.</p>
                </div>
                <div className="price-row-list">
                  <div className="price-row">
                    <span>Small Car</span>
                    <strong>From €80</strong>
                  </div>
                  <div className="price-row">
                    <span>Saloon / SUV</span>
                    <strong>From €100</strong>
                  </div>
                  <div className="price-row">
                    <span>7-Seater / Commercial Van</span>
                    <strong>From €120</strong>
                  </div>
                  <div className="price-row">
                    <span>Pet Hair Removal (Add-on)</span>
                    <strong>+€20 Extra</strong>
                  </div>
                </div>
              </div>

              {/* Column 2: Full Valet & Paint Correction */}
              <div className="price-box featured-price-box">
                <div className="price-box-header">
                  <div className="flex-title-badge">
                    <h3>VD Full Valet</h3>
                    <span className="badge-pill">Best Value · Save Money</span>
                  </div>
                  <p className="price-box-sub">Exterior Safe Wash + Interior Deep Clean + Deep door jambs + Extra gloss finish.</p>
                </div>
                <div className="price-row-list">
                  <div className="price-row highlight-row">
                    <span>Small Car</span>
                    <strong>From €110</strong>
                  </div>
                  <div className="price-row highlight-row">
                    <span>Saloon / SUV</span>
                    <strong>From €140</strong>
                  </div>
                  <div className="price-row highlight-row">
                    <span>7-Seater / Commercial Van</span>
                    <strong>From €170</strong>
                  </div>
                </div>

                <div className="price-box-header mt-lg">
                  <div className="flex-title-badge">
                    <h3>Paint Correction & Enhancements</h3>
                    <span className="badge-pill">Ultimate Gloss</span>
                  </div>
                  <p className="price-box-sub">Machine polishing, swirl reduction, headlight clarity & ceramic protection.</p>
                </div>
                <div className="price-row-list">
                  <div className="price-row">
                    <span>Headlight Restoration (Clear & Safe)</span>
                    <strong>From €40</strong>
                  </div>
                  <div className="price-row">
                    <span>1-Step Polish (Swirl removal & gloss)</span>
                    <strong>From €140</strong>
                  </div>
                  <div className="price-row">
                    <span>2-Step Polish (Deep scratch removal)</span>
                    <strong>From €250</strong>
                  </div>
                  <div className="price-row">
                    <span>Ceramic Coating Application</span>
                    <strong>+€80 Extra</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Extras / Add-on Services */}
            <div className="pricing-extras-card">
              <h3 className="extras-title">Service Highlights & Add-Ons</h3>
              <div className="extras-grid">
                <div className="extra-item">
                  <span className="extra-name">Pet Hair Removal Treatment</span>
                  <b className="extra-cost">+€20</b>
                </div>
                <div className="extra-item">
                  <span className="extra-name">Ceramic Coating (Long-Lasting Protection)</span>
                  <b className="extra-cost">+€80</b>
                </div>
                <div className="extra-item">
                  <span className="extra-name">Headlight Restoration (Pair)</span>
                  <b className="extra-cost">From €40</b>
                </div>
                <div className="extra-item">
                  <span className="extra-name">Deep Door Jamb & Shut Detailing</span>
                  <b className="extra-cost">Included in Full Valet</b>
                </div>
                <div className="extra-item">
                  <span className="extra-name">1-Step Machine Enhancement</span>
                  <b className="extra-cost">From €140</b>
                </div>
                <div className="extra-item">
                  <span className="extra-name">Custom Fleet / Commercial Quote</span>
                  <b className="extra-cost">Enquire</b>
                </div>
              </div>
            </div>

            <div className="pricing-note">
              <p>⚠️ <strong>Requirements:</strong> We need access to a Water Tap & Power Socket. Final paint correction price depends on vehicle paint condition. Send a photo of your car for a free instant quote!</p>
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
                <span>Follow @_vd_detailing on Instagram</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          <div className="gallery-mosaic">
            {galleryItems.map((item, index) => (
              <div key={index} className="gallery-card">
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  className="gallery-img" 
                  loading="lazy" 
                />
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="about-section">
          <div className="about-grid">
            <div className="about-image-wrapper">
              <div className="about-logo-frame">
                <img src="/vd-logo.png" alt="VD Detailing Official Badge" />
              </div>
              <div className="about-stat-card">
                <strong>100%</strong>
                <span>Mobile to your door</span>
              </div>
            </div>

            <div className="about-content">
              <p className="eyebrow-tag">ABOUT VD DETAILING</p>
              <h2 className="section-title">
                Professional care.<br />
                <em>Personal service.</em>
              </h2>
              <p className="body-lead">
                Based in County Kerry and serving drivers across Killarney, Tralee, and surrounding areas, VD Detailing is built on certified expertise, honest craftsmanship, and relentless attention to detail.
              </p>
              <p className="body-sub">
                We believe your vehicle is a significant investment. Rather than rushing through cars with harsh, abrasive chemicals, we bring modern detailing techniques, snow foam pre-washes, high-temperature steam extraction, and machine polishing directly to your doorstep. You enjoy your day at home or work while your car is restored to showroom perfection.
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
                  <InstagramIcon size={16} /> Instagram DM ↗
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
                <h3 className="coverage-title">Mobile Detailing Across Killarney, Tralee & Kerry</h3>
              </div>
            </div>
            <p className="coverage-desc">
              We travel directly to your home or workplace across County Kerry. Don't see your specific town listed below? Give us a quick call or message on WhatsApp to check our schedule.
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
              <em>VD Detailing touch.</em>
            </h2>
            <p className="cta-sub">
              Call, message on WhatsApp, or send an enquiry below. We’ll get back to you promptly with availability for your vehicle.
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
              <img src="/vd-logo.png" alt="VD Detailing" />
              <div className="footer-brand-title">
                <span>VD DETAILING</span>
                <small>WASH & POLISH SPECIALISTS</small>
              </div>
            </div>
            <p className="footer-brand-desc">
              Certified & insured mobile car valeting and detailing across Killarney, Tralee, and County Kerry. Scratch-free washing, interior steam resets, paint correction, and protection brought directly to you.
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
              <InstagramIcon size={15} /> @_vd_detailing
            </a>
            <span className="footer-contact-item location-item">
              <MapPin size={15} /> Killarney / Tralee / Co. Kerry
            </span>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p>© {new Date().getFullYear()} VD Detailing. All rights reserved.</p>
          <div className="footer-bottom-links">
            <span>Mobile Detailing Specialists</span>
            <span>•</span>
            <span>Killarney & Tralee, Kerry</span>
          </div>
        </div>
      </footer>

      {/* Mobile Floating Action Bar */}
      <div className="mobile-floating-bar">
        <a href={PHONE_TEL} className="floating-call-btn">
          <Phone size={18} />
          <span>Call 087 442 7249</span>
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
                <p>We've launched WhatsApp to confirm your date, location, and vehicle details directly with VD Detailing. If it didn't open automatically, tap below:</p>
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
                  Provide your details below and we will confirm our availability for your doorstep valet across Killarney, Tralee, or County Kerry.
                </p>

                <form onSubmit={handleFormSubmit} className="modal-form">
                  <div className="form-group">
                    <label>Your Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="e.g. John O'Connor" 
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
                      <label>Town / Location in Kerry</label>
                      <input 
                        type="text" 
                        name="location" 
                        placeholder="e.g. Killarney / Tralee" 
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
                        placeholder="e.g. BMW 4 Series / Hyundai Tucson" 
                        required 
                        value={formData.vehicle} 
                        onChange={handleFormChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Select Detailing Service</label>
                      <select 
                        name="service" 
                        value={formData.service} 
                        onChange={handleFormChange}
                      >
                        <option value="VD Full Valet">VD Full Valet (From €110) [Best Value]</option>
                        <option value="Interior Deep Clean">Interior Deep Clean (From €80)</option>
                        <option value="Exterior Safe Wash">Exterior Safe Wash (From €40)</option>
                        <option value="Paint Correction & Polishing">Paint Correction & Polishing (From €140)</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Preferred Date / Time Window</label>
                    <input 
                      type="text" 
                      name="date" 
                      placeholder="e.g. This Saturday morning / Any weekday" 
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
