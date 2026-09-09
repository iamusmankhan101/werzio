import React, { useState } from 'react';
import { Search, ChevronDown, MessageCircle, ArrowRight, HelpCircle, Sparkles } from 'lucide-react';
import { FAQS, EMAIL } from './content';

const FAQ_CATEGORIES = ['All', 'Pricing & Fees', 'Operations', 'Control', 'Contracts'];

const CATEGORY_MAP = {
  0: 'Control',
  1: 'Setup & Ranking',
  2: 'Pricing & Fees',
  3: 'Operations',
  4: 'Contracts',
  5: 'Pricing & Fees'
};

const CoFaq = () => {
  const [openIndexes, setOpenIndexes] = useState([0]); // First open by default
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const toggleItem = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  const toggleAll = () => {
    if (openIndexes.length === FAQS.length) {
      setOpenIndexes([]);
    } else {
      setOpenIndexes(FAQS.map((_, i) => i));
    }
  };

  const filteredFaqs = FAQS.map((item, index) => ({
    ...item,
    originalIndex: index,
    category: CATEGORY_MAP[index] || 'General'
  })).filter((item) => {
    const matchesCategory =
      activeCategory === 'All' ||
      item.category.toLowerCase().includes(activeCategory.toLowerCase()) ||
      (activeCategory === 'Control' && item.category === 'Control') ||
      (activeCategory === 'Operations' && (item.category === 'Operations' || item.category === 'Setup & Ranking'));

    const matchesSearch =
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq" className="wz-section wz-section--alt">
      <div className="wz-shell wz-faq">
        <div className="wz-faq__intro">
          <span className="wz-eyebrow">
            <HelpCircle size={13} style={{ marginRight: 4, verticalAlign: -1 }} />
            FAQ & Clear Answers
          </span>
          <h2>The questions owners actually ask.</h2>
          <p>
            No fine print, no corporate fluff. Everything you need to know before partner walkthrough.
          </p>

          <div className="wz-faq__support-card">
            <div className="wz-faq__support-header">
              <MessageCircle size={18} className="wz-faq__support-icon" />
              <div>
                <strong>Have a specific question?</strong>
                <span>We reply in under 15 minutes</span>
              </div>
            </div>
            <p>Our team is available 24/7 to answer any property-specific queries.</p>
            <div className="wz-faq__support-actions">
              <a href="#contact" className="wz-btn wz-btn--primary wz-btn--sm">
                <span>Book a walkthrough</span>
                <ArrowRight size={14} />
              </a>
              <a href={`mailto:${EMAIL}`} className="wz-faq__email-link">
                {EMAIL}
              </a>
            </div>
          </div>
        </div>

        <div className="wz-faq__content">
          <div className="wz-faq__toolbar">
            <div className="wz-faq__search">
              <Search size={16} className="wz-faq__search-icon" />
              <input
                type="text"
                placeholder="Search questions (e.g. payout, fees, cleaning, contract)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  type="button"
                  className="wz-faq__search-clear"
                  onClick={() => setSearchQuery('')}
                >
                  ✕
                </button>
              )}
            </div>

            <button type="button" className="wz-faq__expand-btn" onClick={toggleAll}>
              {openIndexes.length === FAQS.length ? 'Collapse All' : 'Expand All'}
            </button>
          </div>

          <div className="wz-faq__categories">
            {FAQ_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`wz-faq__cat-pill${activeCategory === cat ? ' is-active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="wz-faq__list">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((item) => {
                const isOpen = openIndexes.includes(item.originalIndex);
                return (
                  <div
                    key={item.q}
                    className={`wz-faq__item${isOpen ? ' is-open' : ''}`}
                  >
                    <button
                      type="button"
                      className="wz-faq__q"
                      aria-expanded={isOpen}
                      aria-controls={`wz-faq-a-${item.originalIndex}`}
                      onClick={() => toggleItem(item.originalIndex)}
                    >
                      <div className="wz-faq__q-text">
                        <span className="wz-faq__cat-tag">{item.category}</span>
                        <span className="wz-faq__title">{item.q}</span>
                      </div>
                      <span className="wz-faq__chevron" aria-hidden="true">
                        <ChevronDown size={18} />
                      </span>
                    </button>
                    {isOpen && (
                      <div className="wz-faq__a" id={`wz-faq-a-${item.originalIndex}`}>
                        <p>{item.a}</p>
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="wz-faq__empty">
                <Sparkles size={24} />
                <p>No questions found matching &quot;{searchQuery}&quot;.</p>
                <button
                  type="button"
                  className="wz-btn wz-btn--ghost wz-btn--sm"
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('All');
                  }}
                >
                  Reset Search
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoFaq;
