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

const FacebookIcon = ({ size = 18, color = "currentColor", className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill={color} 
    className={className}
  >
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const TikTokIcon = ({ size = 18, color = "currentColor", className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    className={className}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.3 6.3 0 0 0 1.94-4.48V8.6a8.28 8.28 0 0 0 4.83 1.55v-3.46h-1z"/>
  </svg>
);

const PHONE_DISPLAY = '07472 868718';
const PHONE_TEL = 'tel:+447472868718';
const WHATSAPP_LINK = 'https://wa.me/447472868718?text=Hi%20Scrub%20Bros%2C%20I%20would%20like%20to%20enquire%20about%20booking%20a%20valet.';
const FACEBOOK_URL = 'https://www.facebook.com/';
const TIKTOK_URL = 'https://www.tiktok.com/';

const servicesData = [
  {
    no: '01',
    title: 'Exterior Safe Wash',
    desc: 'Pre-wash & active snow foam, deep wheel & arch cleaning, 2-bucket hand wash, tar & iron fallout decontamination, spray wax sealant, and satin tyre dressing.',
    priceFrom: 'From £35',
    tag: 'Scratch-Free Wash',
    features: [
      'Pre-wash & snow foam (scratch-free lift)',
      'Deep alloy wheel & inner arch cleaning',
      'Two-bucket safe contact hand wash',
      'Tar & iron fallout decontamination',
      'Spray wax sealant (shine & water beading)',
      'Tyres dressed to satin showroom finish'
    ]
  },
  {
    no: '02',
    title: 'Interior Deep Clean',
    desc: 'Cabin restoration to fresh, hygienic, like-new condition. Full vacuum, upholstery wet shampoo extraction, leather cleanse & nourish, steam sanitation, and trim dressing.',
    priceFrom: 'From £65',
    tag: 'Cabin Restoration',
    features: [
      'Full deep vacuum (seats, carpets, mats & boot)',
      'Upholstery wet extraction / leather conditioning',
      'High-temperature steam sanitisation & stain removal',
      'Dashboard, vents & door panels cleaned & dressed',
      'Glass cleaned crystal clear inside & out',
      'Long-lasting fresh cabin fragrance (+£15 pet hair)'
    ]
  },
  {
    no: '03',
    title: 'Scrub Bros Full Valet',
    desc: 'The complete inside & out showroom makeover! Combines our Exterior Safe Wash & Interior Deep Clean plus deep door jambs, engine bay wipe down, and premium gloss.',
    priceFrom: 'From £95',
    tag: 'Best Value',
    popular: true,
    features: [
      'Full Exterior Safe Wash & Wheel Decontamination',
      'Full Interior Deep Clean & Steam Extraction',
      'Deep door shuts, sill & boot jamb detailing',
      'High-gloss protective finish & tyre shine',
      '100% Satisfaction Guarantee on driveway',
      'Water & power access required on location'
    ]
  },
  {
    no: '04',
    title: 'Paint Correction & Detail',
    desc: 'Bring back maximum depth, clarity, and swirl-free gloss. Single or multi-stage machine polishing, scratch reduction, headlight restoration, and ceramic paint protection.',
    priceFrom: 'From £140',
    tag: 'Ultimate Gloss',
    features: [
      'Headlight clarity restoration (from £35)',
      '1-Stage machine enhancement (swirl reduction & gloss)',
      '2-Stage machine correction (deep scratch removal: from £220)',
      'Long-term ceramic coating protection (+£60 extra)',
      'Free visual inspection & tailored quote'
    ]
  }
];

const galleryItems = [
  {
    src: '/work-scrub-bmw.png',
    alt: 'Blue BMW 1-Series M-Sport safe exterior hand wash and alloy wheel detail in Ilminster'
  },
  {
    src: '/work-scrub-mazda.png',
    alt: 'Soul Red Mazda SUV driveway valet with high-gloss finish and tyre dressing in Somerset'
  },
  {
    src: '/work-scrub-interior-footwell.png',
    alt: 'Pristine interior carpet vacuum lines and perforated leather seat deep cleaning'
  },
  {
    src: '/work-scrub-cockpit.png',
    alt: 'Driver cockpit detailing with clean steering wheel, dashboard, air vents and floor mat reset'
  },
  {
    src: '/work-scrub-boot.png',
    alt: 'Complete boot and luggage area deep vacuum extraction and pet hair removal on 7-seater SUV'
  },
  {
    src: '/work-scrub-leather-detail.png',
    alt: 'Luxury leather upholstery conditioning and centre console detail finish'
  }
];

const coverageAreas = [
  'Ilminster',
  'Chard',
  'Crewkerne',
  'Taunton',
  'Yeovil',
  'South Petherton',
  'Martock',
  'Langport',
  'Somerton',
  'Somerset & Surrounds'
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Scrub Bros Full Valet');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    vehicle: '',
    service: 'Scrub Bros Full Valet',
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
    const msg = `Hi Scrub Bros! My name is ${formData.name || 'a customer'}. I would like to book a ${formData.service} for my ${formData.vehicle || 'car'} in ${formData.location || 'Somerset'}. My phone is ${formData.phone || ''}.`;
    const targetUrl = `https://wa.me/447472868718?text=${encodeURIComponent(msg)}`;
    window.open(targetUrl, '_blank');
  };

  return (
    <div className="app-container">
      {/* Top Announcement Bar */}
      <div className="top-banner">
        <div className="top-banner-inner">
          <span className="brand-badge">SCRUB BROS</span>
          <span className="banner-tagline">
            📍 Mobile Valeting across Ilminster & Somerset · <em>"Life's Better Shiny"</em> · We Come To You!
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
            <img src="/scrub-bros-round-logo.png" alt="Scrub Bros Logo" />
            <div className="brand-text">
              <span className="brand-name">SCRUB BROS</span>
              <span className="brand-sub">LIFE'S BETTER SHINY</span>
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
              alt="Luxury vehicle being detailed to mirror finish" 
              className="hero-bg-image" 
            />
            <div className="hero-gradient-overlay"></div>
          </div>

          <div className="hero-container">
            {/* Mobile Dedicated Visible Banner */}
            <div className="hero-mobile-banner">
              <img 
                src="/hero-banner.jpg" 
                alt="Scrub Bros Mobile Valeting Banner" 
                className="hero-mobile-banner-img" 
              />
              <div className="mobile-banner-badge">
                <Sparkles size={12} />
                <span>Professional Mobile Valeting Unit</span>
              </div>
            </div>

            <div className="hero-content">
              <div className="hero-eyebrow">
                <span className="dot-pulse"></span>
                <span>MOBILE CAR VALETING · ILMINSTER & SOMERSET</span>
              </div>

              <h1 className="hero-title">
                Showroom finish.<br />
                <em>Delivered to your doorstep.</em>
              </h1>

              <p className="hero-lead">
                Professional mobile vehicle care brought directly to your home or workplace across Ilminster, Chard, Taunton, Yeovil, and Somerset. Safe scratch-free wash methods, deep interior steam extraction, and long-lasting shine.
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
                  <span>Ilminster & Somerset Covered</span>
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
              <span>ILMINSTER / SOMERSET & SURROUNDS</span>
            </div>
          </div>
        </section>

        {/* The Scrub Bros Standard (Intro Section) */}
        <section className="standard-section" id="about">
          <div className="standard-grid">
            <div className="standard-col-left">
              <p className="eyebrow-tag">THE SCRUB BROS STANDARD</p>
              <h2 className="section-title">
                Care you can<br />
                <em>see and feel.</em>
              </h2>
            </div>
            <div className="standard-col-right">
              <p className="body-lead">
                Scrub Bros delivers careful, considered mobile vehicle valeting with a deep showroom finish that lasts well beyond the driveway. Life's better shiny!
              </p>
              <p className="body-sub">
                Every service is tailored to the exact condition of your vehicle. Using premium pH-neutral snow foams, dedicated microfibres, gentle multi-stage hand washing, and high-temperature steam extraction, we protect your paintwork while restoring your cabin to spotless, hygienic comfort.
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
              <p>No waiting around in waiting rooms. We arrive directly at your home driveway or workplace fully equipped with professional gear.</p>
            </div>
            <div className="pillar-card">
              <div className="pillar-icon-box">
                <ShieldCheck size={24} />
              </div>
              <h3>Scratch-Free Wash</h3>
              <p>Multi-stage pre-washes, active snow foam and two-bucket grit-guarded techniques to protect your paint's clear coat from swirl marks.</p>
            </div>
            <div className="pillar-card">
              <div className="pillar-icon-box">
                <Sparkles size={24} />
              </div>
              <h3>Interior Deep Reset</h3>
              <p>Deep wet shampoo extraction on upholstery, steam sanitisation of touchpoints, leather conditioning, and pet hair removal.</p>
            </div>
            <div className="pillar-card">
              <div className="pillar-icon-box">
                <Clock size={24} />
              </div>
              <h3>Fast & Direct Booking</h3>
              <p>Book directly by phone, WhatsApp message, or online request. Fast confirmation tailored around your personal schedule.</p>
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
              From a safe exterior wash to an intensive full valet or paint enhancement, we bring premium mobile car care across Somerset.
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

        {/* Pricing Section (Demo Pricing as requested) */}
        <section className="pricing-section" id="pricing">
          <div className="section-header text-center">
            <p className="eyebrow-tag light-cyan">TRANSPARENT DEMO RATES</p>
            <h2 className="section-title text-white">
              Find the right<br />
              <em>finish for your vehicle.</em>
            </h2>
            <p className="section-desc text-silver">
              Indicative demo pricing based on vehicle size. Professional mobile car care brought right to your location.
            </p>
          </div>

          <div className="pricing-container">
            <div className="pricing-columns-grid">
              {/* Column 1: Exterior & Interior */}
              <div className="price-box">
                <div className="price-box-header">
                  <h3>Exterior Safe Wash</h3>
                  <p className="price-box-sub">Snow foam pre-wash, 2-bucket hand wash, wheel & arch clean, spray wax sealant & tyre shine.</p>
                </div>
                <div className="price-row-list">
                  <div className="price-row">
                    <span>Small Hatchback (Polo, Fiesta, Yaris, Corsa)</span>
                    <strong>From £35</strong>
                  </div>
                  <div className="price-row">
                    <span>Saloon / Mid SUV (1/3 Series, Golf, Qashqai)</span>
                    <strong>From £45</strong>
                  </div>
                  <div className="price-row">
                    <span>Large SUV / 7-Seater / Commercial Van</span>
                    <strong>From £55</strong>
                  </div>
                </div>

                <div className="price-box-header mt-lg">
                  <h3>Interior Deep Clean</h3>
                  <p className="price-box-sub">Full vacuum, wet shampoo extraction, leather clean/nourish, steam sanitize & odour elimination.</p>
                </div>
                <div className="price-row-list">
                  <div className="price-row">
                    <span>Small Hatchback</span>
                    <strong>From £65</strong>
                  </div>
                  <div className="price-row">
                    <span>Saloon / Mid SUV</span>
                    <strong>From £80</strong>
                  </div>
                  <div className="price-row">
                    <span>Large SUV / 7-Seater / Commercial Van</span>
                    <strong>From £95</strong>
                  </div>
                  <div className="price-row">
                    <span>Pet Hair Removal (Add-on)</span>
                    <strong>+£15 Extra</strong>
                  </div>
                </div>
              </div>

              {/* Column 2: Full Valet & Paint Correction */}
              <div className="price-box featured-price-box">
                <div className="price-box-header">
                  <div className="flex-title-badge">
                    <h3>Scrub Bros Full Valet</h3>
                    <span className="badge-pill">Best Value · Save Money</span>
                  </div>
                  <p className="price-box-sub">Exterior Safe Wash + Interior Deep Clean + Deep door jambs + Extra protective gloss.</p>
                </div>
                <div className="price-row-list">
                  <div className="price-row highlight-row">
                    <span>Small Hatchback</span>
                    <strong>From £95</strong>
                  </div>
                  <div className="price-row highlight-row">
                    <span>Saloon / Mid SUV</span>
                    <strong>From £115</strong>
                  </div>
                  <div className="price-row highlight-row">
                    <span>Large SUV / 7-Seater / Commercial Van</span>
                    <strong>From £140</strong>
                  </div>
                </div>

                <div className="price-box-header mt-lg">
                  <div className="flex-title-badge">
                    <h3>Paint Correction & Enhancements</h3>
                    <span className="badge-pill">Ultimate Gloss</span>
                  </div>
                  <p className="price-box-sub">Machine polishing, swirl reduction, headlight clarity & protective sealants.</p>
                </div>
                <div className="price-row-list">
                  <div className="price-row">
                    <span>Headlight Restoration (Clear & Safe)</span>
                    <strong>From £35</strong>
                  </div>
                  <div className="price-row">
                    <span>1-Step Machine Polish (Swirl reduction & gloss)</span>
                    <strong>From £120</strong>
                  </div>
                  <div className="price-row">
                    <span>2-Step Paint Correction (Deep scratch removal)</span>
                    <strong>From £220</strong>
                  </div>
                  <div className="price-row">
                    <span>Ceramic Paint Coating Application</span>
                    <strong>+£60 Extra</strong>
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
                  <b className="extra-cost">+£15</b>
                </div>
                <div className="extra-item">
                  <span className="extra-name">Ceramic Sealant (Extended Protection)</span>
                  <b className="extra-cost">+£60</b>
                </div>
                <div className="extra-item">
                  <span className="extra-name">Headlight Clarity Restoration (Pair)</span>
                  <b className="extra-cost">From £35</b>
                </div>
                <div className="extra-item">
                  <span className="extra-name">Deep Door Jamb & Shut Detailing</span>
                  <b className="extra-cost">Included in Full Valet</b>
                </div>
                <div className="extra-item">
                  <span className="extra-name">1-Step Machine Enhancement</span>
                  <b className="extra-cost">From £120</b>
                </div>
                <div className="extra-item">
                  <span className="extra-name">Custom Fleet / Commercial Quote</span>
                  <b className="extra-cost">Enquire</b>
                </div>
              </div>
            </div>

            <div className="pricing-note">
              <p>ℹ️ <strong>Demo Rates:</strong> These prices are indicative sample rates. We require access to a water tap & electrical socket on site. Send us a quick message or photo of your car for a fast, free instant quote!</p>
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
              <p className="eyebrow-tag">REAL CLIENT WORK</p>
              <h2 className="section-title">
                Detailing that<br />
                <em>speaks for itself.</em>
              </h2>
            </div>
            <div className="work-social-link">
              <a 
                href={FACEBOOK_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-instagram"
              >
                <FacebookIcon size={18} />
                <span>Follow Scrub Bros on Facebook</span>
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
                <img src="/scrub-bros-round-logo.png" alt="Scrub Bros Official Logo" />
              </div>
              <div className="about-stat-card">
                <strong>100%</strong>
                <span>Mobile to your door</span>
              </div>
            </div>

            <div className="about-content">
              <p className="eyebrow-tag">ABOUT SCRUB BROS</p>
              <h2 className="section-title">
                Professional care.<br />
                <em>Personal service.</em>
              </h2>
              <p className="body-lead">
                Based in Ilminster and serving vehicle owners across Somerset, Scrub Bros was founded on a simple standard: <em>Life's Better Shiny</em>.
              </p>
              <p className="body-sub">
                We believe your vehicle is a significant investment that deserves careful, professional attention. Rather than rushing cars with harsh roadside sponges, we bring modern mobile detailing techniques, pH-neutral snow foams, gentle multi-stage hand washing, and high-temperature steam extraction directly to your doorstep. You enjoy your day at home or work while your car is restored to showroom perfection.
              </p>

              <div className="about-contact-links">
                <a href={PHONE_TEL} className="about-btn-tel">
                  <Phone size={16} /> Call {PHONE_DISPLAY} ↗
                </a>
                <a 
                  href={FACEBOOK_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="about-btn-ig"
                >
                  <FacebookIcon size={16} /> Facebook Message ↗
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
                <h3 className="coverage-title">Mobile Valeting Across Ilminster & Somerset</h3>
              </div>
            </div>
            <p className="coverage-desc">
              We travel directly to your home or workplace across Somerset. Don't see your specific town listed below? Give us a quick call or message on WhatsApp to check our schedule.
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
              <em>Scrub Bros shine.</em>
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
              <img src="/scrub-bros-round-logo.png" alt="Scrub Bros" />
              <div className="footer-brand-title">
                <span>SCRUB BROS</span>
                <small>LIFE'S BETTER SHINY · MOBILE VALETING</small>
              </div>
            </div>
            <p className="footer-brand-desc">
              Professional mobile car valeting and detailing across Ilminster, Chard, Crewkerne, Taunton, Yeovil, and Somerset. Scratch-free washing, interior steam resets, and showroom finishes brought directly to you.
            </p>
            <div className="footer-socials">
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FacebookIcon size={18} />
              </a>
              <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <TikTokIcon size={18} />
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
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="footer-contact-item">
              <FacebookIcon size={15} /> Scrub Bros on Facebook
            </a>
            <span className="footer-contact-item location-item">
              <MapPin size={15} /> Ilminster, Somerset, UK
            </span>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p>© {new Date().getFullYear()} Scrub Bros. All rights reserved.</p>
          <div className="footer-bottom-links">
            <span>Mobile Valeting Specialists</span>
            <span>•</span>
            <span>Ilminster & Somerset, UK</span>
          </div>
        </div>
      </footer>

      {/* Mobile Floating Action Bar */}
      <div className="mobile-floating-bar">
        <a href={PHONE_TEL} className="floating-call-btn">
          <Phone size={18} />
          <span>Call {PHONE_DISPLAY}</span>
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
                <p>We've launched WhatsApp to confirm your date, location, and vehicle details directly with Scrub Bros. If it didn't open automatically, tap below:</p>
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
                  Provide your details below and we will confirm our availability for your doorstep valet across Ilminster, Chard, Taunton, or Somerset.
                </p>

                <form onSubmit={handleFormSubmit} className="modal-form">
                  <div className="form-group">
                    <label>Your Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="e.g. John Smith" 
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
                        placeholder="e.g. 07472 868718" 
                        required 
                        value={formData.phone} 
                        onChange={handleFormChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Town / Location in Somerset</label>
                      <input 
                        type="text" 
                        name="location" 
                        placeholder="e.g. Ilminster / Chard / Taunton" 
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
                        placeholder="e.g. BMW 1 Series / Mazda SUV" 
                        required 
                        value={formData.vehicle} 
                        onChange={handleFormChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Select Valeting Service</label>
                      <select 
                        name="service" 
                        value={formData.service} 
                        onChange={handleFormChange}
                      >
                        <option value="Scrub Bros Full Valet">Scrub Bros Full Valet (From £95) [Best Value]</option>
                        <option value="Interior Deep Clean">Interior Deep Clean (From £65)</option>
                        <option value="Exterior Safe Wash">Exterior Safe Wash (From £35)</option>
                        <option value="Paint Correction & Detail">Paint Correction & Detail (From £140)</option>
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
