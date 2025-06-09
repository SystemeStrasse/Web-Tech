import React, {useState} from 'react'
import './Menu.css'
import { Link } from 'react-router-dom'

export default function Menu() {
  const [activeTab, setActiveTab] = useState('Menu');
  const [selectedStore, setSelectedStore] = useState('');
  const [expandedCategory, setExpandedCategory] = useState(null);

  const tabs = ['Menu', 'Featured', 'Previous', 'Favorites'];
  
  const menuCategories = {
    drinks: [
      { name: 'Brewed Coffee', icon: 'hot-coffee' },
      { name: 'Iced Coffee', icon: 'cold-coffee' },
      { name: 'Hot Tea', icon: 'hot-tea' },
      { name: 'Iced Coffee', icon: 'cold-coffee' }
    ],
    espresso: [
      { name: 'Espresso', icon: 'espresso' },
      { name: 'Mocchito', icon: 'mocchito' },
      { name: 'Café Latte', icon: 'cafe-latte' },
      { name: 'Classic Cappuccino', icon: 'classic-cappuccino' },
      { name: 'Mocha Latte', icon: 'mocha-latte' },
      { name: 'Caramel Latte', icon: 'caramel-latte' },
      { name: 'Vanilla  Latte', icon: 'vanilla' },
      { name: 'Café Americano', icon: 'americano' }
      
    ],
    Pastries: [
      { name: 'Muffins & croissants', icon: 'm&c' },
      { name: 'Bagel with cream cheese', icon: 'bagel' },
      { name: 'Cinnamon Roll', icon: 'roll' },
      { name: 'Fruit Tart', icon: 'tart' },
      { name: 'Chocolate eclair', icon: 'eclair' },
      { name: 'Strawberry cream puff', icon: 'puff' },
    ]
  };

  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <>
      <div className='menu'>
        <img className='menu-card' src="/images/Menucard.png" alt="" />
      </div>

      <div className="buvons-menu">
      {/* Header */}
      <header className="menu-header">
        <div className="header-container">
          <Link to="/" className="logo-link">
            <img src="/Images/bitmap.svg" alt="Buvons Coffee" className="logo" />
          </Link>
          <nav className="main-nav">
            <ul className="nav-tabs">
              {tabs.map(tab => (
                <li 
                  key={tab}
                  className={`nav-tab ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </li>
              ))}
            </ul>
          </nav>
          <div className="shopping-bag">
            <span className="bag-icon">🛍️</span>
            <span className="bag-count">0</span>
          </div>
        </div>
      </header>

      {/* Menu Title */}
      <div className="menu-title-container">
        <h1 className="menu-title">Menu</h1>
        <div className="store-selector">
          <select 
            value={selectedStore}
            onChange={(e) => setSelectedStore(e.target.value)}
            className="store-dropdown"
          >
            <option value="">For item availability, choose a store</option>
            <option value="downtown">Downtown Buvons</option>
            <option value="midtown">Midtown Buvons</option>
            <option value="uptown">Uptown Buvons</option>
          </select>
        </div>
      </div>

      {/* Menu Sections */}
      <main className="menu-sections">
        {/* Drinks Section */}
        <section className="menu-section">
          <h2 className="section-title">Drinks</h2>
          <div className="category-list">
            {menuCategories.drinks.map((item, index) => (
              <div 
                key={index}
                className="category-item"
                onClick={() => toggleCategory(item.name)}
              >
                <div className="category-icon">
                  <img src={`/Images/${item.icon}.jpg`} alt={item.name} />
                </div>
                <div className="category-name">{item.name}</div>
                <div className="category-arrow">›</div>
              </div>
            ))}
          </div>
        </section>

        {/* Espresso Section */}
        <section className="menu-section">
          <h2 className="section-title">Food</h2>
          <div className="category-list">
            {menuCategories.espresso.map((item, index) => (
              <div 
                key={index}
                className="category-item"
                onClick={() => toggleCategory(item.name)}
              >
                <div className="category-icon">
                  <img src={`/Images/${item.icon}.jpg`} alt={item.name} />
                </div>
                <div className="category-name">{item.name}</div>
                <div className="category-arrow">›</div>
              </div>
            ))}
          </div>
        </section>

        {/* Pastries Section */}
        <section className="menu-section">
          <h2 className="section-title">Pastries</h2>
          <div className="category-list">
            {menuCategories.Pastries.map((item, index) => (
              <div 
                key={index}
                className="category-item"
                onClick={() => toggleCategory(item.name)}
              >
                <div className="category-icon">
                  <img src={`/Images/${item.icon}.jpg`} alt={item.name} />
                </div>
                <div className="category-name">{item.name}</div>
                <div className="category-arrow">›</div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="menu-footer">
        <div className="footer-links">
          <div className="footer-column">
            <h3>About Us</h3>
            <ul>
              <li><Link to="/our-company">Our Company</Link></li>
              <li><Link to="/our-coffee">Our Coffee</Link></li>
              <li><Link to="/stories">Stories</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Careers</h3>
            <ul>
              <li><Link to="/careers">Career Center</Link></li>
              <li><Link to="/jobs">Jobs</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Social Impact</h3>
            <ul>
              <li><Link to="/responsibility">Responsibility</Link></li>
              <li><Link to="/community">Community</Link></li>
            </ul>
          </div>
        </div>
        <div className="social-media">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-pinterest"></i></a>
        </div>
        <div className="copyright">
          <p>© 2023 Buvons Coffee Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
    </>

    
    

  );

}

